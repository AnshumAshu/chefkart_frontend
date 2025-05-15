import React, { useState } from "react";

const FaqOneTime= () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is Chefit?",
      answer:
        "Chefit is a one-time cooking service where our trusted and verified cooks prepare healthy meals in the comfort of your kitchen.",
    },
    {
      question: "What is the price for Chefit?",
      answer:
        "The base price for the Chefit service is ₹499. For each additional person, there is an extra charge of ₹100 per person.",
    },
    {
        question: "How can I find out if this service is available in my area?",
        answer:
          "To check service availability, enter your address and select your area. The home page on the mobile app will then display a list of services offered at your location.",
    },
    {
      question: "Will Chefit provide groceries along with the service?",
      answer:
        "No, groceries are not provided. You need to manage the groceries yourself.",
    },
    {
      question: "What can I expect my cook to do post cooking?",
      answer:
        "No, we do not provide post-service utensil cleaning. The cook will tidy the cooking area, transfer food to serving bowls, and place used utensils in the sink with water. The kitchen and countertops will be left clean.",
    },
    {
      question: "How many dishes can the cook prepare?",
      answer:
        "The cook can prepare up to 4 dishes as part of the service, which includes a variety of daily home-cooked meals like Dal, Chawal, Roti, and Sabzi (Roti and Chawal are included within the dishes).",
    },
    {
        question: "How long will a cook stay at my booking?",
        answer:
          "The cook will spend for 1.5 hours for up to 4 people. For each additional 1-2 people, an extra 30 minutes is added. For example, a booking for 5-6 people, the cook will be there for 2 hours.",
    },
    {
        question: "Is Chefit suitable for parties or get-togethers?",
        answer:
          "Chefit specializes in providing daily home-cooked meals, preparing up to four different dishes. For events like house parties or get-togethers, we recommend our Chef for Party service, which offers professional, multi-cuisine expertise tailored to your gathering's needs.",
    },
    {
        question: "Can I hire the same professional for the 'cook for a month' service?",
        answer:
          "No, Chefit provides a one-time cooking service. For a monthly arrangement, we recommend booking through our 'Cook for a Month' service by scheduling a trial. For any concerns, please contact our customer support.",
    },
    {
        question: "What are the cancellation and refund policies?",
        answer:
          "We provide a 100% refund if you cancel before a cook has been assigned. If you cancel after a cook has been assigned, a 20% cancellation fee will be charged.",
    },
    {
        question: "When will the cook be assigned for a Chefit booking?",
        answer:
          "A cook will be assigned at least 60 minutes before your scheduled booking time.",
    },
    {
        question: "How can I get support related to my booking?",
        answer:
          "For support, contact us through the ‘Help & Support section’ on the ChefKart App. Our support team is available from 06:00 AM to 09:30 PM.",
    },

  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-6xl  mt-16 text-orange-400 font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-2xl font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform  ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-2xl">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqOneTime;