import React from 'react'
import FAQ from './Faq';

function ContactLower() {
  return (
    <>
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

          {/* Left Section: Text + Left Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 flex flex-col justify-center h-full">
            <p className="font-extrabold text-3xl text-black mb-6 leading-snug text-center md:text-left">
              Our mission is to provide <span className="text-orange-500">at-home cooking</span> services in a way that has never been experienced before by empowering millions of cooks across India.
            </p>
            <img
              className="object-cover object-center rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=%2FM_F_Home%20chef_refine%201.png&w=1920&q=75"
            />
          </div>

          {/* Right Section: Right Image + Text */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
            <img
              className="object-cover object-center rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mb-6"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=%2FImage.png&w=1920&q=75"
            />
            <p className="mb-4 leading-relaxed text-base text-black">
              ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!
            </p>
            <p className="text-2xl font-semibold">
              <span className="text-orange-500 underline cursor-pointer hover:underline">Read about story.</span>
            </p>
          </div>

        </div>
      </section>
    </div>
    <FAQ />
    </>
  );
}

export default ContactLower;
