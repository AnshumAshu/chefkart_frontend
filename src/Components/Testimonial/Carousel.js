import React from "react";

const Carousel3 = () => {
  const videoSrc =
    "https://storage.googleapis.com/chefkart-strapi-media/video_2160p_2_87ad6f832c.mp4";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-white bg-black/40">
        <div className="text-center p-6 md:p-16 rounded-lg">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-3">
            What People Think About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Carousel3;
