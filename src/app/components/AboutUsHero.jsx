import React from 'react'
import AboutHeroCards from './AboutHeroCards'
import Image from 'next/image'
import bg from '../../../public/about-us/Virtual Garden Resonode.svg';
import obj from '../../../public/about-us/Virtual Garden Line.svg';
import line from '../../../public/about-us/Virtual Garden Line 110.svg';
import man from '../../../public/about-us/Smiley man with headphones.svg';
import man2 from '../../../public/about-us/Virtual Garden Resonode Photo.svg';

const AboutUsHero = () => {
  return (
    <section className='bg-[#F7F7F7] w-full min-h-screen overflow-hidden'>
        <div className='max-w-[1312.08px] mx-auto flex flex-col justify-center items-center py-[100px]'>
            <div className='lg:w-[872px] flex flex-col justify-center items-center text-center gap-[24px]'>
                <div className='flex flex-col justify-center items-center gap-[16px]'>
                    <h1 className='text-[#1E3E2A] font-semibold sofiaProBld leading-[35.2px] md:leading-[66px] text-[2rem] md:text-[3.75rem]'>
                        Your global partner for Remote, Specialized talents
                    </h1>
                    <p clasName='text-[#333333] font-light sofiaProL leading-[27px] text-[1.125rem]'>
                        Access highly skilled Nigerian professionals with diverse experience.
                    </p>
                </div>
                <button className='w-[240px] h-[56px] flex justify-center items-center rounded-[48px] py-[24px] bg-[#1E3E2A] font-normal text-[#D0EA50] text-[.875rem] leading-[22.4px] sofiaProL'>
                    Find Your Virtual Assistant
                </button>
            </div>
            <div className='flex justify-end items-center gap-[5px] md:gap-[8px] lg:gap-[16.8px] py-0 my-0 w-full overflow-auto'>
                
                <div className='w-[150px] md:w-[200px] lg:w-[287.28px] h-[250px] md:h-[350px] lg:h-[446.88px] rounded-[11.57px] md:rounded-[15px] lg:rounded-[19.15px] relative flex flex-col justify-end items-start'>
                    <Image src={bg} alt='Background Image' className='absolute top-0 left-0 w-full h-full rounded-[11.57px] md:rounded-[15px] lg:rounded-[19.15px]'></Image>
                    <Image src={obj} alt='Object' className='absolute right-0 z-[5px]'></Image>
                    <div className='w-[120px] md:w-[170px] lg:w-[217.06px] flex flex-col justify-center items-start absolute top-[100px] md:top-[150px] lg:top-[194.47px] left-[10px] md:left-[15px] lg:left-[22.34px] gap-[15px] md:gap-[20px] lg:gap-[25.54px]'>
                    <Image src={line} alt='Icon'></Image>
                    <p className='relative z-10 text-white leading-[20px] md:leading-[25px] lg:leading-[28.73px] text-[12px] md:text-[16px] lg:text-[18px] font-light sofiaProL'>
                        Our mission is to provide you with Virtual assistants that make your team more efficient and achieve great results
                    </p>
                    </div>
                </div>

                <div className='h-[250px] md:h-[350px] lg:h-[446.88px] flex relative w-[100px] md:w-[130px] lg:w-[175.56px]'>
                    <div className='w-full h-[200px] md:h-[250px] lg:h-[293.66px] bottom-0 flex flex-col justify-center items-center text-center bg-[#EEEEEE] rounded-[11.57px] md:rounded-[15px] lg:rounded-[19.15px] absolute'>
                    <div className='w-[40px] md:w-[70px] lg:w-[122.89px] h-[80px] md:h-[90px] lg:h-[106.45px] absolute top-[50px] md:top-[80px] lg:top-[90.97px] left-[10px] md:left-[20px] lg:left-[26.33px]'>
                        <h1 className='text-[#333333] font-semibold sofiaProR leading-[40px] md:leading-[50px] lg:leading-[55.86px] text-[1.8rem] md:text-[2.5rem] lg:text-[2.813rem]'>40+</h1>
                        <p className='w-[70px] md:w-[100px] lg:w-[122.89px] text-[#333333] leading-[15px] md:leading-[18px] lg:leading-[19.95px] text-[12px] md:text-[14px] lg:text-[15.96px] font-light sofiaProL'>Unique Skills available for hire</p>
                    </div>
                    </div>
                </div>

                <div className='h-[250px] md:h-[350px] lg:h-[446.88px] w-[100px] md:w-[200px] lg:w-[319.2px] flex relative'>
                    <div className='rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] w-full h-[150px] md:h-[200px] lg:h-[236.21px] absolute bottom-0'>
                    <Image className='absolute h-full w-full rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] z-[3px] top-0 left-0' src={man} alt='Smiley Black Man'></Image>
                    <p className='absolute z-10 top-[100px] md:top-[130px] lg:top-[146.12px] left-[10px] md:left-[15px] lg:left-[20.6px] text-[#D0EA50] text-[.75rem] md:text-[1.25rem] lg:text-[1.75rem] leading-[14px] md:leading-[25px] lg:leading-[35px] font-semibold sofiaProR'>Unbelievable results....</p>
                    </div>
                </div>

                <div className='h-[250px] md:h-[350px] lg:h-[446.88px] w-[100px] md:w-[130px] lg:w-[175.56px] flex relative'>
                    <div className='w-full h-[200px] md:h-[250px] lg:h-[293.66px] bottom-0 flex flex-col justify-center items-center text-center rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] bg-[#C7D8B7] absolute'>
                    <div className='absolute z-10 top-[50px] md:top-[75px] lg:top-[89.23px] left-[10px] md:left-[20px] lg:left-[26.33px] w-[70px] md:w-[100px] lg:w-[122.89px]'>
                        <h1 className='text-[#333333] font-semibold sofiaProR leading-[40px] md:leading-[50px] lg:leading-[55.86px] text-[1.8rem] md:text-[2.5rem] lg:text-[2.813rem]'>90%</h1>
                        <p className='w-[70px] md:w-[100px] lg:w-[122.89px] text-[#333333] leading-[15px] md:leading-[18px] lg:leading-[19.95px] text-[12px] md:text-[14px] lg:text-[15.96px] font-light sofiaProL'>Average Client Satisfaction Rate</p>
                    </div>
                    </div>
                </div>

                <div className='w-[150px] md:w-[200px] lg:w-[287.28px] h-[250px] md:h-[350px] lg:h-[446.88px] rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] relative'>
                    <Image src={man2} alt='Black Man' className='absolute top-0 left-0 rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] w-full h-full'></Image>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsHero