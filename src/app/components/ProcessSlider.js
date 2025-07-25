'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Code, UserPlus, Settings, CheckCircle } from 'lucide-react';

const ProcessSlider = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      step: "Step 1",
      stepName: "Discovery",
      title: "Client Onboarding & Requirement Discovery",
      description:
        "Kickoff meeting to define project scope. Identify required job roles. Volume, location (on-site/remote), shift timing, and language requirements. Discuss SLAs, budget, contract length, compliance needs.",
      buttonText: "Understand exactly what the client needs",
      icon: Users,
    },
    {
      number: "02",
      step: "Step 2",
      stepName: "Sourcing",
      title: "Talent Pool Activation",
      description:
        "Tap into internal candidate database. Activate external sourcing channels. Prioritize candidates with prior BPO experience. Filter based on client-specific needs.",
      buttonText: "Source pre-qualified candidates fast",
      icon: Code,
    },
    {
      number: "03",
      step: "Step 3",
      stepName: "Evaluation",
      title: "Candidate Screening & Evaluation",
      description:
        "Resume filtering and telephonic/virtual screening. Communication assessments (voice clarity, fluency). Skill checks. Culture and shift-readiness checks.",
      buttonText: "Screening",
      icon: UserPlus,
    },
    {
      number: "04",
      step: "Step 4",
      stepName: "Interview",
      title: "Client Interviews & Final Selection",
      description:
        "Submit shortlisted candidate profiles with assessments. Schedule interviews with client stakeholders. Collect feedback and manage rejections/selections. Handle offer communication.",
      buttonText: "Client Selection",
      icon: Settings,
    },
    {
      number: "05",
      step: "Step 5",
      stepName: "Management",
      title: "Contract Management & Scalability",
      description:
        "Manage extensions, exits, or role transitions. Support volume ramp-ups during peak demand. Offer transition-to-hire options if needed.",
      buttonText: "Scalability",
      icon: CheckCircle,
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev === 5 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 1 ? 5 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-[#D2BE60] px-4 py-12 sm:px-6 lg:px-16">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: skew(12deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: skew(12deg) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center sm:text-left">
          Our Staff Augmentation Process
        </h1>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-10">
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <span className="text-5xl sm:text-6xl font-bold text-gray-700">{steps[activeStep - 1].number}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{steps[activeStep - 1].title}</h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">{steps[activeStep - 1].description}</p>
            <button className="bg-[#D2BE60] hover:bg-[#c1ab4d] text-white px-6 py-2 rounded text-sm sm:text-base transition-colors">
              {steps[activeStep - 1].buttonText}
            </button>
          </div>

          {/* Visual Step Stack */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            {[5, 4, 3, 2, 1].map((step) => (
              <div
                key={step}
                className={`relative w-3/4 sm:w-64 h-12 sm:h-16 transform -skew-x-12 transition-all duration-500 ${
                  step === activeStep ? 'bg-[#D2BE60] z-10 scale-105' : 'bg-gray-800 opacity-50'
                } mb-3 flex items-center justify-center`}
              >
                {/* Step Name Text - Only shows for active step */}
                {step === activeStep && (
                  <span 
                    className="transform skew-x-12 font-bold text-sm sm:text-base text-black transition-all duration-300 animate-fade-in"
                  >
                    {steps[step - 1].stepName}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-2 sm:mt-0">
            {[1, 2, 3, 4, 5].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  step === activeStep ? 'bg-[#D2BE60]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSlider;