"use client";

import React from "react";
import grid from "../../../public/home/Virtual Garden Grid Lines.svg";
import Image from "next/image";
import img from "../../../public/home/Frame 1618873226 1.svg";
import resImg from "../../../public/home/Frame 1618873226 1 2.svg";
import { animationPositiveYAxis, opacityAnimation } from "../utils/gsapLogic";

const HomeHero = () => {
  const obj = React.useRef(null);
  const title = React.useRef(null);
  const txt = React.useRef(null);
  const hero = React.useRef(null);
  const btn = React.useRef(null);
  const image = React.useRef(null);
  const imageTwo = React.useRef(null);

  React.useEffect(() => {
    animationPositiveYAxis(title.current, 1.5, hero.current);
    animationPositiveYAxis(txt.current, 1.7, hero.current);
    animationPositiveYAxis(btn.current, 1.9, hero.current);
    animationPositiveYAxis(image.current, 2.1, hero.current);
    animationPositiveYAxis(imageTwo.current, 2.1, hero.current);
    opacityAnimation(obj.current, 1, hero.current);
  }, []);

  return (
    <section
      ref={hero}
      className="relative bg-[#1E3E2A] min-h-screen lg:h-auto "
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          width={1468.75}
          height={1052}
          src={grid}
          className="w-full h-full object-cover"
          alt="Grid"
        />
      </div>

      <div className="pb-[100px] lg:pb-0 pt-[110px] md:py-[134px] lg:pt-[110px] xl:pt-[134px] relative z-10 flex flex-col justify-start items-center max-w-[1080px] min-h-screen xl:h-[921px] mx-auto px-3 xl:px-0 gap-[64px] lg:gap-[56px]">
        <div className="flex flex-col justify-center items-center gap-[16px] w-[337px] md:w-[581px] lg:w-[781px]">
          <div
            ref={obj}
            className="w-[144px] h-[36px] bg-white/[16%] py-[17px] px-[32px] rounded-[1px] border-[.1px] border-[#CBF1E8] flex justify-center items-center gap-[8px]"
          >
            <p className="text-[#ABD833] text-base font-normal sofiaProN">
              Welcome
            </p>
            👋
          </div>
          <h1
            ref={title}
            className="text-center leading-[43.2px] md:leading-[70.4px] w-[337px] md:w-[581px] lg:w-[781px] text-[2.25rem] md:text-[3.5rem] lg:text-[4rem] text-white font-semibold sofiaProM"
          >
            Connecting Global Clients with Top Virtual Assistants
          </h1>
          <p
            ref={txt}
            className="text-center text-[#D3D5D4] w-full md:w-[466px] font-light sofiaProL md:leading-[28.8px] text-[1rem] leading-[22.4px] md:text-[1.125rem]"
          >
            &quot;Find highly skilled professionals for your needs..we are your
            global partner for remote, specialized talent&quot;
          </p>
          <div className="w-full h-[84px] flex justify-center items-center z-30 bg-[#1E3E2A]">
            <button
              ref={btn}
              className="bg-white py-[13px] w-[254px] h-[48px] rounded-full gap-[8px] text-[.875rem] text-[#020A0C] leading-[22.4px] font-light sofiaProL flex justify-center items-center"
            >
              Find Your Virtual Assistant
            </button>
          </div>
        </div>

        <Image
          ref={image}
          src={img}
          alt="Top Virtual Assistants"
          className="hidden lg:flex object-cover absolute bottom-0"
        ></Image>
        <Image
          ref={imageTwo}
          width={360}
          height={225}
          src={resImg}
          alt="Top Virtual Assistants"
          className="flex w-full lg:hidden object-cover"
        ></Image>
      </div>
    </section>
  );
};

export default HomeHero;
