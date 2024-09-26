import Image from "next/image";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import HowWeWork from "./components/HowWeWork";
import UniquesVAService from "./components/UniquesVAService";
import WhatYouGet from "./components/WhatYouGet";

export default function Home() {
  return (
    <main className="relative">
      {/* <Loading/> */}
      <HomeHero/>
      <HowWeWork/>
      <UniquesVAService/>
      <WhatYouGet/>
    </main>
  );
}
