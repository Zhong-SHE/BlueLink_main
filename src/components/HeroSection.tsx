import React from 'react';
import { Button } from '@/components/ui/button';
import Badge from './ui/badge';

const HeroSection = () => {
  return (
    <section className="w-full px-3 md:px-6 lg:px-12 overflow-hidden" id="home">
      <div className="relative w-full h-full py-8 md:py-16 overflow-hidden">
        <div className="container py-8 md:py-16 mx-auto px-4 relative max-w-[1400px]">
          <div className="absolute inset-0 rounded-full max-[450px]:rounded-4xl bg-[url('/image.png')] bg-cover bg-center opacity-10 z-0" />

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center gap-5">
            <Badge label={"Blockchain Solutions"} />
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                Tomorrow's Solution,<br />
                <span className="text-[#2DD4BF] block md:inline">Today's Success</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg w-3/4 sm:w-2/3 mx-auto">
                BlueLink Blockchain Services is a global leader in delivering innovative blockchain solutions that
                empower businesses to thrive in the decentralized economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;