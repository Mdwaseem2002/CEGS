import React from 'react';

const StatsCard = ({ number, label }) => (
  <div className="flex flex-col items-center p-6">
    <div className="flex gap-1 mb-2">
      <div className="w-2 h-2 rounded-full bg-white"></div>
      <div className="w-2 h-2 rounded-full bg-[#D2BE60]"></div>
    </div>
    <h2 className="text-4xl font-bold text-[#D2BE60] mb-2">
      {number}
    </h2>
    <p className="text-white text-lg font-medium whitespace-nowrap text-center">
      {label}
    </p>
  </div>
);

const StatsDisplay = () => {
  const stats = [
  { number: "52+", label: "Clients" },
  { number: "40K+", label: "Talent Placements Delivered" },
  { number: "5.0", label: "Clients Review" },
  { number: "50+", label: "Staffing Experts & Recruiters" }
];


  return (
    <div className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Update grid to be mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="border-r border-gray-800 last:border-r-0">
              <StatsCard number={stat.number} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
