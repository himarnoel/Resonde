"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/home/Virtual Garden Shapes.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const [bgColor, setBgColor] = React.useState("");
  const [openMenu, setOpenMenu] = React.useState(false);
  const [color, setColor] = React.useState("white");
  const [border, setBorder] = React.useState("0px solid #FFFFFF");

  React.useEffect(() => {
    bgOver(path);
  }, [openMenu, path]);

  const bgOver = (path) => {
    switch (path) {
      case "/":
        if (openMenu) {
          setBgColor("white");
          setColor("#000000");
          setBorder("0.6px solid #1E3E2A");
        } else {
          setBgColor("#1E3E2A");
          setColor("white");
          setBorder("0px solid #FFFFFF");
        }

        break;
      case "/our-services":
      case "/about-us":
      case "/contact-us":
      case "/privacy-policy":
        setBgColor("white");
        setColor("#000000");
        setBorder("0.6px solid #1E3E2A");
        break;
      case "/how-it-works":
        if (openMenu) {
          setBgColor("white");
          setColor("#000000");
          setBorder("0.6px solid #1E3E2A");
        } else {
          setBgColor("#1E3E2A");
          setColor("white");
          setBorder("0px solid #FFFFFF");
        }
        break;
      default:
        setBgColor("white");
        setColor("#000000");
        setBorder("0.6px solid #1E3E2A");
        break;
    }
  };

  const barColor = openMenu ? "#1E3E2A" : color;

  return (
    <>
      <nav
        style={{ backgroundColor: bgColor }}
        className="px-[24px] lg:px-[80px] py-[20px] lg:py-[20px] h-[80px] lg:h-[88px] sticky top-0 w-full z-50 border-b-[.3px] border-b-[#445c4d]"
      >
        <div className="max-w-[1280px] mx-auto flex justify-between items-center gap-6">
          <Link
            href={`/`}
            className="flex justify-center items-center gap-[8px]"
          >
            <Image
              width={32}
              height={32}
              className="object-cover"
              src={logo}
              alt="Virtual Garden Logo"
            />
            <h1
              style={{ color: color }}
              className={`flex text-[20px] lg:text-[2rem] font-medium sofiaProM leading-[35.2px]`}
            >
              Virtual Garden
            </h1>
          </Link>
          <ul className="hidden lg:flex justify-between items-center gap-10">
            <Link
              href={`/how-it-works`}
              style={{ color: color }}
              className="cursor-pointer font-light sofiaProL text-[1rem] leading-[25.6px]"
            >
              How it works
            </Link>

            <Link
              href={"/about-us"}
              style={{ color: color }}
              className="cursor-pointer font-light sofiaProL text-[1rem] leading-[25.6px]"
            >
              About us
            </Link>

            <Link
              href={`/our-services`}
              style={{ color: color }}
              className="cursor-pointer font-light sofiaProL text-[1rem] leading-[25.6px]"
            >
              Our Services
            </Link>
          </ul>
          <Link
            href={`/contact-us`}
            style={{ color: color }}
            className="hidden bg-transparent border border-white lg:flex justify-center items-center h-[48px] w-[167px] font-normal sofiaProR text-[.875rem] leading-[22.4px] py-[13px] px-[48px] rounded-full"
          >
            Contact us
          </Link>

          {/* Hamburger Menu */}
          <div
            onClick={() => setOpenMenu((prev) => !prev)}
            className="w-[32px] h-[32px] flex lg:hidden flex-col justify-center items-end gap-[4px] cursor-pointer duration-300"
          >
            <div
              style={{ backgroundColor: color }}
              className={`duration-300 w-[90%] h-[2px] rounded ${
                openMenu ? "rotate-45 translate-x-1 translate-y-1" : "rotate-0"
              }`}
            ></div>
            <div
              style={{ backgroundColor: color }}
              className={`duration-300 w-[60%] h-[2px] rounded ${
                openMenu
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            ></div>
            <div
              style={{ backgroundColor: color }}
              className={`duration-300 h-[2px] rounded ${
                openMenu
                  ? "-rotate-45 translate-x-1 -translate-y-2 w-[90%]"
                  : "w-[40%] rotate-0"
              }`}
            ></div>
          </div>
        </div>
      </nav>

      {/* Menu */}

      <div
        className={`bg-white w-full sm:w-[375px] h-screen ${
          openMenu ? "right-0" : "right-[-100%]"
        } fixed top-[8%] z-[999] px-[24px] py-[36px] flex lg:hidden flex-col justify-start items-start gap-[64px] ease-in-out duration-300`}
      >
        <Link
          onClick={() => setOpenMenu((prev) => !prev)}
          className="text-[#333333] text-[1rem] font-light leading-[25.6px] sofiaProL"
          href={`/how-it-works`}
        >
          How it works
        </Link>
        <Link
          onClick={() => setOpenMenu((prev) => !prev)}
          className="text-[#333333] text-[1rem] font-light leading-[25.6px] sofiaProL"
          href={`/about-us`}
        >
          About us
        </Link>
        <Link
          onClick={() => setOpenMenu((prev) => !prev)}
          className="text-[#333333] text-[1rem] font-light leading-[25.6px] sofiaProL"
          href={`/our-services`}
        >
          Our Services
        </Link>
        <Link
          onClick={() => setOpenMenu((prev) => !prev)}
          href={`/contact-us`}
          className="border border-[#1E3E2A] py-[15.5px] rounded-full px-[40px] text-[#1E3E2A] leading-[16.8px] font-normal text-[14px] sofiaProL flex justify-center items-center w-full md:w-[328px] h-[64px]"
        >
          Contact us
        </Link>
      </div>
    </>
  );
};

export default Navbar;
