"use client"
import React, { useState } from "react";

const VideoGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  async function fetchLatestVideo() {
    const res = await fetch("/api/video/latest");
    if (res.ok) {
      const data = await res.json();
      setVideoUrl(data.video?.url || null);
    }
  }

  async function handleGenerate() {
    setLoading(true);
    const res = await fetch("/api/video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    setLoading(false);
    if (res.ok) {
      const data = await res.json();
      setVideoUrl(data.video.url);
    }
  }

  React.useEffect(() => {
    fetchLatestVideo();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-2 md:p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 md:gap-8"> 
        <div className="flex-1 bg-[#18181B] rounded-2xl p-4 md:p-6 shadow-lg flex flex-col gap-4 md:gap-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-1">AI Video Generator</h1>
            <p className="text-gray-400 text-xs md:text-sm">Create stunning videos with AI using text prompts</p>
          </div>
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">Prompt</label>
            <textarea
              className="w-full bg-[#23232A] text-white rounded-lg p-2 md:p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 text-xs md:text-base"
              rows={2}
              placeholder="A cinematic shot of a sunset over the ocean, with waves gently rolling..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-700 text-white px-4 py-2 md:px-4 md:py-3 rounded-lg text-xs md:text-sm font-semibold mt-2"
            onClick={handleGenerate}
            disabled={loading || !prompt}
          >
            {loading ? "Generating..." : "Generate Video"}
          </button>
        </div>
         
        <div className="flex-1 bg-[#18181B] rounded-2xl p-4 md:p-6 shadow-lg flex flex-col items-center justify-center">
          {videoUrl ? (
            <video controls className="w-full h-40 md:h-56 rounded-xl bg-black">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-40 md:h-56 flex flex-col items-center justify-center bg-[#23232A] rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 md:w-12 h-8 md:h-12 text-gray-500 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11z" />
              </svg>
              <div className="text-gray-400 text-xs md:text-sm font-semibold">No video generated yet</div>
              <div className="text-gray-600 text-xs">Your AI-generated video will appear here</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoGenerator;
