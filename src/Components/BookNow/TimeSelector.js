// TimeSelector.js
//import React, { useState } from "react";

const TimeSelector = ({selectedTime,setSelectedTime}) => {
  

  // Generate time slots between 8:00 AM and 6:00 PM at 30-minute intervals
  const generateTimeSlots = () => {
    const times = [];
    const start = 8 * 60; // 8:00 AM in minutes
    const end = 18 * 60; // 6:00 PM in minutes

    for (let mins = start; mins <= end; mins += 30) {
      const hours = Math.floor(mins / 60);
      const minutes = mins % 60;
      const suffix = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 === 0 ? 12 : hours % 12;
      const formatted = `${displayHours}:${minutes.toString().padStart(2, "0")} ${suffix}`;
      times.push(formatted);
    }

    return times;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="p-4 border-b border-gray-700">
      <p className="text-white font-medium mb-2">Select time of visit</p>
      <div className="flex justify-between items-center text-white">
        <span className="text-sm">Visit time</span>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="bg-transparent text-sm font-semibold outline-none"
        >
          {timeSlots.map((time, index) => (
            <option key={index} value={time} className="text-black">
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimeSelector;
