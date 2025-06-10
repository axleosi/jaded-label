'use client'
import { useState, useRef } from 'react';

const topSellers = [
    {
        image: 'malecollection.jpg',
        category: 'Rings',
        title: 'Lavender Ringlet',
        price: '$232.00',
    },
    {
        image: 'malecollection.jpg',
        category: 'Rings',
        title: 'Lavenda Ringlet',
        price: '$232.00',
    },
    {
        image: 'malecollection.jpg',
        category: 'Rings',
        title: 'Lavender Ringlet',
        price: '$232.00',
    },
    {
        image: 'malecollection.jpg',
        category: 'Rings',
        title: 'Lavender Ringlet',
        price: '$232.00',
    },
];

export default function TopSellers() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((prev) => (prev + 1) % topSellers.length)
  const prev = () => setIndex((prev) => (prev - 1 + topSellers.length) % topSellers.length)

  // refs for overlays and images per item
  const pulseRefs = useRef<(HTMLDivElement | null)[]>([])
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])

  // Trigger combined animation for pulseOnce + blurZoomPulse
  const triggerAnimation = (idx: number) => {
    const overlay = pulseRefs.current[idx]
    const img = imgRefs.current[idx]
    if (!overlay || !img) return

    // Restart blurZoomPulse on overlay
    overlay.classList.remove('animate-blurZoomPulse')
    void overlay.offsetWidth
    overlay.classList.add('animate-blurZoomPulse')

    // Restart pulseOnce on image
    img.classList.remove('animate-pulseOnce')
    void img.offsetWidth
    img.classList.add('animate-pulseOnce')
  }

  return (
    <div className="mx-2 [@media(min-width:450px)]:mx-[4.7rem] mt-[11.25rem]">
      <div className="flex flex-col gap-6 ">
        <div className="flex [@media(max-width:599px)]:flex-col [@media(max-width:599px)]:items-start justify-between">
          <div className="flex flex-col gap-2 items-start text-center">
            <h2 className="text-4xl text-left">Our Top Sellers</h2>
            <p className="text-sm pt-[0.625rem] text-left">
              Explore the unique world of jewelry where <br />
              sophistication is the watchword of our lalacuculala.
            </p>
          </div>
          <div className="flex items-center gap-2 [@media(max-width:599px)]:pt-[0.625rem]">
            <p>See all</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden relative pt-[3.125rem]">
          <div>
            <img src={topSellers[index].image} alt="" className="h-80 w-full object-cover" />
            <p>{topSellers[index].category}</p>
            <h3>{topSellers[index].title}</h3>
            <p>{topSellers[index].price}</p>
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={prev} className="bg-gray-300 px-2 py-1 rounded-full">◀</button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={next} className="bg-gray-300 px-2 py-1 rounded-full">▶</button>
          </div>
        </div>

        {/* Desktop Grid with blur + pulse on image only */}
        <div className="hidden lg:grid w-full h-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-[3.125rem]">
  {topSellers.map((item, idx) => (
    <div key={idx} className={`cursor-pointer ${idx % 2 === 1 ? 'sm:mt-36' : ''}`}>
      {/* Image container relative for overlay */}
      <div className="relative overflow-hidden h-80 w-full">
        <img
          ref={(el) => {imgRefs.current[idx] = el;}}
          src={item.image}
          alt=""
          className="h-full w-full object-cover"
          onMouseEnter={() => triggerAnimation(idx)}
          onMouseLeave={() => triggerAnimation(idx)}
        />
        {/* Blur+Scale overlay */}
        <div
          ref={(el) => {pulseRefs.current[idx] = el;}}
          className="absolute inset-0 pointer-events-none z-10 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url(${item.image})` }}
        />
      </div>

      {/* Text content outside the image container */}
      <p className="mt-[1.25rem]">{item.category}</p>
      <h3 className="mt-[1.25rem]">{item.title}</h3>
      <p className="mt-[1.25rem]">{item.price}</p>
    </div>
  ))}
</div>
      </div>
    </div>
  )
}