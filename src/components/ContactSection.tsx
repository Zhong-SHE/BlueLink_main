import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Badge from './ui/badge';
import emailjs from 'emailjs-com';

import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhone } from "react-icons/md";

import blueteam from "../assets/blueteam.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_rwh667j',    // Replace with your actual EmailJS service ID
      'template_aul2cij',   // Replace with your actual EmailJS template ID
      formData,
      'tRKe_AqaG1ube67ce'        // Replace with your EmailJS public key (user ID)
    )
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="contact">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-4 md:mb-12 lg:mb-16">
          <Badge label="Contact Us" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to unlock blockchain's potential for your business? Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 sm:p-6 md:p-8 h-fit">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className='text-[#D1D5DB]'>
                  Full Name
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    onChange={handleChange}
                    value={formData.name}
                    className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500 mt-2"
                    required
                  />
                </div>
                <div className='text-[#D1D5DB]'>
                  Email Address
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                    value={formData.email}
                    className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500 mt-2"
                    required
                  />
                </div>
              </div>
              <div className='text-[#D1D5DB]'>
                Subject
                <Input
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  onChange={handleChange}
                  value={formData.subject}
                  className="bg-[#374151]/50 border-[#4B5563] text-white placeholder:text-gray-500 mt-2"
                  required
                />
              </div>
              <div className='text-[#D1D5DB]'>
                Message
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  onChange={handleChange}
                  value={formData.message}
                  required
                  className="mt-2 w-full rounded-md bg-[#374151]/50 border-[#4B5563] px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <Button type="submit" className="bg-teal-500 hover:bg-teal-600 text-black w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-4">
              Let's Build the Future of Blockchain together.<br />
              At BlueLink Blockchain Services, we believe in meaningful connections. Whether you're an investor, developer, partner, or a curious blockchain enthusiast, we're here to help. Reach out to us and we'll get back to you within 24–48 hours.
            </p>

            <div className="space-y-12">
              {[
                { icon: MdOutlineMail, label: "Email Us", value: "contact@bluelinkblockchain.com" },
                // { icon: MdOutlinePhone, label: "Call Us", value: "+1 (954) 603-7860" },
                // { icon: MdOutlineLocationOn, label: "Visit Us", value: "Wilmington, DE, USA" }
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
              <img src={blueteam} className="rounded-md opacity-50 shadow-black shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
