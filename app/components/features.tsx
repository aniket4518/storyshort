"use client"
// ...existing code...
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-5xl lg:text-6xl font-bold text-center mb-4 text-black dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Telling Stories has never been this easy
        </motion.h2>
        
        {/* Subheading with colored text */}
        <motion.p
          className="text-center text-base text-gray-600 dark:text-gray-400 mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From <span className="text-orange-500 font-medium">Image generation</span> to{" "}
          <span className="text-orange-500 font-medium">video generation</span>, StoryShort can generate any style of video in seconds.
        </motion.p>

        {/* Top Two Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feature 1 - Text to Video */}
          <motion.div
            className="flex flex-col bg-white dark:bg-black rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                The most powerful Text to Video tool
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Generate a video by plopping in just a <span className="text-orange-500 font-medium">text</span>, get a{" "}
                <span className="text-orange-500 font-medium">background</span> and get a video in seconds.
              </p>
              <div className="bg-white dark:bg-black rounded-3xl p-8 flex-1 flex items-center justify-center relative overflow-hidden">
                {/* Video attached instead of placeholder */}
                <motion.div
                  className="w-full max-w-md bg-black rounded-2xl p-0 shadow-2xl overflow-hidden flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <video
                    src="https://strshrt.xyz/storyshort-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 - AI Photo */}
          <motion.div
            className="flex flex-col bg-white dark:bg-black rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                AI Photo <span className="text-orange-500">(realistic images)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Generate the most realistic images with the most{" "}
                <span className="text-orange-500 font-medium">advanced</span> AI models.
              </p>
              <div className="bg-white dark:bg-black rounded-3xl p-8 flex-1 flex items-center justify-center">
                {/* Grid of image cards */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                  { [
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // forest
                    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // mountain
                    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // river
                    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80", // ancient ruins
                  ].map((url, idx) => (
                    <motion.img
                      key={idx}
                      src={url}
                      alt={`AI Image ${idx+1}`}
                      className="rounded-2xl aspect-[3/4] shadow-lg object-cover w-full h-full cursor-pointer"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
                      whileTap={{ scale: 0.97 }}
                    />
                  )) }
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Three Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 3 - Turn images into videos */}
          <motion.div
            className="flex flex-col bg-white dark:bg-black rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                Turn images into videos
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Make your <span className="text-orange-500 font-medium">videos</span> even more engaging with by turning{" "}
                <span className="text-orange-500 font-medium">AI Images</span> into videos.
              </p>
              <div className="bg-white dark:bg-black rounded-3xl p-6 flex-1 flex items-center justify-center">
                {/* Image to video visualization */}
                <div className="relative w-full max-w-xs">
                  <div className="bg-gradient-to-br from-purple-900 via-red-500 to-orange-500 rounded-2xl aspect-[9/16] shadow-2xl"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 4 - Automatic Voiceover */}
          <motion.div
            className="flex flex-col bg-white dark:bg-black rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                Automatic Voiceover
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Use <span className="text-orange-500 font-medium">Deepfake</span> &{" "}
                <span className="text-orange-500 font-medium">OpenAI</span> voices to generate voiceovers for your videos.
              </p>
              <div className="bg-white dark:bg-black rounded-3xl p-6 flex-1 flex flex-col justify-center">
                {/* Voice options list */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">Adam</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Deep, middle-aged</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">★</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">Charlotte</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Female, young</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">Will</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Male, young</p>
                      </div>
                    </div>
                    <button className="text-orange-500 hover:text-orange-600">
                      <span className="text-xs font-semibold">Playing...</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">Bryan</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Deep, middle-aged</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">Audrey</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Female, middle-aged</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 5 - Beautiful customizable captions */}
          <motion.div
            className="flex flex-col bg-white dark:bg-black rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                Beautiful customizable captions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your videos come with beautiful, customizable captions.
              </p>
              <div className="bg-white dark:bg-black rounded-3xl p-6 flex-1 flex items-center justify-center">
                {/* Caption example on video */}
                <div className="relative w-full max-w-xs">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl aspect-[9/16] shadow-2xl flex items-end justify-center p-6">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full">
                      <p className="text-black dark:text-white font-bold text-lg text-center">
                        TWIST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
