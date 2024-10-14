"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AboutHeroCards from "./AboutHeroCards";
import Image from "next/image";
import bg from "../../../public/about-us/Virtual Garden Resonode.svg";
import obj from "../../../public/about-us/Virtual Garden Line.svg";
import line from "../../../public/about-us/Virtual Garden Line 110.svg";
import man from "../../../public/about-us/Smiley man with headphones.svg";
import man2 from "../../../public/about-us/Virtual Garden Resonode Photo.svg";

const AboutUsHero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const button = buttonRef.current;
    const items = itemsRef.current;

    gsap.set([heading, paragraph, button, ...items], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(section, { backgroundColor: "#FFFFFF" }, { backgroundColor: "#F7F7F7", duration: 1 })
      .fromTo(heading, { y: 50 }, { y: 0, autoAlpha: 1, duration: 0.8 })
      .fromTo(paragraph, { y: 20 }, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.4")
      .fromTo(button, { y: 20 }, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.4")
      .fromTo(items, 
        { y: 50, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2 },
        "-=0.4"
      );

  }, []);


  return (
    <section ref={sectionRef} className="bg-[#F7F7F7] w-full min-h-screen overflow-hidden">
      <div className="max-w-[1312.08px] mx-auto flex flex-col justify-center items-center py-[100px]">
        <div className="w-full max-w-[1240px] mx-auto px-[24px] lg:w-[872px] flex flex-col justify-center items-center text-center gap-[24px]">
          <div className="flex flex-col justify-center items-center gap-[16px]">
            <h1 ref={headingRef} className="text-[#1E3E2A] font-semibold sofiaProBld leading-[35.2px] md:leading-[66px] text-[2rem] md:text-[3.75rem]">
              Your global partner for Remote, Specialized talents
            </h1>
            <p ref={paragraphRef} className="text-[#333333] font-light sofiaProL leading-[27px] text-[1.125rem]">
              Access highly skilled Nigerian professionals with diverse experience.
            </p>
          </div>
          <button ref={buttonRef} className="w-[240px] h-[56px] flex justify-center items-center rounded-[48px] py-[24px] bg-[#1E3E2A] font-normal text-[#D0EA50] text-[.875rem] leading-[22.4px] sofiaProL">
            Find Your Virtual Assistant
          </button>
        </div>
        <div className="flex justify-between items-end gap-[5px] md:gap-[8px] lg:gap-[16.8px] w-full mt-32 lg:mt-0 left-0">
          {/* First Item  transform  */}
          <div  ref={el => itemsRef.current[0] = el} className="w-full ml-[-25%]  md:ml-[-10%] lg:ml-0 md:w-[200px] lg:w-[287.28px] h-[173.87px] md:h-[350px] lg:h-[446.88px] rounded-[11.57px] md:rounded-[15px] lg:rounded-[19.15px] relative flex flex-col justify-end items-start">
            <Image
              src={bg}
              alt="Background Image"
              className="absolute w top-0 left-0 object-cover lg:w-full h-full rounded-[11.57px] md:rounded-[15px] lg:rounded-[19.15px]"
            />
            <Image
              src={obj}
              alt="Object"
              className="absolute right-0 z-[5px] w-20 lg:w-full"
            />
            <div className="w-full md:w-[170px] lg:w-[217.06px] flex flex-col justify-center items-start absolute h-full top-0  lg:top-auto lg:h-fit lg:bottom-14 px-4 lg:px-0 md:left-[0px] lg:left-[22.34px] gap-[15px] md:gap-[20px] lg:gap-[25.54px] ">
              <Image src={line} alt="Icon" />
              <p className="relative z-10  text-white leading-[10.41px] md:leading-[25px] lg:leading-[28.73px] text-[6.94px] md:text-[16px] lg:text-[18px] font-light sofiaProL">
                Our mission is to provide you with Virtual assistants that make
                your team more efficient and achieve great results
              </p>
            </div>
          </div>

          {/* Second Item */}
          <div ref={el => itemsRef.current[1] = el} className="h-[106.45px] flex-grow  md:h-[250px] lg:h-[293.66px] w-full max-w-[63.64px] px-2  md:max-w-[175.56px] lg:max-w-[175.56px] flex flex-col justify-center items-center text-center bg-[#EEEEEE] rounded-[6.94px] md:rounded-[15px] lg:rounded-[19.15px] gap-2">
            <h1 className="text-[#333333] font-semibold sofiaProR leading-[20.25px] md:leading-[50px] lg:leading-[55.86px] text-[16.2px] md:text-[2.5rem] lg:text-[2.813rem]">
              40+
            </h1>
            <p className="w-full md:max-w-[100px] lg:max-w-[122.89px] text-[#333333] leading-[7.23px] md:leading-[18px] lg:leading-[19.95px] text-[5.79px] md:text-[14px] lg:text-[15.96px] font-light sofiaProL">
              Unique Skills available for hire
            </p>
          </div>

          {/* Third Item */}
          <div ref={el => itemsRef.current[2] = el}  className="w-full max-w-[96.08px] h-[64px] flex-grow md:h-[180px] lg:h-[236.21px] md:max-w-[200px] lg:max-w-[319.2px] flex relative">
            <Image
              className="object-cover w-full rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] z-[3px] top-0 left-0"
              src={man}
              alt="Smiley Black Man"
            />
            <p className="absolute z-10 bottom-3 md:top-[80px] lg:top-[146.12px] left-[10px] md:left-[15px] lg:left-[20.6px] text-[#D0EA50] text-[6px] md:text-[1.25rem] lg:text-[1.75rem] leading-[14px] md:leading-[25px] lg:leading-[35px] font-semibold sofiaProR">
              Unbelievable results....
            </p>
          </div>

          {/* Fourth Item */}
          <div ref={el => itemsRef.current[3] = el} className="w-full max-w-[63.64px] h-[106.45px] md:h-[250px] md:max-w-[175.56px] lg:h-[293.66px] flex flex-col justify-center items-center text-center rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] bg-[#C7D8B7] gap-2 px-[1rem]">
            <h1 className="text-[#333333] font-semibold sofiaProR leading-[20.25px] md:leading-[50px] lg:leading-[55.86px] text-[16.2px] md:text-[2.5rem] lg:text-[2.813rem]">
              90%
            </h1>
            <p className="md:w-[100px] lg:w-[122.89px] text-[#333333] leading-[7.23px]md:leading-[18px] lg:leading-[19.95px] text-[5.79px]  md:text-[14px] lg:text-[15.96px] font-light sofiaProL">
              Average Client Satisfaction Rate
            </p>
          </div>

          {/* Fifth Item */}
          <div ref={el => itemsRef.current[4] = el} className="w-full mr-[-17%] md:mr-[-10%] lg:mr-0 md:w-[200px] lg:w-[287.28px] h-[161.99px] md:h-[350px] lg:h-[446.88px] rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] relative flex-grow">
            <Image
              src={man2}
              alt="Black Man"
              className="absolute top-0 left-0 rounded-[11.57px] md:rounded-[15px] lg:rounded-[31.92px] w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
