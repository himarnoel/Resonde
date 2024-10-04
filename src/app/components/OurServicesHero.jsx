import React from 'react'

import bgOne from '../../../public/our-services/unsplash_8jwCWlsBys8.svg';
import bgTwo from '../../../public/our-services/Businessman laptop sunglasses man using phone.svg';
import bgThree from '../../../public/our-services/unsplash_S3GrMiUhpNU.svg';
import img from '../../../public/our-services/two.svg';
import imgTwo from '../../../public/our-services/four.svg';
import imgThree from '../../../public/our-services/one.svg';
import imgFour from '../../../public/our-services/Frame 1618873084.svg';
import ServiceHeroCard from './ServiceHeroCard';


const OurServicesHero = () => {

    const cards = [
        {
            id: 1,
            bg: bgOne,
            img: img,
            title: 'Jane Jones',
            role: 'Data Entry and management',
        },
        {
            id: 2,
            bg: bgTwo,
            img: imgTwo,
            title: 'Cameron Williamson',
            role: 'Web Developer',
        },
        {
            id: 3,
            bg: bgThree,
            img: imgThree,
            title: 'Savannah Nguyen',
            role: 'Customer support officer',
        },
        {
            id: 4,
            bg: '#1E3E2A',
            img: imgFour,
            title: 'Find a Virtual Assistant',
            desc: '40+ Unique Skills',
            head: 'Over 250 Virtual Assistants ready to assist.'
        }
    ];

  return (
    <section className='bg-[#F5F5F5] w-full min-h-screen px-[24px] xl:px-[36px] py-[100px] flex justify-center items-center'>
        <div className='max-w-[1368px] mx-auto flex flex-col justify-center items-center gap-[120px] min-h-screen sm:h-auto'>
            <div className='flex flex-col justify-center items-center text-center w-[609px] gap-[16px]'>
                <h1 className='sm:w-[285px] lg:w-auto text-[#121212] text-[2.5rem] md:text-[4rem] leading-[48px] md:leading-[64.64px] font-semibold sofiaProR'>Your Virtual Assistant for Every Need</h1>
                <p className='text-[#333333] leading-[30px] font-normal sofiaProL text-[1.25rem]'>"Discover Our Comprehensive Range of Services"</p>
                <button className='w-[254px] py-[13px] text-[#D0EA50] font-light sofiaProL leading-[22.4px] text-[.875rem] bg-[#002C15] gap-[8px] rounded-full h-[48px]'>Find Your Virtual Assistant</button>
            </div>
            <div className='min-h-screen sm:h-auto w-full lg:max-w-[1288px] mx-auto justify-items-center grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[3.6px] lg:gap-[24px]'>
                {
                    cards.map((card, index) => (
                        // <div key={index}>
                            <ServiceHeroCard key={index} card={card} />
                        // </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurServicesHero