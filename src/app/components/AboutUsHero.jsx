import React from 'react'
import AboutHeroCards from './AboutHeroCards'
import Image from 'next/image'

const AboutUsHero = () => {
  return (
    <section clasName='bg-[#F7F7F7] w-full min-h-screen'>
        <div clasName='max-w-[1312.08px] mx-auto'>
            <div clasName='lg:w-[872px] flex flex-col justify-center items-center text-center gap-[24px]'>
                <div clasName='flex justify-center items-center gap-[16px]'>
                    <h1 clasName='text-[#1E3E2A] font-semibold sofiaProBld leading-[66px] text-[3.75rem]'>
                        Your global partner for Remote, Specialized talents
                    </h1>
                    <p clasName='text-[#333333] font-light sofiaProL leading-[27px] text-[1.125rem]'>
                        Access highly skilled Nigerian professionals with diverse experience.
                    </p>
                </div>
                <button clasName='w-[240px] rounded-[48px] py-[24px] bg-[#1E3E2A] font-normal text-[#D0EA50] text-[.875rem] leading-[22.4px] font-normal sofiaProL'></button>
            </div>
            <div clasName='grid grid-cols-5 gap-[16.8px] justify-items-center'>
                <div clasName='w-[287.28px] h-[446.88px] rounded-[19.15px]'>
                    <div>
                        <p>
                            Our mission is to provide you with Virtual assistants that make your tam more efficient and achieve great results
                        </p>
                    </div>
                </div>
                <div clasName='w-[175.56px] h-[293.66px] bg-[#EEEEEE] rounded-[19.15px]'></div>
                <div clasName='rounded-[31.92px] w-[319.2px] h-[236.21px] relative'>
                    <Image clasName='absolute'></Image>
                    <p>Unbeliveable results....</p>
                </div>
                    <div clasName='w-[175.56px] h-[293.66px] rounded-[31.92px bg-[#C7D8B7]]'></div>
                <div clasName='w-[287.28px] h-[446.88px] rounded-[31.92px] relative'></div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsHero