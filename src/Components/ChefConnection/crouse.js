// CarouselWithForm.jsx
import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("https://chefkart-backend.onrender.com/crousel/get");
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Failed to fetch carousel data:", error);
      }
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  const handleSendOTP = async () => {
    try {
      await fetch("https://chefkart-backend.onrender.com/otp/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      setOtpSent(true);
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const res = await fetch("https://chefkart-backend.onrender.com/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });
      const data = await res.json();
      if (data.success) {
        setIsVerified(true);
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      alert("Error verifying OTP");
    }
  };

  return (
    <div className="relative w-full h-[75vh] md:h-[80vh] overflow-hidden">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory h-full"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full snap-start bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black/60 w-full h-full flex items-center p-4 sm:p-8 md:p-16">
              <div className="w-full md:w-2/3 text-white">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mt-3">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-xl mt-4">{slide.content}</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-orange-500 text-white font-semibold text-sm sm:text-base md:text-lg px-4 py-2 rounded-md mt-5 shadow-lg hover:bg-orange-600 transition-all duration-300"
                >
                  ChefKart से जुड़ें
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-orange-500" : "bg-white"
            }`}
          ></button>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            {!isVerified ? (
              <>
                <h2 className="text-xl font-bold mb-4">Join the Family</h2>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2 w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mb-2 w-full p-2 border rounded"
                />
                {!otpSent ? (
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded w-full"
                    onClick={handleSendOTP}
                  >
                    Send OTP
                  </button>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="mb-2 w-full p-2 border rounded"
                    />
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded w-full"
                      onClick={handleVerifyOTP}
                    >
                      Verify
                    </button>
                  </>
                )}
              </>
            ) : (
              <p className="text-green-600 text-center text-lg">
                🎉 Now you are our family member!
              </p>
            )}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
