import React, { useState } from "react";

const DateSelector = ({ selectedDate, onSelect }) => {
  const numberOfDays = 15;
  const today = new Date();

  const generateDates = (numDays) => {
    const result = [];
    for (let i = 0; i < numDays; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      result.push({
        full: date, // full date object for selection
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate().toString().padStart(2, "0"),
        month: date.toLocaleDateString("en-US", { month: "short" }),
        year: date.getFullYear(),
      });
    }
    return result;
  };

  const dates = generateDates(numberOfDays);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="p-4 border-b border-gray-700">
      <p className="text-white font-medium mb-2">Select visit date</p>
      <div className="flex gap-4 overflow-x-auto">
        {dates.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center px-3 py-2 rounded-full cursor-pointer transition ${
              i === selectedIndex
                ? "bg-green-500 text-black"
                : "text-white hover:bg-gray-800"
            }`}
            onClick={() => {
              setSelectedIndex(i);
              onSelect && onSelect(item.full); // pass full date to parent
            }}
          >
            <p className="text-xs">{item.month}</p>
            <p className="text-lg font-bold">{item.date}</p>
            <p className="text-xs">{item.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSelector;
