import Image from 'next/image'
import React from 'react'
import talents from '../../../public/home/Virtual Garden Resonode (1).svg';

const WorldClassTalents = () => {
  return (
        <section className='w-full min-h-screen py-[100px] 2xl:pb-0 max-w-[1200px] mx-auto px-3 xl:px-0 flex flex-col justify-center items-center gap-[56px]'>
        <div className='flex flex-col justify-center items-center w-full xl:w-[791px] gap-[8px]'>
            <h1 className='text-[#1E3E2A] font-bold sofiaProBld leading-[40px] xl:leading-[57.6px] text-[2rem] md:text-[3rem] text-center'>World class Talents at your Fingertips</h1>
            <p className='text-[#9C9797] font-light sofiaProL text-base text-center'>We providing world class talented Virtual Assistants that help you to 10x your productivity</p>
        </div>
        <Image src={talents} alt='WOrld Class Talents'></Image>
    </section>
  )
}

export default WorldClassTalents