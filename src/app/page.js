import Image from "next/image";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import HowWeWork from "./components/HowWeWork";
import UniquesVAService from "./components/UniquesVAService";
import WhatYouGet from "./components/WhatYouGet";
import UniquesSKills from "./components/UniquesSKills";

export default function Home() {
  return (
    <main className="relative">
      {/* <Loading/> */}
      <HomeHero/>
      <HowWeWork/>
      <UniquesVAService/>
      <WhatYouGet/>
      <UniquesSKills/>
    </main>
  );
}
