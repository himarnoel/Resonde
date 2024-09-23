import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[96px] bg-white sticky top-0 w-full py-[24px] z-50 px-[64px]'>
        <div className='max-w-[1280px] mx-auto flex justify-between items-center gap-6'>
            <h1 className='text-[#121212] text-[2.5rem] font-semibold leading-[44px]'>Virtual Garden</h1>
            <ul className='flex justify-between items-center gap-10'>
                <li className='text-[#333333] font-light text-[1rem] leading-[25.6px]'>How it works</li>
                <li className='text-[#333333] font-light text-[1rem] leading-[25.6px]'>About us</li>
                <li className='text-[#333333] font-light text-[1rem] leading-[25.6px]'>Our Services</li>
            </ul>
            <button className='bg-[#121212] flex justify-center items-center h-[48px] w-[167px] text-[#F7F7F7] font-normal text-[.875rem] leading-[22.4px] py-[13px] px-[48px] rounded-full'>Contact us</button>
        </div>
    </nav>
  )
}

export default Navbar