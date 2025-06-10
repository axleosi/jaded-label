import React from 'react'

const ProductList = () => {
  return (
    <div className='mt-[11.25rem] mx-2 sm:mx-[4.8rem]'>
        <div className='flex flex-col gap-6 items-center'>
            <div className='flex justify-between'>
                <div className='text-center'>
                    <h2 className='text-4xl font-medium'>See our products</h2>
                    <p className='text-sm font-medium pt-[0.625rem]'>Explore the unique world of jewelry where <br/>sophistication is the watchword of our lalacuculala.</p>
                </div>
            </div>
            <div className='w-full h-fit flex justify-between gap-2 [@media(max-width:749px)]:justify-center'>
                <div className="[@media(max-width:749px)]:hidden [@media(min-width:950px)]:-mt-10">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
                <div className="[@media(min-width:500px)]:mt-36 hidden [@media(min-width:1200px)]:block">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
                <div className='h-[14rem] mt-[3.125rem] [@media(min-width:1200px)]:h-[26rem] flex flex-col justify-between items-center'>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                    <p>Lavender Ringlet</p>
                    <p className='hidden [@media(min-width:1200px)]:block'>Lavender Ringlet</p>
                    <p className='hidden [@media(min-width:1200px)]:block'>Lavender Ringlet</p>
                </div>
                <div className="[@media(min-width:500px)]:mt-36 hidden [@media(min-width:1200px)]:block">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
                <div className="[@media(max-width:749px)]:hidden [@media(min-width:950px)]:-mt-10">
                    <img src="malecollection.jpg" alt="" className='h-80 w-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList