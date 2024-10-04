import Image from 'next/image'
import React from 'react'

const ServiceHeroCard = ({card}) => {

  return (
    <>
        {
            card.id === 4 ? (
                
                <div style={{ backgroundColor: card.bg}} className='w-full sm:w-[82.08px] lg:w-[304px] h-[97.2px] lg:h-[360px] rounded-[20px] flex flex-col justify-end items-start gap-[20px] px-[20px] py-[15px] relative'>
                    <Image width={138.24} height={43.2} className='object-cover' src={card.img} alt='Virtual Assistants'></Image>
                    <div className='flex flex-col justify-center items-start gap-[6px]'>
                        <p className='text-[9.75px] leading-[15.6px] font-light sofiaProL text-white'>{card.desc}</p>
                        <h2 className='leading-[27.5px] font-normal sofiaProR text-[1.375rem] text-white'>{card.head}</h2>
                    </div>
                    <div className='w-full md:w-[264.96px] h-[54px] py-[6px] px-[12px] rounded-full bg-[#F4F4F4] relative z-10 flex gap-[18px] justify-center items-center'>
                        <h2 className='text-[#4F4F4F] leading-[21px] text-[13.5px] font-normal sofiaProR'>{card.title}</h2> 
                    </div>
                </div>
            ) : (

                <div className='w-full sm:w-[82.08px] lg:w-[304px] h-[97.2px] lg:h-[360px] rounded-[24px] flex justify-end items-end px-[20px] py-[15px] relative'>
                    <Image width={304} height={360} className='w-full md:w-[304px] object-cover rounded-[24px] absolute top-0 left-0 z-[5px]' src={card.bg} alt='Background Image'></Image>
                    <div className='w-full sm:w-[71.54px] md:w-[264.96px] h-[54px] sm:h-[14.58px] md:h-[54px] py-[1.62px] md:py-[6px] px-[3.24px] md:px-[12px] rounded-full bg-[#F4F4F4] relative z-10 flex gap-[18px]'>
                            <Image width={42} height={42} className='w-[42px] sm:w-[11.34px] md:w-[42px] h-[42px] sm:h-[11.34px] md:h-[42px] rounded-full object-cover' src={card.img} alt={card.title}></Image>
                        <div className='flex flex-col justify-center items-start'>
                            <h2 className='text-[#4F4F4F] leading-[21px] text-[13.5px] sm:text-[3.64px] md:text-[13.5px] font-normal sofiaProR'>{card.title}</h2>
                            <p className='font-normal sofiaProL text-[#737373] leading-[15px] text-[10.5px] sm:text-[2.84px] md:text-[10.5px]'>{card.role}</p>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default ServiceHeroCard