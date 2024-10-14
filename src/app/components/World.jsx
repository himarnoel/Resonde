import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../../../public/home/map.png';
import Image from 'next/image';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const World = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Animate title
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });

    // Animate image
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className='bg-[#1E3E2A] lg:min-h-screen w-full px-3 xl:px-0 flex flex-col justify-between gap-[3.2rem] lg:gap-[4em] items-center py-[17px] lg:py-[100px]'>
      <h1 ref={titleRef} className='text-[17.92px] md:text-[3.5rem] w-full xl:max-w-[738px]  leading-[21.5px] max-w-[300px] lg:max-w-full md:leading-[40px] xl:leading-[67.2px] text-center font-bold sofiaProBld text-white tracking-[-2%]'>
        World class Virtual Assistance for you to 10x your workflow
      </h1>
      <div ref={imageRef}>
        <Image width={1132.16} height={730.92} src={img} alt='Map Of Earth' />
      </div>
    </section>
  )
}

export default World