
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Badge from './ui/badge';
import { TbQuote } from 'react-icons/tb';

import stephan from "../assets/partners/stephan.jpeg";
import david from "../assets/partners/david.jpeg";
import laura from "../assets/partners/laura.jpeg";
const TestimonialSection = () => {
  const testimonials = [
    {
      icon: TbQuote,
      quote: "Great insights on addressing key challenges in the blockchain space! Focusing on creating a secure and transparent ecosystem is crucial.",
      author: "Stephan K",
      position: "Group CEO at Scancruit",
      avatar: stephan
    },
    {
      icon: TbQuote,
      quote: "Innovative approach to blockchain. Excited to see its impact.",
      author: "David Galperin",
      position: "Founder & CEO at SMPS Marketing",
      avatar: david
    },
    {
      icon: TbQuote,
      quote: "BlueLink’s banking system demo impressed us with its seamless fiat-crypto integration, paving the way for real-time payments and user-friendly financial services.",
      author: "Laura",
      position: "Financial Director at LockTree Capital",
      avatar: laura
    }
  ];

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="blog">
      <div className="container mx-auto px-4 md:w-2/3 xl:w-1/2">
        <div className="text-center mb-4 md:mb-12 lg:mb-16">
          <Badge label="Testimonials" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            What Our Partners Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            BlueLink’s exchange and visionary roadmap showcase our transformative ecosystem and robust security, inspiring early partners and beta testers.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <CarouselItem key={index} className="base-1/1">
                  <div className="bg-[#0b1623] border border-[#223043] rounded-lg p-8 flex flex-col items-center justify-center">
                    <div className="bg-[#14B8A633] p-3 rounded-full w-fit h-fit mb-6">
                      <Icon className="text-[#2DD4BF] text-2xl" />
                    </div>
                    <p className="text-white text-2xl font-medium italic mb-8">"{testimonial.quote}"</p>
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <h4 className="text-white font-medium">{testimonial.author}</h4>
                        <p className="text-gray-400 text-xs">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
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

export default TestimonialSection;
