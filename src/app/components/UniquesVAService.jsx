import React from 'react'
import bg from '../../../public/home/Resonode logo (1).svg';
import Image from 'next/image';
import woman from '../../../public/home/Resonode Frame.svg';
import man from '../../../public/home/Resonode Frame (2).svg'
import womanTwo from '../../../public/home/Resonode Frame (1).svg';
import { PiArrowUpRightLight } from "react-icons/pi";


const UniquesVAService = () => {
  return (
    <section className='w-full h-screen relative z-10 py-[100px] px-3 xl:px-0'>
        <Image className='z-[5px] absolute top-0 left-0' src={bg} alt='Background Image'></Image>
        <div className='max-w-[1280px] mx-auto px-3 xl:px-0 relative z-10 flex flex-col items-center gap-[6em]'>
            <div className='w-full lg:w-[837px] flex flex-col justify-center items-center gap-[16px] text-center'>
                <h1 className='font-semibold text-white leading-[61.6px] text-[3.5rem]'>Unique Virtual Assistant Services</h1>
                <p className='text-[#F1F1F1] text-base w-full lg:w-[484px]'>
                    Unlock the power of efficient task management with Renode Flow. Here is a look at how we handle contracts and payments.
                </p>
            </div>

            <div className='w-full xl:w-[1280px] 2xl:w-[1320px] bg-[#DCD7CFA3]/[64%] rounded-[24px] lg:h-[560px] flex justify-center items-center py-[24px] px-[32px]'>
                <div className='gap-[12px] w-full lg:w-[1266px] h-full lg:h-[384px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center'>
                    <div className='bg-[#FFFFFF] gap-[25.6px] flex flex-col justify-center items-start w-full md:w-[300px] h-full md:h-[384px] rounded-[12px] p-[24px]'>
                        <div className='gap-[4px] flex flex-col justify-center items-start'>
                                <p className='text-[#767676] leading-[22.4px] text-[.875rem] font-light'>Central African Time</p>
                            <h1 className='text-[#121212] font-normal leading-[26.4px] text-[1.5rem]'>Roberta Fox</h1>
                        </div>
                        <Image width={160} height={160} src={woman} alt='Roberta Fox'></Image>
                        <div className='w-full lg:w-[250px] flex justify-between items-center'>
                            <p className='text-[#121212] leading-[27.5px] font-light text-[1.375rem]'>Customer Support</p>
                            <div className='w-[40.76px] h-[40.76px] rounded-full flex justify-center items-center border-[0.68px] border-[#AFADA8] gap-[5px] p-[9px]'>
                                <PiArrowUpRightLight className='text-[#333333]' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] gap-[25.6px] flex flex-col justify-center items-start w-full md:w-[300px] h-full md:h-[384px] rounded-[12px] p-[24px]'>
                        <div className='gap-[4px] flex flex-col justify-center items-start'>
                                <p className='text-[#767676] leading-[22.4px] text-[.875rem] font-light'>Central African Time</p>
                            <h1 className='text-[#121212] font-normal leading-[26.4px] text-[1.5rem]'>Devon Lane</h1>
                        </div>
                        <Image width={160} height={160} src={man} alt='Devon Lane'></Image>
                        <div className='w-full lg:w-[250px] flex justify-between items-center'>
                            <p className='text-[#121212] leading-[27.5px] font-light text-[1.375rem]'>Web Developer</p>
                            <div className='w-[40.76px] h-[40.76px] rounded-full flex justify-center items-center border-[0.68px] border-[#AFADA8] gap-[5px] p-[9px]'>
                                <PiArrowUpRightLight className='text-[#333333]' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] gap-[25.6px] flex flex-col justify-center items-start w-full md:w-[300px] h-full md:h-[384px] rounded-[12px] p-[24px]'>
                        <div className='gap-[4px] flex flex-col justify-center items-start'>
                                <p className='text-[#767676] leading-[22.4px] text-[.875rem] font-light'>Central African Time</p>
                            <h1 className='text-[#121212] font-normal leading-[26.4px] text-[1.5rem]'>Dianne Russell</h1>
                        </div>
                        <Image width={160} height={160} src={womanTwo} alt='Dianne Russell'></Image>
                        <div className='w-full lg:w-[250px] flex justify-between items-center'>
                            <p className='text-[#121212] leading-[27.5px] font-light text-[1.375rem]'>Media Managemet</p>
                            <div className='w-[40.76px] h-[40.76px] rounded-full flex justify-center items-center border-[0.68px] border-[#AFADA8] gap-[5px] p-[9px]'>
                                <PiArrowUpRightLight className='text-[#333333]' />
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-[#5B5858] gap-[25.6px] w-full md:w-[300px] h-full md:h-[384px] rounded-[12px] px-[12px] py-[24px]'></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UniquesVAService
