
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactSection = () => {
  return (
    <section className="w-full bg-[#0a1522] py-20 border-t border-[#223043]" id="contact">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to explore how blockchain can transform your business? Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-[#0b1623] border-[#223043] text-white placeholder:text-gray-500"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-[#0b1623] border-[#223043] text-white placeholder:text-gray-500"
                />
              </div>
              <Input 
                type="text" 
                placeholder="Subject" 
                className="bg-[#0b1623] border-[#223043] text-white placeholder:text-gray-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full rounded-md bg-[#0b1623] border border-[#223043] px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Our team is ready to answer any questions you may have about our blockchain solutions.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: "map-pin", label: "Address", value: "123 Blockchain Ave, San Francisco, CA 94103" },
                { icon: "mail", label: "Email", value: "contact@bluelink.tech" },
                { icon: "phone", label: "Phone", value: "+1 (555) 123-4567" },
                { icon: "clock", label: "Hours", value: "Monday - Friday: 9AM - 6PM PST" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-[#092b34] rounded-lg p-3 text-teal-400 mt-1 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.label}</h4>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
