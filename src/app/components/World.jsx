import React from 'react'
import img from '../../../public/home/Virtual Garden Frame 1.svg';
import Image from 'next/image';

const World = () => {
  return (
    <section className='bg-[#1E3E2A] min-h-screen w-full px-3 xl:px-0 flex flex-col justify-between gap-[4em] items-center py-[100px]'>
        <h1 className='text-[3.5rem] w-full xl:w-[738px] leading-[67.2px] text-center font-bold text-white'>World class Virtual Assistance for you to 10x your workflow</h1>
        <Image width={1132.16} height={730.92} src={img} alt='Map Of Earth'></Image>
    </section>
  )
}

export default World