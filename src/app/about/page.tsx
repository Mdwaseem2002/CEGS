"use client"; // Mark this component as a Client Component

import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Banner from '../components/Banner'; // Import the Banner component
import TestimonialSlider from "../components/TestimonialSlider";
import { Users, Briefcase, Clock, Code } from 'lucide-react'; // Icons for animation

export default function AboutUs() {
  return (
    <div className="bg-black min-h-screen">
      {/* Include the Header component */}
      <Header />

      {/* Hero Section with Floating Animation */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text on the Left */}
            <div className="flex-1 space-y-8 z-10">
              <h1 className="text-[#D2BE60] text-5xl md:text-6xl font-bold leading-tight">
                About Us
              </h1>
              <p className="text-white text-xl max-w-2xl">
                We are a passionate team dedicated to providing exceptional services across various industries. Our expertise spans HR consulting, payroll management, IT staffing, and more.
              </p>
            </div>

            {/* Animated Icons on the Right */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-72 h-72">
                {/* Floating Icons */}
                <Users className="w-16 h-16 text-[#6B7AFF] absolute top-0 left-0 animate-float-1" />
                <Briefcase className="w-16 h-16 text-[#D2BE60] absolute top-10 right-0 animate-float-2" />
                <Clock className="w-16 h-16 text-[#6B7AFF] absolute bottom-0 left-10 animate-float-3" />
                <Code className="w-16 h-16 text-[#D2BE60] absolute bottom-10 right-10 animate-float-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-[#D2BE60] text-4xl font-bold text-center mb-12">
          ABOUT OUR COMPANY
        </h2>
        <p className="text-white text-lg text-center max-w-2xl mx-auto">
          Our main goal is to help our customers establish a strong presence in their respective industries. We strive to provide solutions that elevate your brand and streamline your operations.
        </p>
      </div>

      {/* Unique Approach Section */}
      <div className="bg-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#D2BE60] text-4xl font-bold text-center mb-12">
            MORE ABOUT OUR UNIQUE APPROACH
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Prompt Assistance */}
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300">
              <h3 className="text-[#D2BE60] text-2xl font-bold mb-4">Prompt Assistance</h3>
              <p className="text-white/80">
                We ensure your success and satisfaction at every stage by offering dependable and prompt assistance.
              </p>
            </div>

            {/* Premium Development */}
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300">
              <h3 className="text-[#D2BE60] text-2xl font-bold mb-4">Premium Development</h3>
              <p className="text-white/80">
                Providing solutions that are of the highest caliber and use cutting-edge technologies.
              </p>
            </div>

            {/* Competitive Price */}
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300">
              <h3 className="text-[#D2BE60] text-2xl font-bold mb-4">Competitive Price</h3>
              <p className="text-white/80">
                We provide premium services at prices that maximize your return on investment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Include the Banner component */}
      <TestimonialSlider />
      <Banner />

      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float-1 {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-3 {
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-4 {
          animation: float 6.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
}