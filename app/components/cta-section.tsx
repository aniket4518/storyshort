export default function CTASection() {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#18181b]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Say Goodbye To Boring Videos{" "}
              <span className="inline-block">👋</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with StoryShort.ai today and start creating engaging videos for TikTok and Youtube on autopilot.
            </p>

            <button className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
