
import React from 'react';
import Badge from './ui/badge';

import mykhailo from "../assets/member/Mykhailo.png";
import vladyslav from "../assets/member/Vladyslav.png";
import zhong from "../assets/member/Zhong.jpg";
import nikita from "../assets/member/Nikita.png";
import andrew from "../assets/member/Andrew.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const TeamSection = () => {
  const team = [
    {
      name: "Mykhailo Semeniuk",
      role: "Chief Executive Officer",
      image: mykhailo
    },
    {
      name: "Vladyslav Shevchenko",
      role: "Chief Financial Officer",
      image: vladyslav
    },
    {
      name: "Zhong",
      role: "Contract Project Manager",
      image: zhong
    },
    {
      name: "Andrew",
      role: "Team Lead",
      image: andrew
    },
    {
      name: "Nikita",
      role: "Business Development Manager",
      image: nikita
    }
  ];

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="team">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-4 md:mb-12 lg:mb-16 ">
          <Badge label="Our Team" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            Meet the Experts Behind BlueLink
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our talented team brings together decades of experience in blockchain technology and business
            innovation.
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
            {team.map((member, index) => (
              <CarouselItem key={index} className={`${index > 0 && "pl-6"} sm:basis-1/2 lg:basis-1/4`}>
                <div key={index} className="bg-[#0b1623] border border-[#223043] rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-teal-400">{member.role}</p>
                  </div>
                </div>
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

export default TeamSection;
