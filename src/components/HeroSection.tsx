"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Badge from "./ui/badge";

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
              <div className="overflow-hidden w-full max-w-[600px] h-10 rounded-md relative">
                <div
                  className="whitespace-nowrap text-[#FACC15] font-semibold text-sm md:text-base lg:text-lg absolute"
                  style={{ animation: "slide 10s linear infinite" }}
                >
                  🚀 $BLT PinkSale FairLaunch Coming Soon          
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.pinksale.finance/launchpad/ethereum/0x1f9c5a008c55Ede9D55b35Bae0d2e6deEDC60291"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-gradient-to-r from-[#b8e6e9] to-[#1a9c89] hover:from-[#3FE3CC] hover:to-[#22B3A2] text-white font-bold text-base md:text-lg px-8 py-3 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#2DD4BF]/50"
              >
                🚀 Launch on Pinksale
              </a>

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
