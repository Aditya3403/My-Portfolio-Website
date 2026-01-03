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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message. Try again.");
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      <div className="font-sans max-w-3xl mx-auto px-5 py-6 sm:py-8">
        <section
          className="
            min-h-[auto] sm:min-h-screen
            text-black dark:text-white
            px-4 sm:px-6
            py-10 sm:py-16
            flex flex-col items-center
          "
        >
          
          {/* Header */}
          <h1 className="text-3xl sm:text-5xl font-semibold mb-3 sm:mb-4">
            Contact
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-center max-w-xl mb-8 sm:mb-10 text-sm sm:text-base">
            Get in touch with me. I will get back to you at the earliest.
          </p>

          <div className="w-full max-w-3xl border-t border-gray-300 dark:border-gray-600 pt-8 sm:pt-10">
            
            {/* Left Heading */}
            <h2 className="text-base sm:text-lg font-semibold mb-1">
              Send me a message
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">
              Fill out the form below!
            </p>

            {/* Form */}
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      w-full px-3 sm:px-4 py-2
                      bg-transparent
                      border border-gray-300 dark:border-gray-600
                      rounded-md outline-none
                      focus:border-gray-500 dark:focus:border-gray-400
                      text-sm sm:text-base
                      text-black dark:text-white
                    "
                  />
                </div>

                <div>
                  <label className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                    Phone *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 (123) xxx-xxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="
                      w-full px-3 sm:px-4 py-2
                      bg-transparent
                      border border-gray-300 dark:border-gray-600
                      rounded-md outline-none
                      focus:border-gray-500 dark:focus:border-gray-400
                      text-sm sm:text-base
                      text-black dark:text-white
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full px-3 sm:px-4 py-2
                    bg-transparent
                    border border-gray-300 dark:border-gray-600
                    rounded-md outline-none
                    focus:border-gray-500 dark:focus:border-gray-400
                    text-sm sm:text-base
                    text-black dark:text-white
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full px-3 sm:px-4 py-3
                    bg-transparent
                    border border-gray-300 dark:border-gray-600
                    rounded-md outline-none
                    focus:border-gray-500 dark:focus:border-gray-400
                    resize-none
                    text-sm sm:text-base
                    text-black dark:text-white
                  "
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  flex items-center gap-2
                  bg-black dark:bg-white
                  text-white dark:text-black
                  px-5 sm:px-6 py-2
                  rounded-md
                  font-medium
                  text-sm sm:text-base
                "
              >
                <FiSend />
                Send Message
              </button>

            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
