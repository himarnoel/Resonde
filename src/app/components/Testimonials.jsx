"use client";
import React, { useEffect, useRef } from "react";
import TestimonialDisc from "./TestimonialDisc";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import obj from "../../../public/home/testimonials/Virtual Garden Group.svg";
import { useGSAP } from "@gsap/react";

const Testimonials = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for staggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none restart reverse",
      },
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 90,
      duration: 1,
      ease: "power2.out",
    }).from(
      textRef.current,
      { opacity: 0, y: 30, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#E6EDDD] w-full min-h-screen py-[136px] px-[20px] md:px-[80px] overflow-hidden"
    >
      <div className="md:max-w-[1672px] mx-auto flex flex-col justify-center items-start gap-[123px]">
        <div className="flex flex-col justify-center items-start w-full xl:w-[799px] gap-[16px]">
          <div className="flex justify-center items-start gap-[8px]">
            <Image
              width={20}
              height={20}
              className="object-cover"
              src={obj}
              alt="Object"
            />
            <p className="text-[#58575A] text-[14px] leading-[21px] font-normal sofiaProR">
              What our customers are saying
            </p>
          </div>
          <h1
            ref={titleRef}
            className="text-[#002C15] text-[2rem] xl:text-[3.5rem] leading-[38.4px] xl:leading-[58px] font-semibold sofiaProR"
          >
            What our customers are saying
          </h1>
          <p
            ref={textRef}
            className="text-[#58575A] text-base font-light sofiaProL"
          >
            Unlock the power of efficient task management with Virtual Garden
            Flow. Here is a look at how we handle contracts and payments.
          </p>
        </div>
        <TestimonialDisc />
      </div>
    </section>
  );
};

export default Testimonials;
