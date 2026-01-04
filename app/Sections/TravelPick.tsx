"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".gsap-card");

    gsap.fromTo(
      cards,
      {
        x: -120,
        opacity: 0,
        scale: 0.95,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <main className="mx-[10%] mb-[150px]">
      {" "}
      <h1 className="text-5xl  font-bricolage font-semibold">
        Wyzer <span className="text-[var(--primary-color)]">Travel</span>
        Picks{" "}
      </h1>
      <div
        ref={containerRef}
        className="w-full flex gap-[20px] mt-[50px] mb-[50px]"
      >
        <div className="gsap-card flex-1 bg-[#171717] rounded-[20px] pl-[30px] pt-[30px]">
          <h1 className="text-2xl font-bricolage font-semibold text-[#B21919]">
            Axis Bank Privilege.
          </h1>

          <ul className="pl-[8px] font-bricolage font-semibold mt-[20px] space-y-2 list-none">
            <li>• Low forex 0.99%</li>
            <li>• Global acceptance</li>
          </ul>
          <div className="w-[100%] h-[300px] bg-red-500 mt-[100px]"></div>
        </div>

        <div className="gsap-card flex-1 bg-[#171717] rounded-[20px] pl-[30px] pt-[30px]">
          {" "}
          <h1 className="text-2xl font-bricolage font-semibold text-[#A7A7A7]">
            IndusInd Bank CRED.
          </h1>
          <ul className="pl-[8px] font-bricolage font-semibold mt-[20px] space-y-2 list-none">
            <li>• Airport lounge </li>
            <li>• Travel insurance cover</li>
          </ul>
          <div className="w-[100%] h-[300px] bg-[#A7A7A7] mt-[100px]"></div>
        </div>
        <div className="gsap-card flex-1 bg-[#171717] rounded-[20px] pl-[30px] pt-[30px]">
          {" "}
          <h1 className="text-2xl font-bricolage font-semibold text-[#2A4773]">
            SBI SimplySave.
          </h1>
          <ul className="pl-[8px] font-bricolage font-semibold mt-[20px] space-y-2 list-none">
            <li>• Rail & flight reward </li>
            <li>• Domestic lounge</li>
          </ul>
          <div className="w-[100%] h-[300px] bg-[#2A4773] mt-[100px]"></div>
        </div>
      </div>
    </main>
  );
}
