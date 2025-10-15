import React from "react";

const DashboardHome = () => {
  return (
    <>
      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 px-2 md:px-0 gap-2">
        <div className="text-lg md:text-xl font-semibold text-gray-300">Dashboard</div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400 text-xs md:text-sm bg-[#18181B] px-3 py-1 rounded-full">You're on Free Plan Upgrade to export videos and more.</span>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold">Upgrade</button>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-[#18181B] rounded-2xl p-4 md:p-8 items-center mb-8 shadow-lg w-full">
        <div className="flex-1 w-full">
          <h1 className="text-xl md:text-4xl font-semibold mb-4">Welcome to StoryShort <span className="inline-block">👋</span></h1>
          <p className="text-gray-300 text-base md:text-lg mb-8">Create faceless videos on Auto-Pilot for any purpose using AI, in seconds.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 md:px-6 py-3 rounded-lg text-base md:text-lg font-semibold shadow-lg w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Create New Video
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 md:px-6 py-3 rounded-lg text-base md:text-lg font-semibold w-full sm:w-auto">Tutorials</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="dashboard" className="w-full h-32 md:h-56 object-cover" />
          </div>
        </div>
      </div>

      {/* Recent Videos Section */}
      <div className="bg-[#18181B] rounded-2xl p-4 md:p-6 shadow-lg w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
          <h2 className="text-lg md:text-xl font-bold">Recent videos</h2>
          <a href="#" className="text-gray-300 text-xs md:text-sm hover:underline">View all</a>
        </div>
        <div className="text-gray-400 text-xs md:text-sm">Recently created videos</div>
      </div>

      {/* Floating Icon */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-[#23232A] rounded-full p-2 md:p-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 md:w-8 h-6 md:h-8 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;