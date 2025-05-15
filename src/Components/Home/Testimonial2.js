import React from "react";

const Testimonial2 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-t-3xl">
      {/* Video Background */}
      <video
        src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
        <p className="text-3xl md:text-5xl font-semibold max-w-3xl mb-4">
          Your Safety, Our Top-Priority <br />
          <p className="text-2xl">All our cooks follow the food safety <span className="text-orange-500">guidelines & adhere to hygienic practices.</span></p>
        </p>
      </div>
    </div>
  );
};

export default Testimonial2;


