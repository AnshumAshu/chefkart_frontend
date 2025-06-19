import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const GalleryAutoSlideZoom = () => {
  const [images, setImages] = useState([]);
  const cuisines = ["Indian", "Chinese", "Mexican", "Italian"];
  const [currentCuisine, setCurrentCuisine] = useState(cuisines[0]);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    // Auto-rotate cuisines
    const interval = setInterval(() => {
      setCurrentCuisine((prev) => {
        const currentIndex = cuisines.indexOf(prev);
        const nextIndex = (currentIndex + 1) % cuisines.length;
        return cuisines[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch images from API
    const fetchImages = async () => {
      try {
        const response = await fetch("https://chefkart-backend.onrender.com/gallery/get");
        const data = await response.json();
        const allImages = data.flatMap(item => item.galleryImages);
        setImages(allImages);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    afterChange: (current) => setCenterIndex(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto max-w-7xl px-5">
        <h1 className="text-5xl text-gray-700 font-bold mb-8 text-center">
          Craving{" "}
          <span className="text-orange-500 font-bold">{currentCuisine}</span>{" "}
          food? Our Multi-Cuisine Experts <br /> Have Got You!
        </h1>

        {/* Image Slider */}
        {images.length > 0 ? (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-20 mt-20 h-96 w-96">
                <div
                  className={`group transition-transform duration-500 ease-in-out ${
                    index === centerIndex ? "scale-150" : "scale-90"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    width="1200"
                    height="1200"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-white">Loading images...</p>
        )}
      </div>
    </div>
  );
};

export default GalleryAutoSlideZoom;
