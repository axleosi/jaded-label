'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  collections: string[];
  category: string[];
  createdAt: string;
};

const CollectionName = () => {
  const router = useRouter()
  const { name } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'price' | 'date'>('price');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/collections/${name}/products`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchProducts();
    }
  }, [name]);

  function toTitleCase(str: string) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filterType === 'price') {
        return a.price - b.price; // ascending by price
      } else {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // most recent first
      }
    });

  return (
    <div className="py-8">
      <div className='mx-2 sm:mx-[5.2rem]'>
        <div className='relative w-full h-[26rem] overflow-hidden'>
          <img src="/femalecollection.jpg" alt="" className="w-full h-full object-cover" />
          <div className="w-[50%] mx-auto absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-xl [@media(max-width:799px)]:w-full">
            <h1 className='text-3xl lg:text-5xl text-center font-bold'>Enjoy Our Collection Curated For You</h1>
            <p className='text-center text-sm mx-auto mt-[0.625rem] w-[80%]'>
              Every jewelry piece provided by jadellabel is tarnish free and guaranteed to last forever.
              We promise that our customer&apos;s satisfaction is our utmost priority and we always ensure to supply
              the best jewelry piece for you.
            </p>
          </div>
          <img src='/Ellipse 7.svg' className='[@media(max-width:840px)]:hidden absolute top-[6%] w-[90%] h-[90%] left-[5%]' />
          <img src='/Rectangle 536.svg' className='[@media(max-width:840px)]:hidden absolute top-6 w-[90%] h-[90%] left-[5%]' />
        </div>
      </div>
      <div className=' flex flex-col gap-4 [@media(min-width:670px)]:flex-row justify-between items-center mx-2 [@media(min-width:800px)]:mx-[4.3rem] mt-[11.875rem]'>
        <div>
          <h2 className="text-xl font-bold mb-6">Available {toTitleCase(decodeURI(name as string))} jewelry</h2>
          <p className='text-sm mt-[0.625rem]'>Explore the unique world of jewelry where <br />sophistication is the watchword of our lalacuculala.</p>
        </div>
        <div className='flex flex-col [@media(min-width:900px)]:flex-row items-start [@media(min-width:670px)]:items-end justify-end gap-6'>
          <div className="flex items-center h-8">
            <div className="flex w-full max-w-xs h-full">
              <div className="relative flex-grow">
                <svg
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search accessory"
                  className="h-8 pl-8 pr-2 border-[0.5px] border-black rounded-l-md w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="h-full px-5 text-sm rounded-r-md bg-pink-300 text-white">
                Search
              </button>
            </div>
          </div>

          <div className='h-8'>
            <select id="filter" name="filter" className='h-full rounded-md border-[0.5px] border-black text-sm' value={filterType} onChange={(e) => setFilterType(e.target.value as 'price' | 'date')}>
              <option value="price" selected>Filter by price</option>
              <option value="date">Filter by date</option>
            </select>
          </div>
        </div>
      </div>

      {loading && <p className="text-gray-500">Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-2 sm:mx-[4.3rem]">
        {filteredProducts.map((product) => (
          <div key={product._id} onClick={() => { router.push(`${name}/${product._id}`) }} className="hover:shadow-lg transition-shadow cursor-pointer">
            <img
              src='/hero1.jpg'
              alt={product.name}
              className="w-full h-80 object-cover mt-[3.125rem]"
            />
            <div className='hover:p-2'>
              <h3 className="text-base font-light mb-[1.25rem]">{product.name}</h3>
              <p className="text-black text-lg font-semibold mb-[1.25rem]">{product.description}</p>
              <p className="text-black font-semibold text-lg">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionName;
