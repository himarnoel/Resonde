"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardCarousel from './CardCarousel';
import UniqueSkillsCarousel from './UniqueSkillsCarousel';
import design from '../../../public/home/skills/design.svg';
import web from '../../../public/home/skills/web.svg';
import maintenance from '../../../public/home/skills/maintenance.svg';
import media from '../../../public/home/skills/media.svg';
import support from '../../../public/home/skills/support.svg';
import data from '../../../public/home/skills/data.svg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const UniquesSKills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const carouselRef = useRef(null);

  const uSkills = [
    { id: 1, title: "Web Design", category: "Web Design", src: design },
    { id: 2, title: "Web Development", category: "Web Development", src: web },
    { id: 3, title: "Software Maintenance", category: "Software Maintenance", src: maintenance },
    { id: 4, title: "Media Marketing", category: "Media Marketing", src: media },
    { id: 5, title: "Customer Support", category: "Customer Support", src: support },
    { id: 6, title: "Data Entry and Management", category: "Data Entry and Management", src: data },
  ];

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

    // Animate carousel
    gsap.from(carouselRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: carouselRef.current,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className='bg-[#E6EDDD] w-full py-[50px] min-h-screen overflow-hidden relative'>
      <div className='flex flex-col py-[100px] lg:py-0 gap-y-[80px] justify-center items-center xl:items-start max-w-[1200px] lg:max-w-[1280px] mx-auto'>
        <div className='px-[28px] xl:px-0 flex flex-col justify-center items-start xl:items-start gap-[16px] w-full text-left'>
          <h1 ref={titleRef} className='text-[#1E3E2A] w-full xl:w-[687px] font-semibold sofiaProR text-[2rem] md:text-[3.5rem] leading-[61.6px]'>
            Unique Skills sets
          </h1>
          <p ref={descriptionRef} className='text-[#333333] w-full md:w-[401px] xl:w-[687px] font-light sofiaProL leading-[36px] text-[1.25rem] xl:text-[1.5rem]'>
            Unlock the power of efficient task management with Virtual Garden.
          </p>
        </div>

          <UniqueSkillsCarousel />
       
      </div>
    </section>
  );
}

export default UniquesSKills;