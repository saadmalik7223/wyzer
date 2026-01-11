import Image from "next/image";
import Beams from "@/components/Beams";
import Navbar from "@/app/Components/UI/Navbar";
import HeroSection from "@/app/Sections/HeroSection";
import ScrollRevealSection from "@/app/Sections/ScrollReveal";
import Shadeline from "@/app/Components/UI/Shadeline";
import TravelPick from "@/app/Sections/TravelPick";
import ScrambledTextSection from "@/app/Sections/ScrambledText";
import Footer from "@/app/Components/Footer";

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
      <Shadeline height={2} marginY={10} />
      <div className="text-5xl font-bricolage font-semibold flex items-center justify-center gap-8 my-12">
        <h1 className="tracking-[0.15em]">FAQs</h1>
        <svg
          width="46"
          height="36"
          viewBox="0 0 46 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 35.2681V31.8121L11.1242 14.892V14.424L0.000151873 9.528V6L13.9682 12.516V16.692L0 35.2681Z"
            fill="#F9F9F9"
            fill-opacity="0.5"
          />
          <path
            d="M16 32.2681V28.8121L27.1242 11.892V11.424L16.0002 6.528V3L29.9682 9.516V13.692L16 32.2681Z"
            fill="#F9F9F9"
            fill-opacity="0.5"
          />
          <path
            d="M32 29.2681V25.8121L43.1242 8.892V8.424L32.0002 3.528V0L45.9682 6.516V10.692L32 29.2681Z"
            fill="#F9F9F9"
            fill-opacity="0.5"
          />
        </svg>
      </div>
      <Shadeline height={2} marginY={10} />
      <Footer />
    </>
  );
}
