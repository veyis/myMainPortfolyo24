'use client'
import { useState } from "react";
import Pxlogo from "@/components/pxlogo";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-center items-center fixed top-0 w-full z-10 gap-12 m-0 p-0">
      <nav 
        className="flex justify-between items-center gap-1 p-0.5 border-b border-white/15 bg-white/5 backdrop-blur w-full"
        aria-label="Main Navigation"
      >
        <Pxlogo className="ml-4" />
        <div className="hidden md:flex gap-1">
          <a href="/" className="nav-item">Home</a>
          <a href="/projects" className="nav-item">Projects</a>
          <a href="/about" className="nav-item">About</a>
          <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
        </div>
        <a href="#" className="hidden md:block nav-item">Login</a>
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 md:hidden flex flex-col items-center bg-white/5 backdrop-blur w-full p-4">
          <a href="/" className="nav-item">Home</a>
          <a href="/projects" className="nav-item">Projects</a>
          <a href="/about" className="nav-item">About</a>
          <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
          <a href="#" className="nav-item">Login</a>
        </div>
      )}
    </div>
  );
};
