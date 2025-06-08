// DinerSelector.js
//import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";

const DinerSelector = ({diners,setDiners}) => {
  

  const handleIncrement = () => {
    if (diners < 10) setDiners(diners + 1); // Optional limit
  };

  const handleDecrement = () => {
    if (diners > 1) setDiners(diners - 1);
  };

  const basePrice = 0;
  const extraPersonPrice = 100;
  const totalPrice = basePrice + (diners - 1) * extraPersonPrice;

  // Serving time logic (e.g., 15 mins base + 5 min per extra person)
  const baseTime = 15; // in minutes
  const extraTimePerPerson = 5;
  const totalTime = baseTime + (diners - 1) * extraTimePerPerson;

  return (
    <div className="p-4 border-b border-gray-700 text-white">
      <p className="font-medium mb-2">Select number of diners</p>
      <div className="flex items-center gap-4">
        <FaUserCircle className="text-3xl" />
        <div className="flex items-center gap-3">Total Members       
          <button
            onClick={handleDecrement}
            className="p-1 bg-green-500 rounded-full"
          >
            <IoRemove />
          </button>
          <span className="text-lg font-bold">{diners}</span>
          <button
            onClick={handleIncrement}
            className="p-1 bg-green-500 rounded-full"
          >
            <IoAdd />
          </button>
        </div>
      </div>

      <div className="mt-3 text-sm">
        <p>
          <span className="font-semibold">Total Price: </span>₹{totalPrice}
        </p>
        <p>
          <span className="font-semibold">Estimated Serving Time: </span>
          {totalTime} minutes
        </p>
      </div>
    </div>
  );
};

export default DinerSelector;
