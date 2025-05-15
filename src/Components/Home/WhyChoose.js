import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg",
      title: "Professional Cooks",
    },
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg",
      title: "Easy Booking",
    },
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
      title: "Timely Service",
    },
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/prompt_support_ca831687ac.svg",
      title: "Prompt Support",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-5 text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Why Choose <span className="text-orange-500">ChefKart?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <div className="w-20 border-b-2 mb-4 border-gray-600 mt-2"></div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
