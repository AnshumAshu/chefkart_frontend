import React from 'react'

const Lower = () => {
  return (
    <div>
      <section className="text-white body-font bg-orange-950">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          
          {/* Left Section */}
          <div className="md:w-2/5 w-full flex items-center justify-center text-center">
            <h2 className="sm:text-5xl text-2xl text-white font-medium title-font">
              ChefKart के <span className="text-orange-500">4500 से भी ज़्यादा कुक्स</span> का हिस्सा बनें।
            </h2>
          </div>
          
          {/* Right Section */}
          <div className="md:w-3/5 w-full flex items-center justify-center text-center md:pl-6 mt-6 md:mt-0">
            <p className="leading-relaxed text-base max-w-xl">
              इज़्ज़त और गर्व के साथ जिएँ। ChefKart की ट्रेनिंग व सहायता से अपने खाना बनाने के कौशल को एक नई मंज़िल पर ले जाएँ।
            </p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Lower
