import React from 'react';

const StatsSection = () => {
  return (
    <section className="text-white body-font bg-green-950">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-nowrap justify-between text-center overflow-x-auto">
          <div className="w-1/3 px-4 min-w-[200px]">
            <h2 className="title-font font-bold text-3xl sm:text-4xl">3M+</h2>
            <p className="leading-relaxed">Meals cooked with love</p>
          </div>
          <div className="w-1/3 px-4 min-w-[200px]">
            <h2 className="title-font font-bold text-3xl sm:text-4xl">4500+</h2>
            <p className="leading-relaxed">Verified & trained cooks</p>
          </div>
          <div className="w-1/3 px-4 min-w-[200px]">
            <h2 className="title-font font-bold text-3xl sm:text-4xl">10K+</h2>
            <p className="leading-relaxed">Households served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
