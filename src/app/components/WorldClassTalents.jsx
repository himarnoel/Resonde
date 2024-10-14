import Image from 'next/image'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import talents from '../../../public/home/talents.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WorldClassTalents = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Animate title
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });

    // Animate description
    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });

    // Animate image
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className='w-full min-h-screen pt-[80px]    lg:py-[100px] pb-[10px] 2xl:pb-0 max-w-[1200px] mx-auto px-3 xl:px-0 flex flex-col justify-center items-center gap-[56px]'>
      <div className='flex flex-col justify-center items-center w-full xl:w-[791px] gap-[8px]'>
        <h1 ref={titleRef} className='text-[#1E3E2A] font-bold sofiaProBld leading-[40px] xl:leading-[57.6px] text-[2rem] md:text-[3rem] text-center'>
          World class Talents at your Fingertips
        </h1>
        <p ref={descriptionRef} className='text-[#9C9797] font-light sofiaProL text-base text-center'>
          We providing world class talented Virtual Assistants that help you to 10x your productivity
        </p>
      </div>
      <div ref={imageRef}>
        <Image src={talents} alt='World Class Talents' />
      </div>
    </section>
  )
}

export default WorldClassTalents