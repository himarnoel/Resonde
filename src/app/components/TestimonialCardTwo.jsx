'use client'

import Image from 'next/image';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import obj from '../../../public/how-it-works/Virtual Garden Group.svg';

const TestimonialCardTwo = () => {
    
    const items = [
        <div key='1' className='w-full h-full xl:h-[507px] bg-white flex flex-col gap-[20px] justify-between items-start py-[64px] px-[72px] rounded-[48px]'>
            <div className='flex justify-center items-center gap-[8px]'>
                <Image width={17} height={17} className='object-cover' src={obj} alt='Object'></Image>
                <p className='text-[#58575A] leading-[21px] text-[14px] font-normal sofiaProL'>What our customers are saying</p>
            </div>
            <h1 className='text-center oRegular text-[#1E3E2A] font-normal sofiaProL text-[3rem] leading-[52.8px] w-full xl:w-[889px] mx-auto'>
                &quot;Virtual Garden has revolutionized the way we work. It&apos;s saved us so much time and has increased our team&apos;s productivity by 30%!&quot;
            </h1>
            <div className='w-full mx-auto flex flex-col justify-center items-center text-center gap-[4px]'>
                <h2 className='text-[1.125rem] font-normal sofiaProR text-[#58575A]'>Rachel</h2>
                <p className='text-[#C0C0C0] font-normal text-base sofiaProL'>Marketing Manager at XYZ Corporation</p>
            </div>
        </div>,
    ];

    const renderPrevButton = () => (
        <button className="cursor-pointer prev absolute z-40 top-[9%] right-[9%] flex justify-center items-center border border-[#121212] w-[36px] h-[36px] rounded-full">
            <GoArrowLeft className='text-[#121212] text-[1rem]' />
        </button>
    );

    const renderNextButton = () => (
        <button className="cursor-pointer next absolute z-40 top-[9%] right-[5%] flex justify-center items-center border border-[#121212] w-[36px] h-[36px] rounded-full">
            <GoArrowRight className='text-[#121212] text-[1rem]' />
        </button>
    );

    

    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

  return (
    <div className='relative w-full h-full xl:h-[507px]'>
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableDotsControls
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
        />
    </div>
  )
}

export default TestimonialCardTwo