"use client"
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import grid from '../../../public/home/Virtual Garden Frame 114.svg';

gsap.registerPlugin(ScrollTrigger);

const BecomeVA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        end: 'top 20%',
        toggleActions: 'play none restart reverse'
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
    .from(listRef.current.children, {
      x: -30,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.3')
    .from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, '-=0.2')
    .from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4');

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className='w-full mx-auto min-h-screen xl:h-[921px] py-[100px] flex justify-center items-center px-[28px] xl:px-0'>
      <div className='w-full xl:w-[1240px] bg-[#002C15] h-full xl:h-[640px] rounded-[40px] flex flex-col xl:flex-row justify-center items-center gap-[40px] p-[32px] xl:p-0'>
        <div ref={contentRef} className='w-full xl:w-[400px] flex flex-col justify-between items-start gap-[24px]'>
          <h1 ref={titleRef} className='w-full xl:w-[322px] leading-[40px] md:leading-[48px] font-semibold sofiaProBld text-white text-[2rem] md:text-[2.5rem]'>Become a Virtual Assistant</h1>
          <ul ref={listRef} className='w-full xl:w-[368px] flex flex-col justify-center items-start gap-[16px]'>
            <li className='text-white list-disc font-light sofiaProL text-[1rem] leading-[22.4px]'>Earn additional income on your own schedule</li>
            <li className='text-white list-disc font-light sofiaProL text-[1rem] leading-[22.4px]'>Gain exposure to international clients and expand your professional network</li>
            <li className='text-white list-disc font-light sofiaProL text-[1rem] leading-[22.4px]'>Enhance your portfolio with global projects</li>
          </ul>
          <div className='flex justify-center items-center xl:items-start w-full xl:w-auto'>
            <button ref={buttonRef} className='bg-[#1E3E2A] py-[17px] px-[32px] rounded-full h-[56px] w-[320px] flex justify-center items-center text-[#D0EA50] text-base font-light sofiaProL'>Register as a Virtual Assistant</button>
          </div>
        </div>
        <Image ref={imageRef} width={549} height={382} src={grid} className='object-cover' alt='Virtual Assistants' />
      </div>
    </section>
  );
};

export default BecomeVA;