import { ExternalLink } from 'lucide-react';
import React from "react";
import Badge from './ui/badge';
import fireblocks from "../assets/partners/fireblocks.jpg";
import moonpay from "../assets/partners/moonpay.jpg";
import solidproof from "../assets/partners/solidproof.jpg";
import startupr from "../assets/partners/startupr.jpg";
import sumsub from "../assets/partners/sumsub.png";

interface partner {
    name: string;
    category: string;
    logo: string;
    website: string;
  }
  
  const partners: Partner[] = [
    {
      name: 'Sumsub',
      category: 'KYC/AML Provider',
      logo: sumsub,
      website: 'https://sumsub.com'
    },
    {
      name: 'Startupr Hong Kong Limited',
      category: 'Legal Advisory',
      logo: startupr,
      website: 'https://startupr.com'
    },
    {
      name: 'Solidproof.io',
      category: 'Audit Firm',
      logo: solidproof,
      website: 'https://solidproof.io'
    },
    {
      name: 'Fireblocks',
      category: 'Wallet Security',
      logo: fireblocks,
      website: 'https://fireblocks.com'
    },
    {
      name: 'Moonpay',
      category: 'Fiat On/Off Ramp',
      logo: moonpay,
      website: 'https://moonpay.com'
    }
  ];
  
  const Partners = () => {
    return (
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-12 lg:mb-16">
          <Badge label="Our Partners" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
          Our Partners
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted collaborations with industry leaders ensuring security, compliance, and excellence
          </p>
        </div>
  
          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="bg-partners-card border border-partners-border rounded-xl p-8 h-full 
                              shadow-card hover:shadow-hover transition-all duration-300 
                              hover:border-primary/20 hover:-translate-y-1">
                  
                  {/* Logo Container */}
                  <div className="flex items-center justify-center mb-6 h-24">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain filter grayscale 
                               group-hover:grayscale-0 transition-all duration-300
                               group-hover:scale-110 rounded-lg"
                    />
                  </div>
  
                  {/* Partner Info */}
                  <div className="text-center">
                    <h3 className="font-semibold text-white text-lg text-foreground mb-2 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {partner.category}
                    </p>
  
                    {/* External Link Icon */}
                    <div className="flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-muted-foreground 
                                             group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 
                                group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                </div>
              </a>
            ))}
          </div>
  
          {/* Bottom Text */}
        </div>
      </section>
    );
  };
  
  export default Partners;