"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Badge from "./ui/badge";
import logo from "@/assets/Logo-BLT.png";

const HeroSection = () => {
  return (
    <section className="w-full px-3 md:px-6 lg:px-12 overflow-hidden" id="home">
      <div className="relative w-full h-full py-8 md:py-16 overflow-hidden">
        <div className="container py-8 md:py-16 mx-auto px-4 relative max-w-[1400px]">
          {/* Background Image Layer */}
          <div className="absolute inset-0 rounded-full max-[450px]:rounded-4xl bg-[url('/image.png')] bg-cover bg-center opacity-10 z-0" />

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center gap-5">
            <Badge label={"Blockchain Solutions"} />
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                Tomorrow's Solution,
                <br />
                <span className="text-[#2DD4BF] block md:inline">
                  Today's Success
                </span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-[800px] mt-2">
                BlueLink bridges traditional finance and Web3 — enabling secure trading, tokenized assets, and fast, compliant blockchain infrastructure.
              </p>

              {/* Presale Notification */}
              {/* <div className="overflow-hidden w-full max-w-[600px] h-10 rounded-md relative">
                <div
                  className="whitespace-nowrap text-[#FACC15] font-semibold text-sm md:text-base lg:text-lg absolute"
                  style={{ animation: "slide 10s linear infinite" }}
                >
                  🚀 $BLT PinkSale FairLaunch is Live        
                </div>
              </div> */}

              {/* CTA Button */}
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <a
                  href="https://exchange.bluelinkblockchain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-3 inline-flex items-center justify-center text-[#1a9c89] hover:text-[#3FE3CC] font-semibold text-xs md:text-sm px-6 py-2 rounded-lg transition-all duration-300 border border-[#1a9c89] hover:border-[#3FE3CC] focus:outline-none focus:ring-4 focus:ring-[#2DD4BF]/50"
                >
                  <img src="https://img.icons8.com/ios-filled/20/1a9c89/exchange.png" alt="Exchange Icon" class="mr-2" />
                  BlueLink Exchange
                </a>

                <a
                  href="https://test-explorer.bluelinkblockchain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-3 inline-flex items-center justify-center text-[#1a9c89] hover:text-[#3FE3CC] font-semibold text-xs md:text-sm px-6 py-2 rounded-lg transition-all duration-300 border border-[#1a9c89] hover:border-[#3FE3CC] focus:outline-none focus:ring-4 focus:ring-[#2DD4BF]/50"
                >
                  <img src="https://img.icons8.com/ios-filled/20/1a9c89/blockchain.png" alt="Blockchain Icon" class="mr-2" />
                  BlueLink Blockchain
                </a>

                <a
                  href="https://test-faucet.bluelinkblockchain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-3 inline-flex items-center justify-center text-[#1a9c89] hover:text-[#3FE3CC] font-semibold text-xs md:text-sm px-6 py-2 rounded-lg transition-all duration-300 border border-[#1a9c89] hover:border-[#3FE3CC] focus:outline-none focus:ring-4 focus:ring-[#2DD4BF]/50"
                >
                  <img src="https://img.icons8.com/ios-filled/20/1a9c89/water.png" alt="Faucet Icon" class="mr-2" />
                  $BLT Testnet Faucet
                </a>

                <a
                  href="https://etherscan.io/address/0xb1C6b03969b8b2c98DF17Dd0852c1391691932f8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-3 inline-flex items-center justify-center text-[#1a9c89] hover:text-[#3FE3CC] font-semibold text-xs md:text-sm px-6 py-2 rounded-lg transition-all duration-300 border border-[#1a9c89] hover:border-[#3FE3CC] focus:outline-none focus:ring-4 focus:ring-[#2DD4BF]/50"
                >
                  <img src={logo} alt="BLT Icon" class="mr-2 w-4 h-4" />
                  BlueLink Token - $BLT
                </a>
              </div>
              {/* Description */}

            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
