import Image from "next/image";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import HowWeWork from "./components/HowWeWork";
import UniquesVAService from "./components/UniquesVAService";
import WhatYouGet from "./components/WhatYouGet";
import UniquesSKills from "./components/UniquesSKills";
import WorldClassTalents from "./components/WorldClassTalents";
import World from "./components/World";
import Testimonials from "./components/Testimonials";
import BecomeVA from "./components/BecomeVA";

export default function Home() {
  return (
    <main className="relative">
      {/* <Loading/> */}
      <HomeHero/>
      <HowWeWork/>
      <UniquesSKills/>
      <WorldClassTalents/>
      <World/>
      <Testimonials/>
      <BecomeVA/>
      {/* <UniquesVAService/>
      <WhatYouGet/>
       */}
    </main>
  );
}
