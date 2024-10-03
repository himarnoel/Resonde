import React from 'react'
import grid from '../../../public/home/Virtual Garden Frame 114.svg';
import Image from 'next/image';

const BecomeVA = () => {
  return (
    <section className='w-full mx-auto min-h-screen xl:h-[921px] py-[100px] flex justify-center items-center'>
        <div className='w-full xl:w-[1240px] bg-[#002C15] h-full xl:h-[640px] rounded-[40px] flex justify-center items-center gap-[40px]'>
            <div className='w-full xl:w-[400px] flex flex-col justify-between items-start gap-[24px]'>
                    <h1 className='w-full xl:w-[322px] leading-[48px] font-semibold text-white text-[2.5rem]'>Become a Virtual Assistant</h1>
                <ul className='w-full xl:w-[368px] flex flex-col justify-center items-start gap-[16px]'>
                    <li className='text-white list-disc font-light text-[1rem] leading-[22.4px]'>Earn additional income on your own schedule</li>
                    <li className='text-white list-disc font-light text-[1rem] leading-[22.4px]'>Gain exposure to international clients and expand your professional network</li>
                    <li className='text-white list-disc font-light text-[1rem] leading-[22.4px]'>Enhance your portfolio with global projects</li>
                </ul>
                <button className='bg-[#1E3E2A] py-[17px] px-[32px] rounded-full h-[56px] w-[320px] flex justify-center items-center text-[#D0EA50] text-base font-light'>Register as a Virtual Assistant</button>
            </div>
            <Image width={549} height={382} src={grid} className='object-cover' alt='Virtual Assistants'></Image>
        </div>
    </section>
  )
}

export default BecomeVA