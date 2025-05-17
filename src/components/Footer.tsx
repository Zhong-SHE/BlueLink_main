
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#091018] text-gray-300 py-12 border-t border-[#223043]">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400">
                <path d="M16 2L4 9L16 16L28 9L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L16 23L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 23L16 30L28 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-white font-semibold text-xl">BlueLink</span>
            </div>
            <p className="text-sm mb-4">
              Leading blockchain solutions provider, empowering businesses with advanced decentralized technologies.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <span className="text-xs">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Quick Links",
              links: ["Home", "About Us", "Services", "Case Studies", "Blog"]
            },
            {
              title: "Services",
              links: ["Smart Contracts", "DeFi Development", "NFT Solutions", "Exchange Platform", "Security Audits"]
            },
            {
              title: "Resources",
              links: ["Documentation", "Whitepaper", "API Reference", "Privacy Policy", "Terms of Service"]
            }
          ].map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#223043] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 BlueLink. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
