import React from "react";
import { BiBowlHot } from "react-icons/bi";

const Head = () => {
  return (
    <div className="w-full bg-rose-50 text-black py-3 px-5 flex items-center justify-center">
      <BiBowlHot className="text-rose-600 mr-2 text-2xl" />
      <span className="font-bold text-2xl text-center">
        Chefit service is available only in Delhi, Gurgaon & Bangalore!
      </span>
    </div>
  );
};

export default Head;
