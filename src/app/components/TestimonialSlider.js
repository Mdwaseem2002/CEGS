import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    title: "1. TITLE HERE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "ALEXA DENIAL",
    position: "CEO / DIRECTOR"
  },
  {
    id: 2,
    title: "2. TITLE HERE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "ALEXA DENIAL",
    position: "CEO / DIRECTOR"
  },
  {
    id: 3,
    title: "3. TITLE HERE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "ALEXA DENIAL",
    position: "CEO / DIRECTOR"
  },
  {
    id: 4,
    title: "4. TITLE HERE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "JANE DOE",
    position: "MANAGER"
  },
  {
    id: 5,
    title: "5. TITLE HERE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "JOHN SMITH",
    position: "CTO"
  },
  {
    id: 6,
    title: "6. TITLE HERE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "MARK ROBINSON",
    position: "DEVELOPER"
  }
  // ... rest of the testimonials array remains the same
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Update items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // sm
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) { // md
        setItemsPerSlide(2);
      } else { // lg and above
        setItemsPerSlide(3);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerSlide;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevSlideIndex = prevIndex - itemsPerSlide;
      return prevSlideIndex < 0 ? Math.max(testimonials.length - itemsPerSlide, 0) : prevSlideIndex;
    });
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-[#D2BE60] text-base md:text-lg mb-2">Testimonial</h4>
          <h2 className="text-white text-2xl md:text-3xl font-bold">What our Customers Say</h2>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`px-2 md:px-4 flex-shrink-0 ${
                    itemsPerSlide === 1 ? 'w-full' : 
                    itemsPerSlide === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8 h-full text-center">
                    <div className="text-teal-500 text-3xl md:text-4xl mb-3 md:mb-4">"</div>
                    <h3 className="text-teal-500 text-lg md:text-xl font-semibold mb-3 md:mb-4">
                      {testimonial.title}
                    </h3>
                    <div className="text-yellow-500 text-xl md:text-2xl mb-3 md:mb-4">
                      ★★★★★
                    </div>
                    <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                      {testimonial.text}
                    </p>
                    <h4 className="text-teal-500 font-semibold text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="md:absolute md:left-[-30px] lg:left-[-60px] md:top-1/2 md:-translate-y-1/2 bg-[#D2BE60] p-2 rounded-full text-white hover:bg-teal-600 transition-colors mx-2"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="md:absolute md:right-[-30px] lg:right-[-60px] md:top-1/2 md:-translate-y-1/2 bg-[#D2BE60] p-2 rounded-full text-white hover:bg-teal-600 transition-colors mx-2"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;