import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-[#18181b]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit bg-yellow-100 rounded-full p-2 hover:bg-brown-500">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <span className="text-yellow-500 font-medium text-sm   ">
              Powered by GPT-5
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white"
            style={{ letterSpacing: "-0.02em", lineHeight: "1.05" }}
          >
            Create{" "}
            <span className="text-yellow-400">viral</span>
            <br />
            <span className="text-yellow-400">faceless videos</span>
            <br />
            on <span className="text-black dark:text-white">Auto-Pilot.</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md">
            Create AI Videos in minutes. Our AI creation tool creates viral AI
            videos for you.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full w-fit transition-colors shadow-lg">
            Get Started
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Right Content - Video Cards */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          {/* Card 1 - Cleopatra */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[220px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transform -rotate-0 z-5">
            <video
              src="https://strshrt.xyz/cleopatra-features.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end p-6 z-10">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl">
                  The Cleopatre Effect
                </h3>
              </div>
            </div>
          </div>

          {/* Card 2 - Icy Peaks (Everest) */}
          <div className="absolute left-5/8 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transform rotate-12 z-3">
            <video
              src="https://strshrt.xyz/everest.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-center pt-6 z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-cyan-300 font-bold text-sm">icy</span>
                <span className="text-white font-bold text-sm">peaks</span>
                <svg
                  className="w-8 h-8 text-white mt-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.5 9.5L9 12l2.5 2.5L13 13l2.5 2.5L18 13l-2.5-2.5L18 8l-2.5 2.5L13 8l-1.5 1.5zm0 0" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-white text-sm font-medium">
                sadest story on sst
              </p>
            </div>
          </div>

          {/* Card 3 - Apollo 11 */}
          <div className="absolute left-3/4 top-5/8 -translate-y-1/2 w-[220px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transform rotate-26 z-2">
            <video
              src="https://strshrt.xyz/apollo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 z-10">
              <p className="text-white text-sm font-medium text-right">
                Day Apollo 11 landed on
                <br />
                <span className="text-2xl font-bold">moon</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
