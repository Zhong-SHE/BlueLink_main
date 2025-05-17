
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BridgingTechnologySection from '@/components/BridgingTechnologySection';
import BlockchainSolutionsSection from '@/components/BlockchainSolutionsSection';
import TechnologyStackSection from '@/components/TechnologyStackSection';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a1522]">
      <Header />
      <main>
        <HeroSection />
        <BridgingTechnologySection />
        <BlockchainSolutionsSection />
        <TechnologyStackSection />
        <TeamSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
