import React, { useState } from 'react';

const WhyCegsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const reasons = [
    {
      number: "01",
      title: "Expertise Across Industries",
      description: "CEGS brings extensive experience working with diverse industries, allowing us to offer tailored solutions that meet your specific business needs."
    },
    {
      number: "02",
      title: "Proven Track Record",
      description: "Our track record of successful projects speaks for itself. We deliver results that help businesses scale and thrive."
    },
    {
      number: "03",
      title: "Customizable Solutions",
      description: "We understand that every business is unique. CEGS offers flexible solutions that can be tailored to align perfectly with your goals."
    },
    {
      number: "04",
      title: "Cost-Effective Services",
      description: "By choosing CEGS, you get high-quality services at competitive prices, maximizing the value of your investment."
    },
    {
      number: "05",
      title: "Dedicated Support",
      description: "Our team is committed to providing ongoing support, ensuring that your systems continue to function smoothly after implementation."
    },
    {
      number: "06",
      title: "Cutting-Edge Technology",
      description: "We use the latest technology to ensure your solutions are innovative, secure, and future-proof."
    }
  ];

  const totalPages = Math.ceil(reasons.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleReasons = reasons.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Fixed left title */}
          <div className="lg:w-1/3 lg:sticky lg:top-1/3 lg:self-start">
          <h1 className="text-3xl lg:text-3xl font-bold leading-tight mb-4 text-[#D2BE60]">
          Why Choose CEGS?
</h1>
          </div>

          {/* Scrollable right content */}
          <div className="lg:w-2/3">
            <div className="space-y-16 relative">
              {visibleReasons.map((reason) => (
                <div key={reason.number} className="relative">
                  <div className="text-5xl text-gray-700 font-bold mb-4">
                    {reason.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-end items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Previous page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <span className="text-gray-400">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Next page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCegsSection;
