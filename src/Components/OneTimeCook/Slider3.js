import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Carousel3 = () => {
  const [slides] = useState([
    {
      title: "Get a Cook for One-Time.",
      description: "Forget ordering online! Get fresh food cooked in your kitchen.",
      bgImage:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChefit_Hero_banner_f573fdf12c.webp&w=1920&q=75",
      action: "Get Started",
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const navigate = useNavigate();

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  // Scroll to current slide
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  const handleGetStarted = () => {
    navigate("/booking"); // Adjust the path as per your routing setup
  };

  return (
    <div className="relative w-[100vw] h-[80vh] overflow-hidden">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory h-full"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full snap-start bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="bg-black/50 w-full h-full flex items-center p-6 md:p-16">
              <div className="w-full md:w-1/2 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mt-3">{slide.title}</h2>
                <p className="text-base md:text-xl mt-4">{slide.description}</p>
                <button
                  onClick={handleGetStarted}
                  className="bg-orange-500 text-white font-bold text-lg md:text-xl px-6 py-3 rounded-md mt-5 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300"
                >
                  {slide.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-orange-500" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel3;
