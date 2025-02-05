import React from 'react';

const StatsCard = ({ number, label }) => (
  <div className="flex flex-col items-center p-6">
    <div className="flex gap-1 mb-2">
      <div className="w-2 h-2 rounded-full bg-white"></div>
      <div className="w-2 h-2 rounded-full bg-[#D2BE60]"></div>
    </div>
    <h2 className="text-5xl font-bold text-[#D2BE60] mb-2">
      {number}
    </h2>
    <p className="text-white text-xl font-medium">
      {label}
    </p>
  </div>
);

const StatsDisplay = () => {
  const stats = [
    { number: "20+", label: "Clients" },
    { number: "25+", label: "Salesforce Certifications" },
    { number: "4.9+", label: "Clients Review" },
    { number: "25+", label: "Projects" }
  ];

  return (
    <div className="w-full bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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