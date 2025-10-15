import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-4 text-black dark:text-white">
          Telling Stories has never been this easy
        </h2>
        
        {/* Subheading with colored text */}
        <p className="text-center text-base text-gray-600 dark:text-gray-400 mb-20 max-w-4xl mx-auto">
          From <span className="text-orange-500 font-medium">Image generation</span> to{" "}
          <span className="text-orange-500 font-medium">video generation</span>, StoryShort can generate any style of video in seconds.
        </p>

        {/* Top Two Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feature 1 - Text to Video */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
              The most powerful Text to Video tool
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Generate a video by plopping in just a <span className="text-orange-500 font-medium">text</span>, get a{" "}
              <span className="text-orange-500 font-medium">background</span> and get a video in seconds.
            </p>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 flex-1 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for video editor interface */}
              <div className="w-full max-w-md bg-gray-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 bg-orange-400 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-700 h-8 rounded"></div>
                      <div className="bg-gray-700 h-8 rounded"></div>
                      <div className="bg-gray-700 h-8 rounded"></div>
                      <div className="bg-gray-700 h-8 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 h-48 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Feature 2 - AI Photo */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
              AI Photo <span className="text-orange-500">(realistic images)</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Generate the most realistic images with the most{" "}
              <span className="text-orange-500 font-medium">advanced</span> AI models.
            </p>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 flex-1 flex items-center justify-center">
              {/* Grid of image cards */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl aspect-[3/4] shadow-lg"></div>
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl aspect-[3/4] shadow-lg"></div>
                <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl aspect-[3/4] shadow-lg"></div>
                <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl aspect-[3/4] shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 3 - Turn images into videos */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
              Turn images into videos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Make your <span className="text-orange-500 font-medium">videos</span> even more engaging with by turning{" "}
              <span className="text-orange-500 font-medium">AI Images</span> into videos.
            </p>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 flex-1 flex items-center justify-center">
              {/* Image to video visualization */}
              <div className="relative w-full max-w-xs">
                <div className="bg-gradient-to-br from-purple-900 via-red-500 to-orange-500 rounded-2xl aspect-[9/16] shadow-2xl"></div>
              </div>
            </div>
          </div>

          {/* Feature 4 - Automatic Voiceover */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
              Automatic Voiceover
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Use <span className="text-orange-500 font-medium">Deepfake</span> &{" "}
              <span className="text-orange-500 font-medium">OpenAI</span> voices to generate voiceovers for your videos.
            </p>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 flex-1 flex flex-col justify-center">
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

          {/* Feature 5 - Beautiful customizable captions */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
              Beautiful customizable captions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your videos come with beautiful, customizable captions.
            </p>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 flex-1 flex items-center justify-center">
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
        </div>
      </div>
    </section>
  );
}
