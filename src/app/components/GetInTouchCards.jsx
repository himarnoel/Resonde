import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";


const GetInTouchCards = () => {
    
    const cards = [
        {
            id: 1,
            title: 'New to Virtual Gardens?',
            desc: 'Do you have questions, comments, feedback or issues?',
            btn: 'Send us an Email'
        },
        {
            id: 2,
            title: 'Having Issues with your Account?',
            desc: 'Log in to your account to chat with our support team',
            btn: 'Log in'
        },
        {
            id: 3,
            title: 'Want to partner with us?',
            desc: 'Let’s chat about how we can work together',
            btn: 'Reach out'
        },
        {
            id: 4,
            title: 'Follow us on social Media',
            // desc: 'Let’s chat about how we can work together',
            btnOne: 'Virtual Garden.africa',
            btnTwo: 'Virtual Garden.africa'
        },
    ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-[25px] gap-x-[40px] justify-items-center'>
        {
            cards.map((card, index) => (
                <div className='border border-[#CBD7BA] bg-[#F3F8EE] w-full xl:w-[600px] h-[200px] rounded-[16px] py-[35px] px-[39px] flex flex-col justify-center items-start gap-[16px]' key={index}>
                    <h1 className='text-[#333333] text-[1.5rem] leading-[30px] font-medium sofiaProM'>{card.title}</h1>
                    <p className='text-base text-[#828282] font-normal sofiaProL'>{card.desc}</p>
                    {
                        card.id === 4 ? (
                            <div className='flex justify-center items-start gap-[16px]'>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#1E3E2A]'>
                                        <LuInstagram className='text-[#D0EA50] h-[16.67px]' />
                                    </div>
                                    <p className='text-[#1E3E2A] text-base font-light sofiaProL'>Virtual Garden.africa</p>
                                </div>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#1E3E2A]'>
                                        <BsTwitterX className='text-[#D0EA50] h-[16.67px]' />
                                    </div>
                                    <p className='text-[#1E3E2A] text-base font-light sofiaProL'>Virtual Garden.africa</p>
                                </div>
                            </div>
                        ) : (
                            <button className='border-[.6px] border-[#D8D8D8] bg-white rounded-full w-[180px] h-[44px] py-[13px] gap-[8px] flex justify-center items-center text-[#1E3E2A] text-[14px] leading-[22.4px] font-normal sofiaProL'>{card.btn}</button>
                        )
                    }
                </div>
            ))
        }
    </div>
  )
}

export default GetInTouchCards