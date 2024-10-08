"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../../../public/our-services/services/Virtual Garden Resonode (1).svg";
import img2 from "../../../public/our-services/services/Virtual Garden Resonode (2).svg";
import img3 from "../../../public/our-services/services/Virtual Garden Resonode (3).svg";
import img4 from "../../../public/our-services/services/Virtual Garden Resonode (4).svg";
import img5 from "../../../public/our-services/services/Virtual Garden Resonode (5).svg";
import img6 from "../../../public/our-services/services/Virtual Garden Resonode.svg";
import img7 from "../../../public/our-services/services/Virtual Garden Resonode (6).svg";
import ExpertServiceCards from "./ExpertServiceCards";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ExpertServices = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  const services = [
    {
      id: 1,
      serv: "Web Design",
      desc: "Craft visually stunning and functional websites that drive engagement and business growth.",
      img: img6,
    },
    {
      id: 2,
      serv: "Web Development",
      desc: "Build and maintain powerful, scalable websites optimized for user experience and performance.",
      img: img,
    },
    {
      id: 3,
      serv: "Software Maintainance",
      desc: "Keep your systems running smoothly with regular updates, troubleshooting, and optimization.",
      img: img7,
    },
    {
      id: 4,
      serv: "Media Management",
      desc: "Take control of your social media, video content, and digital campaigns with expert assistance.",
      img: img2,
    },
    {
      id: 5,
      serv: "Customer Support",
      desc: "Offer 24/7 responsive and professional support to your customers, boosting satisfaction and loyalty.",
      img: img4,
    },
    {
      id: 6,
      serv: "Data Entry and Management",
      desc: "Efficiently handle large volumes of data entry, organization, and management with precision and accuracy.",
      img: img5,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const cards = cardsRef.current.children;

    // Animate section background
    gsap.fromTo(
      section,
      { backgroundColor: "#F5F5F5" },
      {
        backgroundColor: "#002C15",
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // Animate title and description
    gsap.fromTo(
      [title, description],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate cards
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F5F5] w-full min-h-screen">
      <div className="bg-[#002C15] rounded-tl-[24px] lg:rounded-tl-[72px] rounded-tr-[24px] lg:rounded-tr-[72px] py-[120px] lg:py-[240px] px-[24px] xl:px-[80px] w-full min-h-screen flex flex-col gap-[120px]">
        <div className="max-w-[1129px] mx-auto flex flex-col justify-center items-start gap-[16px]">
          <h1
            ref={titleRef}
            className="font-semibold sofiaProBld leading-[35.2px] lg:leading-[70.4px] text-[2rem] lg:text-[4rem] text-white"
          >
            Expert Services Tailored to Your Needs
          </h1>
          <p
            ref={descriptionRef}
            className="text-[#F1F1F1] leading-[27px] text-[1.125rem] font-light sofiaProL"
          >
            Discover what makes us the go-to platform for sourcing top-notch
            virtual assistants.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="max-w-[1307px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[32px]"
        >
          {services.map((service, index) => (
            <ExpertServiceCards key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertServices;
