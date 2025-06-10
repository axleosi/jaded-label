import React from 'react'

const Main = () => {
  return (
    <div className='mt-[11.25rem] flex flex-col gap-14 bg-red-400'>
        <div className=' flex flex-col items-center gap-5 md:mx-[8.8rem]'>
            <div className='flex flex-col gap-2 items-center text-center'>
                <h2 className='text-4xl'>Our Top Collections</h2>
                <p className='text-sm pt-[0.625rem]'>Explore the unique world of jewelry where <br/>sophistication is the watchword of our lalacuculala.</p>
            </div>
            <div className='flex justify-between pt-[3.125rem]  bg-blue-300 gap-8 w-full'>
                <div className="relative w-[50%] h-[26rem] overflow-hidden">
                    <img src="femalecollection.jpg" alt="" className="w-full h-full object-cover"/>
                    <p className="absolute inset-0 flex items-center justify-center text-white text-xl">female</p>
                </div>
                <div className="relative w-[50%] h-[26rem] overflow-hidden">
                    <img src="malecollection.jpg" alt="" className="w-full h-full object-cover"/>
                    <p className="absolute inset-0 flex items-center justify-center text-white text-xl">male</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='flex justify-between'>
                <div>
                    <h2>Our Top Sellers</h2>
                    <p>Explore the unique world of jewelry where <br/>sophistication is the watchword of our lalacuculala.</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p>See all</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-3'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
            </div>
            <div className='w-full h-fit grid grid-cols-1 [@media(min-width:500px)]:grid-cols-2 [@media(min-width:900px)]:grid-cols-4 gap-2'>
                <div>
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                    <p>Rings</p>
                    <h3>Lavender Ringlet</h3>
                    <p>$232.00</p>
                </div>
                <div className="[@media(min-width:500px)]:mt-36 ">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                    <p>Rings</p>
                    <h3>Lavender Ringlet</h3>
                    <p>$232.00</p>
                </div>
                <div>
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                    <p>Rings</p>
                    <h3>Lavender Ringlet</h3>
                    <p>$232.00</p>
                </div>
                <div className="[@media(min-width:500px)]:mt-36 ">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                    <p>Rings</p>
                    <h3>Lavender Ringlet</h3>
                    <p>$232.00</p>
                </div>
            </div>
        </div>
        <div className='flex ml-6 items-center'>
            <div className='w-[40%] z-10'>
                <div className='w-[42rem]'>
                    <h1 className='text-xl font-extrabold [@media(min-width:650px)]:text-4xl [@media(min-width:900px)]:text-6xl'>SPECIAL OFFER FOR <br/>MY IT GIRLIES</h1>
                    <p className='text-wrap'>Explore the unique world of jewelry where sophistication is the watchword of our lalacuculala.</p>
                </div>
                <button>
                    <p>Shop offers</p>
                </button>
            </div>
            <div className='w-[60%] h-[20rem] [@media(min-width:650px)]:h-[30rem] bg-blue-300'>
                <img src="femalecollection.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
        <div className='flex flex-col gap-6 items-center'>
            <div className='flex justify-between'>
                <div className='text-center'>
                    <h2 className='text-4xl font-medium'>See our products</h2>
                    <p>Explore the unique world of jewelry where <br/>sophistication is the watchword of our lalacuculala.</p>
                </div>
            </div>
            <div className='w-full h-fit flex justify-between gap-2'>
                <div className="[@media(min-width:500px)]:-mt-10">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
                <div className="[@media(min-width:500px)]:mt-36 ">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
                <div className='h-[29rem] flex flex-col justify-between items-center'>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                </div>
                <div className="[@media(min-width:500px)]:mt-36 ">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
                <div className="[@media(min-width:500px)]:-mt-10">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main