
import React from 'react';
import { Button } from '@/components/ui/button';
import Badge from './ui/badge';

const HeroSection = () => {
  return (
    <section className="w-full px-12 md:px-24 py-12 overflow-hidden" id="home">
      {/* Background effects */}
      <div className="bg-[url('/image.png')] bg-cover bg-center max-[450px]:rounded-4xl rounded-full w-full h-full py-10 md:py-20">

        <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
          <div className="text-center flex flex-col items-center gap-5 mx-auto">
            <Badge label={"Blockchain Solutions"} />
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                Tomorrow's Solution,{' '}<br />
                <span className="text-[#2DD4BF] block md:inline">Today's Success</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg w-2/3 mx-auto">
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
