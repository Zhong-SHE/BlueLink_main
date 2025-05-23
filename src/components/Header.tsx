
import React from 'react';
import { cn } from '@/lib/utils';

import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import Navigation from './Navigation';

import logo from "../assets/logo.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-[#0F172A] py-4 border-b border-[#223043]">
      <div className="relative container mx-auto px-4 flex justify-between items-center max-w-[1400px]">
        <img src={logo} alt="Bluelink" className="h-8 sm:h-10 lg:h-12" />
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
              <p
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
              >
                {item}
              </p>
            ))}
          </ul>
        </nav>
        <FiMenu className="text-white text-xl transition-animation hidden max-md:block" onClick={() => setShowNav(true)} />
      </div>

      {showNav &&
        <Navigation
          handleClick={() => setShowNav(false)}
          scrollToSection={scrollToSection}
        />
      }
    </header>
  );
};

export default Header;
