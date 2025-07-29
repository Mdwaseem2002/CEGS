"use client"; // Mark this component as a Client Component

import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Banner from '../components/Banner'; // Import the Banner component
import TestimonialSlider from "../components/TestimonialSlider";
import { Users, Briefcase, Clock, Code, Star, Target, Award } from 'lucide-react'; // Icons for animation


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
               Get to Know Us
              </h1>
              <p className="text-white text-xl max-w-2xl">
                We are a passionate team dedicated to providing exceptional services across various industries. Our expertise spans HR consulting, payroll management, IT staffing, and more.
              </p>
              <div className="pt-6">
                <button className="bg-[#D2BE60] hover:bg-[#c4b256] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
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
     <div className="bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
       <div className="max-w-6xl mx-auto text-center">
         <h2 className="text-[#D2BE60] text-5xl font-extrabold mb-14 tracking-wide">
           ABOUT OUR COMPANY
         </h2>
         <div className="bg-black/30 backdrop-blur-lg border border-gray-700 rounded-xl px-10 py-12 shadow-xl text-white text-lg leading-relaxed tracking-wide max-w-5xl mx-auto">
           <p className="mb-6">
             Career Experts Global Solutions is renowned for our consultative recruitment approach that has
             garnered accolades and expanded our client base.
           </p>
           <p className="mb-6">
             We specialize in optimizing recruitment processes for our clients, delivering measurable improvements in
             Quality-of-Hire, Time-to-Fill, and Cost-per-Hire.
           </p>
           <p className="mb-6">
             Our tailored hiring solutions empower clients to achieve greater efficiency and business performance.
             Through collaborative partnerships and flawless execution, we align our efforts with their strategic
             talent acquisition goals.
           </p>
           <p>
             Driven by passion, integrity, and a strong work ethic, we are a preferred hiring partner. Our commitment
             to delivering exceptional value to both clients and candidates sets us apart. We are proud to be recruiters,
             transforming lives and driving business success.
           </p>
         </div>
       </div>
     </div>

      {/* Directors Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#D2BE60] text-4xl font-bold text-center mb-16">
            OUR LEADERSHIP DIRECTORS
          </h2>
          
          {/* Sarah Johnson - Founder & CEO */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
            {/* CEO Image on Left */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative h-96 w-80">
                <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-[#D2BE60]">
                  <img 
                    src="/Assets/WhatsApp Image 2025-07-24 at 3.17.53 PM.jpeg" 
                    alt="Sarah Johnson - CEO Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-5 -left-5 w-24 h-24 border-t-4 border-l-4 border-[#D2BE60]"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-4 border-r-4 border-[#D2BE60]"></div>
              </div>
            </div>
            
            {/* CEO Info on Right */}
            <div className="flex-1 text-white pt-10 md:pt-0">
              <div className="space-y-6">
                <h3 className="text-[#D2BE60] text-4xl font-bold">Mohammed Usman zabi</h3>
                <p className="text-2xl font-light text-gray-300 italic">&quot;Connecting talent with opportunity, building futures together.&quot;</p>
                <h4 className="text-3xl font-semibold text-white">Founder & Director</h4>
                <div className="w-24 h-1 bg-[#D2BE60]"></div>
                <p className="text-lg text-gray-300 max-w-lg pt-4">
                  With over 12 years of experience in global recruitment and talent acquisition, 
                  Usman has consistently pioneered innovative approaches to connecting top-tier talent with the right
                  opportunities across diverse industries. His visionary leadership and deep understanding of workforce dynamics have been
                  instrumental in shaping the company&apos;s mission to transform lives through meaningful career placements.
                </p>
                <p className="text-lg text-gray-300 max-w-lg pt-4">
                  In addition to his expertise in recruitment, Usman is a seasoned business consultant and corporate 
                  strategist, helping startups and established enterprises align their talent strategy with business 
                  growth objectives. His ability to identify market trends and 
                  build scalable recruitment models has positioned him as a trusted advisor in the HR and staffing industry.
                </p>
              
                <p className="text-lg text-gray-300 max-w-lg pt-4">
                  Currently, Usman is <strong>managing operations across 8 different companies</strong>, 
                  offering guidance in strategic hiring, operational optimization,
                  and business expansion. Her hands-on leadership style and entrepreneurial 
                  mindset continue to drive innovation, efficiency, and impact across all ventures she oversees.
                </p>
                <div className="flex space-x-4 pt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-white">
                    Leadership
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900 text-white">
                    Vision
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-white">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sheeba - Chief Executive Officer, Operations */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            {/* Sheeba Image on Right */}
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="relative h-96 w-80">
                <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-[#D2BE60]">
                  <img 
                    src="\Assets\upscalemedia-transformed.jpeg" 
                    alt="Sheeba - COO Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-5 -right-5 w-24 h-24 border-t-4 border-r-4 border-[#D2BE60]"></div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 border-b-4 border-l-4 border-[#D2BE60]"></div>
              </div>
            </div>
            
            {/* Sheeba Info on Left */}
            <div className="flex-1 text-white pt-10 md:pt-0 md:pr-8">
              <div className="space-y-6 max-w-2xl">
                <h3 className="text-[#D2BE60] text-4xl font-bold">Sheeba Begum</h3>
                <p className="text-2xl font-light text-gray-300 italic">&quot;Translating vision into action, bridging strategy with execution.&quot;</p>
                <h4 className="text-3xl font-semibold text-white">Chief Executive Officer, Operations</h4>
                <div className="w-24 h-1 bg-[#D2BE60]"></div>
                <p className="text-lg text-gray-300 pt-4">
                  As the CEO of Operations, Sheeba brings exceptional leadership and operational expertise to the forefront of our organization. 
                  With a strong background in process optimization, team leadership, and strategic planning, she ensures that all departments 
                  work seamlessly to deliver consistent results and client satisfaction.
                </p>
                <p className="text-lg text-gray-300">
                  Sheeba is known for her ability to translate vision into action, overseeing day-to-day operations with a sharp focus on 
                  efficiency, quality, and scalability. Her hands-on approach and commitment to excellence have been key to streamlining 
                  internal workflows and implementing performance-driven systems.
                </p>
                <div className="flex space-x-4 pt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-900 text-white">
                    Operations
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-900 text-white">
                    Strategy
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-900 text-white">
                    Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Approach Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#D2BE60] text-4xl font-bold text-center mb-16">
            OUR UNIQUE APPROACH
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Prompt Assistance */}
            <div className="text-center p-8 rounded-xl bg-black/60 border border-gray-800 hover:border-[#D2BE60] transition-all duration-300 transform hover:translate-y-[-10px] hover:shadow-lg hover:shadow-[#D2BE60]/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D2BE60]/20 mb-6">
                <Clock className="w-8 h-8 text-[#D2BE60]" />
              </div>
              <h3 className="text-[#D2BE60] text-2xl font-bold mb-4">Prompt Assistance</h3>
              <p className="text-white/80">
                We ensure your success and satisfaction at every stage by offering dependable and prompt assistance.
              </p>
            </div>

            {/* Premium Development */}
            <div className="text-center p-8 rounded-xl bg-black/60 border border-gray-800 hover:border-[#D2BE60] transition-all duration-300 transform hover:translate-y-[-10px] hover:shadow-lg hover:shadow-[#D2BE60]/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D2BE60]/20 mb-6">
                <Star className="w-8 h-8 text-[#D2BE60]" />
              </div>
              <h3 className="text-[#D2BE60] text-2xl font-bold mb-4">Premium Development</h3>
              <p className="text-white/80">
                Providing solutions that are of the highest caliber and use cutting-edge technologies.
              </p>
            </div>

            {/* Competitive Price */}
            <div className="text-center p-8 rounded-xl bg-black/60 border border-gray-800 hover:border-[#D2BE60] transition-all duration-300 transform hover:translate-y-[-10px] hover:shadow-lg hover:shadow-[#D2BE60]/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D2BE60]/20 mb-6">
                <Target className="w-8 h-8 text-[#D2BE60]" />
              </div>
              <h3 className="text-[#D2BE60] text-2xl font-bold mb-4">Competitive Price</h3>
              <p className="text-white/80">
                We provide premium services at prices that maximize your return on investment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Management Team Section */}
      <div className="bg-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#D2BE60] text-4xl font-bold text-center mb-16">
            OUR LEADERSHIP TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Mohammed Raiyan Ahmed */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-[#D2BE60] mb-6 relative">
                  <img 
                    src="/Assets/zama-photoaidcom-cropped.png" 
                    alt="Mohammed Raiyan Ahmed" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>
                {/* Gold ring animation */}
                <div className="absolute -inset-1 rounded-full border-2 border-[#D2BE60]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full border-2 border-[#D2BE60]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
              </div>
              <h3 className="text-[#D2BE60] text-xl font-bold mb-2 text-center">Mohammed Raiyan Ahmed</h3>
              <p className="text-white text-lg font-medium mb-4 text-center">Delivery & Business Strategy Expert  Director </p>
              <p className="text-gray-400 text-center text-sm max-w-xs leading-relaxed">
                Spearheading strategic business development initiatives while efficiently managing end-to-end billing processes and overseeing key financial operations to support organizational growth.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-900/40 rounded-full text-white text-xs">Business Development</span>
                <span className="px-3 py-1 bg-green-900/40 rounded-full text-white text-xs">Financial Operations</span>
              </div>
            </div>
            
            {/* Nusrath Hussain */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-[#D2BE60] mb-6 relative">
                  <img 
                    src="/Assets/hussian-photoaidcom-cropped.png" 
                    alt="Nusrath Hussain" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>
                {/* Gold ring animation */}
                <div className="absolute -inset-1 rounded-full border-2 border-[#D2BE60]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full border-2 border-[#D2BE60]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
              </div>
              <h3 className="text-[#D2BE60] text-xl font-bold mb-2 text-center">Nusrath Hussain</h3>
              <p className="text-white text-lg font-medium mb-4 text-center">Talent Acquisition Director</p>
              <p className="text-gray-400 text-center text-sm max-w-xs leading-relaxed">
                HR Manager overseeing end-to-end recruitment operations, aligning talent acquisition strategies with business objectives. Responsible for optimizing hiring processes, ensuring efficiency, quality, and client satisfaction at every stage.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-purple-900/40 rounded-full text-white text-xs">Recruitment</span>
                <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-white text-xs">Talent Acquisition</span>
              </div>
            </div>
            
            {/* Heena Beagum */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-[#D2BE60] mb-6 relative">
                  <img 
                    src="/Assets/henna-photoaidcom-cropped.png" 
                    alt="Heena Beagum" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>
                {/* Gold ring animation */}
                <div className="absolute -inset-1 rounded-full border-2 border-[#D2BE60]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full border-2 border-[#D2BE60]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
              </div>
              <h3 className="text-[#D2BE60] text-xl font-bold mb-2 text-center">Heena Begum</h3>
              <p className="text-white text-lg font-medium mb-4 text-center">Finance & Payroll Director</p>
              <p className="text-gray-400 text-center text-sm max-w-xs leading-relaxed">
                HR Generalist with a dual focus on people operations and billing oversight, playing a key role in both workforce management and financial coordination. Ensuring smooth HR functions, employee experience, and accurate, timely execution of all billing and clearance processes.

              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-teal-900/40 rounded-full text-white text-xs">HR Operations</span>
                <span className="px-3 py-1 bg-emerald-900/40 rounded-full text-white text-xs">Billing</span>
              </div>
            </div>

            {/* Saif Ahamad Kampli */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-[#D2BE60] mb-6 relative">
                  <img 
                    src="/Assets/Saif-photoaidcom-cropped (1)-removebg-preview-photoaidcom-cropped.jpg" 
                    alt="Saif Ahamad Kampli" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>
                {/* Gold ring animation */}
                <div className="absolute -inset-1 rounded-full border-2 border-[#D2BE60]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full border-2 border-[#D2BE60]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
              </div>
              <h3 className="text-[#D2BE60] text-xl font-bold mb-2 text-center">Saif Ahamad Kampli</h3>
              <p className="text-white text-lg font-medium mb-4 text-center">Talent & Billing Coordinator</p>
              <p className="text-gray-400 text-center text-sm max-w-xs leading-relaxed">
                Talent & Billing Coordinator overseeing recruitment and finance operations end-to-end, ensuring strategic alignment with business goals. Managing talent pipelines and billing processes to deliver efficiency, accuracy, and value to every client.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-orange-900/40 rounded-full text-white text-xs">Talent Coordination</span>
                <span className="px-3 py-1 bg-red-900/40 rounded-full text-white text-xs">Finance Operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[#D2BE60] text-4xl font-bold mb-16">OUR CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transform transition hover:border-[#D2BE60]">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#D2BE60]/10 mx-auto mb-4">
                <Award className="h-8 w-8 text-[#D2BE60]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">We strive for excellence in every interaction and placement we facilitate.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transform transition hover:border-[#D2BE60]">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#D2BE60]/10 mx-auto mb-4">
                <Users className="h-8 w-8 text-[#D2BE60]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">Honesty and transparency are at the core of our business relationships.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transform transition hover:border-[#D2BE60]">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#D2BE60]/10 mx-auto mb-4">
                <Target className="h-8 w-8 text-[#D2BE60]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">We continuously evolve our approaches to stay ahead of industry trends.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transform transition hover:border-[#D2BE60]">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#D2BE60]/10 mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#D2BE60]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Commitment</h3>
              <p className="text-gray-400">We are dedicated to the long-term success of both clients and candidates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Include the Testimonial Slider and Banner components */}
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
        
        /* Shimmering gold effect for headings */
        h2.text-\[\#D2BE60\], h3.text-\[\#D2BE60\] {
          background: linear-gradient(to right, #D2BE60 10%, #e9d783 50%, #D2BE60 90%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
}