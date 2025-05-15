import React from 'react';

const Stat = () => {
  return (
    <div>
      <section className="text-white bg-black body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Text Section */}
          <div className="flex flex-col md:pr-10 md:mb-0 mb-10 w-full md:w-1/2 md:text-left text-center">
            <h2 className="text-4xl text-white tracking-widest font-medium title-font mb-4">
              Our affordable prices are <br />
              based <span className="text-orange-500">on 4 Factors</span>
            </h2>
            <h1 className="text-1xl font-medium title-font text-white">
              Minimum prices guaranteed*
            </h1>
          </div>

          {/* Right Icons Row */}
          <div className="flex justify-between w-full md:w-1/2 gap-6">
            {/* Icon 1 */}
            <div className="flex flex-col items-center text-white">
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBatch_Assign_54bbf77213.png&w=1920&q=75"
                alt="Cook's Experience"
                className="w-20 h-20"
              />
              <p className="mt-2 text-center">No. of People</p>
            </div>

            {/* Icon 2 */}
            <div className="flex flex-col items-center text-white">
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNoodles_77d70fadf1.png&w=1920&q=75"
                alt="Kitchen Size"
                className="w-20 h-20"
              />
              <p className="mt-2 text-center">No. of Dishes</p>
            </div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center text-white">
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVegan_Food_b23033b652.png&w=1920&q=75"
                alt="Frequency"
                className="w-20 h-20"
              />
              <p className="mt-2 text-center">Cuisine Preference</p>
            </div>

            {/* Icon 4 */}
            <div className="flex flex-col items-center text-white">
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPlace_Marker_e599ac1ded.png&w=1920&q=75"
                alt="Meal Type"
                className="w-20 h-20"
              />
              <p className="mt-2 text-center">Location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
