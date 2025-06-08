import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const Lower2 = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleBookingClick = () => {
    navigate('/booking'); // ✅ Navigate to booking page
  };

  return (
    <div>
      <section className="text-gray-900 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:flex lg:flex-row flex-col justify-between items-center">
            
            {/* Image Section */}
            <img 
              alt="ecommerce" 
              className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded" 
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FKoustov1_d393227e33.png&w=1920&q=75" 
            />
            
            {/* Text Section */}
            <div className="lg:w-1/2 w-full mt-12 lg:pl-10 lg:py-6 text-center lg:text-left">
              <h2 className="text-md font-bold text-red-500 tracking-widest mb-2">Running on a tight schedule</h2>
              <h1 className="text-gray-900 text-4xl lg:text-6xl font-bold leading-tight mb-4">
                No time to cook? ChefKart Got You Covered!!
              </h1>
              <h2 className="text-sm text-black font-bold mt-4">Get a professional cook within 60 minutes</h2>
              <button 
                onClick={handleBookingClick} // ✅ Add click handler
                className="flex mx-auto lg:mx-0 text-white mt-6 text-xl bg-black border-0 py-2 px-6 rounded-lg hover:bg-gray-800 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower2;
