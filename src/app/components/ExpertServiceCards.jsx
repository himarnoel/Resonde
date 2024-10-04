import Image from 'next/image'
import React from 'react'

const ExpertServiceCards = ({service}) => {
  return (
    <div className='bg-[#1E3E2A] border border-[#275037] w-full xl:w-[640px] h-full md:h-[600px] rounded-[16px] px-[34px] py-[48px]'>
        <div className='flex flex-col justify-center items-start gap-[38px]'>
            <div className='flex flex-col justify-center items-start gap-[16px]'>
                <h1 className='text-white font-medium sofiaProM text-[2rem] leading-[48px]'>{service.serv}</h1>
                <p className='text-white text-base font-light sofiaProL'>{service.desc}</p>
            </div>
            <Image width={560} height={360} className='object-cover' src={service.img} alt={service.serv}></Image>
        </div>
    </div>
  )
}

export default ExpertServiceCards