// import React from 'react';

// const Testimonial1 = () => {
//   return (
//     <div>
//       <section className="text-gray-100 body-font bg-black" >
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap -m-4">
//             {/* Testimonial Card 1 */}
//             <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 transform transition duration-500 hover:scale-105">
//               <div className="h-full text-center bg-green-700 pt-16 px-6 pb-6 rounded-lg relative">
//                 <img
//                   alt="testimonial"
//                   className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 -top-12"
//                   src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=1920&q=75"
//                 />
//                 <p className="leading-relaxed mt-4">
//                   ‘’I like cooking my own meals, but when I am occupied with work, I book Chefit. It's a much-required service that is convenient and more affordable than ordering online.’’
//                 </p>
//                 <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
//                 <h2 className="text-white font-medium title-font tracking-wider text-xl"><p class="testimonial_name__uP3Iz">Diwakar Kumar</p></h2>
//               </div>
//             </div>

//             {/* Testimonial Card 2 */}
//             <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 transform transition duration-500 hover:scale-105">
//               <div className="h-full text-center bg-green-700 pt-16 px-6 pb-6 rounded-lg relative">
//                 <img
//                   alt="testimonial"
//                   className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 -top-12"
//                   src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_05_686a6d403a.png&w=1920&q=75"
//                 />
//                 <p className="leading-relaxed mt-4">
//                   "I joined a home with a chefkart cook 5 months ago. It has been very easy for me to be onboarded onto the process and to be able to manage my cook, timings, etc."
//                 </p>
//                 <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
//                 <h2 className="text-white font-medium title-font tracking-wider text-xl"><p class="testimonial_name__uP3Iz">Tarun Gehlaut</p> यादव</h2>
//               </div>
//             </div>

//             {/* Testimonial Card 3 */}
//             <div className="lg:w-1/3 lg:mb-0 p-4 transform transition duration-500 hover:scale-105">
//               <div className="h-full text-center bg-green-700 pt-16 px-6 pb-6 rounded-lg relative">
//                 <img
//                   alt="testimonial"
//                   className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 -top-12"
//                   src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_05_fa3b6fc5ac.webp&w=1920&q=75"
//                 />
//                 <p className="leading-relaxed mt-4">
//                   "बेटे के इलाज के लिए पैसों की बहुत ज़रूरत थी | इस कठिन समय में मुझे ChefKart ने ना सिर्फ़ आर्थिक सहायता दी बल्कि छुट्टियाँ लेने में भी बहुत सहयोग दिखाया|"
//                 </p>
//                 <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
//                 <h2 className="text-white font-medium title-font tracking-wider text-xl"><p class="testimonial_name__uP3Iz">हफ़िज़ियाद्दीन मियां</p></h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonial1;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial1 = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/Testimonial/get');
        setTestimonials(response.data.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="text-gray-100 body-font bg-black">
        <div className="container px-5 py-24 mx-auto ">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="p-4">
                <div className="h-full text-center bg-green-700 pt-16 px-6 pb-6 rounded-lg relative">
                  <img
                    alt="testimonial"
                    className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 -top-[1rem]"
                    src={testimonial.profileimage}
                  />
                  <p className="leading-relaxed mt-12">{testimonial.content}</p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-white font-medium title-font tracking-wider text-xl">
                    {testimonial.name}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonial1;
