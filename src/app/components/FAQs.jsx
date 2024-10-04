'use client'

import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { GoPlus } from 'react-icons/go';

const FAQs = () => {

    const faqs = [
        {
            id: 1,
            title: 'How do I get started with Virtual Garden?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            id: 2,
            title: 'How does the hiring process work?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            id: 3,
            title: 'What types of tasks can VAs handle?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            id: 4,
            title: 'How do I know the VA is qualified for my project?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            id: 5,
            title: 'Is there a minimum contract length?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            id: 6,
            title: 'How are payments handled?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
    ]
  return (
    <section className='bg-[#F3F8EE] w-full min-h-screen py-[160px] px-[24px] xl:px-[120px] flex flex-col gap-[80px]'>
        <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-[64px]'>
            <div className='flex flex-col justify-center items-start md:items-center gap-[24px]'>
                <h1 className='text-[#000000] leading-[38.4px] md:leading-[67.2px] font-bold text-[2rem] md:text-[3.5rem] sofiaProBld text-left md:text-center'>Frequently asked questions</h1>
                <p className='text-[#333333] text-[1.125rem] leading-[27px] font-light sofiaProL text-left md:text-center'>Access highly skilled Nigerian professionals with diverse experience.</p>
            </div>


            <Accordion allowMultiple={false} allowToggle={true} className="flex flex-col justify-center items-center gap-[20px] w-full lg:w-[1200px]">
                {faqs.map((faq, index) => (
                <AccordionItem key={index} className="border-[.8px] rounded-[8px] flex flex-col gap-[16px] border-[#828282] w-full lg:w-[1200px] py-[20px] px-[10px] md:px-[24px]">
                    {({ isExpanded }) => (
                    <>
                        <AccordionButton className="flex justify-between items-center text-left">
                        <div className="flex justify-center gap-4 items-center">
                            <p className="text-[#333333] text-[1.125rem] font-medium sofiaProM leading-[22.5px]">
                                {faq.title}
                            </p>
                        </div>
                        <GoPlus
                            size={25}
                            className='text-[#1E3E2A] cursor-pointer'
                        />
                        </AccordionButton>
                        <AccordionPanel className="py-4 text-base text-[#828282] font-normal sofiaProL">
                            {faq.desc}
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  )
}
export default FAQs