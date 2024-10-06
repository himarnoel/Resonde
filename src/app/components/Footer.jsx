import React from 'react'
import obj from '../../../public/home/Virtual Garden Background Texture.svg';
import resObj from '../../../public/home/Background texture.svg';
import Image from 'next/image';
import logo from '../../../public/home/Virtual Garden Shapes.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative min-h-screen xl:h-[760px] pt-[195px] w-full bg-[#1E3E2A] overflow-hidden'>
        <div className='max-w-[1253px] mx-auto px-3 xl:px-0 flex flex-col justify-between items-center gap-[80px] md:gap-[160px] h-full xl:h-[468px]'>
            <div className='w-full flex flex-col xl:flex-row justify-between items-center gap-[80px] xl:gap-[160px]'>
                <div className='flex flex-col justify-center items-start gap-[30px] relative z-10'>
                    <Link href={`/`} className='flex justify-center items-center gap-[8px]'>
                        <Image width={32} height={32} className='object-cover' src={logo} alt='Virtual Garden Logo'></Image>
                        <h2 className='text-white leading-[44px] text-[2.5rem] font-medium sofiaProR'>Virtual Garden</h2>
                    </Link>
                    <p className='text-[#C0C0C0] text-[1.125rem] w-full md:w-[302px] leading-[24px] font-normal sofiaProM'>Cras at luctus nisl. Donec euismtirus tortor eu justo gravida finibus lectus.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-start gap-[56px] xl:gap-0 xl:items-center w-full xl:w-[600px] relative z-10'>
                    <ul className='flex flex-col justify-center items-start w-[66px] gap-[30px]'>
                        <Link href={`/about-us`} className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>About Us</Link>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Features</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Pricing</li>
                    </ul>
                    <ul className='flex flex-col justify-center items-start w-[66px] gap-[30px]'>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Twitter</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Facebok</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>LinkedIn</li>
                    </ul>
                    <ul className='flex flex-col justify-center items-start w-[120px] gap-[30px]'>
                        <Link href={`/privacy-policy`} className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Privacy Policy</Link>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Terms of Service</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Cookie Policy</li>
                    </ul>
                </div>
            </div>
            <h1 className='text-center xl:text-left text-[3rem] md:text-[90px] xl:text-[182px] leading-[100px] xl:leading-[200px] text-white w-full font-semibold sofiaProBld'>Virtual Garden</h1>
        </div>
        <Image src={obj} alt='Object' className='hidden xl:flex min-h-screen xl:h-[760px] absolute z-[1px] top-0'></Image>
        <Image src={resObj} alt='Object' className='flex xl:hidden min-h-screen absolute z-[1px] top-0 left-0 right-0 w-full'></Image>
    </footer>
  )
}

export default Footer