'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const router= useRouter()
  return (
    <div className='px-6 md:ml-[5.2rem] md:mr-[4rem] flex flex-col items-center mt-6 gap-7'>
        <div className='flex w-full items-center justify-center [@media(min-width:1100px)]:justify-between '>
            <div className=' w-fit'>
                <div className='relative font-semibold font-serif [@media(max-width:500px)]:text-3xl [@media(min-width:501px)]:text-5xl md:text-7xl'>
                    <p>Discover Timeless</p>
                    <p className="whitespace-nowrap w-full">
                        Elegance 
                        <span className="relative inline-block align-middle">
                          <img src='hero1.jpg' className="inline h-8 w-40 [@media(max-width:500px)]:w-20 rounded-full object-cover" />
                          <img src='group 1.svg' className="absolute top-full left-[80%] -translate-x-1/2 mt-1" />
                        </span> 
                        in</p>
                    <p>Every Piece</p>
                    <p className='text-sm font-medium pt-[0.625rem]'>Explore the unique world of our jewelry where <br/>sophistication is the watchword for our lalacuculala</p>
                </div>
                <div className='pt-[3.125rem]'>
                    <button onClick={()=>router.push('/collection')} className='flex items-center gap-2 bg-pink-300 p-2 rounded-[5px] text-white'>Explore Collections
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-3 fill-white'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </button>
                </div>
            </div>
            <div className='flex-1 min-w-0 hidden [@media(min-width:1100px)]:flex justify-end mr-[6rem]'>
                <div className='flex flex-col items-center'>
                    <div className='mb-8 flex z-0'>
                        <div className='mt-8 mr-2'>
                           <h2 className='text-sm text-gray-900'>Elegance in</h2>
                           <p className='text-pink-300 text-sm'>Every Detail</p>
                        </div>
                        <div className="relative z-10">
                           <img src="hero3.jpg" alt="" className='h-60 w-40 rounded-tr-[4rem] object-cover relative z-20' />
                           <img src="rectangle6.svg" alt="" className='absolute -top-1 left-2 h-70 w-40 z-10 pointer-events-none' />
                        </div>
                    </div>
                    <div className='mb-8 flex items-end z-10 -mt-36'>
                        <div className="relative z-10">
                           <img src="hero2.jpg" alt="" className='h-60 w-40 rounded-tl-[4rem] rounded-br-[4rem] object-cover relative z-20' />
                           <img src="rectangle.svg" alt="" className='absolute -top-1 right-2 h-70 w-40 z-10 pointer-events-none' />
                        </div>
                        <div className='mb-8 ml-2'>
                            <h2 className='text-sm text-gray-900'>Find</h2>
                            <p className='text-pink-300 text-sm'>Your Sparkle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero