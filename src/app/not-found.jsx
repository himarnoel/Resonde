import Image from 'next/image'
import React from 'react'
import img from '../../public/home/Business Leader Superhero.svg';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='w-full lg:w-[447px] mx-auto flex flex-col justify-center items-center gap-[32px] h-[627px]'>
        <Image width={295.7} height={232.34} src={img} alt='not found'></Image>
        <h1 className='text-[#1E3E2A] leading-[48px] text-[3rem] text-center font-semibold sofiaProR'>404 Page Not Found</h1>
        <Link href={`/`} className='w-[275px] h-[59px] py-[16px] px-[56px] bg-[#1E3E2A] rounded-full text-[#D0EA50] text-[1.125rem] leading-[27px] font-light sofiaProL'>Back to Home Page</Link>
    </section>
  )
}

export default NotFound