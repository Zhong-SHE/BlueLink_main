
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

import logo from "../assets/logo.png";
import message from "../assets/message.png";

import { RiFacebookLine, RiTwitterLine, RiLinkedinLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] text-gray-300 py-12 border-t border-[#1F2937]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logo} className="h-12" />
            <p className="text-sm my-4">
              Global leader in delivering innovative
              blockchain solutions that empower
              businesses to thrive in the decentralized
              economy.
            </p>
            <div className="flex flex-row gap-3 items-center">
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <RiFacebookLine className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
              </a> */}
              <a href="https://x.com/Bluelink2025" target="_blank" rel="noopener noreferrer">
                <RiTwitterLine className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/bluelink-blockchain-services" target="_blank" rel="noopener noreferrer">
                <RiLinkedinLine className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/bluelinkblockchain/" target="_blank" rel="noopener noreferrer">
                <RiInstagramLine className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
              </a>
            </div>

          </div>

          {[
            {
              title: "Quick Links",
              links: ["About Us", "Services", "Technology", "Our Team", "Contact"],
              _href: ["about", "services", "technology", "team", "contact"]
            },
            {
              title: "Services",
              links: ["Smart Contract Development", "DeFi Solutions", "NFT Development", "Exchange Development", "Enterprise Blockchain"]
            },
          ].map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {idx == 0 ?
                      <a href={`#${column._href[linkIdx]}`} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                        {link}
                      </a>
                      :
                      <a className="text-gray-400 text-sm">
                        {link}
                      </a>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the<br />
              latest updates and insights on<br />
              blockchain technology.
            </p>
            <div className="grid grid-cols-[7fr_1fr] gap-2">
              <Input
                type="text"
                placeholder="Your email"
                className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-black w-full rounded-md flex items-center justify-center">
                <img src={message} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#223043] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 BlueLink. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="../src/assets/docs/Privacy_Policy.pdf" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Privacy Policy</a>
            <a href="../src/assets/docs/Terms_of_Service.pdf" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Terms of Service</a>
            <a href="../src/assets/docs/Cookie_Policy.pdf" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
