import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: 'अंशुम आशु',
    text: 'बेटे के इलाज के लिए पैसों की बहुत ज़रूरत थी | इस कठिन समय में मुझे ChefKart ने ना सिर्फ़ आर्थिक सहायता दी बल्कि छुट्टियाँ लेने में भी बहुत सहयोग दिखाया |',
    img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_06_b42754596c.webp&w=1920&q=75',
  },
  {
    name: 'बिकाश प्रसाद यादव',
    text: 'बेटी के इलाज के दौरान मैंने जो भी सहायता मांगी, मुझे मिली। मेरे कठोर समय में मुझे परिवार की तरह संभाला, इसके लिए ChefKart की जितनी भी प्रशंसा की जाए कम है।',
    img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_05_55cf1d4be3.webp&w=1920&q=75',
  },
  {
    name: 'आयुषी जैसवाल',
    text: 'मैं हमेशा से चाहती थी कि मेरी बेटी को अपनी शिक्षा के बल पर एक अच्छी नौकरी मिले। जब मैंने ChefKart में ये चिंता जताई तो मेरी बेटी के हुनर से प्रभावित होकर उसे अपनी कंपनी में नौकरी दी।',
    img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_04_d6bb1266ae.webp&w=1920&q=75',
  },
  {
    name: 'आयुषी जैसवाल',
    text: 'मैं हमेशा से चाहती थी कि मेरी बेटी को अपनी शिक्षा के बल पर एक अच्छी नौकरी मिले। जब मैंने ChefKart में ये चिंता जताई तो मेरी बेटी के हुनर से प्रभावित होकर उसे अपनी कंपनी में नौकरी दी।',
    img: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_04_d6bb1266ae.webp&w=1920&q=75',
  },
];

const Testimonial = () => {
  return (
    <section className="text-gray-100 body-font bg-black py-24">
      <div className="container px-5 mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-2xl  mx-auto text-center bg-green-700 pt-16 px-8 pb-8 rounded-lg relative transform transition duration-500 hover:scale-105">
                <img
                  alt="testimonial"
                  className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 top-[0.2rem]"
                  src={item.img}
                />
                <p className="leading-relaxed mt-10">{`"${item.text}"`}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-xl">
                  {item.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
