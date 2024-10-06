import React from 'react'
import obj from '../../../public/privacy/Virtual Garden Background Texture.svg';
import resObj from '../../../public/privacy/Virtual Garden Background Texture (1).svg';
import Image from 'next/image';

const PrivacyPolicyHero = () => {
  return (
    <section className='h-[280px] md:h-[600px] gap-[8px] px-[16px] py-[96px] lg:px-[72px] lg:py-[64px] bg-[#1E3E2A] w-full relative flex flex-col justify-center items-center'>
        <div className='w-full sm:w-[343px] md:w-[409px] flex flex-col justify-center items-center'>
            <h1 className='text-[32px] md:text-[4rem] text-white leading-[32px] md:leading-[64px] font-bold sofiaProBld'>Privacy Policy</h1>
            <p className='text-[#C0C0BF] leading-[27px] text-[1.125rem] font-light sofiaProL'>Last updated: June 23, 2024</p>
        </div>
        <Image src={obj} alt='Object' className='hidden xl:flex h-[600px] absolute z-[1px] top-0 left-0 right-0 bottom-0'></Image>
        <Image src={resObj} alt='Object' className='flex xl:hidden h-[200px] absolute z-[1px] top-0 left-0 right-0 bottom-0 w-full'></Image>
    </section>
  )
}

export default PrivacyPolicyHero