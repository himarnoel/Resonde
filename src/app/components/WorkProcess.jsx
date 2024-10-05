import Image from 'next/image'
import React from 'react'
import img from '../../../public/how-it-works/process/Virtual Garden Resonode Photo.svg'
import img2 from '../../../public/how-it-works/process/Businesswoman at computer (2).svg'
import img3 from '../../../public/how-it-works/process/Man in cafe (2).svg'
import img4 from '../../../public/how-it-works/process/Businesswoman with Tablet (2).svg'

const WorkProcess = () => {

    const processes = [
        {
            id: 1,
            title: 'Submit Your Request',
            desc: 'Clients provide details about the specific task or project they need help with. Provide project details, and we’ll find the right talent for your needs.',
            bgOut: '#1E3E2A',
            bgIn: 'white',
            img: img,
        },
        {
            id: 2,
            title: 'We Scout Top Talent',
            desc: 'Virtual Garden matches you with the best-fit virtual assistant based on your needs. Our system handpicks top Nigerian virtual assistants tailored to your specific tasks.',
            bgOut: 'white',
            bgIn: '#F3F8EE',
            img: img2,
        },
        {
            id: 3,
            title: 'Seamless Collaboration',
            desc: 'Work with your virtual assistant via our platform for efficient task management. Work seamlessly on our platform with  built-in task management and communication tools.',
            bgOut: '#F3F8EE',
            bgIn: '#E5F0D7',
            img: img3,
        },
        {
            id: 4,
            title: 'Complete Your Project',
            desc: 'Receive results and easily finalize your contract when the project is completed. Get your project delivered with satisfaction guaranteed, and complete the contract with ease.',
            bgOut: '#E5F0D7',
            bgIn: '#CBD7BA',
            img: img4,
        },
    ]

  return (
    <>
        {
            processes.map((process, index) => (
                <section className='overflow-hidden min-h-screen xl:h-[800px] w-full' key={index} style={{ backgroundColor: process.bgOut}}>
                    <div style={{ backgroundColor: process.bgIn}} className='min-h-screen xl:h-[800px] w-full px-[24px] gap-[40px] lg:gap-[200px] pt-[72px] pb-[88px] lg:py-[144px] xl:px-[96px] rounded-tl-[24px] lg:rounded-tl-[48px] relative rounded-tr-[24px] lg:rounded-tr-[48px] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center'>
                        <div className='lg:w-[500px] xl:w-[580px] flex flex-col justify-center items-start'>
                            <div className="flex flex-col justify-center items-start gap-[16px] md:gap-[24px]">
                                <div className='flex justify-center items-start gap-[4px] text-[#1E3E2A] leadding-[26.4px] md:leading-[67.2px] text-[1.5rem] md:text-[3rem] font-semibold sofiaProBld'>
                                    <p>{process.id}.</p>
                                    <h1>{process.title}</h1>
                                </div>
                                    <p className='text-[#333333] leading-[25.6px] font-light text-[1rem] sofiaProL'>{process.desc}</p>
                                <button className='w-[240px] rounded-full py-[8px] px-[24px] gap-[8px] border border-[#A3A2A5] bg-white text-base font-light sofiaProL'>Get Started</button>
                            </div>
                        </div>
                        {/* <div className=''> */}
                        <Image width={640} height={440} className='lg:absolute lg:right-[18%] lg:translate-x-[50%] lg:translate-y-[0%] rounded-[24px] object-cover' src={process.img} alt='Images'></Image>
                        {/* </div> */}
                    </div>
                </section>
            ))
        }
    </>
  )
}

export default WorkProcess