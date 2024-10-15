'use client'

import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const TestimonialItem = ({ content, name, role }) => (
  <div className='testimonial-item bg-white w-full sm:max-w-[295px] md:w-full lg:max-w-[400px] 2xl:max-w-[500px] h-[480px] rounded-[16px] px-[20px] py-[48px]'>
    <div className='flex flex-col justify-center items-start 2xl:items-center gap-[40px] w-full lg:w-[353px] 2xl:w-full h-full'>
      <p className='text-[#333333] font-light h-full xl:h-[238px] sofiaProL text-[1.25rem] md:text-[1.5rem] leading-[34px]'>
        {content}
      </p>
      <div className='w-[200px] 2xl:w-full flex flex-col justify-center items-start gap-[4px]'>
        <h1 className='text-[#121212] text-[1.25rem] leading-[36px] sofiaProM'>{name}</h1>
        <p className='text-[#565656] text-base font-light sofiaProL'>{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialDisc = () => {
  const testimonials = [
    {
      content: "Virtual Garden helped us find a brilliant web developer who completed our project helped us find a brilliant web developer who completed our project on time and within on time and within budget!",
      name: "Wade Warren",
      role: "Client"
    },
    {
      content: "I've gained international experience while expanding my skill set and earning extra income through Virtual Garden.",
      name: "Kristin Watson",
      role: "V.A"
    },
    {
      content: "Virtual Garden helped us find a brilliant web developer who completed our project helped us find a brilliant web developer who completed our project on time and within on time and within budget!",
      name: "Cameron Williamson",
      role: "Client"
    },
    {
      content: "I've gained international experience while expanding my skill set and earning extra income through Virtual Garden.",
      name: "Cody Fisher",
      role: "V.A"
    },
  ];

  const items = testimonials.map((testimonial, index) => (
    <TestimonialItem key={index} {...testimonial} />
  ));

  const renderPrevButton = ({ isDisabled }) => (
    <button disabled={isDisabled} className="cursor-pointer prev absolute z-40 top-[-20%] md:top-[-38%] 2xl:top-[-40%] 2xl:left-[88%] xl:left-[85%] left-[1%] md:left-[55%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
      <GoArrowLeft className='text-[#121212] text-[2rem]' />
    </button>
  );

  const renderNextButton = ({ isDisabled }) => (
    <button disabled={isDisabled} className="cursor-pointer next absolute z-40 top-[-20%] md:top-[-38%] 2xl:top-[-40%] xl:left-[94%] 2xl:left-[95%] sm:left-[20%] left-[30%] md:left-[60%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
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
    <div className='w-full z-30  gap-[27px] xl:gap-[32px]'>
      <style jsx global>{`
        .alice-carousel__stage-item {
          padding: 0 16px;
        }
        .testimonial-item {
          box-sizing: border-box;
        }
      `}</style>
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
          640: { items: 1.5 },
          768: { items: 2 },
          1024: { items: 2.5 },
          1280: { items: 3 },
        }}
        mouseTracking
        touchTracking
        disableButtonsControls={false}
        controlsStrategy="alternate"
      />
    </div>
  )
}

export default TestimonialDisc