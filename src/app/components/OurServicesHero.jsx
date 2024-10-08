"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgOne from "../../../public/our-services/unsplash_8jwCWlsBys8.svg";
import bgTwo from "../../../public/our-services/Businessman laptop sunglasses man using phone.svg";
import bgThree from "../../../public/our-services/unsplash_S3GrMiUhpNU.svg";
import img from "../../../public/our-services/two.svg";
import imgTwo from "../../../public/our-services/four.svg";
import imgThree from "../../../public/our-services/one.svg";
import imgFour from "../../../public/our-services/Frame 1618873084.svg";
import ServiceHeroCard from "./ServiceHeroCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurServicesHero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 1,
      bg: bgOne,
      img: img,
      title: "Jane Jones",
      role: "Data Entry and management",
    },
    {
      id: 2,
      bg: bgTwo,
      img: imgTwo,
      title: "Cameron Williamson",
      role: "Web Developer",
    },
    {
      id: 3,
      bg: bgThree,
      img: imgThree,
      title: "Savannah Nguyen",
      role: "Customer support officer",
    },
    {
      id: 4,
      bg: "#1E3E2A",
      img: imgFour,
      title: "Find a Virtual Assistant",
      desc: "40+ Unique Skills",
      head: "Over 250 Virtual Assistants ready to assist.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;
    const cardsContainer = cardsRef.current;

    // Fade in and slide up animation for the section
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Stagger animation for title, description, and button
    gsap.fromTo(
      [title, description, button],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Cards animation
    gsap.fromTo(
      cardsContainer.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsContainer,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F5F5] w-full min-h-screen px-[24px] xl:px-[36px] py-[100px] flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-[1368px] mx-auto flex flex-col justify-center items-center gap-[120px]">
        <div className="flex flex-col justify-center items-center text-center w-[609px] gap-[16px]">
          <h1
            ref={titleRef}
            className="sm:w-[285px] md:w-auto text-[#121212] text-[2.5rem] md:text-[4rem] leading-[48px] md:leading-[64.64px] font-semibold sofiaProR"
          >
            Your Virtual Assistant for Every Need
          </h1>
          <p
            ref={descriptionRef}
            className="text-[#333333] leading-[30px] font-normal sofiaProL text-[1.25rem]"
          >
            &quot;Discover Our Comprehensive Range of Services&quot;
          </p>
          <button
            ref={buttonRef}
            className="w-[254px] py-[13px] text-[#D0EA50] font-light sofiaProL leading-[22.4px] text-[.875rem] bg-[#002C15] gap-[8px] rounded-full h-[48px]"
          >
            Find Your Virtual Assistant
          </button>
        </div>
        <div
          ref={cardsRef}
          className="xl:max-w-[1288px] mx-auto justify-items-center grid grid-cols-4 gap-[3.6px] md:gap-[24px]"
        >
          {cards.map((card, index) => (
            <ServiceHeroCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;
