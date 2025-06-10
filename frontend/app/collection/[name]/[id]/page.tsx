'use client'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import { useAppContext } from '@/app/context/appContext'

type Collection = {
    _id: string;
    name: string;
};
type Category = {
    _id: string;
    name: string;
};

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    collections: Collection[];
    category: Category;
};

const ProductPage = () => {
    const params = useParams()
    const router = useRouter()
    const productId = params?.id as string
    const [loginTriggeredByCheckout, setLoginTriggeredByCheckout] = useState(false);
    const { fetchProduct,
        product,
        loading,
        error,
        quantity,
        setQuantity,
        isLoggedIn,
        addToCart,
        setShowLogin,
    } = useAppContext()

    const [cartError, setCartError] = useState<string | null>(null)
    const [cartSuccess, setCartSuccess] = useState<string | null>(null)
    const [products, setProducts] = useState<Product[]>([]);
    const [newLoading, setLoading] = useState(true);
    const [newError, setError] = useState<string | null>(null);
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const pulseRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/product');
                console.log('API response:', res.data);
                setProducts(res.data.products);
            } catch {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const triggerAnimation = (idx: number) => {
        const overlay = pulseRefs.current[idx];
        const img = imgRefs.current[idx];
        if (!overlay || !img) return;

        overlay.classList.remove('animate-blurZoomPulse');
        void overlay.offsetWidth;
        overlay.classList.add('animate-blurZoomPulse');

        img.classList.remove('animate-pulseOnce');
        void img.offsetWidth;
        img.classList.add('animate-pulseOnce');
    };

    useEffect(() => {
        if (productId) fetchProduct(productId);
    }, [productId])

    const increment = () => {
        if (product && quantity < 10) {
            setQuantity(prev => prev + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const handleAddToCart = async () => {
        try {
            if (product) {
                await addToCart(product, quantity, product.imageUrl);
                setCartSuccess('Product added to cart');
                setCartError(null)
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setCartError('Failed to add to cart:' + (err.response?.data?.message || err.message));
            } else if (err instanceof Error) {
                setCartError('Failed to add to cart:' + err.message);
            } else {
                setCartError('Failed to add to cart: unknown error');
            }
            setCartSuccess(null);
        }
    }

    const checkOut = async () => {
        if (!isLoggedIn) {
            setShowLogin(true)
            setLoginTriggeredByCheckout(true);
            return;
        }

        const token = localStorage.getItem('authToken');

        if (!token) {
            setCartError('Session expired. Please log in');
            setShowLogin(true);
            return;
        }

        if (product) {
            try {
                await axios.post(
                    'http://localhost:3000/api/cart',
                    {
                        productId: product._id,
                        quantity,
                        imageUrl: product.imageUrl,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setCartSuccess('Product added to cart!');
                setCartError(null);
                router.push('/cart');
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    setCartError('Failed to add to cart:' + (err.response?.data?.message || err.message));
                } else if (err instanceof Error) {
                    setCartError('Failed to add to cart:' + err.message);
                } else {
                    setCartError('Failed to add to cart: unknown error');
                }
                setCartSuccess(null);
            }
        }
    };

    useEffect(() => {
        if (isLoggedIn && loginTriggeredByCheckout) {
            router.push('/cart');
            setLoginTriggeredByCheckout(false);
            setShowLogin(false);
        }
    }, [isLoggedIn, loginTriggeredByCheckout, router, setShowLogin]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!product) return <p>Product not found</p>
    return (
        <div className='relative max-w-6xl w-full px-3 md:px-[5.2rem] mx-auto py-10'>
            <p className='text-sm text-gray-500'>
                <button onClick={() => router.push('/')}>Home/</button>
                <button onClick={() => router.push('/collection')}>Collections/</button>
                <span className='text-indigo-500'>{product.name}</span>
            </p>

            <div className='flex flex-col [@media(min-width:900px)]:flex-row gap-16 mt-6 md:items-stretch w-full '>
                <div className='relative border border-gray-300 rounded  w-full [@media(min-width:900px)]:w-[50%] md:max-w-lg flex justify-center lg:h-96'>
                    <img
                        src='/hero1.jpg'
                        alt={product.name}
                        className='w-full [@media(max-width:900px)]:h-80 object-cover relative z-10'
                    />
                    <img
                        src="/image.svg"
                        alt=""
                        className='absolute -bottom-2 -right-2 z-0 w-full'
                    />
                </div>



                <div className='w-full text-sm [@media(min-width:900px)]:w-1/2 [@media(min-width:900px)]:self-center'>
                    <h1 className='text-2xl font-medium'>{product.name}</h1>
                    <div className='mt-4'>
                        <p className='text-gray-500/70 font-medium text-2xl'>${product.price}</p>
                    </div>

                    <div className='mt-6'>
                        <p className='text-sm font-medium'>Every jewelry piece provided by. We promise that our customers satisfaction is our utmost priority and we always ensure to supply the best jewelry piece for you. Also the help the brand craft amazing content anything i write here is a placeholder so please ensure to replace all this write up with something worth reading because no one is gonna read this shit im typing.</p>
                    </div>

                    <div className='flex items-center gap-4 mt-8'>
                        <button className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300' onClick={decrement} disabled={quantity <= 1}>-</button>
                        <span>{quantity}</span>
                        <button className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300' onClick={increment}>+</button>
                    </div>

                    <div className='flex items-center mt-6 gap-8 text-base '>
                        <button onClick={handleAddToCart} className='w-[40%] py-2 bg-pink-300 text-white hover:bg-pink-500 rounded font-medium transition text-sm'>Add to Cart</button>
                        <button onClick={checkOut} className="w-[40%] py-2 font-medium justify-center text-sm rounded flex items-center gap-3 hover:fill-white hover:bg-pink-300 hover:text-white transition ease-in duration-300">
                            Check out
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </button>

                    </div>

                    {cartSuccess && <p className='text-green-600 mt-2'>{cartSuccess}</p>}
                    {cartError && <p className='text-red-600 mt-2'>{cartError}</p>}

                </div>
            </div>

            <div className='flex flex-col items-center mt-[11.8rem]'>
                <div className='text-center'>
                    <h1 className='text-5xl'>You May Also Like</h1>
                    <p className='text-sm mt-[0.625rem]'>
                        Explore the unique world of jewelry where <br />
                        sophistication is the watchword of our lalacuculala.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    {newLoading && <p>Loading products...</p>}
                    {newError && <p className="text-red-500">{error}</p>}
                    {!newLoading && !newError && products.slice(0, 8).map((product, idx) => (
                        <div key={product._id} className="hover:shadow-lg transition-shadow relative group mt-[3.125rem]">
                            <Link href={`/collection/${product.collections[0]?.name.toLowerCase()}/${product._id}`} className="w-full">
                                <div className="relative w-full h-80 overflow-hidden">
                                    {/* Animated Image */}
                                    <img
                                        ref={el => { imgRefs.current[idx] = el }}
                                        src='/hero1.jpg'
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        onMouseEnter={() => triggerAnimation(idx)}
                                        onMouseLeave={() => triggerAnimation(idx)}
                                    />

                                    {/* Overlay Animation */}
                                    <div
                                        ref={el => { pulseRefs.current[idx] = el }}
                                        className="absolute inset-0 pointer-events-none z-10 bg-cover bg-center opacity-0"
                                        style={{ backgroundImage: `url('/hero1.jpg'})` }}
                                    />
                                </div>
                            </Link>
                            <div className="hover:p-2 mt-[1.25rem]">
                                <h3 className="text-base font-extralight mb-[1.25rem]">{product.name}</h3>
                                <p className="text-black text-lg font-medium mb-[1.25rem]">{product.description}</p>
                                <p className="text-black font-medium text-lg">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductPage