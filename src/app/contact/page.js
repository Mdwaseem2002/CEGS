//src\app\contact\page.js
"use client";

import Header from "../components/Header";
import StatsDisplay from "../components/StatsDisplay";
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
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for your message. We will get back to you soon!' 
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          agreed: false,
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    }
     finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#004e92] text-white">
      {/* Header */}
      <Header />

      <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-start space-y-4 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold">Let&apos;s Get In Touch.</h1>
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
                required
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
                required
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
                required
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
                className="w-full bg-[#1e293b] text-white border-none rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                required
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
                required
              />
              <label htmlFor="agreed" className="text-sm">
                I hereby agree to our{" "}
                <a href="/privacy-policy" className="text-blue-500 underline">
                  Privacy Policy terms
                </a>
                .
              </label>
            </div>

            {/* Status Message */}
            {submitStatus.message && (
              <div 
                className={`p-4 rounded-md ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-200' 
                    : 'bg-red-500/20 text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreed}
                className={`w-full py-3 rounded-md transition ${
                  isSubmitting || !formData.agreed
                    ? 'bg-blue-500/50 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Form'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Additional Components */}
      <StatsDisplay />
      <TestimonialSlider />
      <Banner />
    </div>
  );
}