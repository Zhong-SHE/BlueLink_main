
import React from 'react';
import { cn } from '@/lib/utils';

import logo from "../../public/logo.png";

const Header = () => {
  return (
    <header className="w-full bg-[#0a1522] py-4 border-b border-[#223043]">
      <div className="relative container mx-auto px-4 flex justify-between items-center max-w-[1440px]">
        <img src={logo} alt="Bluelink" className="h-8 sm:h-10 lg:h-12" />
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
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
      </div>
    </header>
  );
};

export default Header;
