// import React, { useState } from 'react';

// const InvestorsCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const investors = [
//     {
//       name: 'Deepinder Goyal',
//       title: 'Founder & CEO, Zomato',
//       description: 'Deepinder Goyal is the founder and CEO of Zomato, one of the largest food tech companies in India. As an investor of Chefkart, Goyal is backing a promising idea to offer authentic and affordable meals prepared in the comfort of one\'s home. His investment is a testament to the potential of Chefkart and its innovative approach to at-home cooking services.',
//       image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FGoyal_aa638560fb.webp&w=1920&q=75'
//     },
//     {
//       name: 'Investor 2',
//       title: 'Title 2',
//       description: 'Description 2',
//       image: 'https://example.com/investor2.jpg'
//     },
//     {
//       name: 'Investor 3',
//       title: 'Title 3',
//       description: 'Description 3',
//       image: 'https://example.com/investor3.jpg'
//     }
//   ];

//   const handlePrevious = () => {
//     setCurrentSlide((currentSlide - 1 + investors.length) % investors.length);
//   };

//   const handleNext = () => {
//     setCurrentSlide((currentSlide + 1) % investors.length);
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-between py-8">
//       <div className="flex justify-start w-1/6 px-4">
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg mr-2"
//           onClick={handlePrevious}
//         >
//           Previous
//         </button>
//       </div>
//       <div className="flex flex-col md:flex-row justify-between md:w-2/3 px-4">
//         <div className="flex flex-col md:w-1/2">
//           <h2 className="text-2xl font-bold mb-4">{investors[currentSlide].name}</h2>
//           <p className="text-gray-700 mb-6">{investors[currentSlide].title}</p>
//           <p className="text-gray-600">{investors[currentSlide].description}</p>
//         </div>
//         <div className="flex justify-end md:w-1/2">
//           <img src={investors[currentSlide].image} alt={investors[currentSlide].name} className="rounded-lg shadow-lg" />
//         </div>
//       </div>
//       <div className="flex justify-end w-1/6 px-4">
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InvestorsCarousel;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvestorsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await axios.get('http://localhost:8000/investor/getinvestor');
        setInvestors(response.data);
      } catch (error) {
        console.error('Error fetching investor data:', error);
      }
    };

    fetchInvestors();
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + investors.length) % investors.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % investors.length);
  };

  if (investors.length === 0) {
    return <div className="text-center py-10">Loading investors...</div>;
  }

  const current = investors[currentSlide];

  return (
    <div className="flex flex-col md:flex-row justify-between py-8">
      {/* Previous Button */}
      <div className="flex justify-start w-1/6 px-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg mr-2"
          onClick={handlePrevious}
        >
          Previous
        </button>
      </div>

      {/* Investor Info */}
      <div className="flex flex-col md:flex-row justify-between md:w-2/3 px-4">
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{current.title}</h2>
          <p className="text-gray-700 font-semibold mb-4">{current.subtitle}</p>
          <p className="text-gray-600">{current.description}</p>
        </div>
        <div className="flex justify-end md:w-1/2 mt-6 md:mt-0">
          <img
            src={current.image}
            alt={current.title}
            className="rounded-lg shadow-lg w-full max-w-sm object-cover"
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end w-1/6 px-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InvestorsCarousel;
