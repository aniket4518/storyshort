import Image from "next/image";

export default function ViralVideos() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-20 text-black dark:text-white">
          Creating Viral Faceless Videos<br />
          Has Never Been So Easy
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 - Create Youtube Shorts */}
          <div className="flex flex-col">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
              Create Youtube Shorts
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Create <span className="text-red-600 font-semibold">YouTube Shorts</span> with AI-generated content. No need to record anything.
            </p>
          </div>

          {/* Feature 2 - Create viral TikTok videos */}
          <div className="flex flex-col">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
              Create viral TikTok videos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Create <span className="text-black dark:text-white font-semibold">TikTok videos</span> that go viral. We used to dance in tip sync.
            </p>
          </div>

          {/* Feature 3 - Publish on Tiktok & Youtube */}
          <div className="flex flex-col">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
              Publish on Tiktok & Youtube
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Publish your <span className="text-black dark:text-white font-semibold">videos directly</span> from the app.
            </p>
          </div>

          {/* Feature 4 - 100% Powered by AI */}
          <div className="flex flex-col">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
              100% Powered by AI
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              We use the <span className="text-purple-600 font-semibold">latest</span> & most powerful models to generate content that is{" "}
              <span className="text-purple-600 font-semibold">relevant and engaging</span>.
            </p>
          </div>

          {/* Feature 5 - AI Generated Voiceovers */}
          <div className="flex flex-col">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
              AI Generated Voiceovers
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              We use the <span className="text-blue-600 font-semibold">latest AI models</span> to generate voiceovers for your videos.
            </p>
          </div>

          {/* Feature 6 - Background music */}
          <div className="flex flex-col">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
              Background music
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Add <span className="text-pink-600 font-semibold">background music</span> to your videos. We have a library of 1000s of songs.
            </p>
          </div>

          {/* Feature 7 - And much more... */}
          <div className="flex flex-col lg:col-span-3">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
              And much more...
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              StoryShort is constantly evolving. We are adding new features every week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
