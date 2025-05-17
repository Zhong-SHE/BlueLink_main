
import React from 'react';

const BridgingTechnologySection = () => {
  const features = [
    {
      title: "Our Mission",
      description: "We strive to bridge the gap between the decentralized future and today's business needs with cutting-edge blockchain solutions."
    },
    {
      title: "Our Vision",
      description: "To be the leading blockchain development partner that empowers businesses to unlock the full potential of decentralized technologies."
    },
    {
      title: "Our Journey",
      description: "With years of expertise in blockchain development, we've helped numerous businesses transform their operations and achieve remarkable growth."
    }
  ];

  return (
    <section className="w-full bg-[#0a1522] py-20" id="about">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bridging Cutting-Edge Technology with<br />
            <span className="text-white">Real-World Business Needs</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We build solutions that connect advanced blockchain capabilities with practical applications that solve real business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/c508fda5-5612-4d47-bb65-1120291c2997.png" 
              alt="Blockchain technology" 
              className="w-full h-full object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-[#092b34] rounded-lg p-3 text-teal-400 mt-1 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4M12 16h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingTechnologySection;
