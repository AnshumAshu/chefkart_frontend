// BookingFooter.js
import React from "react";

const BookingFooter = ({ amount = 499, onContinue }) => {
  return (
    <div className="p-4 bg-black text-white border-t border-gray-700">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">₹{amount}</p>
          <p className="text-xs text-orange-400">Payable Amount (DETAILS)</p>
        </div>
        <button
          onClick={onContinue}
          className="bg-neutral-700 px-5 py-2 rounded-lg text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BookingFooter;
