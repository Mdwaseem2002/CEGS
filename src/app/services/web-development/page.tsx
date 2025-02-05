"use client";

import { useState } from 'react';
import { Globe, Code, Smartphone, Gauge, Layout, Search, Layers } from 'lucide-react';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import TestimonialSlider from "../../components/TestimonialSlider";

export default function WebDevelopmentServices() {
  const [email] = useState('');
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailor-made web applications built with cutting-edge technologies"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Optimized Performance",
      description: "Lightning-fast load times and smooth user experiences"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalability and Growth",
      description: "Future-proof architecture that grows with your business"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Landing Pages",
      description: "High-converting landing pages optimized for your audience"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Enhanced visibility and search engine performance"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes"
    }
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

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
                  Crafting Digital
                  <span className="block">Excellence</span>
                </h1>
                <p className="text-white text-xl max-w-2xl">
                  Transform your vision into reality with our cutting-edge web development solutions.
                </p>
              </div>

              
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#6B7AFF] rounded-full blur-3xl opacity-20 animate-pulse" />
                <Globe className="w-full h-full text-[#6B7AFF] animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[#D2BE60] text-4xl font-bold">Our Expertise</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We leverage the latest technologies and best practices to deliver exceptional web solutions
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center space-y-4">
          <h2 className="text-[#D2BE60] text-4xl font-bold">Our Tech Stack</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Built with modern technologies including MERN stack (MongoDB, Express, React, Node.js),
            along with advanced CMS platforms for scalable and robust solutions.
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