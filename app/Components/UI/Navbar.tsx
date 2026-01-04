"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[85%] -translate-x-1/2 rounded-[50px] border border-white/10 bg-white/10 backdrop-blur-[5px] shadow-lg">
      <div className="flex h-15 items-center justify-between px-3">
        {/* LEFT: Logo */}
        <div className="ml-5 text-xl font-bold tracking-wide text-[var(--primary-color)]">
          WYZER
        </div>

        <div className="flex items-center justify-between gap-32">
          {/* CENTER: Navigation */}
          <div className="hidden md:flex items-center gap-[50px] font-poppins font-semibold text-[16px] text-center text-[#F9F9F9]/80">
            <Link href="#" className="hover:text-white transition">
              Cards
            </Link>
            <Link href="#" className="hover:text-white transition">
              Compare
            </Link>
            <Link href="#" className="hover:text-white transition">
              Learn
            </Link>
          </div>

          {/* RIGHT: Call To Action */}
          <div className="flex items-center gap-4">
            <button className="rounded-[40px] px-8 py-2 font-poppins font-semibold text-[16px]text-white bg-[#F9F9F9]/10 hover:bg-white/10 transition">
              Sign in
            </button>

            <button className="rounded-[40px] bg-white px-8 py-2 font-poppins font-semibold text-[16px]font-semibold text-black hover:bg-white/90 transition">
              Unlock Better Cards
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
