import Image from 'next/image'
import React from 'react'
import TestimonialCardTwo from './TestimonialCardTwo'
import obj from '../../../public/how-it-works/Background texture (1).svg';
import resObj from '../../../public/home/Background texture.svg';

const HowItWorkHero = () => {
  return (
    <section className='min-h-screen bg-[#1E3E2A] w-full relative py-[100px] px-[24px] xl:px-[32px]'>
        <div className='max-w-[1248px] mx-auto flex flex-col justify-center items-center gap-[120px] min-h-screen'>
            <div className='w-full xl:w-[795px] flex flex-col justify-center items-center gap-[40px] text-center'>
                <h1 className='text-white leading-[56px] text-[3.5rem] font-semibold sofiaProBld'>How Virtual Garden Brings the Best Talent to You</h1>
                <p className='text-[#F1F1F1] text-[1.25rem] leading-[30px] font-light sofiaProL'>"From your request to project completion, we make collaboration easy and seamless."</p>
            </div>
            <div className='w-full h-full'>
              <TestimonialCardTwo/>
            </div>
        </div>

        <Image src={obj} alt='Object' className='hidden xl:flex min-h-screen absolute z-[1] top-0 left-0 right-0 bottom-0'></Image>
        <Image src={resObj} alt='Object' className='flex xl:hidden min-h-screen absolute z-[1] top-0 left-0 right-0 bottom-0 w-full'></Image>
    </section>
  )
}

export default HowItWorkHero