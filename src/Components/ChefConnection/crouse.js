import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const [slides] = useState([
    {
      title: "समाज का नज़रिया बदलें ",
      description: "देश में कुक की परिभाषा और उनके लिए दृष्टिकोण बदलने में हमारी मदद करें।",
      bgImage: "/images/slide1.jpg",
      action: "ChefKart से जुड़ें",
    },
    {
      title: "हुनर से पैसे कमाएँ। ",
      description: "अपने खाना बनाने की प्रतिभा को एक नई शुरुआत दें और इसके माध्यम से पैसे कमाएँ।",
      bgImage: "/images/slide2.jpg",
      action: "ChefKart से जुड़ें",
    },
    {
      title: "ChefKart का हिस्सा बनें ",
      description: "हमसे जुड़े 4500 से भी ज़्यादा कुक्स का हिस्सा बनें और अपने कौशल को आगे बढ़ाएँ।",
      bgImage: "/images/slide3.jpg",
      action: "ChefKart से जुड़ें",
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

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
                <h2 className="text-2xl md:text-4xl font-bold mt-3">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl mt-4">{slide.description}</p>
                <button className="bg-orange-500 text-white font-bold text-lg md:text-xl px-6 py-3 rounded-md mt-5 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300">
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

export default Carousel;
