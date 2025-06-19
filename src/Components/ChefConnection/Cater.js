import React, { useEffect, useState } from "react";
import axios from "axios";

const Cater = () => {
  const [joins, setJoins] = useState([]);

  useEffect(() => {
    const fetchJoins = async () => {
      try {
        const response = await axios.get("https://chefkart-backend.onrender.com/join/get");
        setJoins(response.data);
      } catch (error) {
        console.error("Error fetching joins:", error);
      }
    };

    fetchJoins();
  }, []);

  return (
    <div>
      <section className="text-black font-bold body-font">
        <h2 className="text-center text-5xl font-bold text-black mt-10">
          ChefKart से क्यूँ जुड़ें?
        </h2>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {joins.map((join) => (
              <div key={join._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={join.image}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl title-font font-bold text-black mt-5">
                    {join.title}
                  </h2>
                  <p className="text-base leading-relaxed mt-2">
                    {join.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cater;
