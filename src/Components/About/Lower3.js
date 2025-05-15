import React from 'react'

const Lower3 = () => {
  return (
    <div>
        <section className="text-gray-600 bg-[#f1f1f1] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow w-1/3 lg:pr-24 md:pr-16 flex flex-col    md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 className=" text-3xl mb-4 font-bold text-orange-500">Mission</h2>
                <h1 className=" text-4xl mb-4 font-bold text-black">Impacting the cooking industry</h1>
            <p className="mb-8 leading-relaxed mt-4 text-1xl font-bold text-black">We are on a mission to manage millions of kitchens while empowering the cooking community to contribute significantly to the economy.</p>
            </div>
            
            

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://thechefkart.com/_next/image?url=%2FiStock-1223383996%201.png&w=1920&q=75"/>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Lower3