import React from 'react';

const Lower2 = () => {
  return (
    <div>
      <section className="text-gray-900 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:flex lg:flex-row flex-col justify-between items-center">
            
            {/* Image Section */}
            <img 
              alt="ecommerce" 
              className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded" 
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAbout_us_Banner_02_413026c0c6.webp&w=1920&q=75" 
            />
            
            {/* Text Section */}
            <div className="lg:w-1/2 w-full mt-12 ml-10  lg:pl-10 lg:py-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-red-500 tracking-widest mb-2">Vision</h2>
              <h2 className="text-gray-900 text-3xl lg:text-4xl font-bold leading-tight mb-4">
                One kitchen at a time
              </h2>
              <h1 className="text-1xl text-black font-bold mt-5">Our vision is to ensure that every household in the country can enjoy quality food prepared by our cooks in their own kitchens.</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower2;
