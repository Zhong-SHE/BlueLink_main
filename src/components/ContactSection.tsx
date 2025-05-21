
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Badge from './ui/badge';

import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#0F172A] py-20" id="contact">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-16">
          <Badge label="Contact Us" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to unlock blockchain's potential for your business? Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className='text-[#D1D5DB]'>
                  Full Name
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500 mt-2"
                  />
                </div>
                <div className='text-[#D1D5DB]'>
                  Email Address
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500 mt-2"
                  />
                </div>
              </div>
                <div className='text-[#D1D5DB]'>
                Subject
                <Input
                  type="text"
                  placeholder="How can we help you?"
                  className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500 mt-2"
                />
              </div>
                <div className='text-[#D1D5DB]'>
                Message
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="mt-2 w-full rounded-md bg-[#374151]/50 border-[#4B5563] px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <Button className="bg-teal-500 hover:bg-teal-600 text-black w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Have questions or want to discuss your blockchain project? Our team is ready to assist you.
            </p>

            <div className="space-y-6">
              {[
                { icon: MdOutlineMail, label: "Email Us", value: "Tech@bluelinkblockchain.com" },
                { icon: MdOutlinePhone, label: "Call Us", value: "+1 (954) 603-7860" },
                { icon: MdOutlineLocationOn, label: "Visit Us", value: "Wilmington, DE, USA" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-[#092b34] rounded-lg p-3 text-teal-400 mt-1 shrink-0">
                      <Icon className='text-[#2DD4BF] text-xl' />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{item.label}</h4>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
