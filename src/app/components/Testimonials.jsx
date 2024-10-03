import React from 'react'
import TestimonialDisc from './TestimonialDisc'
import Image from 'next/image'
import obj from '../../../public/home/testimonials/Virtual Garden Group.svg';

const Testimonials = () => {
  return (
    <section className='relative bg-[#E6EDDD] w-full min-h-screen py-[136px] px-[80px] overflow-hidden'>
        <div className='max-w-[1672px] mx-auto flex flex-col justify-center items-start gap-[123px]'>
            <div className='flex flex-col justify-center items-start w-full xl:w-[799px] gap-[16px]'>
                <div className='flex justify-center items-start gap-[8px]'>
                    <Image width={20} height={20} className='object-cover' src={obj} alt='Object'></Image>
                    <p className='text-[#58575A text-[14px] lwading-[21px] font-normal'>What our customers are saying</p>
                </div>
                    <h1 className='text-[#002C15] text-[3.5rem] leading-[58px] font-semibold'>What our customers are saying</h1>
                    <p className='text-[#58575A] text-base font-light'>Unlock the power of efficient task management with Virtual Garden Flow. Here is a look at how we handle contracts and payments.</p>
            </div>
            <TestimonialDisc/>
        </div>
    </section>
  )
}

export default Testimonials