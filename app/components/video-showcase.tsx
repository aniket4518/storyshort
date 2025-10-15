import Image from "next/image";

export default function VideoShowcase() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-4 text-black dark:text-white">
          Create unique faceless videos for every niche
        </h2>
        
        {/* Subheading */}
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-4xl mx-auto">
          From Image generation to video generation, StoryShort can generate any style of video in seconds.
        </p>

        {/* Video Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Large Card - Life with dinosaurs */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
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
          </div>

          {/* Small Card - The Story of Julius Caesar */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold text-center px-4">The Story of Julius Caesar</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-white text-sm mb-2 uppercase tracking-wide">MARCH ARRIVED,</p>
              <h3 className="text-white text-xl font-bold">The Story of Julius Caesar</h3>
            </div>
          </div>
        </div>

        {/* Video Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Turn images into videos */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                <span className="text-white text-xl font-bold text-center px-4">Turn images into videos</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-xl font-bold">Turn images into videos</h3>
            </div>
          </div>

          {/* The story of Cleopatra */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-700 flex items-center justify-center">
                <span className="text-white text-xl font-bold text-center px-4">The story of Cleopatra</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white text-sm mb-2 uppercase tracking-wide">ON A</p>
              <h3 className="text-white text-xl font-bold">The story of Cleopatra</h3>
            </div>
          </div>

          {/* Apollo 11 Moon Landing */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-white text-xl font-bold text-center px-4">Apollo 11 Moon Landing</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-cyan-400 text-sm mb-2 uppercase tracking-wide">SMALL STEP</p>
              <h3 className="text-white text-xl font-bold">Apollo 11 Moon Landing</h3>
            </div>
          </div>
        </div>

        {/* Video Grid - Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Japanese Ink Style - Large Card */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-red-900 to-pink-900 flex items-center justify-center">
                <span className="text-white text-2xl font-bold text-center px-4">Japanese Ink Style</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-2xl font-bold">Japanese Ink Style</h3>
            </div>
          </div>

          {/* Rose Card */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-white flex items-center justify-center">
                <span className="text-gray-800 text-xl font-bold text-center px-4">Rose</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
