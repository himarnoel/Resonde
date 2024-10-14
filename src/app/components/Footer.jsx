"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import obj from '../../../public/home/Virtual Garden Background Texture.svg';
import resObj from '../../../public/home/Background texture.svg';
import logo from '../../../public/home/Virtual Garden Shapes.svg';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const logoRef = useRef(null);
  const linksRef = useRef(null);
  const titleRef = useRef(null);
  
  useGSAP(() => {
    const footer = footerRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;
    const title = titleRef.current;

    gsap.fromTo(footer, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
 
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(logo,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
     
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(links.children,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
         
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(title,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
        
          toggleActions: 'play none none reverse'
        }
      }
    );

  });

  return (
    <footer ref={footerRef} className='relative min-h-screen xl:h-[760px] pt-[195px] w-full bg-[#1E3E2A] overflow-hidden'>
        <div className='max-w-[1253px] mx-auto px-3 xl:px-0 flex flex-col justify-between items-center gap-[80px] md:gap-[160px] h-full xl:h-[468px]'>
            <div className='w-full flex flex-col xl:flex-row justify-between items-center gap-[80px] xl:gap-[160px]'>
                <div ref={logoRef} className='flex flex-col justify-center items-start gap-[30px] relative z-10'>
                    <Link href={`/`} className='flex justify-center items-center gap-[8px]'>
                        <Image width={32} height={32} className='object-cover' src={logo} alt='Virtual Garden Logo'></Image>
                        <h2 className='text-white leading-[44px] text-[2.5rem] font-medium sofiaProR'>Virtual Garden</h2>
                    </Link>
                    <p className='text-[#C0C0C0] text-[1.125rem] w-full md:w-[302px] leading-[24px] font-normal sofiaProM'>Cras at luctus nisl. Donec euismtirus tortor eu justo gravida finibus lectus.</p>
                </div>
                <div ref={linksRef} className='flex flex-col md:flex-row justify-between items-start gap-[56px] xl:gap-0 xl:items-center w-full xl:w-[600px] relative z-10'>
                    <ul className='flex flex-col justify-center items-start w-[66px] gap-[30px]'>
                        <Link href={`/about-us`} className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>About Us</Link>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Features</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Pricing</li>
                    </ul>
                    <ul className='flex flex-col justify-center items-start w-[66px] gap-[30px]'>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Twitter</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Facebok</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>LinkedIn</li>
                    </ul>
                    <ul className='flex flex-col justify-center items-start w-[120px] gap-[30px]'>
                        <Link href={`/privacy-policy`} className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Privacy Policy</Link>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Terms of Service</li>
                        <li className='text-[#C0C0C0] text-base leading-[16px] font-normal sofiaProL'>Cookie Policy</li>
                    </ul>
                </div>
            </div>
            <h1 ref={titleRef} className='text-center xl:text-left text-[3rem] md:text-[90px] xl:text-[182px] leading-[100px] xl:leading-[200px] text-white w-full font-semibold sofiaProBld'>Virtual Garden</h1>
        </div>
        <Image src={obj} alt='Object' className='hidden xl:flex min-h-screen xl:h-[760px] absolute z-[1px] top-0'></Image>
        <Image src={resObj} alt='Object' className='flex xl:hidden min-h-screen absolute z-[1px] top-0 left-0 right-0 w-full'></Image>
    </footer>
  )
}

export default Footer