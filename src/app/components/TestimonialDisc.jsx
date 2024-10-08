'use client'

import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const TestimonialDisc = () => {
  const items = [
    <div key='1' className='bg-white w-full sm:w-[295px] md:w-full lg:w-[400px] 2xl:w-[500px] h-[480px] rounded-[16px] px-[20px] py-[48px]'>
      <div className='flex flex-col justify-center items-start 2xl:items-center gap-[40px] w-full lg:w-[353px] 2xl:w-full h-full'>
        <p className='text-[#333333] font-light h-full xl:h-[238px] sofiaProL text-[1.25rem] md:text-[1.5rem] leading-[34px]'>
          “Virtual Garden helped us find a brilliant web developer who completed our project  helped us find a brilliant web developer who completed our project on time and within on time and within budget!”
        </p>
        <div className='w-[200px] 2xl:w-full flex flex-col justify-center items-start gap-[4px]'>
          <h1 className='text-[#121212] text-[1.25rem] leading-[36px] sofiaProM'>Wade Warren</h1>
          <p className='text-[#565656] text-base font-light'>Client</p>
        </div>
      </div>
    </div>,
    <div key='2' className='bg-white w-full sm:w-[295px] md:w-full lg:w-[400px] 2xl:w-[500px] h-[480px] rounded-[16px] px-[20px] py-[48px]'>
      <div className='flex flex-col justify-center items-start 2xl:items-center gap-[40px] w-full lg:w-[353px] 2xl:w-full h-full'>
        <p className='text-[#333333] font-light h-full xl:h-[238px] sofiaProL text-[1.25rem] md:text-[1.5rem] leading-[34px]'>
          “I’ve gained international experience while expanding my skill set and earning extra income through Virtual Garden.”
        </p>
        <div className='w-[200px] 2xl:w-full flex flex-col justify-center items-start gap-[4px]'>
          <h1 className='text-[#121212] text-[1.25rem] leading-[36px] sofiaProM'>Kristin Watson</h1>
          <p className='text-[#565656] text-base font-light sofiaProL'>V.A</p>
        </div>
      </div>
    </div>,
    <div key='3' className='bg-white w-full sm:w-[295px] md:w-full lg:w-[400px] 2xl:w-[500px] h-[480px] rounded-[16px] px-[20px] py-[48px]'>
      <div className='flex flex-col justify-center items-start 2xl:items-center gap-[40px] w-full lg:w-[353px] 2xl:w-full h-full'>
        <p className='text-[#333333] font-light h-full xl:h-[238px] sofiaProL text-[1.25rem] md:text-[1.5rem] leading-[34px]'>
          “Virtual Garden helped us find a brilliant web developer who completed our project  helped us find a brilliant web developer who completed our project on time and within on time and within budget!”
        </p>
        <div className='w-[200px] 2xl:w-full flex flex-col justify-center items-start gap-[4px]'>
          <h1 className='text-[#121212] text-[1.25rem] leading-[36px] sofiaProM'>Cameron Williamson</h1>
          <p className='text-[#565656] text-base font-light sofiaProL'>Client</p>
        </div>
      </div>
    </div>,
    <div key='4' className='bg-white w-full sm:w-[295px] md:w-full lg:w-[400px] 2xl:w-[500px] h-[480px] rounded-[16px] px-[20px] py-[48px]'>
      <div className='flex flex-col justify-center items-start 2xl:items-center gap-[40px] w-full lg:w-[353px] 2xl:w-full h-full'>
        <p className='text-[#333333] font-light h-full xl:h-[238px] sofiaProL text-[1.25rem] md:text-[1.5rem] leading-[34px]'>
          “I’ve gained international experience while expanding my skill set and earning extra income through Virtual Garden.”
        </p>
        <div className='w-[200px] 2xl:w-full flex flex-col justify-center items-start gap-[4px]'>
          <h1 className='text-[#121212] text-[1.25rem] leading-[36px] sofiaProM'>Cody Fisher</h1>
          <p className='text-[#565656] text-base font-light sofiaProL'>V.A</p>
        </div>
      </div>
    </div>,
  ]


  const renderPrevButton = () => (
      <button className="cursor-pointer prev absolute z-40 top-[-20%] md:top-[-38%] 2xl:top-[-40%] 2xl:left-[88%] xl:left-[85%] left-[1%] md:left-[55%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
        <GoArrowLeft className='text-[#121212] text-[2rem]' />
      </button>
  );

  const renderNextButton = () => (
      <button className="cursor-pointer next absolute z-40 top-[-20%] md:top-[-38%] 2xl:top-[-40%] xl:left-[94%] 2xl:left-[95%] sm:left-[20%] left-[30%] md:left-[60%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
      <GoArrowRight className='text-[#121212] text-[2rem]' />
      </button>
  );


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className='w-full z-30 px-3 gap-[27px] xl:gap-[32px]'>
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={3000}
        
        infinite
        disableDotsControls
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        responsive={{
            0: { items: 1 },
            640: { items: 2 },
            768: { items: 2 },
            1024: { items: 2 },
            1280: { items: 3 },
        }}
      />
    </div>
  )
}

export default TestimonialDisc