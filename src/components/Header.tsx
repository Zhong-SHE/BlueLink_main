import React, { useState } from "react";
import { FiDownload, FiMenu } from "react-icons/fi";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";
import solidproofLogo from "../assets/solidlogo.png";

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
        {/* Logo */}
        <img src={logo} alt="Bluelink" className="h-8 sm:h-10 lg:h-12" />

        {/* Navigation Links (Center) */}
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

        {/* Buttons (Right Side) */}
<div className="hidden md:flex gap-3">
  {/* Whitepaper Button */}
  <a
    href="docs/BlueLink_Whitepaper.pdf"
    download
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow-xl hover:shadow-xl transform active:scale-95 focus:outline-none"
  >
    <FiDownload className="text-xl" />
    Whitepaper
  </a>

  {/* Audit Button with Image Background and Same Gradient Overlay */}
  <a
    href="https://app.solidproof.io/projects/bluelink"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center justify-center text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-xl transform active:scale-95 focus:outline-none w-[140px] h-[42px] sm:w-[160px] sm:h-[48px] text-sm sm:text-base overflow-hidden"
    style={{
      backgroundImage: `url(${solidproofLogo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 opacity-50 hover:from-teal-600 hover:to-teal-800 transition-all duration-300"></div>
    <span className="relative z-10">Audit Report</span>
  </a>
</div>


        {/* Mobile Menu Icon */}
        <FiMenu
          className="text-white text-2xl md:hidden cursor-pointer"
          onClick={() => setShowNav(true)}
        />
      </div>

      {/* Mobile Navigation */}
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
