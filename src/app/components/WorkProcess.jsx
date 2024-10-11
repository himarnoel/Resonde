"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../../public/how-it-works/process/img1.png";
import img2 from "../../../public/how-it-works/process/img2.png";
import img3 from "../../../public/how-it-works/process/img3.png";
import img4 from "../../../public/how-it-works/process/img4.png";

gsap.registerPlugin(ScrollTrigger);

const WorkProcess = () => {
  const processes = [
    {
      id: 1,
      title: "Submit Your Request",
      desc: "Clients provide details about the specific task or project they need help with. Provide project details, and well find the right talent for your needs.",
      bgOut: "#1E3E2A",
      bgIn: "white",
      img: img,
    },
    {
      id: 2,
      title: "We Scout Top Talent",
      desc: "Virtual Garden matches you with the best-fit virtual assistant based on your needs. Our system handpicks top Nigerian virtual assistants tailored to your specific tasks.",
      bgOut: "white",
      bgIn: "#F3F8EE",
      img: img2,
    },
    {
      id: 3,
      title: "Seamless Collaboration",
      desc: "Work with your virtual assistant via our platform for efficient task management. Work seamlessly on our platform with  built-in task management and communication tools.",
      bgOut: "#F3F8EE",
      bgIn: "#E5F0D7",
      img: img3,
    },
    {
      id: 4,
      title: "Complete Your Project",
      desc: "Receive results and easily finalize your contract when the project is completed. Get your project delivered with satisfaction guaranteed, and complete the contract with ease.",
      bgOut: "#E5F0D7",
      bgIn: "#CBD7BA",
      img: img4,
    },
  ];

  const sectionRefs = useRef([]);

  useGSAP(() => {
    sectionRefs.current.forEach((section, index) => {
      const content = section.querySelector(".content");
      const image = section.querySelector(".process-image");
      const title = content.querySelector("h1");
      const description = content.querySelector("p");
      const button = content.querySelector("button");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none play reverse",
        },
      });

      tl.from(title, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          description,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          button,
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          image,
          {
            x: index % 2 === 0 ? 50 : -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      // Parallax effect for images
      gsap.to(image, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });
  }, []);

  return (
    <>
      {processes.map((process, index) => (
        <section
          ref={(el) => (sectionRefs.current[index] = el)}
          className="overflow-hidden min-h-screen xl:h-[800px] w-full"
          key={index}
          style={{ backgroundColor: process.bgOut }}
        >
          <div
            style={{ backgroundColor: process.bgIn }}
            className="min-h-screen xl:h-[800px] w-full px-[24px] gap-[40px] lg:gap-[200px] pt-[72px] pb-[88px] lg:py-[144px] xl:px-[96px] rounded-tl-[24px] lg:rounded-tl-[48px] relative rounded-tr-[24px] lg:rounded-tr-[48px] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center"
          >
            <div className="lg:w-[500px] xl:w-[580px] flex flex-col justify-center items-start content">
              <div className="flex flex-col justify-center items-start gap-[16px] md:gap-[24px]">
                <div className="flex justify-center items-start gap-[4px] text-[#1E3E2A] leadding-[26.4px] md:leading-[67.2px] text-[1.5rem] md:text-[3rem] font-semibold sofiaProBld">
                  <p>{process.id}.</p>
                  <h1>{process.title}</h1>
                </div>
                <p className="text-[#333333] leading-[25.6px] font-light text-[1rem] sofiaProL">
                  {process.desc}
                </p>
                <button className="w-[240px] rounded-full py-[8px] px-[24px] gap-[8px] border border-[#A3A2A5] bg-white text-base font-light sofiaProL">
                  Get Started
                </button>
              </div>
            </div>
            <Image
              width={640}
              height={440}
              className="lg:absolute lg:right-[18%] lg:translate-x-[50%] lg:translate-y-[0%] rounded-[24px] object-cover process-image"
              src={process.img}
              alt={`Process step ${process.id}`}
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default WorkProcess;
