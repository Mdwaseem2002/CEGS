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
    referredName: "", // NEW FIELD
    message: "",
    agreed: false,
    attachment: null,
  });

  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            attachment: {
              name: file.name,
              type: file.type,
              data: reader.result,
            },
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message. We will get back to you soon!",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          referredName: "",
          message: "",
          agreed: false,
          attachment: null,
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#004e92] text-white">
      <Header />

      <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-start space-y-6 mt-8 md:mt-0 md:w-1/2">
          <div>
            <h1 className="text-4xl font-bold mb-4">Let&apos;s Get In Touch</h1>
            <p className="text-sm text-gray-300">
              We&apos;re here to help—whether you have a question, concern use the form below & we&apos;ll be in touch promptly.
            </p>
          </div>

          {/* Contact Icons Section */}
          <div className="space-y-6 mt-8">
            {/* Phone Icon */}
            <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
              <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-300 text-sm">Ready to help you anytime</p>
              </div>
            </div>

            {/* Email Icon */}
            <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
              <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/30 transition-all duration-300">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-300 text-sm">Send us a detailed message</p>
              </div>
            </div>


            {/* Location Icon */}
            <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
              <div className="bg-orange-500/20 p-3 rounded-full group-hover:bg-orange-500/30 transition-all duration-300">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Visit Us</h3>
                <p className="text-gray-300 text-sm">Come see us in person</p>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-500/30 p-2 rounded-full">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-blue-300">Quick Response</h4>
            </div>
            <p className="text-sm text-gray-300">
              We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#0f172a] p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name - MANDATORY */}
            <div>
              <label className="block text-sm mb-2" htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
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

            {/* Email */}
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

            {/* Phone - MANDATORY */}
            <div>
              <label className="block text-sm mb-2" htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
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

            {/* Referred Name - MANDATORY */}
            <div>
              <label className="block text-sm mb-2" htmlFor="referredName">
                Referred By <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="referredName"
                name="referredName"
                value={formData.referredName}
                onChange={handleChange}
                placeholder="Enter the name of who referred you..."
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

            {/* Attachment Upload */}
            <div>
              <label className="block text-sm mb-2" htmlFor="attachment">
                Attachment (Optional)
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleChange}
                className="w-full bg-[#1e293b] text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
              {formData.attachment && (
                <p className="text-sm text-gray-400 mt-2">
                  Selected file:{" "}
                  <span className="text-white">{formData.attachment.name}</span>
                </p>
              )}
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
                  submitStatus.type === "success"
                    ? "bg-green-500/20 text-green-200"
                    : "bg-red-500/20 text-red-200"
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
                    ? "bg-blue-500/50 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit Form"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <StatsDisplay />
      <TestimonialSlider />
      <Banner />
    </div>
  );
}