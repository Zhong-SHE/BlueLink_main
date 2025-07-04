import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import logo from "../assets/logo.png";
import message from "../assets/message.png";

import {
  RiFacebookLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiInstagramLine,
  RiTelegramLine,
  RiDiscordLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] text-gray-300 py-12 border-t border-[#1F2937]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="BlueLink Logo" className="h-12 mb-4" />
            <p className="text-sm mb-4">
              Global leader in delivering innovative blockchain solutions that
              empower businesses to thrive in the decentralized economy.
            </p>
            <p className="text-sm text-blue-300">
              Dubai & British Virgin Islands | Regulated & Compliant
            </p>
            <div className="flex gap-4 mt-2">
              {/* Uncomment Facebook if needed */}
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <RiFacebookLine className="text-2xl text-gray-400 hover:text-teal-400 transition" />
              </a> */}
              <a
                href="https://x.com/Bluelink2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterLine className="text-2xl text-gray-400 hover:text-teal-400 transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/bluelink-blockchain-services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine className="text-2xl text-gray-400 hover:text-teal-400 transition" />
              </a>
              <a
                href="https://www.instagram.com/bluelinkblockchain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramLine className="text-2xl text-gray-400 hover:text-teal-400 transition" />
              </a>
              <a
                href="https://github.com/BlueLink-Blockchain-Services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine className="text-2xl text-gray-400 hover:text-teal-400 transition" />
              </a>
              <a
                href="https://t.me/bluelinkblockchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTelegramLine className="text-2xl text-gray-400 hover:text-teal-400 transition" />
              </a>
              <a
                href="https://discord.gg/sB7exbyR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiDiscordLine className="text-2xl text-gray-400 hover:text-teal-400 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links and Services */}
          {[
            {
              title: "Quick Links",
              links: [
                "About Us",
                "Services",
                "Technology",
                "Our Team",
                "Contact",
              ],
              hrefs: ["about", "services", "technology", "team", "contact"],
            },
            {
              title: "Services",
              links: [
                "Smart Contract Development",
                "DeFi Solutions",
                "NFT Development",
                "Exchange Development",
                "Enterprise Blockchain",
              ],
              hrefs: [],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {section.hrefs.length > 0 ? (
                      <a
                        href={`#${section.hrefs[i]}`}
                        className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{link}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section (Optional - Uncomment if needed) */}
          {/* 
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and insights on blockchain technology.
            </p>
            <div className="grid grid-cols-[7fr_1fr] gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500"
              />
              <Button className="bg-teal-500 hover:bg-teal-600 text-black rounded-md p-2 flex items-center justify-center">
                <img src={message} alt="Send" className="h-5 w-5" />
              </Button>
            </div>
          </div>
          */}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#223043] pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 BlueLink. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/docs/BlueLink_Privacy_Policy.pdf"
              target="_blank"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/docs/BlueLink_Terms_of_Service.pdf"
              target="_blank"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/docs/BlueLink_Cookie_Policy.pdf"
              target="_blank"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-xs text-center mt-4 px-4 max-w-4xl mx-auto">
          Disclaimer: BlueLink provides blockchain infrastructure and services;
          not intended as financial or investment advice and may be restricted
          in some jurisdictions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
