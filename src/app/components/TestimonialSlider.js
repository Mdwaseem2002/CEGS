import React, { useState } from 'react';
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
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= testimonials.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h4 className="text-[#D2BE60] text-lg mb-2">Testimonial</h4>
          <h2 className="text-white text-3xl font-bold">What our Customers Say</h2>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`
              }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map(
                (_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex min-w-full justify-center gap-8"
                  >
                    {testimonials
                      .slice(
                        slideIndex * itemsPerSlide,
                        slideIndex * itemsPerSlide + itemsPerSlide
                      )
                      .map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-white rounded-lg p-8 w-1/3 text-center"
                        >
                          <div className="text-teal-500 text-4xl mb-4">“</div>
                          <h3 className="text-teal-500 text-xl font-semibold mb-4">
                            {testimonial.title}
                          </h3>
                          {/* Star Symbol */}
                          <div className="text-yellow-500 text-2xl mb-4">
                            ★★★★★
                          </div>
                          <p className="text-gray-600 mb-6">{testimonial.text}</p>
                          <h4 className="text-teal-500 font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-[#D2BE60] p-2 rounded-full text-white hover:bg-teal-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-[#D2BE60] p-2 rounded-full text-white hover:bg-teal-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
