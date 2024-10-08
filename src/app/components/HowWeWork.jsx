import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your images here
import img from '../../../public/home/work/Virtual Garden Resonode Photo.svg';
import img2 from '../../../public/home/work/Businesswoman at computer (2).svg';
import img3 from '../../../public/home/work/Man in cafe (2).svg';
import img4 from '../../../public/home/work/Businesswoman with Tablet (2).svg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const stepsRef = useRef([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const steps = stepsRef.current;

    gsap.from(title, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });

    gsap.from(subtitle, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: "play none restart reverse",
      },
    });

    steps.forEach((step, index) => {
      const content = step.querySelector('.step-content');
      const image = step.querySelector('.step-image');

      gsap.from(content, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 1,
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          toggleActions: "play none restart reverse",
        },
      });

      gsap.from(image, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          toggleActions: "play none restart reverse",
        },
      });
    });
  }, { scope: sectionRef }); // Scope the animations to the section

  return (
    <section ref={sectionRef} className='bg-[#1E3E2A] w-full min-h-screen'>
      <div className='max-w-[1440px] 2xl:max-w-[2000px] mx-auto z-20 relative bg-white min-h-screen pt-[80px] pb-[48px] lg:py-[160px] px-[20px] md:px-[80px] rounded-tr-[36px] lg:rounded-tr-[72px] rounded-tl-[36px] lg:rounded-tl-[72px] gap-[140px] flex flex-col'>
        <div className='max-w-[1225px] mx-auto flex flex-col justify-center items-center gap-[16px]'>
          <h1 ref={titleRef} className='font-bold sofiaProBld text-center text-[1.5rem] md:text-[3.5rem] leading-[28.8px] md:leading-[67.2px] text-[#1E3E2A] w-full lg:w-[676px]'>
            How Virtual Garden Works
          </h1>
          <p ref={subtitleRef} className='text-[#9C9797] text-center text-[14px] md:text-base font-light sofiaProL w-full sm:w-[290px] md::w-[676px]'>
            We providing world class reusable components that help's you to 10x your speed.
          </p>
        </div>

        <div className='w-full min-h-screen flex flex-col gap-[120px] md:max-w-[1225px] md:mx-auto px-[24px] pt-[72px] pb-[88px] lg:p-0'>
          {[
            { title: 'Submit Your Request', description: 'Clients provide details about the specific task or project they need help with.', image: img },
            { title: 'We Scout Top Talent', description: 'Virtual Garden matches you with the best-fit virtual assistant based on your needs.', image: img2 },
            { title: 'Seamless Collaboration', description: 'Work with your virtual assistant via our platform for efficient task management.', image: img3 },
            { title: 'Complete Your Project', description: 'Receive results and easily finalize your contract when the project is completed.', image: img4 },
          ].map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`w-full md:max-w-[1200px] mx-auto gap-[80px] h-full flex flex-col${
                index % 2 === 0 ? '-reverse' : ''
              } lg:flex-row justify-between items-center`}
            >
              <div className={`flex flex-col gap-[24px] w-full lg:w-[505px] step-content`}>
                <h1 className='text-[#1E3E2A] leading-[57.6px] font-bold sofiaProBld text-[1.5rem] md:text-[2rem] lg:text-[3rem] flex items-center gap-[16px]'>
                  <span className='lg:hidden'>{index + 1}.</span>
                  {step.title}
                </h1>
                <p className='text-[#333333] md:text-[1.125rem] w-[328px] lg:w-auto text-base lg:leading-[28.8px] font-light sofiaProL'>
                  {step.description}
                </p>
              </div>
              <Image
                className='rounded-[40px] object-cover step-image'
                width={640}
                height={426.3}
                src={step.image}
                alt={`Step ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;