'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import man from '../../../public/home/work/Man in cafe (1).svg';
// import woman from '../../../public/home/work/Businesswoman at computer.svg';
// import womanTwo from '../../../public/home/work/Virtual Garden Resonode Photo.svg';
// import womanThree from '../../../public/home/work/Businesswoman with Tablet (1).svg';


import woman from '../../../public/home/work/Virtual Garden Resonode Photo.svg'
import womanTwo from '../../../public/home/work/Businesswoman at computer (2).svg'
import man from '../../../public/home/work/Man in cafe (2).svg'
import womanThree from '../../../public/home/work/Businesswoman with Tablet (2).svg'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";


const items = [
    <div key='1' className='w-full lg:w-[500px] xl:w-[640px] h-full xl:h-[720px] flex flex-col justify-center items-center'>
        <Image
        src={man}
        width={640}
        height={440}
        alt='Image One'
        className="rounded-tl-[16px] w-full lg:w-[500px] xl:w-[640px] rounded-tr-[16px] object-cover"
        />
        <div className="bg-[#1C1C1C] w-full lg:w-[500px] xl:w-[640px] rounded-bl-[16px] rounded-br-[16px] px-[20px] py-[32px]">
            <div className='flex flex-col justify-center items-start gap-[24px]'>
                <p className="text-[1.5rem] font-medium leading-[26.4px] text-[#AC4F47]">
                    01
                </p>
                <div className='flex flex-col gap-[12px]'>
                <h3 className="text-[2rem] leading-[35.2px] font-medium text-white">
                    Submit Your Request
                </h3>
                <p className="text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light">
                    Clients provide details about the specific task or project they need help with.
                </p>
                </div>
                <button className="border border-white rounded-full text-white w-[172px] h-[44px] py-[15px] px-[48px] gap-[8px] flex justify-center items-center text-[14px] leading-[14px] font-light">
                    Get Started
                </button>
            </div>
        </div>
    </div>,
    <div key='2' className='w-full lg:w-[500px] xl:w-[640px] h-full xl:h-[720px] flex flex-col justify-center items-center'>
        <Image
        src={woman}
        width={640}
        height={440}
        alt='Image Two'
        className="rounded-tl-[16px] w-full lg:w-[500px] xl:w-[640px] rounded-tr-[16px] object-cover"
        />
        <div className="bg-[#1C1C1C] w-full lg:w-[500px] xl:w-[640px] rounded-bl-[16px] rounded-br-[16px] px-[20px] py-[32px]">
            <div className='flex flex-col justify-center items-start gap-[24px]'>
                <p className="text-[1.5rem] font-medium leading-[26.4px] text-[#AC4F47]">
                    02
                </p>
                <div className='flex flex-col gap-[12px]'>
                <h3 className="text-[2rem] leading-[35.2px] font-medium text-white">
                    We Scout Top Talents
                </h3>
                <p className="text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light">
                    Virtual Garden matches you with the best-fit virtual assistant based on your needs.
                </p>
                </div>
                <button className="border border-white rounded-full text-white w-[172px] h-[44px] py-[15px] px-[48px] gap-[8px] flex justify-center items-center text-[14px] leading-[14px] font-light">
                    Get Started
                </button>
            </div>
        </div>
    </div>,
    <div key='3' className='w-full lg:w-[500px] xl:w-[640px] h-full xl:h-[720px] flex flex-col justify-center items-center'>
        <Image
        src={womanTwo}
        width={640}
        height={440}
        alt='Image Three'
        className="rounded-tl-[16px] w-full lg:w-[500px] xl:w-[640px] rounded-tr-[16px] object-cover"
        />
        <div className="bg-[#1C1C1C] w-full lg:w-[500px] xl:w-[640px] rounded-bl-[16px] rounded-br-[16px] px-[20px] py-[32px]">
            <div className='flex flex-col justify-center items-start gap-[24px]'>
                <p className="text-[1.5rem] font-medium leading-[26.4px] text-[#AC4F47]">
                    03
                </p>
                <div className='flex flex-col gap-[12px]'>
                <h3 className="text-[2rem] leading-[35.2px] font-medium text-white">
                    Seamless Collaboration
                </h3>
                <p className="text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light">
                    Work with your virtual assistant via our platform for efficient task management.
                </p>
                </div>
                <button className="border border-white rounded-full text-white w-[172px] h-[44px] py-[15px] px-[48px] gap-[8px] flex justify-center items-center text-[14px] leading-[14px] font-light">
                    Get Started
                </button>
            </div>
        </div>
    </div>,
    <div key='4' className='w-full lg:w-[500px] xl:w-[640px] h-full xl:h-[720px] flex flex-col justify-center items-center'>
        <Image
        src={womanThree}
        width={640}
        height={440}
        alt='Image Four'
        className="rounded-tl-[16px] w-full lg:w-[500px] xl:w-[640px] rounded-tr-[16px] object-cover"
        />
        <div className="bg-[#1C1C1C] w-full lg:w-[500px] xl:w-[640px] rounded-bl-[16px] rounded-br-[16px] px-[20px] py-[32px]">
            <div className='flex flex-col justify-center items-start gap-[24px]'>
                <p className="text-[1.5rem] font-medium leading-[26.4px] text-[#AC4F47]">
                    04
                </p>
                <div className='flex flex-col gap-[12px]'>
                    <h3 className="text-[2rem] leading-[35.2px] font-medium text-white">
                        Complete Your Project
                    </h3>
                    <p className="text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light">
                        Receive results and easily finalize your contract when the project is completed.
                    </p>
                </div>
                <button className="border border-white rounded-full text-white w-[172px] h-[44px] py-[15px] px-[48px] gap-[8px] flex justify-center items-center text-[14px] leading-[14px] font-light">
                Get Started
                </button>
            </div>
        </div>
    </div>,
  ];

const CardCarousel = () => {

    const renderPrevButton = () => (
        <button className="cursor-pointer prev absolute z-40 bottom-[-10%] xl:top-[-20%] left-[5%] md:left-[55%] flex justify-center items-center border border-white w-[72px] h-[72px] rounded-full">
            <GoArrowLeft className='text-white text-[2rem]' />
        </button>
    );
    
    const renderNextButton = () => (
        <button className="cursor-pointer next absolute z-40 bottom-[-10%] xl:top-[-20%] left-[30%] md:left-[60%] flex justify-center items-center border border-white w-[72px] h-[72px] rounded-full">
            <GoArrowRight className='text-white text-[2rem]' />
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
    <div className='w-full xl:w-[2000px] gap-[32px] z-30 px-3'>
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
                768: { items: 1 },
                1024: { items: 2 },
                1280: { items: 3 },
            }}
        />
    </div>
  );
};

export default CardCarousel;