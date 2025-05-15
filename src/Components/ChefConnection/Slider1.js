import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  // Custom arrow components
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer"
        onClick={onClick}
      >
        ❮
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer"
        onClick={onClick}
      >
        ❯
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    {
      desc: "THSC राष्ट्रीय व्यावसायिक मानक-आधारित ट्रेनिंग देने में गुणवत्ता को बनाए रखने के लिए समर्पित है। ChefKart से जुड़े कुक्स अपने कौशल को बढ़ाने में इसका लाभ उठा सकते हैं। ",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNCVET_01_2_97436de85c.png&w=384&q=75",
    },
    {
      desc: "NCVET व्यावसायिक ट्रेनिंग में लगी संस्थाओं के कामकाज को छोटे और लम्बे समय के लिए नियंत्रित करती है और ऐसी संस्थाओं के कामकाज के लिए न्यूनतम मानक स्थापित करती है। ",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNCVET_01_2_97436de85c.png&w=384&q=75",
    },
    {
      desc: "ChefKart स्किल इंडिया के साथ जुड़कर अपने कुक्स को ट्रेनिंग दिलवाती है जिसके पूरे होते ही कुक्स को सर्टिफिकेट दिया जाता है। ",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSkill_India_Preview_removebg_preview_1_03db4e9828.png&w=384&q=75",
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-10">एक प्रमुख पहल</h1>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-black rounded-xl shadow-md border w-full">
              {/* Left Text Section */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-3xl ml-10 title-font font-bold leading-relaxed text-white">
                  {slide.desc}
                </p>
              </div>

              {/* Right Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
