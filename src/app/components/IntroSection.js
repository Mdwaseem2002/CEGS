'use client';
import Image from 'next/image';
import WhatWeOffer from './WhatWeOffer';  // Import the WhatWeOffer component

export default function IntroSection() {
  return (
    <div className="bg-white">
      <HeroSection />
      <CertificationsSection />
      <AboutSection />
      <WhatWeOffer />  {/* Add WhatWeOffer here */}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-10">
      <div className="container mx-auto flex items-center justify-between px-5 pl-20">
        <div className="flex flex-col space-y-10">
          <div className="bg-[#086B92] text-white rounded-2xl inline-block self-start">
            <h1 className="text-base md:text-lg text-center px-4 py-1">Welcome to PentaCloud</h1>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">
            Digital Excellence in <br />Salesforce Starts Here.
          </h1>

          <p className="text-base md:text-lg">
            Empower your business with our <br />comprehensive Salesforce Consulting services.
          </p>

          <div className="flex space-x-4">
            <a href="#discover-more" className="bg-[#D91567] text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
              Discover more →
            </a>
            <a href="#book-consultation" className="text-[#D91567] font-semibold underline hover:text-gray-200 mt-2">
              Book a Free Consultation
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <Image src="/Assets/image.png" alt="Salesforce Consulting" width={500} height={500} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
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
}

function AboutSection() {
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
}

// Now, you need to ensure WhatWeOffer.js is in the same directory or provide the correct import path
