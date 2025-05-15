import React from 'react'

const Lower1 = () => {
  return (
    <div>
      <section className="text-white body-font bg-orange-950">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          
          {/* Left Section */}
          <div className="md:w-2/5 w-full flex items-center justify-center text-center">
            <h2 className="sm:text-5xl text-2xl text-white font-medium title-font">
              <span className="text-orange-500">Why order online when you can just Chefit?</span> 
            </h2>
          </div>
          
          {/* Right Section */}
          <div className="md:w-3/5 w-full flex items-center justify-center text-center md:pl-6 mt-6 md:mt-0">
            <p className="leading-relaxed text-1xl  max-w-xl">
              Enjoy your favourite comfort food cooked in your kitchen without burning your wallets. Get a cook for a one-time meal at an affordable price.
            </p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Lower1
