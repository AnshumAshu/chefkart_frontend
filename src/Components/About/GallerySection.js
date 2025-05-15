import React from 'react';

const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold title-font mb-4 text-gray-900">
            The People Behind <span className="text-orange-600">ChefKart</span>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {/* Vaibhav Gupta */}
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="Vaibhav Gupta"
                className="rounded-lg w-full h-65 object-cover object-center mb-4"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVaibhav_01_1db5d1c3eb.webp&w=1920&q=75"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Vaibhav Gupta</h2>
                <h3 className="text-gray-500 mb-3">CEO, Co-Founder</h3>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/vaibhav-gupta-iitkgp/"
                    className="text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.27h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.23c.63-.96 1.79-1.73 3-1.73 2.21 0 4 1.79 4 4v5.5z"/>
  
                    </svg>
                  </a>
                  <a
                    href="https://x.com/Vaibhavthechef"
                    className="ml-2 text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Aman Gupta */}
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="Aman Gupta"
                className="rounded-lg w-full h-65 object-cover object-center mb-4"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAman_01_a6144820a0.webp&w=1920&q=75"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Aman Gupta</h2>
                <h3 className="text-gray-500 mb-3">CTO, Co-Founder</h3>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/aman-gupta1995/"
                    className="text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.27h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.23c.63-.96 1.79-1.73 3-1.73 2.21 0 4 1.79 4 4v5.5z"/>
  
                    </svg>
                  </a>
                  
                  <a
                    href="https://x.com/Vaibhavthechef"
                    className="ml-2 text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
