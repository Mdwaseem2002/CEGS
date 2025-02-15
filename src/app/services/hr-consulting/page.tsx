"use client";

import { useState } from 'react';
import { Users, BookOpen, Heart, Shield, BarChart, Award } from 'lucide-react';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import TestimonialSlider from "../../components/TestimonialSlider";

export default function HRConsulting() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Users className="w-6 h-6" />, 
      title: "Talent Management", 
      description: "Strategic workforce planning and talent acquisition solutions"
    },
    {
      icon: <BookOpen className="w-6 h-6" />, 
      title: "Organizational Development", 
      description: "Structured approaches to improve organizational effectiveness"
    },
    {
      icon: <Heart className="w-6 h-6" />, 
      title: "Employee Engagement", 
      description: "Programs to boost workplace satisfaction and retention"
    },
    {
      icon: <Shield className="w-6 h-6" />, 
      title: "Policy & Compliance", 
      description: "Expert guidance on HR regulations and best practices"
    },
    {
      icon: <BarChart className="w-6 h-6" />, 
      title: "Performance Management", 
      description: "Systems to track and improve employee performance"
    },
    {
      icon: <Award className="w-6 h-6" />, 
      title: "Training & Development", 
      description: "Customized learning programs for workforce growth"
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
            <div className="flex-1 space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-[#B5A050] text-5xl md:text-6xl font-bold leading-tight">
                  Empowering Your
                  <span className="block">Workforce</span>
                </h1>
                <p className="text-white text-xl max-w-2xl">
                  Transform your human resources strategy with our comprehensive consulting solutions.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#6B7AFF] rounded-full blur-3xl opacity-20 animate-pulse" />
                <Users className="w-full h-full text-[#6B7AFF] animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[#B5A050] text-4xl font-bold">Our Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We deliver comprehensive HR solutions tailored to your organization&apos;s unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#B5A050] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-lg bg-[#B5A050]/10 w-fit ${activeService === index ? 'text-[#B5A050]' : 'text-white'} transition-colors duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-[#B5A050] text-xl font-semibold">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center space-y-4">
          <h2 className="text-[#B5A050] text-4xl font-bold">Our Expertise</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Backed by years of experience in human resources management, organizational development,
            and workplace culture transformation across diverse industries.
          </p>
        </div>
      </div>
      <TestimonialSlider />
      <Banner />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
