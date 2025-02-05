/* eslint-disable @next/next/no-img-element */
import React from 'react';

const VisionMissionSection = () => {
  const items = [
    {
      title: "Vision",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "bg-cyan-500",
    },
    {
      title: "Mission",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "bg-red-500",
    },
    {
      title: "Values",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      color: "bg-blue-900",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[400px] bg-black">
      {/* Left Section with Background Image */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 "></div>
        <img 
          src="/Assets/image-removebg-preview (17).png" // Update the path to your image
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Content */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500 transition-all duration-300 cursor-pointer"
          >
            <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
              {item.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400">
                This slide is 100% editable. Adapt it to your needs and capture your audience&apos;s attention.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionMissionSection;