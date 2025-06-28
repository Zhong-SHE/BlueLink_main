import React from "react";
import { cn } from "@/lib/utils";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Navigation from "./Navigation";

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
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
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
        <a
          href="docs/BlueLink_Whitepaper_v14.pdf"
          download
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-xl transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          <FiDownload className="text-xl transition-transform duration-300 ease-in-out group-hover:translate-y-0.5" />
          Whitepaper
        </a>
        <FiMenu
          className="text-white text-xl transition-animation hidden max-md:block"
          onClick={() => setShowNav(true)}
        />
      </div>

      {showNav && (
        <Navigation
          handleClick={() => setShowNav(false)}
          scrollToSection={scrollToSection}
        />
      )}
    </header>
  );
};

export default Header;
