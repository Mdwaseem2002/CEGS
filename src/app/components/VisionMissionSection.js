/* eslint-disable @next/next/no-img-element */
import React from 'react';

const VisionMissionSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[400px] bg-black">
      {/* Left Section with Background Image */}
      <div className="w-full md:w-1/2 relative">
        <img 
          src="/Assets/vision.jpg" 
          alt="Vision and Mission" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Separate Vision and Mission Cards */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-8">
        {/* Vision Card */}
        <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-yellow-500/20 hover:shadow-yellow-500/30 shadow-md hover:scale-[1.02] transition-all duration-300">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Our Vision</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
            To be the leading provider of innovative and customized staffing and HR solutions, 
            empowering businesses to achieve sustainable growth and operational excellence.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-red-500/20 hover:shadow-red-500/30 shadow-md hover:scale-[1.02] transition-all duration-300">
  <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  </div>
  <div>
    <h2 className="text-2xl font-bold text-white mb-1">Our Mission</h2>
    <p className="text-xl font-medium text-red-400 italic">
      “Getting the Unemployed Employed in a Pan India”
    </p>
    <p className="text-sm text-gray-300 leading-relaxed mb-2">
      To deliver exceptional staffing, HR, and digital solutions through a client-centric approach, 
      fostering long-term partnerships and driving business success.
    </p>
    
  </div>
</div>

      </div>
    </div>
  );
};

export default VisionMissionSection;
