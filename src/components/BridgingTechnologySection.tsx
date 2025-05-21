import React from 'react';
import Badge from './ui/badge';

import handshake from '../assets/handshake1.png';

import { FaBullseye } from 'react-icons/fa6';
import { TbBrandSafari } from "react-icons/tb";
import { HiOutlineMap } from "react-icons/hi";

interface Feature {
  icon?: React.ElementType;
  title: string;
  description: string;
}

const BridgingTechnologySection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: FaBullseye,
      title: 'Our Mission',
      description:
        "To bridge cutting-edge technology with real-world business needs, providing secure, scalable, and tailored solutions that drive efficiency, transparency, and growth.",
    },
    {
      icon: TbBrandSafari,
      title: 'Our Vision',
      description:
        'To be the global leader in blockchain innovation, empowering businesses across industries to harness the full potential of decentralized technologies.',
    },
    {
      icon: HiOutlineMap,
      title: 'Our Journey',
      description:
        "From delivering 19+ blockchain solutions globally, we're now building our own ecosystem—launching BlueLink Exchange, BlueLink Blockchain, and the native BlueLink Coin.",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] py-20" id="about">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center flex flex-col items-center gap-4 mb-8">
          <Badge label="About Bluelink" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bridging Cutting-Edge Technology with
            <br />
            <span className="text-white">Real-World Business Needs</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            BlueLink Blockchain Services is a global leader in delivering innovative blockchain solutions that
            empower businesses to thrive in the decentralized economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src={handshake}
              alt="Blockchain Technology"
              className="w-full h-full  "
            />
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 bg-gray-800/50 border border-gray-700 p-2 lg:p-4 xl:p-6 rounded-md md:rounded-lg">
                  <div className="bg-[#092b34] rounded-lg p-2 xl:p-3 text-teal-400 mt-1 shrink-0">
                    {Icon && <Icon className="text-[#2DD4BF] text-base lg:text-lg xl:text-xl" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2 lg:text-base xl:text-lg">{feature.title}</h3>
                    <p className="text-[10px] text-gray-300 lg:text-xs xl:text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingTechnologySection;
