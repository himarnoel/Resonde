import React from 'react'
import GetInTouchCards from './GetInTouchCards'

const GetInTouch = () => {
  return (
    <section className='max-w-[1240px] mx-auto px-[24px] xl:px-0 py-[100px] min-h-screen xl:h-[900px] flex flex-col justify-center items-center gap-[40px]'>
        <h1 className='text-[#000000] leading-[38.4px] md:leading-[57.6px] text-[2rem] md:text-[3rem] font-semibold sofiaProR'>Get in Touch with us!</h1>
        <GetInTouchCards/>
    </section>
  )
}

export default GetInTouch