"use client";

import React, { useState } from 'react';
import { Calculator, FileText, Gift, BarChart, Shield, Database, Lock, DollarSign } from 'lucide-react';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import TestimonialSlider from "../../components/TestimonialSlider";

export default function PayrollManagement() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Calculator className="w-6 h-6" />,
      name: "End-to-End Payroll Processing",
      description: "Comprehensive payroll management from salary calculation to final disbursement.",
      benefits: ["Accurate Salary Computations", "Timely Payments", "Complete Confidentiality"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      name: "Statutory Compliance & Tax Filing",
      description: "Ensuring adherence to all legal requirements and seamless tax management.",
      benefits: ["Regulatory Compliance", "Minimal Legal Risks", "Transparent Reporting"]
    },
    {
      icon: <Gift className="w-6 h-6" />,
      name: "Employee Benefits Administration",
      description: "Streamlined management of employee benefits, incentives, and compensation structures.",
      benefits: ["Comprehensive Benefits Tracking", "Customized Benefit Packages", "Employee Satisfaction"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      name: "Payroll Audit & Reporting",
      description: "Detailed auditing and comprehensive reporting for financial transparency.",
      benefits: ["Comprehensive Financial Oversight", "Error Detection", "Strategic Insights"]
    }
  ];

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Technology-Driven Solutions",
      description: "Advanced systems ensuring accuracy and efficiency"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comprehensive Compliance",
      description: "Stay updated with the latest regulatory requirements"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security & Confidentiality",
      description: "Enterprise-grade security for sensitive information"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost-Effective Processing",
      description: "Optimized operations reducing processing costs"
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
                Precision Payroll
                <span className="block">Management</span>
              </h1>
              <p className="text-white text-xl max-w-2xl">
                Streamline your payroll operations with our comprehensive, accurate, and compliant solutions.
              </p>
            </div>

            {/* Animated Document on the Right */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#6B7AFF] rounded-full blur-3xl opacity-20 animate-pulse" />
                <FileText className="w-full h-full text-[#6B7AFF] animate-payroll-float" />
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
            End-to-end payroll solutions designed to meet your organization&apos;s needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-lg bg-[#D2BE60]/10 w-fit ${activeService === index ? 'text-[#D2BE60]' : 'text-white'} transition-colors duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-[#D2BE60] text-xl font-semibold">{service.name}</h3>
                <p className="text-white/70">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D2BE60]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-[#D2BE60] text-4xl font-bold">Why Choose Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Experience the advantages of our advanced payroll management system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#D2BE60] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-[#D2BE60]/10 text-[#D2BE60] w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-[#D2BE60] text-lg font-semibold">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
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
        @keyframes payroll-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
        .animate-payroll-float {
          animation: payroll-float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}