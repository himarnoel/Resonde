import Image from 'next/image'
import React from 'react'
import logo from '../../../public/home/Virtual Garden Shapes.svg';

const Navbar = () => {
  return (
    <nav className='px-[80px] py-[20px] h-[88px] bg-[#1E3E2A] sticky top-0 w-full z-50 border-b-[.3px] border-b-[#445c4d]'>
        <div className='max-w-[1280px] mx-auto flex justify-between items-center gap-6'>
          <div className='flex justify-center items-center gap-[8px]'>
            <Image width={32} height={32} className='object-cover' src={logo} alt='Virtual Garden Logo'></Image>
            <h1 className='text-white text-[2rem] font-medium sofiaProM leading-[35.2px]'>Virtual Garden</h1>
          </div>
          <ul className='hidden lg:flex justify-between items-center gap-10'>
              <li className='text-white font-light sofiaProL text-[1rem] leading-[25.6px]'>How it works</li>
              <li className='text-white font-light sofiaProL text-[1rem] leading-[25.6px]'>About us</li>
              <li className='text-white font-light sofiaProL text-[1rem] leading-[25.6px]'>Our Services</li>
          </ul>
          <button className='hidden bg-transparent border-[.6px] border-white lg:flex justify-center items-center h-[48px] w-[167px] text-[#F7F7F7] font-normal sofiaProR text-[.875rem] leading-[22.4px] py-[13px] px-[48px] rounded-full'>Contact us</button>
        </div>
    </nav>
  )
}

export default Navbar