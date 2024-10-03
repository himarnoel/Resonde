import React from 'react';
import CardCarousel from './CardCarousel';
import design from '../../../public/home/skills/design.svg';
import web from '../../../public/home/skills/web.svg';
import maintenance from '../../../public/home/skills/maintenance.svg';
import media from '../../../public/home/skills/media.svg';
import support from '../../../public/home/skills/support.svg';
import data from '../../../public/home/skills/data.svg';
import UniqueSkillsCarousel from './UniqueSkillsCarousel';

const UniquesSKills = () => {
  const uSkills = [
    {
      id: 1,
      title: "Web Design",
      category: "Web Design",
      src: design,
    },
    {
      id: 2,
      title: "Web Development",
      category: "Web Development",
      src: web,
    },
    {
      id: 3,
      title: "Software Maintenance",
      category: "Software Maintenance",
      src: maintenance,
    },
    {
      id: 4,
      title: "Media Marketing",
      category: "Media Marketing",
      src: media,
    },
    {
      id: 5,
      title: "Customer Support",
      category: "Customer Support",
      src: support,
    },
    {
      id: 6,
      title: "Data Entry and Management",
      category: "Data Entry and Management",
      src: data,
    },
  ];

  return (
    <section className='bg-[#E6EDDD] w-full py-[50px] min-h-screen overflow-hidden relative'>
      <div className='flex flex-col gap-y-[80px] justify-center items-center xl:items-start max-w-[1280px] mx-auto'>
        <div className='px-3 flex flex-col justify-center items-start xl:items-start gap-[16px] text-left'>
          <h1 className='text-[#1E3E2A] w-full xl:w-[687px] font-semibold text-[3.5rem] leading-[61.6px]'>
            Unique Skills sets
          </h1>
          <p className='text-[#333333] w-full xl:w-[687px] font-light leading-[36px] text-[1.5rem]'>
            Unlock the power of efficient task management with Virtual Garden.
          </p>
        </div>
        <UniqueSkillsCarousel/>
      </div>
    </section>
  );
}

export default UniquesSKills;
