"use client"
import React from "react";
import { useSession } from "next-auth/react";

const SidebarProfile: React.FC = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <img
        src={session.user.image || "https://randomuser.me/api/portraits/men/32.jpg"}
        alt="avatar"
        className="h-8 w-8 rounded-full"
      />
      <div>
        <div className="text-white text-sm font-semibold">{session.user.name}</div>
        <div className="text-gray-400 text-xs">{session.user.email}</div>
      </div>
    </div>
  );
};

export default SidebarProfile;
