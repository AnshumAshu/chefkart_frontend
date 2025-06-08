import React from 'react';
import { useNavigate } from "react-router-dom";

const Priceing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="text-white bg-gray-500 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Discover your perfect service
            </h1>
          </div>

          {/* Center cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="p-4 bg-black w-full md:w-1/2 xl:w-1/4">
              <div className="h-full p-6 rounded-lg border-2 flex flex-col ">
                <h2 className="text-2xl tracking-widest mb-1 font-bold">Chef for Party</h2>
                <h1 className="text-lg text-white pb-4 mb-4 border-b leading-none">
                  Professional party chefs to elevate your party experience
                </h1>
                {[
                  "Multi-Cuisine Professionals",
                  "Customisable Menu",
                  "Prompt Service",
                  "Bartenders, Waiters, etc.",
                  "Available in Delhi NCR, Bengaluru and Mumbai",
                ].map((text, index) => (
                  <p className="flex items-center text-white mb-2" key={index}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {text}
                  </p>
                ))}
                <p className="text-white">Starting from</p>
                <p className="mb-1 text-white">₹2000/visit</p>
                <button 
                onClick={() => navigate("/booking")}
                className="text-center mt-5 text-white bg-gray-400 border-0 py-2 px-4 w-full hover:bg-orange-500 rounded">
                  Book Now
                </button>
                <button 
                onClick={() => navigate("/chef-for-party")}
                className="text-center mt-5 text-white bg-gray-400 border-0 py-2 px-4 w-full hover:bg-orange-500 rounded">
                  Know More
                </button>
              </div>
            </div>

            {/* Card 2 (identical) */}
            <div className="p-4 w-full bg-green-800 md:w-1/2 xl:w-1/4">
              <div className="h-full p-6 rounded-lg border-2  flex flex-col relative overflow-hidden">
                <h2 className="text-2xl tracking-widest mb-1 font-bold">Chefit: One-time cook</h2>
                <h1 className="text-lg pb-4 mb-4 border-b border-gray-200 leading-none">
                  Get a professional cook for one-time within 60 minutes.
                </h1>
                {[
                  "Trained & Verified Cooks",
                  "Healthy & Hygienic Food",
                  "Tailored to Your Taste",
                  "Quick Servvailable inice",
                  "Available only in Gurugram",
                ].map((text, index) => (
                  <p className="flex items-center mb-2" key={index}>
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-500 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {text}
                  </p>
                ))}
                <p className="text-white">Starting from</p>
                <p className="mb-1 text-white">₹2000/visit</p>
                <button
                onClick={() => navigate("/booking")}
                 className="text-center mt-5 text-white bg-gray-400 border-0 py-2 px-4 w-full hover:bg-orange-500 rounded">
                  Book Now
                </button>
                <button 
                onClick={() => navigate("/one-time-cook")}
                className="text-center mt-5 text-white bg-gray-400 border-0 py-2 px-4 w-full hover:bg-orange-500 rounded">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Priceing;
