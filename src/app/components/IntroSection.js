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

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat pt-16 md:pt-20"
      style={{
        backgroundImage: "url('/Assets/staffing.png')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pl-4 sm:pl-8 md:pl-20 mb-20 md:mb-40">
          <div className="inline-flex items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Business Process<br />
              Outsourcing
            </h1>
          </div>
        </div>

        <div className="flex justify-start md:justify-end px-4 sm:px-8 md:pr-20 mt-20 sm:mt-40 md:mt-60">
          <div className="max-w-2xl flex flex-col space-y-6 md:space-y-10">
            <p className="text-white/90 text-base sm:text-lg text-left">
              Learn more about how business process services can facilitate and boost your business. 
              Drop us a line or book a free consultation with our leading outsourcing advisor.
            </p>

            <div className="flex space-x-4 md:space-x-6 justify-start">
              <button className="bg-[#D2BE60] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg text-sm sm:text-base">
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

      <div className="absolute inset-0 bg-black/30 -z-10"></div>
    </section>
  );
}

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-black">
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

      <div className="relative z-10 px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-1 mb-3">
          <span className="text-gray-500">[</span>
          <span className="text-[#D2BE60] tracking-wider">CEGS</span>
          <span className="text-gray-500">]</span>
        </div>

        <div className="relative mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            About Us
          </h1>
          <div className="absolute -bottom-4 sm:-bottom-6 left-0 w-32 sm:w-56 h-0.5 bg-sky-400"></div>
        </div>

        <div className="max-w-2xl mt-8 sm:mt-12 md:mt-16">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            We are at the forefront of a revolutionary shift in remote talent acquisition, pioneering a 
            new era of consulting services that empower companies to tap into a vast network of top-
            tier professionals from India for global outsourcing needs. Our mission is to provide 
            seamless and efficient consulting solutions, facilitating unparalleled hiring processes that 
            enable businesses worldwide to access the finest talents and elevate their workforce to 
            new heights.
          </p>

          <button className="bg-[#D2BE60] hover:bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm rounded transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

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
    </div>
  );
}