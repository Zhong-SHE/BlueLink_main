
import React from 'react';
import { Code, Coins, Database, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const BlockchainSolutionsSection = () => {
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

  return (
    <section className="w-full bg-[#0a1522] py-20" id="services">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Blockchain Solutions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our full-spectrum blockchain services help businesses implement innovative solutions that drive real value.
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/4">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static bg-[#0b1623] border-[#223043] text-white hover:bg-[#223043]" />
            <CarouselNext className="relative static bg-[#0b1623] border-[#223043] text-white hover:bg-[#223043]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BlockchainSolutionsSection;
