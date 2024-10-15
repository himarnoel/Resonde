'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import design from '../../../public/home/skills/imgs/img1.png';
import web from '../../../public/home/skills/imgs/img2.png';
import maintenance from '../../../public/home/skills/imgs/img2.png';
import media from '../../../public/home/skills/imgs/img3.png';
import support from '../../../public/home/skills/imgs/img4.png';
import data from '../../../public/home/skills/imgs/img5.png';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const CarouselItem = ({ image, title, gradient }) => (
  <div className='carousel-item w-full h-[600px] xl:h-[700px] 2xl:h-[750px] flex flex-col justify-between items-start relative'>
    <div className='relative w-full h-full '>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt={title}
        className="rounded-[24px] z-[5]"
      />
      <div className="absolute inset-0 px-[18px] py-[32px] flex flex-col justify-between w-full h-full items-start">
        <p className='z-10 text-white font-normal sofiaProR leading-[42px] text-[1.75rem]'>{title}</p>
        <div className={`z-10 w-full rounded-[8px] bg-gradient-to-b ${gradient} px-[20px] py-[12px] backdrop-blur-md h-[120px]`}>
          <p className='text-white text-[1.5rem] leading-[36px] font-normal sofiaProR'>{title}</p>
        </div>
      </div>
    </div>
  </div>
);

const items = [
  <CarouselItem key='1' image={design} title="Web Design" gradient="from-[white]/[5%] to-[#480455]/[28%]" />,
  <CarouselItem key='2' image={web} title="Web Development" gradient="from-[white]/[5%] to-[#5C8CB4]/[28%]" />,
  <CarouselItem key='3' image={maintenance} title="Software Maintenance" gradient="from-[white]/[5%] to-[#CE9357]/[28%]" />,
  <CarouselItem key='4' image={media} title="Media Management" gradient="from-[white]/[5%] to-[#000000]/[28%]" />,
  <CarouselItem key='5' image={support} title="Customer Support" gradient="from-[white]/[5%] to-[#7F2315]/[28%]" />,
  <CarouselItem key='6' image={data} title="Data Entry And Management" gradient="from-[white]/[5%] to-[#767676]/[28%]" />,
];

const UniqueSkillsCarousel = () => {
  const renderPrevButton = ({ isDisabled }) => (
    <button disabled={isDisabled} className="cursor-pointer prev absolute z-40 top-[-18%] xl:top-[-20%] left-[1%] xl:left-[78%] 2xl:left-[55%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
      <GoArrowLeft className='text-[#121212] text-[2rem]' />
    </button>
  );
  
  const renderNextButton = ({ isDisabled }) => (
    <button disabled={isDisabled} className="cursor-pointer next absolute z-40 top-[-18%] xl:top-[-20%] left-[30%] md:left-[14%] xl:left-[85%] 2xl:left-[60%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
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
    <div className='w-full lg:w-screen z-30 min-h-[300px] md:h-[600px] xl:h-auto mt-[3em] xl:mt-0'>
      <style jsx global>{`
        .alice-carousel__stage-item {
          padding: 0 16px;
        }
        .carousel-item {
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

export default UniqueSkillsCarousel