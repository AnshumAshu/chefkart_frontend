import React from "react";

const StatsSection = () => {
  const iconLink = "https://yourdomain.com"; // Replace with your personal link

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-center py-12">
        <div className="flex flex-wrap justify-around w-full">
          {/* Stats Card 1 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2 flex items-center gap-2">
              3M+
              <a href={iconLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://thumbs.dreamstime.com/b/fast-food-serving-icon-white-background-fast-food-serving-icon-361911239.jpg"
                  alt="Meals Icon"
                  className="w-12 h-12 inline-block"
                />
              </a>
            </div>
            <p className="text-gray-600 text-lg">Meals cooked with love</p>
          </div>

          {/* Stats Card 2 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2 flex items-center gap-2">
              4500+
              <a href={iconLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://t4.ftcdn.net/jpg/01/71/98/19/240_F_171981945_0TJfwQiSnIJEMgZysW30r8pmqBLFDzk3.jpg"
                  alt="Cooks Icon"
                  className="w-12 h-12 inline-block"
                />
              </a>
            </div>
            <p className="text-gray-600 text-lg">Verified & Trained Cooks</p>
          </div>

          {/* Stats Card 3 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2 flex items-center gap-2">
              10K+
              <a href={iconLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeI-Xjen5zsARtJhSgACTCh-9FTW5IQydJw&s"
                  alt="Households Icon"
                  className="w-10 h-9 inline-block"
                />
              </a>
            </div>
            <p className="text-gray-600 text-lg">Households served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
