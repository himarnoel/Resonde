'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import design from '../../../public/home/skills/design.svg';
import web from '../../../public/home/skills/web.svg';
import maintenance from '../../../public/home/skills/maintenance.svg';
import media from '../../../public/home/skills/media.svg';
import support from '../../../public/home/skills/support.svg';
import data from '../../../public/home/skills/data.svg';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';


const items = [
    <div key='1' className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[600px] h-full lg:h-[600px] xl:pb-[20px] xl:h-[700px] 2xl:h-[750px] flex flex-col justify-between items-start relative'>
        <Image
        src={design}
        width={400}
        height={600}
        alt='Image One'
        className="rounded-[24px] z-[5px] w-full absolute lg:w-[500px] xl:w-[640px] object-cover"
        />
        <div className="px-[18px] py-[32px] flex flex-col justify-between w-full h-full items-start">
            <p className='z-10 text-white font-normal leading-[42px] text-[1.75rem]'>Web Design</p>
            <div className='z-10 w-[360px] 2xl:w-[550px] rounded-[8px] bg-gradient-to-b from-[white]/[5%] to-[#480455]/[28%] px-[20px] py-[12px] backdrop-blur-md h-[120px]'>
                <p className='text-white text-[1.5rem] leading-[36px] font-normal'>Web Design</p>
            </div>
        </div>
    </div>,
    <div key='2' className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[600px] h-full lg:h-[600px] xl:pb-[20px] xl:h-[700px] 2xl:h-[750px] flex flex-col justify-between items-start relative'>
        <Image
        src={web}
        width={400}
        height={600}
        alt='Image One'
        className="rounded-[24px] z-[5px] w-full absolute lg:w-[500px] xl:w-[640px] object-cover"
        />
        <div className="px-[18px] py-[32px] flex flex-col justify-between w-full h-full items-start">
            <p className='z-10 text-white font-normal leading-[42px] text-[1.75rem]'>Web Development</p>
            <div className='z-10 w-[360px] 2xl:w-[550px] rounded-[8px] bg-gradient-to-b from-[white]/[5%] to-[#5C8CB4]/[28%] px-[20px] py-[12px] backdrop-blur-md h-[120px]'>
                <p className='text-white text-[1.5rem] leading-[36px] font-normal'>Web Development</p>
            </div>
        </div>
    </div>,
    <div key='3' className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[600px] h-full lg:h-[600px] xl:pb-[20px] xl:h-[700px] 2xl:h-[750px] flex flex-col justify-between items-start relative'>
        <Image
        src={maintenance}
        width={400}
        height={600}
        alt='Image One'
        className="rounded-[24px] z-[5px] w-full absolute lg:w-[500px] xl:w-[640px] object-cover"
        />
        <div className="px-[18px] py-[32px] flex flex-col justify-between w-full h-full items-start">
            <p className='z-10 text-white font-normal leading-[42px] text-[1.75rem]'>Software Maintainance</p>
            <div className='z-10 w-[360px] 2xl:w-[550px] rounded-[8px] bg-gradient-to-b from-[white]/[5%] to-[#CE9357]/[28%] px-[20px] py-[12px] backdrop-blur-md h-[120px]'>
                <p className='text-white text-[1.5rem] leading-[36px] font-normal'>Software Maintainance</p>
            </div>
        </div>
    </div>,
    <div key='4' className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[600px] h-full lg:h-[600px] xl:pb-[20px] xl:h-[700px] 2xl:h-[750px] flex flex-col justify-between items-start relative'>
        <Image
        src={media}
        width={400}
        height={600}
        alt='Image One'
        className="rounded-[24px] z-[5px] w-full absolute lg:w-[500px] xl:w-[640px] object-cover"
        />
        <div className="px-[18px] py-[32px] flex flex-col justify-between w-full h-full items-start">
            <p className='z-10 text-white font-normal leading-[42px] text-[1.75rem]'>Media Management</p>
            <div className='z-10 w-[360px] 2xl:w-[550px] rounded-[8px] bg-gradient-to-b from-[white]/[5%] to-[#000000]/[28%] px-[20px] py-[12px] backdrop-blur-md h-[120px]'>
                <p className='text-white text-[1.5rem] leading-[36px] font-normal'>Media Management</p>
            </div>
        </div>
    </div>,
    <div key='5' className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[600px] h-full lg:h-[600px] xl:pb-[20px] xl:h-[700px] 2xl:h-[750px] flex flex-col justify-between items-start relative'>
        <Image
        src={support}
        width={400}
        height={600}
        alt='Image One'
        className="rounded-[24px] z-[5px] w-full absolute lg:w-[500px] xl:w-[640px] object-cover"
        />
        <div className="px-[18px] py-[32px] flex flex-col justify-between w-full h-full items-start">
            <p className='z-10 text-white font-normal leading-[42px] text-[1.75rem]'>Customer Support</p>
            <div className='z-10 w-[360px] 2xl:w-[550px] rounded-[8px] bg-gradient-to-b from-[white]/[5%] to-[#7F2315]/[28%] px-[20px] py-[12px] backdrop-blur-md h-[120px]'>
                <p className='text-white text-[1.5rem] leading-[36px] font-normal'>Customer Support</p>
            </div>
        </div>
    </div>,
    <div key='5' className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[600px] h-full lg:h-[600px] xl:pb-[20px] xl:h-[700px] 2xl:h-[750px] flex flex-col justify-between items-start relative'>
        <Image
        src={data}
        width={400}
        height={600}
        alt='Image One'
        className="rounded-[24px] z-[5px] w-full absolute lg:w-[500px] xl:w-[640px] object-cover"
        />
        <div className="px-[18px] py-[32px] flex flex-col justify-between w-full h-full items-start">
            <p className='z-10 text-white font-normal leading-[42px] text-[1.75rem]'>Data Entry And Management</p>
            <div className='z-10 w-[360px] 2xl:w-[550px] rounded-[8px] bg-gradient-to-b from-[white]/[5%] to-[#767676]/[28%] px-[20px] py-[12px] backdrop-blur-md h-[120px]'>
                <p className='text-white text-[1.5rem] leading-[36px] font-normal'>Data Entry And Management</p>
            </div>
        </div>
    </div>,
  ];


const UniqueSkillsCarousel = () => {

    const renderPrevButton = () => (
        <button className="cursor-pointer prev absolute z-40 bottom-[-10%] xl:top-[-20%] left-[5%] md:left-[55%] xl:left-[78%] 2xl:left-[55%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
            <GoArrowLeft className='text-[#121212] text-[2rem]' />
        </button>
    );
    
    const renderNextButton = () => (
        <button className="cursor-pointer next absolute z-40 bottom-[-10%] xl:top-[-20%] left-[30%] md:left-[60%] xl:left-[85%] 2xl:left-[60%] flex justify-center items-center border border-[#121212] w-[72px] h-[72px] rounded-full">
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
    <div className='w-screen z-30 px-3 gap-[27px]'>
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
  )
}

export default UniqueSkillsCarousel