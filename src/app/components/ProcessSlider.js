import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Code, UserPlus, Settings, CheckCircle } from 'lucide-react';

const ProcessSlider = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      step: "Step 1",
      title: "Tell your requirements",
      description: "Share your augmentation needs, including relevant tech stack, team size, and staffing period. The more details we have, the better we'll connect you with the ideal candidates.",
      buttonText: "Get Started with Your Requirements",  // Add button text for step 1
      icon: Users
    },
    {
      number: "02",
      step: "Step 2",
      title: "Choose developers",
      description: "Review our pre-vetted developers matching your requirements. Each candidate is thoroughly assessed for technical skills, communication abilities, and project relevance.",
      buttonText: "Choose Your Developer",  // Add button text for step 2
      icon: Code
    },
    {
      number: "03",
      step: "Step 3",
      title: "Onboard remote programmers",
      description: "Quick and smooth onboarding process. Our team handles all paperwork and sets up the development environment to ensure your new team members can start contributing immediately.",
      buttonText: "Start Onboarding",  // Add button text for step 3
      icon: UserPlus
    },
    {
      number: "04",
      step: "Step 4",
      title: "Manage extended team",
      description: "Seamlessly integrate remote developers into your existing workflow. We provide tools and support for effective collaboration and project management.",
      buttonText: "Manage Your Team",  // Add button text for step 4
      icon: Settings
    },
    {
      number: "05",
      step: "Step 5",
      title: "Get your project delivered",
      description: "Monitor progress and receive regular updates as your team delivers high-quality results. Our support team ensures smooth project execution and timely delivery.",
      buttonText: "Finalize Project Delivery",  // Add button text for step 5
      icon: CheckCircle
    }
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev === 5 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 1 ? 5 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">Our Staff Augmentation Process</h1>
        
        {/* Main content area */}
        <div className="relative mt-16">
          {/* Process visualization */}
          <div className="relative h-96">
            {/* Stacked layers visualization */}
            <div className="absolute right-0 w-1/2 h-full flex flex-col justify-center items-center">
              {[5, 4, 3, 2, 1].map((step) => (
                <div
                  key={step}
                  className={`w-64 h-16 transform -skew-x-12 transition-all duration-500 ${
                    step === activeStep
                      ? 'bg-[#D2BE60] z-10 scale-110'
                      : 'bg-gray-800 opacity-60'
                  } mb-4`}
                />
              ))}
            </div>

            {/* Content section */}
            <div className="absolute left-0 w-1/2 pr-8">
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-700">
                  {steps[activeStep - 1].number}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {steps[activeStep - 1].title}
              </h2>
              <p className="text-gray-400 mb-8">
                {steps[activeStep - 1].description}
              </p>
              {/* Display the button text for each step */}
              <button className="bg-[#D2BE60] hover:bg-[#D2BE60] text-white px-6 py-2 rounded transition-colors">
                {steps[activeStep - 1].buttonText}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-0 left-0 flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
            {/* Dots indicator */}
            <div className="flex gap-2 ml-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <button
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    step === activeStep ? 'bg-[#D2BE60]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSlider;
