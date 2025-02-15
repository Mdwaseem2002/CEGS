"use client";

import { useState } from 'react';
import { Headphones, BookOpen, Phone, Database, Users } from 'lucide-react';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import TestimonialSlider from "../../components/TestimonialSlider";

export default function BPOKPOServices() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    { 
      icon: <Headphones className="w-6 h-6" />,
      title: "Customer Support Services", 
      description: "Comprehensive inbound and outbound support solutions ensuring customer satisfaction.",
      details: ["24/7 Support", "Multi-Channel Communication", "Multilingual Support"]
    },
    { 
      icon: <BookOpen className="w-6 h-6" />,
      title: "Knowledge Process Outsourcing (KPO)", 
      description: "High-value knowledge-based services leveraging domain expertise and analytical skills.",
      details: ["Research & Analytics", "Data Management", "Business Intelligence"]
    },
    { 
      icon: <Phone className="w-6 h-6" />,
      title: "Inside Sales & Lead Generation", 
      description: "Targeted sales strategies to drive business growth and expand market reach.",
      details: ["Lead Qualification", "Sales Pipeline Management", "CRM Integration"]
    },
    { 
      icon: <Database className="w-6 h-6" />,
      title: "Data Processing & Back-Office Support", 
      description: "Efficient and accurate back-office operations to streamline business processes.",
      details: ["Data Entry", "Document Processing", "Administrative Support"]
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header /> {/* Header Component Added */}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-[#D2BE60] text-5xl md:text-6xl font-bold leading-tight">
                  BPO/KPO & Inside Sales
                </h1>
                <p className="text-white text-xl max-w-2xl">
                  Transform your business operations with our comprehensive BPO and KPO services.
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
          <h2 className="text-[#D2BE60] text-4xl font-bold">Our Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We provide a wide range of BPO and KPO services to enhance your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-lg bg-[#D2BE60]/10 w-fit ${activeService === index ? 'text-[#D2BE60]' : 'text-white'} transition-colors duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-[#D2BE60] text-xl font-semibold">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
                <ul className="pl-5 list-disc text-white/70">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center space-y-4">
          <h2 className="text-[#D2BE60] text-4xl font-bold">Our Expertise</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We leverage the latest technologies and best practices to deliver exceptional BPO and KPO solutions.
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