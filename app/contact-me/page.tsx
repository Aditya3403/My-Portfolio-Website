'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans max-w-3xl mx-auto px-5 py-8">
    <section className="min-h-screen bg-white text-black px-6 py-16 flex flex-col items-center">
      
      {/* Header */}
      <h1 className="text-5xl font-semibold mb-4">Contact</h1>
      <p className="text-gray-500 text-center max-w-xl mb-10">
        Get in touch with me. I will get back to you as soon as possible.
      </p>

      <div className="w-full max-w-3xl border-t border-gray-300 pt-10">
        
        {/* Left Heading */}
        <h2 className="text-lg font-semibold mb-1">Send me a message</h2>
        <p className="text-gray-500 mb-6">
          Fill out the form below and I will get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone *</label>
              <input
                type="text"
                name="phone"
                placeholder="+1 (123) xxx-xxxx"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md outline-none focus:border-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md outline-none focus:border-gray-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">Message *</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hello..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-md outline-none focus:border-gray-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-md font-medium"
          >
            <FiSend />
            Send Message
          </button>

        </form>
      </div>
    </section>
    
    <Footer/>

    </div>

    
  );
}
