// ...existing code...

export default function PromptsSection() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-4 text-black dark:text-white">
          Turn Prompts Into Videos At Ultra Speed
        </h2>
        
        {/* Subheading */}
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
          What if you could create engaging videos for TikTok and Youtube on autopilot and then publish them daily without lifting a finger?
        </p>

        {/* Two Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature 1 - Tell Stories with AI */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Tell Stories with AI
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              From writing script to creating voiceover and scene guidance, StoryShort does it all.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 flex-1 flex items-center justify-center overflow-hidden">
              {/* Interface mockup */}
              <div className="w-full max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left side - Script interface */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm font-semibold text-black dark:text-white">Horror Story</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Script</span>
                    </div>
                    <div className="space-y-2 mb-6">
                      <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                        Deep in the heart of the mysterious man who vanished every full moon! It started in a small town, where locals...
                      </p>
                    </div>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">
                      AI Writing Script
                    </button>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Dr. Voice</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                        <span className="text-xs font-semibold text-black dark:text-white">Josh</span>
                        <span className="text-xs text-gray-500">American, Stump, Young</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                        </svg>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Background music</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-black dark:text-white">Ghost Arpeggio</span>
                        <p className="text-xs text-gray-500">Violin, Scary, Intense</p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Video preview */}
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl aspect-[9/16] relative overflow-hidden shadow-xl flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
                    <div className="relative z-10 text-center px-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20"></div>
                      </div>
                      <p className="text-white text-xl font-bold px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg inline-block">
                        I want to
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Edit Videos in Seconds */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Edit Videos in Seconds
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              StoryShort generates beautiful AI videos that get views and subscribers.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 flex-1 flex items-center justify-center">
              {/* Video editor interface mockup */}
              <div className="w-full max-w-2xl bg-gray-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex gap-4">
                  {/* Left sidebar */}
                  <div className="flex-1 space-y-4">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-xs font-semibold">Timeline</span>
                        <div className="flex gap-1">
                          <div className="w-6 h-6 bg-gray-700 rounded"></div>
                          <div className="w-6 h-6 bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 bg-purple-600 rounded"></div>
                        <div className="h-12 bg-gray-700 rounded"></div>
                        <div className="h-12 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-gray-800 rounded-lg"></div>
                      <div className="aspect-square bg-gray-800 rounded-lg"></div>
                      <div className="aspect-square bg-gray-800 rounded-lg"></div>
                      <div className="aspect-square bg-gray-800 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Right preview */}
                  <div className="w-48">
                    <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl aspect-[9/16] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-32 mx-auto mb-2 bg-black/20 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
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
