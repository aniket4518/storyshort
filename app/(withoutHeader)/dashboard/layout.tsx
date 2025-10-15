import React from "react";
import Image from "next/image";
import SidebarProfile from "../../components/SidebarProfile";
import Link from "next/link";
import MobileNavbar from "../../components/MobileNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <MobileNavbar />
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 bg-black p-4 md:p-6 min-h-[80px] md:min-h-screen flex-col justify-between items-stretch">
        <div className="flex-1 flex flex-col gap-4 md:gap-0">
          <div className="flex items-center gap-2 mb-4 md:mb-8">
            <Image src="/logo.jpeg" alt="StoryShort Logo" width={28} height={28} className="h-7 w-7 rounded" />
            <span className="text-yellow-400 text-xl font-bold">StoryShort.ai</span>
          </div>
          <nav className="flex flex-col gap-2 mb-4 md:mb-8 overflow-x-auto">
            <SidebarItem label="Home" icon="/file.svg" href="/dashboard" />
            <SidebarItem label="Faceless Videos" icon="/globe.svg" href="#" />
            <SidebarItem label="Series" icon="/next.svg" href="#" />
            <SidebarItem label="Calendar" icon="/vercel.svg" href="#" />
            <SidebarItem label="Exports" icon="/window.svg" href="#" />
            <SidebarItem label="Media" icon="/window.svg" href="#" />
          </nav>
          <div className="mb-4 md:mb-8">
            <div className="text-gray-400 text-sm mb-2">Tools</div>
            <div className="flex flex-col gap-2">
              <SidebarItem label="AI Images" icon="/file.svg" href="#" />
              <SidebarItem label="AI Videos" icon="/globe.svg" href="/dashboard/aivideo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:mb-2 w-full md:w-auto">
          <div className="bg-gradient-to-br from-purple-900 to-purple-600 rounded-xl p-4 flex flex-col items-center mb-2 md:mb-4 w-full md:w-auto">
            <div className="text-white text-2xl font-bold mb-1">10 <span className="text-xs font-normal">Free</span></div>
            <div className="text-gray-200 text-xs mb-2">Credits available</div>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold w-full md:w-auto">Upgrade now</button>
          </div>
          {/* SidebarProfile shows logged-in user's image, name, and email */}
          <SidebarProfile />
        </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col p-2 md:p-8 w-full">
        {children}
      </main>
    </div>
  );
}

type SidebarItemProps = {
  label: string;
  icon: string;
  href?: string;
};

function SidebarItem({ label, icon, href }: SidebarItemProps) {
  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-[#23232A]"
      >
  <Image src={icon} alt="icon" width={20} height={20} className="h-5 w-5" />
        {label}
      </Link>
    );
  }
  return (
    <span
      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400"
    >
  <Image src={icon} alt="icon" width={20} height={20} className="h-5 w-5" />
      {label}
    </span>
  );
}
