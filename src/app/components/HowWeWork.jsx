import React from 'react';
import img from '../../../public/home/work/Virtual Garden Resonode Photo.svg'
import img2 from '../../../public/home/work/Businesswoman at computer (2).svg'
import img3 from '../../../public/home/work/Man in cafe (2).svg'
import img4 from '../../../public/home/work/Businesswoman with Tablet (2).svg'
import Image from 'next/image';

const HowWeWork = () => {
  return (
    <section className='bg-[#1E3E2A] w-full min-h-screen'>
      <div className='max-w-[1440px] 2xl:max-w-[2000px] mx-auto z-20 relative bg-white min-h-screen pt-[80px] pb-[48px] lg:py-[160px] px-[20px] md:px-[80px] rounded-tr-[36px] lg:rounded-tr-[72px] rounded-tl-[36px] lg:rounded-tl-[72px] gap-[140px] flex flex-col'>
        <div className='max-w-[1225px] mx-auto flex flex-col justify-center items-center gap-[16px]'>
          <h1 className='font-bold sofiaProBld text-center text-[1.5rem] md:text-[3.5rem] leading-[28.8px] md:leading-[67.2px] text-[#1E3E2A] w-full lg:w-[676px]'>How Virtual Garden Works</h1>
          <p className='text-[#9C9797] text-center text-[14px] md:text-base font-light sofiaProL w-full sm:w-[290px] md::w-[676px]'>We providing world class reusable components that help&apos;s you to 10x your speed.</p>
        </div>

        <div className='w-full min-h-screen flex flex-col gap-[120px] md:max-w-[1225px] md:mx-auto px-[24px] pt-[72px] pb-[88px] lg:p-0'>

          <div className='w-full md:max-w-[1200px] mx-auto gap-[80px] h-full flex flex-col-reverse lg:flex-row justify-between items-center'>
            <div className='flex flex-col gap-[24px] w-full lg:w-[505px]'>
                <h1 className='text-[#1E3E2A] leading-[57.6px] font-bold sofiaProBld text-[1.5rem] md:text-[2rem] lg:text-[3rem] flex items-center gap-[16px]'><span className='lg:hidden'>1.</span>Submit Your Request</h1>
                <p className='text-[#333333] md:text-[1.125rem] w-[328px] lg:w-auto text-base lg:leading-[28.8px] font-light sofiaProL'>
                  Clients provide details about the specific task or project they need help with.
                </p>
            </div>
            <Image className='rounded-[40px] object-cover' width={640} height={426.3} src={img} alt='Image One'></Image>
          </div>

          <div className='w-full md:max-w-[1200px] mx-auto gap-[80px] h-full flex flex-col lg:flex-row justify-between items-center'>
            <Image className='rounded-[40px] object-cover' width={640} height={426.3} src={img2} alt='Image One'></Image>
            <div className='flex flex-col gap-[24px] w-full lg:w-[480px]'>
                <h1 className='text-[#1E3E2A] leading-[57.6px] font-bold sofiaProBld text-[1.5rem] md:text-[2rem] lg:text-[3rem] flex items-center gap-[16px]'><span className='lg:hidden'>2.</span>We Scout Top Talent</h1>
                <p className='text-[#333333] md:text-[1.125rem] w-[328px] lg:w-auto text-base lg:leading-[28.8px] font-light sofiaProL'>
                  Virtual Garden matches you with the best-fit virtual assistant based on your needs.
                </p>
            </div>
          </div>

          <div className='w-full md:max-w-[1200px] mx-auto gap-[80px] h-full flex flex-col-reverse lg:flex-row justify-between items-center'>
            <div className='flex flex-col gap-[24px] w-full lg:w-[505px]'>
              <h1 className='text-[#1E3E2A] leading-[57.6px] font-bold sofiaProBld text-[1.5rem] md:text-[2rem] lg:text-[3rem] flex items-center gap-[16px]'><span className='lg:hidden'>3.</span>Seamless Collaboration</h1>
              <p className='text-[#333333] md:text-[1.125rem] w-[328px] lg:w-auto text-base lg:leading-[28.8px] font-light sofiaProL'>
                Work with your virtual assistant via our platform for efficient task management.
              </p>
            </div>
            <Image className='rounded-[40px] object-cover' width={640} height={426.3} src={img3} alt='Image One'></Image>
          </div>

          <div className='w-full md:max-w-[1200px] mx-auto gap-[80px] h-full flex flex-col lg:flex-row justify-between items-center'>
            <Image className='rounded-[40px] object-cover' width={640} height={426.3} src={img4} alt='Image One'></Image>
            <div className='flex flex-col gap-[24px] w-full lg:w-[480px]'>
                <h1 className='text-[#1E3E2A] leading-[57.6px] font-bold sofiaProBld text-[1.5rem] md:text-[2rem] lg:text-[3rem] flex items-center gap-[16px]'><span className='lg:hidden'>4.</span>Complete Your Project</h1>
                <p className='text-[#333333] md:text-[1.125rem] w-[328px] lg:w-auto text-base lg:leading-[28.8px] font-light sofiaProL'>
                  Receive results and easily finalize your contract when the project is completed.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
