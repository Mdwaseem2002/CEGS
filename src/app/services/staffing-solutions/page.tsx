"use client";

import React, { useState } from 'react';
import { Users, Briefcase, Clock, Code, Settings, Building } from 'lucide-react';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import TestimonialSlider from "../../components/TestimonialSlider";

export default function StaffingSolutions() {
  const [activeType, setActiveType] = useState<number | null>(null);


  const staffingTypes = [
    {
      icon: <Users className="w-6 h-6" />,
      name: "C2H (Contract-to-Hire) Staffing",
      description: "Flexible hiring approach allowing companies to evaluate candidates before permanent placement.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      name: "Permanent Staffing",
      description: "Finding and placing top talent for long-term organizational growth and stability.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      name: "Contract Staffing",
      description: "Providing skilled professionals for specific project durations or temporary needs.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "IT Staffing",
      description: "Specialized recruitment of technology professionals across various domains and expertise levels.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: "Recruitment Process Outsourcing (RPO)",
      description: "End-to-end recruitment management tailored to your organizational requirements.",
    }
  ];

  const advantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Extensive Talent Network",
      description: "Access to a vast pool of pre-vetted professionals across industries"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Rigorous Screening Process",
      description: "Comprehensive evaluation ensuring only top-quality candidates"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Turnaround Times",
      description: "Efficient recruitment process to meet urgent staffing needs"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Industry-Specific Expertise",
      description: "Specialized knowledge across various business sectors"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text on the Left */}
            <div className="flex-1 space-y-8 z-10">
              <h1 className="text-[#D2BE60] text-5xl md:text-6xl font-bold leading-tight">
                Strategic Staffing
                <span className="block">Solutions</span>
              </h1>
              <p className="text-white text-xl max-w-2xl">
                Connecting exceptional talent with outstanding opportunities through innovative staffing solutions.
              </p>
            </div>

            {/* Animated Group of People on the Right */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#6B7AFF] rounded-full blur-3xl opacity-20 animate-pulse" />
                <Users className="w-full h-full text-[#6B7AFF] animate-staffing-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staffing Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[#D2BE60] text-4xl font-bold">Our Staffing Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Comprehensive staffing solutions tailored to meet your organizational needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffingTypes.map((type, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveType(index)}
              onMouseLeave={() => setActiveType(null)}
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-lg bg-[#D2BE60]/10 w-fit ${activeType === index ? 'text-[#D2BE60]' : 'text-white'} transition-colors duration-300`}>
                  {type.icon}
                </div>
                <h3 className="text-[#D2BE60] text-xl font-semibold">{type.name}</h3>
                <p className="text-white/70">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-[#D2BE60] text-4xl font-bold">Why Choose Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Experience the difference with our comprehensive staffing advantages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#D2BE60]/10 text-[#D2BE60]">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-[#D2BE60] text-xl font-semibold mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-white/70">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialSlider />
      <Banner />

      {/* Custom Animation Styles */}
      <style jsx global>{`
  @keyframes grow-and-shrink {
    0%, 100% {
      transform: scale(1) rotate(0deg);
    }
    25% {
      transform: scale(1.1) rotate(5deg);
    }
    50% {
      transform: scale(1.15) rotate(-5deg);
    }
    75% {
      transform: scale(1.1) rotate(5deg);
    }
  }
  .animate-grow-and-shrink {
    animation: grow-and-shrink 4s ease-in-out infinite;
  }
`}</style>

    </div>
  );
}