import React from 'react'

const ItGirl = () => {
  return (
    <div className='mx-[0.3rem] sm:mx-[4.8rem] mt-[9.3rem] relative'>
      <div className='flex flex-col-reverse sm:flex-row items-center w-full relative'>

        {/* Text Section */}
        <div className='w-full sm:w-1/2 z-10 sm:static absolute top-0 left-0 p-4 sm:p-0 text-black'>
          <div className='overflow-x-visible text-center sm:text-left '>
            <h1 className='whitespace-nowrap text-7xl font-extrabold [@media(max-width:1000px)]:text-5xl [@media(max-width:750px)]:text-2xl [@media(max-width:499px)]:text-lg'>
              SPECIAL OFFER FOR
            </h1>
            <h1 className='whitespace-nowrap text-7xl font-extrabold [@media(max-width:1000px)]:text-5xl [@media(max-width:750px)]:text-2xl [@media(max-width:499px)]:text-lg'>
              MY IT GIRLIES
            </h1>
            <p className='text-wrap pt-[0.625rem]'>Explore the unique world of jewelry</p>
            <p>where sophistication is the watchword of our lalacuculala.</p>
            <button className="mt-[3.125rem] px-4 py-2 font-semibold rounded flex items-center gap-3 hover:fill-white hover:bg-pink-300 hover:text-white transition ease-in duration-300">
              Shop offers
              <svg className="h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full sm:w-1/2 h-[20rem] sm:h-[30rem] relative'>
          <img src="femalecollection.jpg" alt="" className="w-full h-full object-cover z-10" />
          <img src="vector6.svg" className='absolute -top-4 -right-4 h-96 [@media(max-width:1100px)]:hidden' />
          <img src="vector7.svg" className='absolute -bottom-4 -left-4 h-96 [@media(max-width:1100px)]:hidden' />
        </div>

      </div>
    </div>
  )
}

export default ItGirl