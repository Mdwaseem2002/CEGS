"use client"; // Mark this file as a client component

import Header from "../components/Header"; // Import Header component
import StatsDisplay from "../components/StatsDisplay"; // Import StatsDisplay component
import TestimonialSlider from "../components/TestimonialSlider";
import Banner from "../components/Banner";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#004e92] text-white">
      {/* Header */}
      <Header />

      <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-start space-y-4 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">Let’s Get In Touch.</h1>
          <p className="text-sm text-gray-300">
            Or just reach out manually to hello@slothui.com.{" "}
            <a href="mailto:hello@example.com" className="text-blue-500 underline">
              hello@example.com
            </a>
            .
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#0f172a] p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name..."
                className="w-full bg-[#1e293b] text-white border-none rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email Address */}
            <div>
              <label className="block text-sm mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address..."
                className="w-full bg-[#1e293b] text-white border-none rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block text-sm mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44 (000) 000-0000"
                className="w-full bg-[#1e293b] text-white border-none rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Message */}
            <div>
              <label className="block text-sm mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your main text here..."
                maxLength={300}
                className="w-full bg-[#1e293b] text-white border-none rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <p className="text-right text-gray-500 text-sm">
                {formData.message.length}/300
              </p>
            </div>
            {/* Privacy Agreement */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="agreed" className="text-sm">
                I hereby agree to our{" "}
                <a href="/privacy-policy" className="text-blue-500 underline">
                  Privacy Policy terms
                </a>
                .
              </label>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Stats Display Component */}
      <StatsDisplay />
      <TestimonialSlider />
      <Banner />
    </div>
  );
}
