import Image from 'next/image'
import React from 'react'
import map from '../../../public/about-us/why/Virtual Garden Resonode.svg';
import resMap from '../../../public/about-us/why/Virtual Garden Resonode 2.svg';
import coin from '../../../public/about-us/why/Virtual Garden Resonode (1).svg';
import resCoin from '../../../public/about-us/why/Virtual Garden Resonode (1) 2.svg';
import platform from '../../../public/about-us/why/Virtual Garden Resonode (2).svg';
import contracts from '../../../public/about-us/why/Virtual Garden Resonode (3).svg';

const WhyChooseVG = () => {
  return (
    <section className='bg-white min-h-screen w-full'>
        <div className='bg-[#002C15] relative z-10 min-h-screen w-full rounded-tl-[24px] lg:rounded-tl-[72px] rounded-tr-[24px] lg:rounded-tr-[72px] flex flex-col justify-center items-center py-[100px] px-[24px] xl:px-[80px] gap-[50px] md:gap-[120px]'>

            <h1 className='leading-[35.2px] md:leading-[61.6px] text-white font-semibold sofiaProBld text-[32px] md:text-[3.5rem] text-center'>Why Choose Virtual Garden?"</h1>
            <div className='lg:max-w-[1380px] xl:max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-[40px] lg:gap-[80px]'>

                <div className='bg-[#1E3E2A] border border-[#275037] w-[328px] sm:w-full 2xl:w-[1280px] h-[440px] md:h-[600px] rounded-[16px] md:rounded-[24px] relative overflow-hidden py-[50px] md:py-[100px] px-[16px] lg:px-[32px] flex flex-col xl:flex-row gap-[16px]'>
                    <div className='w-full lg:w-[385px] flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='leading-[26.4px] md:leading-[52.8px] text-white font-medium sofiaProM text-[24px] md:text-[3rem]'>Global Expertise, Local Talent</h1>
                        <p className='text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light sofiaProL'>Access highly skilled Nigerian professionals with diverse experience.</p>
                        <button className='w-[173px] rounded-full h-[48px] bg-white  py-[13px] text-[#121212] font-normal sofiaProL leading-[22.4px'>Get Started</button>
                    </div>
                    <Image width={898.91} height={546.21} className='w-full xl:w-[898.91] hidden xl:flex absolute top-[60px] bottom-[380px] xl:left-[380px] object-cover' src={map} alt='Map'></Image>
                    <Image width={370.14} height={224.91} className='w-full flex xl:hidden absolute left-0 top-[240.67px] bottom-[-40.71px] sm:bottom-[-20.71px] object-cover' src={resMap} alt='Map'></Image>
                </div>

                <div className='w-full flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-[40px]'>
                    <div className='w-[328px] sm:w-full 2xl:w-[620px] h-[440px] md:h-[600px] rounded-[24px] border border-[#275037] bg-[#1E3E2A] relative overflow-hidden px-[30px] py-[50px]'>
                        <div className='w-[483px] gap-[16px] flex flex-col justify-center items-start'>
                            <h1 className='md:leading-[52.8px] text-white font-medium sofiaProM leading-[26.4px] text-[24px] md:text-[3rem]'>Cost-Effective Solutions</h1>
                            <p className='text-[#FAFAFA] leading-[25.6px] font-light sofiaProL text-[1rem]'>Hire talent at a fraction of the cost of traditional in-country staff.</p>
                        </div>
                        <Image width={840} height={560.08} className='hidden xl:flex absolute bottom-[-74px] top-[280.33px] left-0 right-0 object-cover' src={coin} alt='Coin'></Image>
                        <Image width={370.14} height={224.91} className='w-full flex xl:hidden absolute left-0 top-[240.67px] bottom-[-21px] md:bottom-[-12px] object-cover' src={resCoin} alt='Coin'></Image>
                    </div>
                    <div className='w-[328px] sm:w-full 2xl:w-[620px] h-[440px] md:h-[600px] rounded-[24px] border border-[#275037] bg-[#1E3E2A] relative overflow-hidden px-[30px] py-[50px]'>
                        <div className='w-[483px] gap-[16px] flex flex-col justify-center items-start'>
                            <h1 className='leading-[26.4px] text-[24px] md:leading-[52.8px] text-white font-medium sofiaProM md:text-[3rem]'>Secure & Easy-to-Use Platform:</h1>
                            <p className='text-[#FAFAFA] leading-[25.6px] font-light sofiaProL text-[1rem]'>Seamless communication, task management, and secure payments all in one place.</p>
                        </div>
                        <Image width={381.89} height={349.8} className='absolute top-[300.45px] md:top-[312.1px] left-[15px] md:left-[236px] object-cover' src={platform} alt='platform'></Image>
                    </div>
                </div>
                
                <div className='bg-[#1E3E2A] border border-[#275037] w-[328px] sm:w-full 2xl:w-[1280px] h-[500px] md:h-[600px] rounded-[24px] relative overflow-hidden py-[50px] lg:py-[100px] px-[32px]'>
                    <div className='lg:w-[482px] flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='leading-[26.4px] text-[24px] md:leading-[52.8px] text-white font-medium sofiaProM md:text-[3rem]'>Flexible Contracts</h1>
                        <p className='text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light sofiaProL'>Work with VAs on short to long-term projects without the burden of full-time hiring to either supplement already existing team members or complete secondary projects when your employees are focused on other tasks</p>
                        <button className='w-[173px] rounded-full h-[48px] bg-white  py-[13px] text-[#121212] font-normal sofiaProL leading-[22.4px'>Get Started</button>
                    </div>
                    <Image width={840} height={318} className='absolute top-[353px] md:top-[322px] left-[79.96px] md:left-[567px] object-cover' src={contracts} alt='Map'></Image>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseVG