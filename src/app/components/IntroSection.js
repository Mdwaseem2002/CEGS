'use client';
import ProcessSlider from './ProcessSlider';
import AboutSection from './AboutSection';
import BenefitsSection from './BenefitsSection';
import VisionMissionSection from './VisionMissionSection';
import TestimonialSlider from './TestimonialSlider';
import WhyCegsSection from './WhyCegsSection';
import StatsDisplay from './StatsDisplay';
import Banner from './Banner';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="min-h-screen relative bg-cover bg-center bg-no-repeat pt-16 md:pt-20 overflow-hidden"
      style={{
        backgroundImage: "url('/Assets/staffing.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-black/40 -z-10"></div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pl-2 sm:pl-4 md:pl-8 mb-16 md:mb-20">
          <div className="inline-flex items-center relative">
            <div className="absolute -left-6 top-1/2 h-12 w-1 bg-gradient-to-b from-indigo-400 to-transparent rounded-full hidden md:block"></div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg leading-tight">
              Connecting top talents with leading<br />
              BPO&apos;s across the Globe
            </h1>
          </div>

          <div className="h-1 w-16 sm:w-32 bg-gradient-to-r from-indigo-400 to-transparent rounded-full mt-3 sm:mt-4"></div>
        </div>

        {/* Bottom-right content */}
        <div className="flex justify-start md:justify-end px-4 sm:px-8 md:pr-20 mt-40 sm:mt-64 md:mt-96">
          <div className="max-w-2xl flex flex-col space-y-6 md:space-y-10">
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10 shadow-xl">
              <p className="text-white/90 text-base sm:text-lg text-left">
                We take the hiring burden off your plate—delivering skilled, reliable talent tailored to your voice, non-voice, and support process needs. Scale confidently with us.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
                  onClick={() => router.push('/contact')}
                >
                  Speak to Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="relative py-24 md:py-32 bg-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(4, 11, 28, 0.92),
            rgba(4, 11, 28, 0.85)
          ), url('/Assets/Four.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-400 text-lg">[</span>
          <span className="text-[#D2BE60] tracking-wider font-medium text-lg">CEGS</span>
          <span className="text-gray-400 text-lg">]</span>
        </div>

        <div className="relative mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            About Us
          </h2>
          <div className="absolute -bottom-6 left-0 w-24 md:w-32 h-1 bg-gradient-to-r from-sky-400 to-indigo-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We specialize in delivering tailored Staffing Solutions and HR Recruitment services.
              Our mission is to empower businesses by providing top-tier talent, streamlined payroll
              management, and advanced digital solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              With our expert team and client-centric approach, we ensure your workforce
              operates efficiently and effectively.
            </p>

            

<Link href="/about">
  <button className="group relative overflow-hidden bg-[#D2BE60] hover:bg-sky-500 text-white px-10 py-4 text-base font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-sky-500/30">
    <span className="relative z-10">Learn More</span>
    <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </button>
</Link>

          </div>

          <div className="relative">
  <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
    <h3 className="text-2xl font-semibold text-white mb-6 text-center">Our Expertise</h3>
    
    {/* 2x4 Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        {['Staffing Solutions', 'HR Recruitment', 'Payroll Management', 'Digital Solutions'].map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 mt-1 text-[#D2BE60]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">{item}</span>
          </div>
        ))}
      </div>
      
      {/* Right Column */}
      <div className="space-y-4">
        {['HTD Services', 'C2H Service', 'Business Strategy Planning', 'Coordination Services'].map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 mt-1 text-[#D2BE60]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20 blur-2xl"></div>
</div>
        </div>
      </div>
    </section>
  );
};

export default function IntroSection() {
  return (
    <div className="bg-gray-50">
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
