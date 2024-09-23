'use client'

import Image from 'next/image'
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import one from '/public/home/testimonials/one.svg';
import two from '/public/home/testimonials/two.svg';
import three from '/public/home/testimonials/three.svg';
import four from '/public/home/testimonials/four.svg';
import five from '/public/home/testimonials/five.svg';
import six from '/public/home/testimonials/six.svg';
import seven from '/public/home/testimonials/seven.svg';
import eight from '/public/home/testimonials/eight.svg';
import nine from '/public/home/testimonials/nine.svg';

const test = [
    {
        id: 1,
        img: one,
        title: 'Savannah Nguyen',
        job: 'Customer support officer',
    },
    {
        id: 2,
        img: two,
        title: 'Jacob Jones',
        job: 'Data Entry and management',
    },
    {
        id: 3,
        img: three,
        title: 'Devon Lane',
        job: 'I. T Support officer',
    },
    {
        id: 4,
        img: four,
        title: 'Cameron Williamson',
        job: 'Web Developer',
    },
    {
        id: 5,
        img: five,
        title: 'Savannah Nguyen',
        job: 'Customer support officer',
    },
]

const testTwo = [
    {
        id: 1,
        img: six,
        title: 'Ralph Edwards',
        job: 'Media Management'
    },
    {
        id: 2,
        img: seven,
        title: 'Jane Cooper',
        job: 'Web Developer'
    },
    {
        id: 3,
        img: eight,
        title: 'Darrell Steward',
        job: 'Media Management'
    },
    {
        id: 4,
        img: nine,
        title: 'Marvin McKinney',
        job: 'Media Management'
    },
]

const TestimonialDisc = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-[20px]'>
      <div className="w-full h-full">
        <Splide
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            gap: "30px",
            pauseOnHover: false,
            pauseOnFocus: false,
            perPage: 5,
            arrows: false,
            pagination: false,
            autoScroll: { pauseOnHover: false, speed: 1 },
          }}
          className="flex items-center justify-center w-full"
          aria-label="Testimonial Slide One"
        >
          {
            test.map((testimonial, index) => (
              <SplideSlide className="w-[264.96px] h-[54px] bg-white gap-[18px] py-[6px] px-[12px] rounded-full flex justify-between items-center" key={testimonial.id}>
                <Image width={42} height={42} src={testimonial.img} alt='Talent' />
                <div className='flex flex-col justify-center items-start w-full lg:w-[180.96px]'>
                  <h2 className='text-[#4F4F4F] text-[0.844rem] font-normal leading-[21px]'>{testimonial.title}</h2>
                  <p className='text-[#737373] text-[0.656rem] font-normal leading-[15px]'>{testimonial.job}</p>
                </div>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>

      <div className="w-full h-full">
        <Splide
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            gap: "30px",
            pauseOnHover: false,
            pauseOnFocus: false,
            perPage: 4,
            arrows: false,
            pagination: false,
            autoScroll: {
              pauseOnHover: false,
              speed: -1, // Reverse scroll by setting speed to negative
            },
          }}
          className="flex items-center justify-center w-full"
          aria-label="Testimonial Slide Two"
        >
          {
            testTwo.map((testimonial, index) => (
              <SplideSlide className="w-[264.96px] h-[54px] bg-white gap-[18px] py-[6px] px-[12px] rounded-full flex justify-between items-center" key={testimonial.id}>
                <Image width={42} height={42} src={testimonial.img} alt='Talent' />
                <div className='flex flex-col justify-center items-start w-full lg:w-[180.96px]'>
                  <h2 className='text-[#4F4F4F] text-[0.844rem] font-normal leading-[21px]'>{testimonial.title}</h2>
                  <p className='text-[#737373] text-[0.656rem] font-normal leading-[15px]'>{testimonial.job}</p>
                </div>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </div>
  )
}

export default TestimonialDisc;
