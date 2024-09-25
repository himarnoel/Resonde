import React from 'react'
import { AppleCardsCarousel } from './AppleCardsCarousel'
import ProcessCarousel from './ProcessCarousel'

const HowWeWork = () => {
  return (
    <section className='bg-[#111111] py-[100px] w-full min-h-screen gpa-[80px]'>
        <div className='max-w-[1280px] mx-auto px-5'>
            <h1 className='text-white font-semibold text-[3.5rem] leading-[70px] lg:w-[650px]'>How Resonode Works</h1>
        </div>
        {/* <AppleCardsCarousel/> */}
        <ProcessCarousel/>
    </section>
  )
}

export default HowWeWork