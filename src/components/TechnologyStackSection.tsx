
import React from 'react';

const TechnologyStackSection = () => {
  const technologies = [
    { name: "Ethereum", color: "teal" },
    { name: "Solana", color: "purple" },
    { name: "Polkadot", color: "pink" },
    { name: "Hyperledger", color: "blue" },
  ];

  const features = [
    "Industry-leading security audits for all smart contracts",
    "Scalable architecture for enterprise-grade applications",
    "Seamless integration with existing business systems",
    "Ongoing support and maintenance for all solutions"
  ];

  return (
    <section className="w-full bg-[#0a1522] py-20 border-t border-[#223043]">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-16">
          <p className="text-teal-400 font-medium mb-2 uppercase tracking-wider text-sm">TECHNOLOGY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cutting-Edge Blockchain Technology
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We leverage the most advanced blockchain platforms to build powerful, secure, and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, idx) => (
                <div key={idx} className="bg-[#0b1623] border border-[#223043] rounded-lg p-4">
                  <div className={`w-10 h-10 rounded-full bg-${tech.color}-500 bg-opacity-20 flex items-center justify-center mb-3`}>
                    <span className={`text-${tech.color}-400 font-bold text-xl`}>
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-white font-medium">{tech.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">Blockchain Platform</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="text-teal-400 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/c508fda5-5612-4d47-bb65-1120291c2997.png" 
              alt="Blockchain handshake" 
              className="w-full h-full object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
