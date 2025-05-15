import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-100 body-font bg-black" >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Testimonial Card 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 transform transition duration-500 hover:scale-105">
              <div className="h-full text-center bg-green-700 pt-16 px-6 pb-6 rounded-lg relative">
                <img
                  alt="testimonial"
                  className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 -top-12"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_06_b42754596c.webp&w=1920&q=75"
                />
                <p className="leading-relaxed mt-4">
                  "बेटे के इलाज के लिए पैसों की बहुत ज़रूरत थी | इस कठिन समय में मुझे ChefKart ने ना सिर्फ़ आर्थिक सहायता दी बल्कि छुट्टियाँ लेने में भी बहुत सहयोग दिखाया |"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-xl">अंशुम आशु</h2>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 transform transition duration-500 hover:scale-105">
              <div className="h-full text-center bg-green-700 pt-16 px-6 pb-6 rounded-lg relative">
                <img
                  alt="testimonial"
                  className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 -top-12"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_05_55cf1d4be3.webp&w=1920&q=75"
                />
                <p className="leading-relaxed mt-4">
                  "बेटी के इलाज के दौरान मैंने जो भी सहायता मांगी, मुझे मिली। मेरे कठोर समय में मुझे परिवार की तरह संभाला, इसके लिए ChefKart की जितनी भी प्रशंसा की जाए कम है।"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-xl">बिकाश प्रसाद यादव</h2>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4 transform transition duration-500 hover:scale-105">
              <div className="h-full text-center bg-green-700 pt-16 px-6 pb-6 rounded-lg relative">
                <img
                  alt="testimonial"
                  className="w-24 h-24 object-cover object-center rounded-full border-4 border-white bg-gray-100 absolute left-1/2 transform -translate-x-1/2 -top-12"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_04_d6bb1266ae.webp&w=1920&q=75"
                />
                <p className="leading-relaxed mt-4">
                  "मैं हमेशा से चाहती थी कि मेरी बेटी को अपनी शिक्षा के बल पर एक अच्छी नौकरी मिले। जब मैंने ChefKart में ये चिंता जताई तो मेरी बेटी के हुनर से प्रभावित होकर उसे अपनी कंपनी में नौकरी दी।"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-xl">आयुषी जैसवाल</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
