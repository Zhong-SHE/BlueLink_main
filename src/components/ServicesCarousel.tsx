
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Coins, Database, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Custom smart contracts for automated, secure business processes and transactions."
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "DeFi Solutions",
      description: "Decentralized finance applications that revolutionize lending, borrowing, and trading."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "NFT Development",
      description: "End-to-end NFT marketplace development with minting, trading, and auction capabilities."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Exchange Development",
      description: "Secure and scalable centralized and decentralized exchange platforms (CEX/DEX)."
    },
  ];

  const totalSlides = Math.ceil(services.length / 4);
  const visibleServices = services.slice(activeIndex * 4, activeIndex * 4 + 4);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full bg-[#0a1522] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-center mt-12 gap-2">
          <button 
            onClick={prevSlide}
            className="bg-[#0b1623] border border-[#223043] rounded-full p-2 text-white hover:bg-[#223043] transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? 'bg-teal-400 w-6' : 'bg-[#223043]'
              } mx-1 transition-all duration-300`}
            />
          ))}
          
          <button 
            onClick={nextSlide}
            className="bg-[#0b1623] border border-[#223043] rounded-full p-2 text-white hover:bg-[#223043] transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
