
import React from 'react';

import { FiCheckCircle } from "react-icons/fi";

import Badge from './ui/badge';

import handshake from "../assets/handshake2.png";

import ethereum from "../assets/technology/ethereum.png";
import solana from "../assets/technology/solana.png";
import polkadot from "../assets/technology/polkadot.png";
import cosmos from "../assets/technology/cosmos.png";
import binance from "../assets/technology/binance.png";
import avalanche from "../assets/technology/avalanche.png";

const TechnologyStackSection = () => {
  const technologies = [
    { name: "Ethereum", icon: ethereum },
    { name: "Solana", icon: solana },
    { name: "Polkadot", icon: polkadot },
    { name: "Cosmos", icon: cosmos },
    { name: "Binance Smart Chain", icon: binance },
    { name: "Avalanche", icon: avalanche },
  ];

  const features = [
    "Advanced blockchain frameworks",
    "Secure smart contract development",
    "Cross-chain interoperability",
    "Scalable architecture design",
    "Enterprise-grade security",
    "Optimized performance"
  ];

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="technology">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-16">
          <Badge label="Our Technology" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            Cutting-Edge Blockchain Technology
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We leverage the most advanced blockchain frameworks and technologies to deliver secure, scalable,
            and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 bg-[#1F2937]/50 border border-[#374151] p-8 rounded-lg md:rounded-xl lg:rounded-2xl">
            <h3 className="text-2xl font-semibold text-white mb-4">Technology Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {technologies.map((tech, idx) => (
                <div key={idx} className="p-4 flex flex-col items-center justiy-center">
                  <div className="p-4 bg-[#374151]/50 rounded-lg w-fit h-fit">
                    <img src={tech.icon} className="w-9 h-9" />
                  </div>
                  <h4 className="text-[#D1D5DB] font-medium text-center">{tech.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="grid grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="text-teal-400 mt-1">
                      <FiCheckCircle className="text-teal-400 text-base" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src={handshake}
              alt="Blockchain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
