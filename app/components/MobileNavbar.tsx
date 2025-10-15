"use client"
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/dashboard" },
  { label: "Faceless Videos", href: "#" },
  { label: "Series", href: "#" },
  { label: "Calendar", href: "#" },
  { label: "Exports", href: "#" },
  { label: "Media", href: "#" },
  { label: "AI Images", href: "#" },
  { label: "AI Videos", href: "/dashboard/aivideo" },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="flex items-center justify-between px-4 py-3">
        <img src="/logo.jpeg" alt="StoryShort Logo" className="h-7 w-7 rounded" />
        <button
          className="text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="bg-black border-t border-gray-800">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-white text-lg border-b border-gray-800 hover:bg-gray-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
