import React from 'react'

const WhatYouGet = () => {
  return (
    <section className='max-w-[1280px] mx-auto px-3 xl:px-0 py-[100px] xl:pt-[250px] min-h-screen xl:h-[800px] flex flex-col  justify-center xl:justify-between gap-[50px] xl:gap-0 items-center xl:items-start'>
        <div className='gap-[16px] w-full lg:w-[731px] flex flex-col justify-center items-center xl:items-start'>
            <h1 className='text-[#121212] font-semibold text-[3.5rem] leading-[61.6px]'>What you get with Resonade</h1>
            <p className='text-[#333333] font-light leading-[36px] text-[1.5rem]'>Unlock the power of efficient task management with Resonade</p>
        </div>
        <div className='max-w-[1280px] mx-auto gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            <div className='w-full xl:w-[400px] border border-[#8B3A33] gap-[24px] py-[40px] px-[32px] rounded-[16px] h-[244px] text-center flex flex-col justify-center items-center'>
                <h1 className='text-[#333333] font-medium leading-[78.4px] text-[3.5rem]'>60%</h1>
                <p className='text-[#333333] text-[2.5rem] leading-[50px] font-light'>Average Savings</p>
            </div>
            <div className='w-full xl:w-[400px] border border-[#8B3A33] gap-[24px] py-[40px] px-[32px] rounded-[16px] h-[244px] text-center flex flex-col justify-center items-center'>
                <h1 className='text-[#333333] font-medium leading-[78.4px] text-[3.5rem]'>40+</h1>
                <p className='text-[#333333] text-[2.5rem] leading-[50px] font-light'>Unique Skills</p>
            </div>
            <div className='w-full xl:w-[400px] border border-[#8B3A33] gap-[24px] py-[40px] px-[32px] rounded-[16px] h-[244px] text-center flex flex-col justify-center items-center'>
                <h1 className='text-[#333333] font-medium leading-[78.4px] text-[3.5rem]'>90%</h1>
                <p className='text-[#333333] text-[2.5rem] leading-[50px] font-light'>Client Satisfaction Rate</p>
            </div>
        </div>
    </section>
  )
}

export default WhatYouGet