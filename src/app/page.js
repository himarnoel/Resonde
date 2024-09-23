import Image from "next/image";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";

export default function Home() {
  return (
    <main className="relative">
      <Loading/>
      <HomeHero/>
    </main>
  );
}
