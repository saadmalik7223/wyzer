import Image from "next/image";
import Beams from "@/components/Beams";
import Navbar from "@/app/Components/UI/Navbar";
import HeroSection from "@/app/Sections/HeroSection";
import ScrollRevealSection from "@/app/Sections/ScrollReveal";
import Shadeline from "@/app/Components/UI/Shadeline";
import TravelPick from "@/app/Sections/TravelPick";
import ScrambledTextSection from "@/app/Sections/ScrambledText";

export default function Home() {
  return (
    <>
      {/* // hero Section start from here */}
      <div
        style={{ width: "100vw", height: "100vh", position: "relative" }}
        className="overflow-hidden"
      >
        <Navbar />
        <HeroSection />
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={25}
        />
      </div>
      {/* // hero Section start from here */}
      {/* Scrooo Reveal start from here */}
      <main className="mx-[10%] mt-[100px] mb-[0px]">
        <h1 className="text-3xl">The Thought Behind Wyzer</h1>
        <ScrollRevealSection />
      </main>
      {/* Scrooo Reveal end from here */}
      {/* third Sectiom start from here */}
      <Shadeline height={2} />
      <main className="mx-[10%] mt-[50px] mb-[50px]">
        <h1 className="text-5xl font-bricolage font-semibold">
          Built on <span className="text-[var(--primary-color)]">Clarity</span>
        </h1>
      </main>
      <Shadeline height={2} />
      <TravelPick />
      <Shadeline height={2} />
      <ScrambledTextSection />
    </>
  );
}
