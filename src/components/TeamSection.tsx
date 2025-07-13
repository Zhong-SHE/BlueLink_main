import React from "react";
import Badge from "./ui/badge";
import { FaLinkedin } from "react-icons/fa6";
import mykhailo from "../assets/member/Mykhailo.png";
import vladyslav from "../assets/member/Vladyslav.png";
import nikita from "../assets/member/Nikita.png";
import andrew from "../assets/member/Andrew.png";
import celeste from "../assets/member/Celeste.png";
import rose from "../assets/member/rose.png";
import takao from "../assets/member/Takao.png";
import demetrich from "../assets/member/Demetrich.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const TeamSection = () => {
  const team = [
    {
      name: "Mykhailo Semeniuk",
      role: "Chief Executive Officer",
      image: mykhailo,
      linkedin: "https://www.linkedin.com/in/mykhailo-semeniuk-aa6495340/",
    },
       {
      name: "Demetrich Stokes",
      role: "Co-Founder",
      image: demetrich,
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Vladyslav Shevchenko",
      role: "Chief Financial Officer",
      image: vladyslav,
      linkedin: "https://www.linkedin.com/in/vladyslav-shevchenko-19851105dev/",
    },
    {
      name: "Celeste Paras",
      role: "COO & CMO",
      image: celeste,
      linkedin: "https://www.linkedin.com/in/celesteparas/",
    },
    {
      name: "Takao",
      role: "Chief Technology Officer",
      image: takao,
      linkedin:"https://www.linkedin.com/in/takao-kato-a23456306/",
    },
    {
      name: "Caleb Lin",
      role: "Product Manager",
      image: rose,
      linkedin:"https://www.linkedin.com/in/kian-lip-yap-253b3b372"
    },
    {
      name: "Andrew D.",
      role: "Lead Blockchain Engineer",
      image: andrew,
      linkedin: "https://www.linkedin.com/in/andrew-dyer-b6484a358",
    },
    {
      name: "Nikita Dwivedi",
      role: "Business Development Manager",
      image: nikita,
      linkedin: "https://www.linkedin.com/in/nikita-dwivedi-2b2151171/",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="team">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-4 md:mb-12 lg:mb-16 ">
          <Badge label="Our Team" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            Meet the Visionary Leaders Powering BlueLink's Success
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our leadership team drives today’s success and builds tomorrow’s
            solutions through blockchain and innovation.
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
              <CarouselItem
                key={index}
                className={`${index > 0 && "pl-6"} sm:basis-1/2 lg:basis-1/4`}
              >
                <div
                  key={index}
                  className="bg-[#0b1623] border border-[#223043] rounded-lg overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-teal-400">{member.role}</p>
                    {/* <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-teal-400 hover:text-white transition-colors"
                    >
                      <FaLinkedin className="mr-1 text-2xl" />
                      
                    </a> */}
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
