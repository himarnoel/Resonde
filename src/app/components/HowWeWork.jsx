import React from 'react';
import CardCarousel from './CardCarousel';

const HowWeWork = () => {
  return (
    <section className='bg-[#111111] py-[100px] w-full min-h-screen overflow-hidden'>
      <div className='max-w-[1280px] mx-auto px-3 gap-[80px] flex flex-col justify-center items-start'>
        <h1 className='text-white font-semibold text-[3.5rem] leading-[70px] lg:w-[650px]'>How Resonode Works</h1>
        {/* <div className='max-w-[2000px] mx-auto flex justify-center items-center gap-[12px]'>
        </div> */}
        <CardCarousel />
      </div>
    </section>
  );
}

export default HowWeWork;
