"use client"
// ...existing code...
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

// Helper component for hover-to-play video
interface HoverPlayVideoProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}
function HoverPlayVideo({ src, className, children }: HoverPlayVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);
  return (
    <div className={className} onMouseEnter={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 bg-black"
      />
      {children}
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-5xl lg:text-6xl font-bold text-center mb-4 text-black dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Create unique faceless videos for every niche
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From Image generation to video generation, StoryShort can generate any style of video in seconds.
        </motion.p>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <motion.div
            className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-green-700/50">
              {/* Placeholder for actual image */}
              <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Life with dinosaurs</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-2xl font-bold">Life with dinosaurs</h3>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-cyan-400 text-lg font-semibold">stretching to</span>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <HoverPlayVideo src="https://strshrt.xyz/out.mp4" className="w-full h-full absolute inset-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold text-center px-4">Turn images into videos</span>
              </div>
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-white text-xl font-bold">Turn images into videos</h3>
              </div>
            </HoverPlayVideo>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <motion.div
            className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <video
              src="https://strshrt.xyz/dinosaurs.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-2xl font-bold">Life with dinosaurs</h3>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-cyan-400 text-lg font-semibold">stretching to</span>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <video
              src="https://strshrt.xyz/storyshort-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-white text-sm mb-2 uppercase tracking-wide">MARCH ARRIVED,</p>
              <h3 className="text-white text-xl font-bold">The Story of Julius Caesar</h3>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <video
              src="https://strshrt.xyz/apollo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-cyan-400 text-sm mb-2 uppercase tracking-wide">SMALL STEP</p>
              <h3 className="text-white text-xl font-bold">Apollo 11 Moon Landing</h3>
            </div>
          </motion.div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <HoverPlayVideo src="https://strshrt.xyz/demo-video.mp4" className="w-full h-full absolute inset-0">
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-white text-2xl font-bold">Japanese Ink Style</h3>
              </div>
            </HoverPlayVideo>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <video
              src="https://strshrt.xyz/dinosaurs.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-800 text-xl font-bold text-center px-4">Rose</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
