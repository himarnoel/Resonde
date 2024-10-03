import React from 'react'
import obj from '../../../public/home/Virtual Garden Background Texture.svg';
import Image from 'next/image';
import logo from '../../../public/home/Virtual Garden Shapes.svg';

const Footer = () => {
  return (
    <footer className='relative min-h-screen xl:h-[760px] pt-[195px] w-full bg-[#1E3E2A]'>
        <Image src={obj} alt='Object' className='absolute z-[1] top-0'></Image>
        <div className='max-w-[1240px] mx-auto px-3 xl:px-0 flex flex-col justify-between items-center gap-[160px]'>
            <div className='flex flex-col justify-center items-start gap-[30px]'>
                <div className='flex justify-center items-center gap-[8px]'>
                    <Image width={32} height={32} className='object-cover' src={logo} alt='Virtual Garden Logo'></Image>
                    <h2 className='text-white leading-[44px] text-[2.5rem] font-medium'>Virtual Garden</h2>
                </div>
                <p className='text-[#C0C0C0] text-[1.125rem] w-full xl:w-[302px] leading-[24px] font-normal'>Cras at luctus nisl. Donec euismtirus tortor eu justo gravida finibus lectus.</p>
            </div>
            <div className='flex justify-between items-center w-full xl:w-[600px]'>
                <ul className='flex flex-col justify-center items-start w-[66px] gap-[30px]'>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>About Us</li>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>Features</li>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>Pricing</li>
                </ul>
                <ul className='flex flex-col justify-center items-start w-[66px] gap-[30px]'>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>Twitter</li>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>Facebok</li>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>LinkedIn</li>
                </ul>
                <ul className='flex flex-col justify-center items-start w-[66px] gap-[30px]'>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>Provacy Policy</li>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>Terms of Service</li>
                    <li className='text-[#C0C0C0] text-base leading-[16px] font-normal'>Cookie Policy</li>
                </ul>
            </div>
            <h1 className='text-[200px] leading-[200px] font-semibold text-whit'>Virtual Garden</h1>
        </div>
    </footer>
  )
}

export default Footer