import React, { useState } from "react";
import ContactLower from "./ContactLower";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "United States",
    message: "",
  });

  const [status, setStatus] = useState(null); // success or error message

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("https://chefkart-backend.onrender.com/contact/createContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: data.message || "Message sent!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "United States",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong." });
    }
  };

  return (
    <div>
      <section
        className="text-gray-600 body-font relative"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/02/76/53/99/240_F_276539931_BDwFEnJTkSMB7XhdvSGmXAabtL4MN3uP.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-5 py-12 mx-auto flex lg:flex-nowrap flex-wrap">
          {/* Left Section: Map and Address */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-6 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3508.886116953435!2d77.08022800000002!3d28.422693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1732564051942!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded  w-full">
              <div className="lg:w-1/2 px-6 mb-4">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  B-179, Sector 57, near Rail Vihar, Block B, Sushant Lok III,
                  Sector 57, Gurugram, Haryana 122003
                </p>
              </div>
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  ashuanshum@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+8252587109</p>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col rounded-lg md:ml-auto w-full mt-8 lg:mt-0 px-4 md:px-6">
            <h2 className="text-gray-900 text-3xl md:text-4xl text-center font-medium title-font mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed text-gray-700 text-center mb-6 text-lg">
              Fill out the form & get in touch
            </p>

            {status && (
              <div
                className={`mb-4 text-center font-semibold ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="leading-7 text-sm  text-gray-600">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Pune</option>
                  <option>Ahmedabad</option>
                  <option>Jaipur</option>
                  <option>Lucknow</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please write your message in detail"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-orange-500 border-0 mb-4 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <ContactLower />
    </div>
  );
};

export default Contact;
