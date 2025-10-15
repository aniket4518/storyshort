"use client"
import { ModeToggle } from "./mode-toggle";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      <div className="hidden lg:block w-full">
        <div 
          className={`flex relative items-center rounded-full transition-all duration-300 mx-auto ${
            scrolled 
              ? "bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md shadow-lg border border-black/20 dark:border-white/20 py-1.5 px-4 w-[85%]" 
              : "bg-transparent py-2 px-4 w-full"
          }`}
        >
          {/* Left section - Logo and Nav Links */}
          <div className={`flex flex-row items-center transition-all duration-300 ${scrolled ? 'gap-1' : 'gap-2'}`}>
            <a className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20 dark:text-white" href="/">
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                {/* Place your logo SVG here */}
              </div>
              <span className="text-lg font-bold">StoryShort</span>
            </a>
            <div className={`flex items-center transition-all duration-300 ${scrolled ? 'gap-0.5' : 'gap-1.5'}`}>
              <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-black/40 transition duration-200" href="/pricing">
                Pricing
              </a>
              <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-black/40 transition duration-200" href="/blog">
                Blog
              </a>
              <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-black/40 transition duration-200" href="/affiliate">
                <span className="relative z-10 mr-2">Affiliate Program</span>
                <span className="px-1 py-0.5 bg-yellow-400 dark:bg-yellow-400/90 text-black text-[10px] font-bold rounded">New</span>
              </a>
            </div>
          </div>

          {/* Spacer - this creates the gap between left and right sections */}
          <div className="flex-1"></div>

          {/* Right section - Theme Toggle, Sign in, Get Started */}
          <div className={`flex items-center transition-all duration-300 ${scrolled ? 'space-x-1' : 'space-x-2'}`}>
            <ModeToggle />
            <a href="/login">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-black dark:text-white transition-colors h-10 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-black/40">
                Sign in
              </button>
            </a>
            <a href="/signup">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-black dark:text-white transition-colors border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white/10 dark:hover:border-white h-10 px-4 py-2 rounded-full">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md items-center w-full rounded-md px-2.5 py-1.5 transition duration-200">
          <a className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20 dark:text-white" href="/">
            <div className="w-[30px] h-[30px]">
              {/* Logo */}
            </div>
            <span className="text-lg font-bold">StoryShort</span>
          </a>
          {/* Hamburger icon */}
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-6 w-6 text-black dark:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}