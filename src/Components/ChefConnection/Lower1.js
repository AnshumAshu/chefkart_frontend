import React, { useState } from 'react';

const Lowe1 = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOTP = async () => {
    try {
      await fetch("https://chefkart-backend.onrender.com/otp/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      setOtpSent(true);
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const res = await fetch("https://chefkart-backend.onrender.com/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });
      const data = await res.json();
      if (data.success) {
        setIsVerified(true);
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      alert("Error verifying OTP");
    }
  };

  return (
    <div>
      <section className="text-gray-900 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:flex lg:flex-row flex-col justify-between items-center">

            {/* Image Section */}
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
            />

            {/* Text Section */}
            <div className="lg:w-1/2 w-full mt-12 lg:pl-10 lg:py-6 text-center lg:text-left">
              <h2 className="text-md font-bold text-red-500 tracking-widest mb-2">हमें है विश्वास</h2>
              <h1 className="text-gray-900 text-4xl lg:text-6xl font-bold leading-tight mb-4">
                आपका बनाया खाना, खाएगा ज़माना!
              </h1>
              <h2 className="text-sm text-black font-bold mt-4">ऊपर जाएँ</h2>
              <button
                className="flex mx-auto lg:mx-0 text-white mt-6 text-xl bg-black border-0 py-2 px-6 rounded-lg hover:bg-gray-800 transition"
                onClick={() => setShowForm(true)}
              >
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            {!isVerified ? (
              <>
                <h2 className="text-xl font-bold mb-4">Join the Family</h2>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2 w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mb-2 w-full p-2 border rounded"
                />
                {!otpSent ? (
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded w-full"
                    onClick={handleSendOTP}
                  >
                    Send OTP
                  </button>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="mb-2 w-full p-2 border rounded"
                    />
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded w-full"
                      onClick={handleVerifyOTP}
                    >
                      Verify
                    </button>
                  </>
                )}
              </>
            ) : (
              <p className="text-green-600 text-center text-lg">
                🎉 Now you are our family member!
              </p>
            )}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lowe1;
