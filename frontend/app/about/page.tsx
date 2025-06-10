import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp,} from "react-icons/fa"; 


const About = () => {
  return (
    <div>
      <div className='flex flex-col items-center text-center justify-center relative h-[30rem] ml-[5.2rem] mr-[4rem] text-6xl [@media(max-width:999px)]:text-4xl [@media(max-width:650px)]:text-xl'>
        <p className='z-10'> We Provide<img src='hero1.jpg' className="inline h-8 w-40 [@media(max-width:630px)]:w-20 rounded-full object-cover [@media(max-width:650px)]:hidden" /></p>
        <p className='z-10'><span className='text-pink-300'>Jewelry</span> That Ignites<img src='hero1.jpg' className="inline h-8 w-40 [@media(max-width:630px)]:w-20 rounded-full object-cover [@media(max-width:650px)]:hidden" /></p>
        <p className='z-10 [@media(max-width:500px)]:hidden'>Passion, Crafted with <span className='text-pink-300'>Precision</span></p>
        <p className='z-10'> <img src='hero1.jpg' className="inline h-8 w-80 [@media(max-width:630px)]:w-20 rounded-full object-cover [@media(max-width:650px)]:hidden" /> And Love</p>
        <img src="hero3.jpg" alt="" className="w-64 h-80 absolute top-0 left-0 [@media(max-width:1100px)]:hidden" />
        <img src="hero3.jpg" alt="" className="w-64 h-80 absolute bottom-0 right-0 [@media(max-width:1100px)]:hidden" />
      </div>
      <div className='[@media(min-width:1100px)]:ml-[4.9rem] mt-[11.25rem]'>
        <div className='flex items-center justify-between [@media(max-width:1100px)]:flex-col [@media(max-width:1100px)]:items-center [@media(max-width:1100px)]:gap-8'>
          <div className='w-80 [@media(min-width:400px)]:w-96 [@media(max-width:1100px)]:flex [@media(max-width:1100px)]:flex-col [@media(max-width:1100px)]:items-center'>
            <h1 className='text-3xl'>About Us</h1>
            <p className='text-sm pt-[3.125rem]'>Every jewelry piece provided by. We promise that our customers satisfaction is our utmost priority and we always ensure to supply the best jewelry piece for you. Also the help the brand craft amazing content anything i write here is a placeholder so please ensure to replace all this write up with something worth reading because no one is gonna read this shit im typing.</p>
          </div>
          <div className='relative w-1/2'>
            <img src="/Rectangle533.svg" className='absolute -bottom-2 w-full h-full -z-0' />
            <div className='flex justify-center [@media(min-width:1100px)]:justify-start bg-black relative w-full h-80'>
              <div className=' flex items-center gap-4 [@media(min-width:1100px)]:-ml-8'>
                <div className='relative z-0'>
                  <div className='w-48 [@media(min-width:750px)]:w-64 aspect-square overflow-hidden flex-shrink-0'>
                    <img src="hero3.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <img src="/Vector8.svg" className='absolute -bottom-3 z-0 h-44 -left-3' />
                </div>
                <div className='w-48 [@media(min-width:750px)]:w-64 aspect-square overflow-hidden flex-shrink-0 [@media(max-width:450px)]:hidden'>
                  <img src="hero3.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative z-10'>
        <img src='/Rectangle535.svg' className="absolute z-0 w-full h-full -top-3" />

        {/* Black foreground div */}
        <div className='bg-black mt-[11.25rem] relative pt-4 text-white z-10 [@media(min-width:900px)]:mx-[4.9rem] [@media(min-width:450px)]:p-7'>
          <div className='flex items-center lg:w-[80%] mx-auto justify-between z-10 [@media(min-width:700px)]:flex-row flex-col'>
            <div className='w-64 aspect-square overflow-hidden flex-shrink-0 z-10'>
              <img src="hero3.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className='w-80 [@media(min-width:400px)]:w-96 z-10 [@media(max-width:700px)]:flex [@media(max-width:700px)]:flex-col [@media(max-width:700px)]:items-center'>
              <h1 className='text-3xl'>Meet The Ceo</h1>
              <p className='text-sm pt-[3.125rem]'>
                Every jewelry piece provided by. We promise that our customers satisfaction is our utmost priority and we always ensure to supply the best jewelry piece for you. Also the help the brand craft amazing content anything i write here is a placeholder so please ensure to replace all this write up with something worth reading because no one is gonna read this shit im typing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[11rem] flex flex-col items-center mx-2 sm:mx-[7.9rem]'>
        <p className='text-2xl'>Need to reach us?</p>
        <p className='text-2xl'>Follow our social media</p>
        <div className='flex flex-wrap w-full justify-between gap-4 mt-[3.125rem]'>
          <div className='flex flex-col items-center gap-[1.25rem]'>
            <svg className='aspect-square h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
            <p className='text-sm'>Our instagram page</p>
            <p className='text-xl'>@JadedLabel</p>
          </div>
          <div className='flex flex-col items-center gap-[1.25rem]'>
            <svg className='aspect-square h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            <p className='text-sm'>Our twitter page</p>
            <p className='text-xl'>@JadedLabel</p>
          </div>
          <div className='flex flex-col items-center gap-[1.25rem]'>
            <svg className='aspect-square h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            <p className='text-sm'>Our linkedin page</p>
            <p className='text-xl'>@JadedLabel</p>
          </div>
          <div className='flex flex-col items-center gap-[1.25rem]'>
            <svg className='aspect-square h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            <p className='text-sm'>Our whatsapp page</p>
            <p className='text-xl'>@JadedLabel</p>
          </div>
          <div className='flex flex-col items-center gap-[1.25rem]'>
            <svg className='aspect-square h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144l256 0c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4 384 336c0 17.7-14.3 32-32 32L96 368c-17.7 0-32-14.3-32-32l0-125.6 136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"/></svg>
            <p className='text-sm'>Our email <address></address></p>
            <p className='text-xl'>@JadedLabel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About