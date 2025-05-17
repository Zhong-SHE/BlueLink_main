
import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "Alex Hart",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces"
    },
    {
      name: "Elena Yang",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces"
    },
    {
      name: "Marcus Waters",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces"
    },
    {
      name: "Aisha Paul",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="w-full bg-[#0a1522] py-20" id="team">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the Experts Behind BlueLink
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team has a rich background in blockchain technology and enterprise software development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-[#0b1623] border border-[#223043] rounded-lg overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-teal-400">{member.role}</p>
                <div className="flex mt-4 space-x-3">
                  {["Twitter", "LinkedIn", "GitHub"].map((social, idx) => (
                    <a 
                      key={idx}
                      href="#" 
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      <span className="text-xs">{social}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
