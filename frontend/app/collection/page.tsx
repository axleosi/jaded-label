'use client'
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


type Collection = {
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
  category: string[];
};

const Collection = () => {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const pulseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/product');
        console.log('API response:', res.data);
        setProducts(res.data.products);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

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


  return (
    <div>
      {/* Hero Section */}
      <div className='mx-2 sm:mx-[5.2rem]'>
        <div className='relative w-full h-[26rem] overflow-hidden'>
          <img src="/femalecollection.jpg" alt="" className="w-full h-full object-cover" />
          <div className="w-[50%] mx-auto absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-xl [@media(max-width:799px)]:w-full">
            <h1 className='text-3xl lg:text-5xl text-center font-bold'>Enjoy Our Collection Curated For You</h1>
            <p className='text-center text-sm mx-auto mt-[0.625rem] w-[80%]'>
              Every jewelry piece provided by jadellabel is tarnish free and guaranteed to last forever.
              We promise that our customer's satisfaction is our utmost priority and we always ensure to supply
              the best jewelry piece for you.
            </p>
          </div>
          <img src='/Ellipse 7.svg' className='[@media(max-width:840px)]:hidden absolute top-[6%] w-[90%] h-[90%] left-[5%]' />
          <img src='/Rectangle 536.svg' className='[@media(max-width:840px)]:hidden absolute top-6 w-[90%] h-[90%] left-[5%]' />
        </div>
      </div>

      {/* Category Section */}
      <div className='mx-2 sm:mx-[5.2rem] mt-[11.25rem]'>
        <div>
          <h2 className='text-4xl'>Select a Collection</h2>
          <p className='text-sm mt-[0.625rem]'>
            Explore the unique world of jewelry where <br />
            sophistication is the watchword of our lalacuculala.
          </p>
        </div>
        <div className='flex flex-col [@media(min-width:651px)]:flex-row gap-3 w-full mt-[3.125rem]'>
          <div className='flex w-full flex-col [@media(min-width:450px)]:flex-row [@media(min-width:651px)]:w-[50%] gap-3'>
            <div onClick={() => router.push(`/collection/${encodeURIComponent('minimalist jewelry')}`)} className='relative w-full h-[20rem] overflow-hidden cursor-pointer'>
              <img src="femalecollection.jpg" alt="" className="w-full h-full object-cover" />
              <div className="w-[50%] mx-auto absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-xl">
                <h2 className='text-2xl text-center'>Minimalist jewelry</h2>
                <p className='text-center text-sm mx-auto'>24 available</p>
              </div>
            </div>
            <div onClick={() => router.push(`/collection/${encodeURIComponent('women')}`)} className='relative w-full h-[20rem] overflow-hidden cursor-pointer'>
              <img src="femalecollection.jpg" alt="" className="w-full h-full object-cover" />
              <div className="w-[50%] mx-auto absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-xl">
                <h2 className='text-2xl text-center'>Women</h2>
                <p className='text-center text-sm mx-auto'>24 available</p>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col [@media(min-width:450px)]:flex-row [@media(min-width:651px)]:w-[50%] gap-3'>
            <div onClick={() => router.push(`/collection/${encodeURIComponent('men')}`)} className='relative w-full h-[20rem] overflow-hidden cursor-pointer'>
              <img src="femalecollection.jpg" alt="" className="w-full h-full object-cover" />
              <div className="w-[50%] mx-auto absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-xl">
                <h2 className='text-2xl text-center'>Men</h2>
                <p className='text-center text-sm mx-auto'>24 available</p>
              </div>
            </div>
            <div onClick={() => router.push(`/collection/${encodeURIComponent('engagement')}`)} className='relative w-full h-[20rem] overflow-hidden cursor-pointer'>
              <img src="femalecollection.jpg" alt="" className="w-full h-full object-cover" />
              <div className="w-[50%] mx-auto absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-xl">
                <h2 className='text-2xl text-center'>Engagement</h2>
                <p className='text-center text-sm mx-auto'>24 available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className='mx-2 sm:mx-[4.3rem] flex flex-col items-center mt-[11.8rem]'>
        <div className='text-center'>
          <h1 className='text-5xl'>Recently Added Items</h1>
          <p className='text-sm mt-[0.625rem]'>
            Explore the unique world of jewelry where <br />
            sophistication is the watchword of our lalacuculala.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {loading && <p>Loading products...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && products.slice(0, 8).map((product, idx) => (
            <div key={product._id} className="hover:shadow-lg transition-shadow relative group mt-[3.125rem]">
              <Link
                href={`/collection/${product.collections[0]?.name.toLowerCase()}/${product._id}`}
                className="w-full block"
              >
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
                <h3 className="text-base font-light mb-[1.25rem]">{product.name}</h3>
                <p className="text-black text-lg font-semibold mb-[1.25rem]">{product.description}</p>
                <p className="text-black font-semibold text-lg">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
