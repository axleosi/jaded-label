import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"; 
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex w-full justify-center mt-[11rem]'>
      <div className='flex-col'>
          <div>
              <h1 className="w-full mx-auto font-extrabold text-[40px] sm:text-[85px] md:text-[102px] lg:text-[130px] text-center text-pink-300 font-serif">JADEDLABEL</h1>
          </div>
          <div className='flex w-full justify-between p-4 gap-7 flex-wrap sm:flex-nowrap'>
              <div className='w-full sm:w-1/3 flex flex-col items-center'>
                 <p>All Rights Reserved</p>
                 <div className='flex items-center gap-1'>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 text-gray-700" fill="currentColor">
                     <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/>
                   </svg>
                    <p>2025</p>
                 </div>
              </div>
              <p className='w-full sm:w-1/3 text-center'>Jadedlabel2012@gmail.com</p>
              <div className='w-full sm:w-1/3 flex flex-col items-center'>
                <p>Follow all our socials</p>
                <div className='flex gap-2'>
                  <Link href='https://www.instagram.com/mitimeth.ng/'><FaInstagram /></Link>
                  <Link href='https://x.com/i/flow/login?redirect_after_login=%2Fi%2Fflow%2Flogin'><FaTwitter /></Link>
                  <Link href='https://ng.linkedin.com/company/mitimeth#:~:text=MitiMeth%20|%20741%20followers%20on%20LinkedIn.'><FaLinkedin/></Link>
                  <Link href='https://www.facebook.com/mitimethmade/'><FaFacebook/></Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer