import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "CEGS is one of the best consulting firms in Bangalore, you guide like a good friend, the experience with them was very good",
    name: "Annapornanu"
  },
  {
    id: 2,
    text: "It was one of my best decision to listen to the Advise of they helped to get a best job n if u are looking for a job then this is the best place for u i would like to suggest every to visit Career Expert Global solutions they have the best staff with good experience",
    name: "Shabaz Sawar"
  },
  {
    id: 3,
    text: "I'm very thankful for Career Expert Global Solution, for the supportive nature by every staff member in the computer, and very thankful for HR for helping me from the date of interview till the date of joining and getting placed in flipcart, very much pleased by the friendly nature of cegs HRS.",
    name: "Fathima Faiza"
  },
  {
    id: 4,
    text: "I'm very thankful for the friendly support from every staff member of cegs, and for getting me placed in amazon, I'm very thankful for HR for helping me through out the interview process from the point of interview till the joining and even after that guiding me in my work it was really amazing thanking you again for helping me.",
    name: "Prince Faizan"
  },
  {
    id: 5,
    text: "CEGS is one of the best consulting firms in Bangalore. The HRs are very professional and approachable. A special mention to HR, who made the recruitment process seamless and stress-free. She ensured every detail was communicated effectively. She is no one of the best Hr's I have come across.",
    name: "Shaheen Khan"
  },
  {
    id: 6,
    text: "I am truly impressed with the dedication and friendly nature of the consultancy team, has been exceptional in providing guidance throughout the process. Even after securing the job, she continues to stay in touch, always checking in to see how I am doing and how my work life is progressing. Her genuine care and supportive approach have made this experience truly memorable.",
    name: "Mamatha Kesaram"
  },
  {
    id: 7,
    text: "BCZ OF CEGS I GOT JOB THANKYOU SO MUCH",
    name: "Siddhanth Choudhary"
  },
  {
    id: 8,
    text: "I'M VERY THANKFUL FOR CEGS, BECAUSE OF CEGS I GOT JOB",
    name: "Tanya Yashashvi Tower"
  }
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

  const handleReviewClick = () => {
    window.open('https://www.google.com/search?sca_esv=677f3ddbc8bf65e8&rlz=1C1CHBF_enIN1123IN1123&sxsrf=AE3TifP_Q_spzp-mLOqSgzPUW1CYwlzjkg:1753378299908&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9roYhpRX0h83dds-RSasbt_AHxlBUjC8IOrpDnY03ytUiUTuCNEZ_Dicl8L6vN8bPlX4r9Eo0iBVVvI9ECrUizS99921AIuim8B_93U8eLeO2L4Xg%3D%3D&q=Career+Expert+Global+solutions+Reviews&sa=X&ved=2ahUKEwjmi-SVg9aOAxXuxDgGHQJYOfkQ0bkNegQIHBAD&cshid=1753378312642062&biw=1536&bih=738&dpr=1.25#lrd=0x3bae17e58b1e86e9:0x2a03d439e0c0c791,3,,,,', '_blank');
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#D2BE60]/20 to-[#F4D03F]/20 backdrop-blur-sm border border-[#D2BE60]/30 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-[#D2BE60] mr-2 fill-current" />
            <span className="text-[#D2BE60] font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#D2BE60]">candidates Say</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discover why thousands trust CEGS for their career transformation
          </p>
          
          {/* Review Button */}
          <button
            onClick={handleReviewClick}
            className="group bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] hover:from-[#B8A052] hover:to-[#D2BE60] text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(210,190,96,0.3)] flex items-center gap-3 mx-auto"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out w-full"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`px-3 md:px-4 flex-shrink-0 ${
                    itemsPerSlide === 1 ? 'w-full' : 
                    itemsPerSlide === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="group bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-lg border border-[#D2BE60]/20 rounded-2xl p-6 md:p-8 h-full hover:border-[#D2BE60]/50 hover:shadow-[0_20px_40px_rgba(210,190,96,0.1)] transition-all duration-300 hover:transform hover:scale-105">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 text-[#D2BE60] fill-current hover:scale-125 transition-transform mx-0.5"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white text-base md:text-lg leading-relaxed mb-8 italic">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-black font-bold text-lg">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-[#D2BE60] font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] rounded-full text-black hover:from-[#B8A052] hover:to-[#D2BE60] transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-[0_10px_30px_rgba(210,190,96,0.3)]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] rounded-full text-black hover:from-[#B8A052] hover:to-[#D2BE60] transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-[0_10px_30px_rgba(210,190,96,0.3)]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerSlide)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerSlide) === index
                  ? 'bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] scale-125'
                  : 'bg-white/30 hover:bg-[#D2BE60]/50'
              }`}
            />
          ))}
        </div>

        {/* Your Review Button */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Have you worked with CEGS? Share your experience!
          </p>
          <button
            onClick={handleReviewClick}
            className="group bg-gradient-to-r from-[#D2BE60] to-[#F4D03F] hover:from-[#B8A052] hover:to-[#D2BE60] text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(210,190,96,0.3)] flex items-center gap-3 mx-auto"
          >
            <Star className="w-5 h-5 fill-current" />
            <span>Write Your Review</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;