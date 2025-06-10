import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col items-center mt-[7.3rem] gap-6'>
      <div className='flex flex-col items-center text-center gap-2 '>
        <h2 className='text-4xl font-serif font-medium'>We Ensure Guarantee of</h2>
        <p className='pt-[0.625rem] text-sm'>Explore the unique world of jewelry where <br />sophistication is the watchword of our lalacuculala.</p>
      </div>
      <div className='w-[90%] flex flex-wrap justify-center items-center gap-6  pt-[3.125rem] mx-auto'>
        <div className='group flex flex-col p-2 items-center text-center gap-2 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] border-[1px] border-black rounded-md transition-colors duration-300 hover:bg-pink-300 hover:text-white'>
          <div className="p-3 bg-pink-300 rounded-full border border-transparent transition-colors duration-300 group-hover:bg-white group-hover:border-pink-300">
            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 fill-white group-hover:fill-pink-300 transition-colors duration-300' viewBox="0 0 640 512">
              <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
            </svg>
          </div>
          <h3 className='text-xl font-serif font-medium transition-colors duration-300'>Fast Delivery</h3>
          <p className='text-sm transition-colors duration-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. </p>
        </div>
        <div className='group flex flex-col p-2 items-center text-center gap-2 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] border-[1px] border-black rounded-md transition-colors duration-300 hover:bg-pink-300 hover:text-white'>
          <div className="p-3 bg-pink-300 rounded-full border border-transparent transition-colors duration-300 group-hover:bg-white group-hover:border-pink-300">
            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 fill-white group-hover:fill-pink-300 transition-colors duration-300' viewBox="0 0 512 512"><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z" /></svg>
          </div>
          <h3 className='text-xl font-serif font-medium transition-colors duration-300'>Customer satisfaction</h3>
          <p className='text-sm transition-colors duration-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. </p>
        </div>
        <div className='group flex flex-col p-2 items-center text-center gap-2 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] border-[1px] border-black rounded-md transition-colors duration-300 hover:bg-pink-300 hover:text-white'>
          <div className="p-3 bg-pink-300 rounded-full border border-transparent transition-colors duration-300 group-hover:bg-white group-hover:border-pink-300">
            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 fill-white group-hover:fill-pink-300 transition-colors duration-300' viewBox="0 0 448 512"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" /></svg>
          </div>
          <h3 className='text-xl font-serif font-medium transition-colors duration-300'>Secured payment</h3>
          <p className='text-sm transition-colors duration-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. </p>
        </div>
      </div>
    </div>

  )
}

export default Card