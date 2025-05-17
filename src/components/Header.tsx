
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="w-full bg-[#0a1522] py-4 border-b border-[#223043]">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-[1440px]">
        <div className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400">
            <path d="M16 2L4 9L16 16L28 9L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 16L16 23L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 23L16 30L28 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-2 text-white font-semibold text-xl">BlueLink</span>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors text-sm">
          Get a Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
