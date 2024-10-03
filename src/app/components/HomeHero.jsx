import React from 'react';
import grid from '../../../public/home/Virtual Garden Grid Lines.svg';
import Image from 'next/image';
import img from '../../../public/home/Frame 1618873226 1.svg';

const HomeHero = () => {
  return (
    <section className='relative min-h-screen bg-[#1E3E2A]'>
        {/* Background Image */}
        <div className='absolute inset-0 w-full h-full z-0'>
            <Image 
                src={grid} 
                className='w-full h-full object-cover' 
                alt='Grid'
            />
        </div>

        {/* Content */}
            <div className='relative z-10 flex flex-col justify-start items-center max-w-[1080px] min-h-screen xl:h-[921px] pt-[134px] mx-auto px-3 xl:px-0 gap-[56px]'>
                <div className='flex flex-col justify-center items-center gap-[16px] w-full md:w-[781px] lg:h-[330px]'>
                    <div className='w-[144px] h-[36px] bg-white/[16%] py-[17px] px-[32px] rounded-[1px] border-[.1px] border-[#CBF1E8] flex justify-center items-center gap-[8px]'>
                        <p className='text-[#ABD833] text-base font-normal'>Welcome</p>
                        👋
                    </div>
                    <h1 className='text-center leading-[70.4px] w-full lg:w-[781px] text-[4rem] text-white font-semibold'>
                        Connecting Global Clients with Top Virtual Assistants
                    </h1>
                    <p className='text-center text-[#D3D5D4] w-full md:w-[466px] font-light leading-[28.8px] text-[1.125rem]'>
                        Find highly skilled professionals for your needs..we are your global partner for remote, specialized talent
                    </p>
                    <button className='bg-white py-[13px] px-[48px] w-[254px] h-[48px] rounded-full gap-[8px] text-[.875rem] text-[#020A0C] leading-[22.4px] font-light flex justify-center items-center'>
                        Find Your Virtual Assistant
                    </button>
                </div>

            {/* Image at the bottom */}
            <Image src={img} alt='Top Virtual Assistants' className='object-cover 2xl:absolute bottom-0'></Image>
        </div>
    </section>
  )
}

export default HomeHero;
