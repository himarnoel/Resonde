import Image from 'next/image'
import React from 'react'
import map from '../../../public/about-us/why/Virtual Garden Resonode.svg';
import coin from '../../../public/about-us/why/Virtual Garden Resonode (1).svg';
import platform from '../../../public/about-us/why/Virtual Garden Resonode (2).svg';
import contracts from '../../../public/about-us/why/Virtual Garden Resonode (3).svg';

const WhyChooseVG = () => {
  return (
    <section className='bg-white min-h-screen w-full'>
        <div className='bg-[#002C15] relative z-10 min-h-screen w-full rounded-tl-[24px] lg:rounded-tl-[72px] rounded-tr-[24px] lg:rounded-tr-[72px] flex flex-col justify-center items-center py-[100px] px-[24px] lg:px-[80px] gap-[120px]'>

            <h1 className='leading-[61.6px] text-white font-semibold sofiaProBld text-[3.5rem] text-center'>Why Choose Virtual Garden?"</h1>
            <div className='max-w-[1280px] mx-auto flex flex-col gap-[80px]'>

                <div className='bg-[#1E3E2A] border border-[#275037] xl:w-[1280px] h-[440px] xl:h-[600px] rounded-[24px] relative overflow-hidden py-[100px] px-[32px] flex flex-col xl:flex-row gap-[16px]'>
                    <div className='lg:w-[385px] flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='leading-[52.8px] text-white font-medium sofiaProM text-[3rem]'>Global Expertise, Local Talent</h1>
                        <p className='text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light sofiaProL'>Access highly skilled Nigerian professionals with diverse experience.</p>
                        <button className='w-[173px] rounded-full h-[48px] bg-white  py-[13px] text-[#121212] font-normal sofiaProL leading-[22.4px'>Get Started</button>
                    </div>
                    <Image width={898.91} height={546.21} className='absolute top-[60px] left-[380px] object-cover' src={map} alt='Map'></Image>
                </div>

                <div className='flex justify-between items-center gap-[40px]'>
                    <div className='xl:w-[620px] xl:h-[600px] rounded-[24px] border border-[#275037] bg-[#1E3E2A] relative overflow-hidden px-[30px] py-[50px]'>
                        <div className='w-[483px] gap-[16px] flex flex-col justify-center items-start'>
                            <h1 className='leading-[52.8px] text-white font-medium sofiaProM text-[3rem]'>Cost-Effective Solutions</h1>
                            <p className='text-[#FAFAFA] leading-[25.6px] font-light sofiaProL text-[1rem]'>Hire talent at a fraction of the cost of traditional in-country staff.</p>
                        </div>
                        <Image width={840} height={560.08} className='absolute bottom-0 top-[231.33px] left-0 right-0 object-cover' src={coin} alt='Coin'></Image>
                    </div>
                    <div className='xl:w-[620px] xl:h-[600px] rounded-[24px] border border-[#275037] bg-[#1E3E2A] relative overflow-hidden px-[30px] py-[50px]'>
                        <div className='w-[483px] gap-[16px] flex flex-col justify-center items-start'>
                            <h1 className='leading-[52.8px] text-white font-medium sofiaProM text-[3rem]'>Secure & Easy-to-Use Platform:</h1>
                            <p className='text-[#FAFAFA] leading-[25.6px] font-light sofiaProL text-[1rem]'>Seamless communication, task management, and secure payments all in one place.</p>
                        </div>
                        <Image width={381.89} height={349.8} className='absolute top-[312.1px] left-[236px] object-cover' src={platform} alt='platform'></Image>
                    </div>
                </div>
                
                <div className='bg-[#1E3E2A] border border-[#275037] w-full xl:w-[1280px] xl:h-[600px] rounded-[24px] relative overflow-hidden py-[100px] px-[32px]'>
                    <div className='lg:w-[482px] flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='leading-[52.8px] text-white font-medium sofiaProM text-[3rem]'>Flexible Contracts</h1>
                        <p className='text-[#FAFAFA] leading-[25.6px] text-[1rem] font-light sofiaProL'>Work with VAs on short to long-term projects without the burden of full-time hiring to either supplement already existing team members or complete secondary projects when your employees are focused on other tasks</p>
                        <button className='w-[173px] rounded-full h-[48px] bg-white  py-[13px] text-[#121212] font-normal sofiaProL leading-[22.4px'>Get Started</button>
                    </div>
                    <Image width={840} height={318} className='absolute top-[322px] left-[567px] object-cover' src={contracts} alt='Map'></Image>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseVG