import React from 'react'
import ProcessCarousel from './ProcessCarousel'
import { AppleCardsCarousel } from './AppleCardsCarousel'

const UniquesSKills = () => {
  return (
    <section className='bg-[#111111] relative w-full py-[50px] min-h-screen'>
        <div className=''>
            <div className='px-3 max-w-[1280px] mx-auto flex flex-col justify-center items-start gap-[16px]'>
                <h1 className='text-white w-full xl:w-[687px] font-semibold text-[3.5rem] leading-[61.6px]'>Unique Skills sets</h1>
                <p className='text-white w-full xl:w-[687px] font-light leading-[36px] text-[1.5rem]'>Unlock the power of efficient task management with Resonade.</p>
            </div>
            {/* <div> */}
                <AppleCardsCarousel/>
            {/* </div> */}
        </div>
    </section>
  )
}

export default UniquesSKills