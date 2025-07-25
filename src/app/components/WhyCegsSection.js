import React, { useState } from 'react';

const WhyCegsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const reasons = [
    {
      number: "01",
      title: "Expertise Across Industries",
      description: "We understand the unique demands of BPO roles and deliver candidates with the right skills and adaptability. Our candidates are not only technically proficient but also possess the right attitude and cultural fit for your business."
    },
    {
      number: "02",
      title: "Fast & Scalable Hiring",
      description: "Whether you need one hire or hundreds, we ensure fast turnarounds without compromising quality. Our efficient process helps you scale quickly with pre-screened, high-quality candidates ready to join your team."
    },
    {
      number: "03",
      title: "End-to-End Recruitment Support",
      description: "From sourcing to onboarding, we manage the entire recruitment process. You can focus on growing your business while we handle the details of hiring the best talent for your needs."
    },
    {
      number: "04",
      title: "Quality Talent Network",
      description: "Access our deep talent pool of job-ready professionals across voice, non-voice, tech support, and more. We connect you with the right talent to meet your unique business requirements."
    },
    {
      number: "05",
      title: "Proven Success Record",
      description: "Trusted by top BPOs, we have a proven track record of delivering reliable talent. We consistently reduce hiring challenges and help businesses scale efficiently by providing top-tier candidates."
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
                  <div className="text-5xl text-gray-700 font-bold mb-12">
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
