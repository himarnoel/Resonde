"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TestimonialCardTwo from './TestimonialCardTwo'
import obj from '../../../public/how-it-works/Background texture (1).svg'
import resObj from '../../../public/home/Background texture.svg'

gsap.registerPlugin(ScrollTrigger)

const HowItWorkHero = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const testimonialRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .from(testimonialRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.2')

   

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className='min-h-screen bg-[#1E3E2A] w-full relative py-[100px] px-[24px] xl:px-[32px] overflow-hidden'>
      <div className='max-w-[1248px] mx-auto flex flex-col justify-center items-center gap-[120px] min-h-screen'>
        <div className='w-full xl:w-[795px] flex flex-col justify-center items-center gap-[40px] text-center'>
          <h1 ref={titleRef} className='text-white leading-[56px] text-[3.5rem] font-semibold sofiaProBld'>How Virtual Garden Brings the Best Talent to You</h1>
          <p ref={subtitleRef} className='text-[#F1F1F1] text-[1.25rem] leading-[30px] font-light sofiaProL'>&quot;From your request to project completion, we make collaboration easy and seamless.&quot;</p>
        </div>
        <div ref={testimonialRef} className='w-full h-full'>
          <TestimonialCardTwo/>
        </div>
      </div>

      <Image src={obj} alt='Object' className='hidden xl:flex min-h-screen absolute z-[1] top-0 left-0 right-0 bottom-0 bg-image'></Image>
      <Image src={resObj} alt='Object' className='flex xl:hidden min-h-screen absolute z-[1] top-0 left-0 right-0 bottom-0 w-full bg-image'></Image>
    </section>
  )
}

export default HowItWorkHero