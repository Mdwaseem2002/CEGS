'use client';
import Image from 'next/image';
import ProcessSlider from './ProcessSlider';
import AboutSection from './AboutSection';
import BenefitsSection from './BenefitsSection';
import VisionMissionSection from './VisionMissionSection';
import TestimonialSlider from './TestimonialSlider';
import WhyCegsSection from './WhyCegsSection';
import StatsDisplay from './StatsDisplay';
import Banner from './Banner';



export default function IntroSection() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutUs />
      <StatsDisplay />
      <ProcessSlider />
      <AboutSection />
      <BenefitsSection />
      <VisionMissionSection />
      <TestimonialSlider />
      <WhyCegsSection />
      
      <Banner />
     
      
     
      
      {/* Add WhatWeOffer here */}
    </div>
  );
}

function HeroSection() {
  return (
    <section 
    className="min-h-screen relative bg-cover bg-center bg-no-repeat pt-20"
    style={{
      backgroundImage: "url('/Assets/staffing.png')", // Replace with your image path
    }}
  >
    <div className="container mx-auto px-5">
      {/* Left side main content */}
      <div className="pl-20 mb-40">
        <div className="inline-flex items-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Business Process<br />
            Outsourcing
          </h1>
        </div>
      </div>

      {/* Bottom content with increased top margin */}
      <div className="flex justify-end pr-20 mt-60">
        <div className="max-w-2xl flex flex-col space-y-10">
          <p className="text-white/90 text-lg text-left">
            Learn more about how business process services can facilitate and boost your business. 
            Drop us a line or book a free consultation with our leading outsourcing advisor.
          </p>

          <div className="flex space-x-6 justify-start">
  <button className="bg-[#D2BE60] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg">
    Contact Us
    <svg 
      className="w-4 h-4" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

        </div>
      </div>
    </div>

    {/* Optional overlay for better text readability */}
    <div className="absolute inset-0 bg-black/30 -z-10"></div>
  </section>
  );
}


const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(4, 11, 28, 0.9),
            rgba(4, 11, 28, 0.85)
          ), url('/Assets/Four.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 px-8 pt-24 pb-12 max-w-7xl mx-auto"> {/* Reduced `pb-16` to `pb-12` */}
        {/* Logo section */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-gray-500">[</span>
          <span className="text-[#D2BE60] tracking-wider">CEGS</span>
          <span className="text-gray-500">]</span>
        </div>

        {/* About Us heading with underline */}
        <div className="relative mb-8">
          <h1 className="text-7xl font-bold text-white tracking-tight">About Us</h1>
          <div className="absolute -bottom-6 left-0 w-56 h-0.5 bg-sky-400"></div>
        </div>

        {/* Description text */}
        <div className="max-w-2xl mt-16">
          <p className="text-gray-300 leading-relaxed mb-6">
            We are at the forefront of a revolutionary shift in remote talent acquisition, pioneering a 
            new era of consulting services that empower companies to tap into a vast network of top-
            tier professionals from India for global outsourcing needs. Our mission is to provide 
            seamless and efficient consulting solutions, facilitating unparalleled hiring processes that 
            enable businesses worldwide to access the finest talents and elevate their workforce to 
            new heights.
          </p>

          {/* Learn More button */}
          <button className="bg-[#D2BE60] hover:bg-sky-500 text-white px-8 py-3 text-sm rounded transition-colors mb-0">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};





//function CertificationsSection() {
  return (
    <section className="text-center py-10 bg-gray-50">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-10">
        Pentacloud Certifications <br />Your Badge of Trust and Expertise.
      </h2>

      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(22)].map((_, i) => (
            <div key={i} className="flex-shrink-0">
              <Image 
                src={`/Assets/servlet (${(i % 16) + 1}).png`}
                alt={`Certification ${(i % 16) + 1}`}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
          {/* Duplicate the same content to make the scroll continuous */}
          {[...Array(32)].map((_, i) => (
            <div key={i + 32} className="flex-shrink-0">
              <Image 
                src={`/Assets/servlet (${(i % 16) + 1}).png`}
                alt={`Certification ${(i % 16) + 1}`}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );


//function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex items-center justify-between px-5 flex-col-reverse md:flex-row">
        {/* Left side image */}
        <div className="hidden md:block md:w-1/2 order-1 md:order-1">
          <Image
            src="/Assets/second.png" // Correct path to image
            alt="Salesforce Consulting"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Right side content (Text and Buttons) */}
        <div className="flex flex-col space-y-10 md:w-1/2 order-2 md:order-2 pl-20">
          <div className="bg-[#086B92] text-white rounded-2xl inline-block self-start">
            <h1 className="text-base md:text-lg text-center px-5 py-1">About Us</h1>
          </div>

          <h1 className="text-3xl md:text-xl font-bold">
            Empower your business with our <br /> comprehensive Salesforce Consulting services.
          </h1>

          <p className="text-xs md:text-sm">
            In order to enhance your Salesforce platform and make sure it completely fits with your<br/>
            company operations, our team of qualified specialists customizes solutions. With the<br/>
            use of best practices and customized Salesforce interfaces, we help businesses<br/>
            increase efficiency, streamline processes, and improve customer satisfaction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-6 gap-y-4 gap-x-2">
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1A7DB6]">Tailored Solutions</p>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1A7DB6]">Client-Centric Approach</p>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1A7DB6]">Innovation-Driven Solutions</p>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1A7DB6]">Digital Innovation</p>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1A7DB6]">Transparent & Flexible</p>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1A7DB6]">Focused & Dedicated</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#discover-more" className="bg-[#D91567] text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
              Discover more →
            </a>
            <a href="#book-consultation" className="text-[#D91567] font-semibold underline hover:text-gray-200 mt-2">
              Customer Support
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );


// Now, you need to ensure WhatWeOffer.js is in the same directory or provide the correct import path
