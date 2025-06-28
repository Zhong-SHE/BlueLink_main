
import React from 'react';
import { Code, Coins, Database, BarChart3, CandlestickChart, Network, CreditCard, Gavel, ShieldCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Badge from './ui/badge';

const BlockchainSolutionsSection = () => {
  const services = [
    {
      icon: <CandlestickChart className="w-6 h-6" />,
      title: 'BlueLink Exchange',
      description:
        'Regulated trading of cryptocurrencies and tokenized stocks with T+1 settlement, powered by BlueLink Coin.',
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'BlueLink Blockchain',
      description:
        'High-speed, EVM-compatible Layer 1 with 12,500+ TPS for DeFi and asset settlement.',
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: 'BlueLink Token/Coin',
      description:
        'ERC-20 BLT, migrating 1:1 to BlueLink Coin for trading, staking, and governance.',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'BlueLink Banking',
      description:
        'Fiat-crypto integration with debit cards and real-time conversions via regulated partners.',
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: 'BlueLink Governance (DAO)',
      description:
        'Community-driven, transparent model for decision-making and protocol evolution.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'BlueLink Security',
      description:
        'Audited contracts, MPC custody, and AI-driven detection for unmatched trust.',
    },
    
  ];

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="services">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-4 md:mb-12 lg:mb-16">
          <Badge label="Our Ecosystem" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            Building the Future of Finance
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            BlueLink’s ecosystem is a comprehensive, interconnected platform designed to redefine global finance through innovation, compliance, and accessibility.
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
              <CarouselItem key={index} className={`${index > 0 && "pl-6"} sm:basis-1/2 lg:basis-1/4`}>
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
