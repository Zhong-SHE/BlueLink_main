
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "BlueLink transformed our supply chain operations with their custom blockchain solution. The transparency and efficiency gains have been truly game-changing.",
      author: "Sarah Johnson",
      position: "COO at LogisticsPro",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "The team's expertise in DeFi development helped us launch our platform in record time. Their ongoing support has been invaluable.",
      author: "Michael Chen",
      position: "Founder at FinBlock",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "Working with BlueLink was a seamless experience. Their smart contract audit identified critical issues before launch, potentially saving us millions.",
      author: "Jessica Miller",
      position: "CTO at SecureAssets",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="w-full bg-[#0a1522] py-20 border-t border-[#223043]">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take it from the businesses we've worked with – our solutions deliver real results.
          </p>
        </div>

        <Carousel 
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-3/4 lg:basis-3/5">
                <div className="bg-[#0b1623] border border-[#223043] rounded-lg p-8">
                  <div className="text-teal-400 mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9999 10.5C13.3806 10.5 14.4999 9.38071 14.4999 8C14.4999 6.61929 13.3806 5.5 11.9999 5.5C10.6192 5.5 9.49988 6.61929 9.49988 8C9.49988 9.38071 10.6192 10.5 11.9999 10.5Z" />
                      <path d="M17.5 17.5C19.9853 17.5 22 15.4853 22 13C22 10.5147 19.9853 8.5 17.5 8.5C15.0147 8.5 13 10.5147 13 13C13 15.4853 15.0147 17.5 17.5 17.5Z" />
                      <path d="M11.9999 22C14.2091 22 15.9999 20.2091 15.9999 18C15.9999 15.7909 14.2091 14 11.9999 14C9.79074 14 7.99988 15.7909 7.99988 18C7.99988 20.2091 9.79074 22 11.9999 22Z" />
                      <path d="M6.5 17.5C8.98528 17.5 11 15.4853 11 13C11 10.5147 8.98528 8.5 6.5 8.5C4.01472 8.5 2 10.5147 2 13C2 15.4853 4.01472 17.5 6.5 17.5Z" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-medium italic mb-8">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-white font-medium">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
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

export default TestimonialSection;
