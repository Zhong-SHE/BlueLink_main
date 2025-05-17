
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#0a1522] py-24 relative overflow-hidden" id="home">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-[1440px]">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-teal-400 font-medium mb-2 uppercase tracking-wider text-sm">FUTURE PROOF</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Tomorrow's Solution,{' '}
            <span className="text-teal-400 block md:inline">Today's Success</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Empowering businesses to thrive in the decentralized economy with innovative
            blockchain solutions.
          </p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md px-6">
            Get a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
