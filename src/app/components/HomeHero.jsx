'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import img from '/public/home/Businessman using phone.svg'
import TestimonialDisc from './TestimonialDisc'
import { gsap } from 'gsap/dist/gsap';

const HomeHero = () => {
    const dt = useRef(null)
    gsap.to(dt.current, {
        duration: 2,
        x: 100, // Moves the packet from sender to receiver
        repeat: -1, // Infinite loop
        yoyo: true // Animates back to sender after reaching receiver
    });
  return (
    <section className='max-w-[1280px] mx-auto px-5 py-[100px] flex flex-col justify-center items-center gap-[60px]'>

        <svg id="dataSharingSvg" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle id="sender" cx="50" cy="100" r="20" fill="#3498db" />
            <circle id="receiver" cx="150" cy="100" r="20" fill="#e74c3c" />
            <circle ref={dt} id="dataPacket" cx="50" cy="100" r="5" fill="#2ecc71" />
        </svg>

        <div className='w-full lg:w-[749px] flex flex-col justify-center items-center text-center gap-[32px]'>
            <h1 className='text-[#262B2C] font-semibold leading-[76.8px] text-[3.75rem]'>
                Connecting Global Clients with Top <span className='text-[#a65255]'>Virtual Assistants</span>
            </h1>
            <p className='text-[#262B2C] font-light text-[1rem] leading-[28.8px] w-full lg:w-[688px]'>
                Find highly skilled professionals for your web design, software maintenance, <br className='hidden lg:flex' />media management, and more... we are your global partner for remote, specialized talent
            </p>
            <div className='flex justify-center items-center gap-[24px]'>
                <button className='w-[236px] h-[56px] bg-[#121212] text-white rounded-full py-[17px] px-[32px] gap-[8px] text-[.875rem] font-light leading-[22.4px] flex justify-center items-center'>
                    Find Your Virtual Assistant
                </button>
                <button className='border-[2px] border-[#777777] text-[#333333] w-[236px] h-[56px] bg-transparent rounded-full py-[17px] px-[32px] gap-[8px] text-[.875rem] font-light leading-[22.4px] flex justify-center items-center'>
                    Join as a Virtual Assistant
                </button>
            </div>
        </div>

        {/* Image and Testimonial Slider */}
        <div className='w-[1280px] h-[560px] relative'>
            <Image
                src={img}
                className='rounded-[32px] h-auto w-full xl:w-[1280px]'
                alt='Businessman With Laptop'
                layout='responsive'
                width={1280}
                height={560}
            />

            <h1 className='text-white font-semibold leading-[70px] absolute top-[25%] text-[3.5rem] w-full lg:w-[302px] xl:w-[502px] right-[3%]'>World-Class Talent at Your Fingertips</h1>

            {/* TestimonialDisc Positioned Over the Image */}
            <div className='absolute bottom-[8%] left-0 w-full h-[54px] flex justify-center items-center'>
                <TestimonialDisc />
            </div>
        </div>
    </section>
  )
}

export default HomeHero
