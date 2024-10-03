'use client'

import React, { useEffect, useRef } from 'react'
import bg from '../../../public/home/Resonode logo (1).svg';
import Image from 'next/image';
import woman from '../../../public/home/Resonode Frame.svg';
import man from '../../../public/home/Resonode Frame (2).svg'
import womanTwo from '../../../public/home/Resonode Frame (1).svg';
import { PiArrowUpRightLight } from "react-icons/pi";
import { gsap } from 'gsap';
import group from '../../../public/home/Resonode Frame (3).svg';

const UniquesVAService = () => {
    // const arrowRefs = useRef([]);

    // useEffect(() => {
    //     gsap.utils.toArray('.arrow-icon').forEach((arrow, index) => {
    //         // Initial movement animation
    //         gsap.fromTo(
    //             arrow,
    //             { x: 0, y: 0 },
    //             {
    //                 x: 100,
    //                 y: -100,
    //                 duration: 1,
    //                 repeat: -1,
    //                 yoyo: true,
    //                 ease: "power1.inOut",
    //             }
    //         );

    //         // Additional animation to return to original position from bottom left
    //         gsap.fromTo(
    //             arrow,
    //             { x: -100, y: 100 }, // Starting from bottom left
    //             {
    //                 x: 0, // Move back to original x position
    //                 y: 0, // Move back to original y position
    //                 duration: 1,
    //                 ease: "power1.inOut",
    //                 repeat: -1,
    //                 yoyo: true,
    //                 delay: 0.5, // Optional delay before starting this animation
    //             }
    //         );
    //     });
    // }, []);

    return (
        <section className='w-full min-h-screen relative z-10 py-[100px] px-3 xl:px-0'>
            <Image className='z-[5px] absolute top-0 left-0 w-full min-h-screen' src={bg} alt='Background Image'></Image>
            <div className='max-w-[1280px] mx-auto px-3 xl:px-0 relative z-10 flex flex-col items-center gap-[6em]'>
                <div className='w-full lg:w-[837px] flex flex-col justify-center items-center gap-[16px] text-center'>
                    <h1 className='font-semibold text-white leading-[61.6px] text-[3.5rem]'>Unique Virtual Assistant Services</h1>
                    <p className='text-[#F1F1F1] text-base w-full lg:w-[484px]'>
                        Unlock the power of efficient task management with Renode Flow. Here is a look at how we handle contracts and payments.
                    </p>
                </div>

                <div className='w-full xl:w-[1280px] 2xl:w-[1320px] bg-[#DCD7CFA3]/[64%] rounded-[24px] xl:h-[560px] flex justify-start xl:justify-center items-center py-[24px] px-[32px]'>
                    <div className='gap-[12px] w-full lg:w-[1266px] xl:h-[384px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-start xl:justify-items-center'>
                        {[{
                            name: "Roberta Fox",
                            role: "Customer Support",
                            img: woman,
                            timeZone: "Central African Time"
                        },
                        {
                            name: "Devon Lane",
                            role: "Web Developer",
                            img: man,
                            timeZone: "Central African Time"
                        },
                        {
                            name: "Dianne Russell",
                            role: "Media Management",
                            img: womanTwo,
                            timeZone: "Central African Time"
                        }].map((item, index) => (
                            <div key={index} className='bg-[#FFFFFF] gap-[25.6px] flex flex-col justify-center items-start w-full xl:w-[300px] h-full md:h-[384px] rounded-[12px] p-[24px]'>
                                <div className='gap-[4px] flex flex-col justify-center items-start'>
                                    <p className='text-[#767676] leading-[22.4px] text-[.875rem] font-light'>{item.timeZone}</p>
                                    <h1 className='text-[#121212] font-normal leading-[26.4px] text-[1.5rem]'>{item.name}</h1>
                                </div>
                                <Image width={160} height={160} src={item.img} alt={item.name}></Image>
                                <div className='w-full lg:w-[250px] flex justify-between items-center'>
                                    <p className='text-[#121212] leading-[27.5px] font-light text-[1.375rem]'>{item.role}</p>
                                    <div className='w-[40.76px] h-[40.76px] rounded-full flex justify-center items-center border-[0.68px] border-[#AFADA8] gap-[5px] p-[9px]'>
                                        <PiArrowUpRightLight ref={el => (arrowRefs.current[index] = el)} className='text-[#333333] arrow-icon' />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='bg-[#5B5858] gap-[25.6px] w-full xl:w-[300px] h-full md:h-[384px] rounded-[12px] px-[24px] py-[32px] flex flex-col justify-between items-start'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='gap-[4.5px] flex justify-center items-center'>
                                    <div class="relative flex justify-center items-center h-3 w-3">
                                        <div className='w-[24px] h-[24px] bg-white/[60%] rounded-full animate-ping inline-flex absolute'>
                                        </div>
                                        <div className='w-[12px] h-[12px] absolute bg-white inline-flex rounded-full'></div>
                                    </div>
                                    <p className='uppercase text-white leading-[19.2px] text-[12px] font-light'>Live</p>
                                </div>
                                <div className='w-[135px] h-[26px] bg-[#FFFFFF70] text-white flex justify-center items-center gap-[7.5px] rounded-full text-[10.5px] font-light leading-[10.5px]'>
                                    240 Virtual Assistants
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-start gap-[12px]'>
                                <Image width={115} height={36} className='object-cover animate-bounce' src={group} alt='Virtual Assistants'></Image>
                                <p className='text-white font-light text-[9.75px] leading-[16px]'>Central African Time</p>
                                    <h1 className='text-white font-normal text-[1.375rem] leading-[30px] w-full lg:w-[260px]'>Over 250 Virtual Assistants ready to assist.</h1>
                                <button className='w-[221px] h-[42px] bg-white rounded-full py-[14px] px-[40px] gap-[7.5px] flex justify-center items-center text-[14px] font-light leading-[14px] text-[#333333]'>Find a Virtual Assitant</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UniquesVAService;
