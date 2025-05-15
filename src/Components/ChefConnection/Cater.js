import React from 'react';

const Cater = () => {
  return (
    <div>
      <section className="text-black font-bold body-font">
        <h2 className="text-center text-5xl font-bold text-black mt-10">
          ChefKart से क्यूँ जुड़ें?
        </h2>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FEarn_Money_c09cff227a.webp&w=1920&q=75"
                />
              </div>
              <div className="text-center">
                <h2 className="text-3xl  title-font font-bold text-black mt-5">नियमित पैसे</h2>
                <p className="text-base leading-relaxed mt-2">अपनी दैनिक कमाई के पैसे नियमित रूप से उसी दिन पाएँ।</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBe_your_own_boss_1_ff6c9822fd.webp&w=1920&q=75"
                />
              </div>
              <div className="text-center">
                <h2 className="text-3xl  title-font font-bold text-black mt-5">सम्मान से काम</h2>
                <p className="text-base leading-relaxed mt-2">समाज में एक पेशेवर कुक के रूप में सम्मान और पहचान प्राप्त करें।</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_support_26823bc403.webp&w=1920&q=75"
                />
              </div>
              <div className="text-center">
                <h2 className="text-3xl  title-font font-bold text-black mt-5">ट्रेनिंग एवं सहायता</h2>
                <p className="text-base  leading-relaxed mt-2">हमारे शेफ़ से ट्रेनिंग में नए पकवान बनाना सीखें। किसी भी समस्या में तुरंत सहायता पाएँ।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cater;
