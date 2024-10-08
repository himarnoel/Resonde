'use client'

import React, { useState } from "react";
import Loading from "./components/Loading";
import HomeHero from "./components/HomeHero";
import HowWeWork from "./components/HowWeWork";
import UniquesSKills from "./components/UniquesSKills";
import WorldClassTalents from "./components/WorldClassTalents";
import World from "./components/World";
import Testimonials from "./components/Testimonials";
import BecomeVA from "./components/BecomeVA";

export default function Home() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <main className="relative">
      {/* {!isLoadingComplete && <Loading onLoadingComplete={handleLoadingComplete} />}
      {isLoadingComplete && (
       
      )} */}
       <>
          <HomeHero />
          <HowWeWork />
          <UniquesSKills />
          <WorldClassTalents />
          <World />
          <Testimonials />
          <BecomeVA />
        </>
    </main>
  );
}
