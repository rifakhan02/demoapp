'use client';
import React from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'projects', label: 'Projects' },
];

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-sm bg-black/40 border-b border-purple-900/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        
        {/* Logo/Name - MCODE style */}
        <div className="text-2xl font-bold tracking-widest text-white">
          <span className="text-neon"></span><span className="text-purple-400">PORTFOLIO</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-300 uppercase text-sm font-medium hover:text-white transition duration-300 group relative"
            >
              {item.label}
              {/* Underline effect */}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Action Button - SIGNING style */}
        <a 
          href="#contact"
          className="px-4 py-2 text-sm font-medium rounded-full border border-neon text-white shadow-neon hover:bg-purple-900/50 transition duration-300"
        >
          CONNECT
        </a>
      </div>
    </header>
  );
};


export default Navbar;
