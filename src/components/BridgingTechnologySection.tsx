import React from 'react';
import Badge from './ui/badge';

import handshake from '../assets/handshake1.png';

import { FaBullseye } from 'react-icons/fa6';
import { TbBrandSafari } from "react-icons/tb";
import { HiOutlineMap } from "react-icons/hi";
import aboutvideo from '../assets/about.mp4';
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
        "To empower individuals and institutions to effortlessly trade, invest, and bank across digital and real-world assets, fostering transparency, security, and decentralized governance within a regulatory-aligned framework.",
    },
    {
      icon: TbBrandSafari,
      title: 'Our Vision',
      description:
        'To lead as the world’s most trusted blockchain ecosystem, harmonizing tokenized assets, cryptocurrencies, fiat banking, and community-driven governance into a high-performance, compliant infrastructure.',
    },
    {
      icon: HiOutlineMap,
      title: 'Our Journey',
      description:
        "Having delivered 19+ blockchain solutions worldwide, BlueLink is now building a transformative ecosystem, launching the BlueLink Exchange, Blockchain, and Coin to redefine global finance with integrity and innovation.",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="about">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center flex flex-col items-center mb-4 md:mb-8">
          <Badge label="About Bluelink" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            Bridging Traditional Finance with
            <span className="text-white">{' '}Decentralized Innovation</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            BlueLink Blockchain Services is crafting a cutting-edge financial ecosystem, merging traditional finance with decentralized technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex items-center">
          <div className="rounded-lg overflow-hidden border-4 border-sky-700 shadow-lg shadow-sky-400 outline outline-2 outline-offset-2 outline-sky-800">
            <video
             src={aboutvideo}
             className="w-full h-full"
             loop
             controls
            
            >
              About BlueLink
            </video>
            {/* <img
              src={handshake}
              alt="Blockchain Technology"
              className="w-full h-full  "
            /> */}
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
