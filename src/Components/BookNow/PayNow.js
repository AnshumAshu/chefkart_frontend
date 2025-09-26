import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this

const PayNow = ({ time, date, diners, chef, address, onBack }) => {
  const navigate = useNavigate(); // ✅ initialize navigation
  const totalAmount = 499 + diners * 100;

  const handlePayment = async () => {
    const key = "rzp_test_pdtAzZ20wjr937"; // use your Razorpay public test key
    const amount = (499 + diners * 100) * 100; // in paise

    const options = {
      key: key,
      amount: amount,
      currency: "INR",
      name: "ChefKart",
      description: "Test Payment - Booking",
      handler: function (response) {
        alert("Payment successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Signature:", response.razorpay_signature);

        // ✅ Redirect to home after success
        navigate("/");
      },
      prefill: {
        name: "Anshum",
        email: "anshum@example.com",
        contact: "9876543210",
      },
      notes: {
        bookingDate: date,
        bookingTime: time,
        diners: diners,
        address: address?.details || "",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="text-white p-4">
      <button onClick={onBack} className="text-orange-400 mb-2">
        ← Back
      </button>
      <h2 className="text-xl font-semibold mb-2">Booking Summary</h2>

      <div className="mb-4">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Diners:</strong> {diners}</p>
        <p><strong>Chef:</strong> {chef.chefId}</p>
        <p><strong>Slot:</strong> {chef.slot}</p>
        <p><strong>Address:</strong> {address?.details}</p>
      </div>

      <div className="text-lg font-bold mb-4">Total: ₹{totalAmount}</div>

      <button
        className="bg-green-500 w-full py-2 rounded text-black font-bold hover:bg-green-600"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PayNow;




// import React from "react";

// const PayNow = ({ time, date, diners, chef, address, onBack, userId, bookingId }) => {
//   const totalAmount = 499 + diners * 100;

//   const handlePayment = async () => {
//     try {
//       // 1. Call backend to create order
//       const res = await fetch("http://localhost:8000/order/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           bookingId,
//           userId,
//           amount: totalAmount,
//           paymentMethod: "upi", // or dynamic based on user choice
//         }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         alert("Failed to create order!");
//         return;
//       }

//       // 2. Open Razorpay checkout
//       const options = {
//         key: "rzp_test_pdtAzZ20wjr937", 
//         amount: data.amount, // backend returns amount in paisa
//         currency: data.currency,
//         name: "ChefKart",
//         description: "Booking Payment",
//         order_id: data.orderId, // important: use orderId from backend
//         handler: async function (response) {
//           // 3. Verify payment on backend
//           await fetch("http://localhost:8000/order/verify", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               bookingId,
//               userId,
//               amount: totalAmount,
//               paymentMethod: "upi",
//             }),
//           });
//           alert("Payment successful!");
//         },
//         prefill: {
//           name: "Anshum",
//           email: "anshum@example.com",
//           contact: "9876543210",
//         },
//         notes: {
//           bookingDate: date,
//           bookingTime: time,
//           diners: diners,
//           address: address?.details || "",
//         },
//         theme: { color: "#F37254" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error(error);
//       alert("Payment failed!");
//     }
//   };

//   return (
//     <div className="text-white p-4">
//       <button onClick={onBack} className="text-orange-400 mb-2">
//         ← Back
//       </button>
//       <h2 className="text-xl font-semibold mb-2">Booking Summary</h2>

//       <div className="mb-4">
//         <p>
//           <strong>Date:</strong> {date}
//         </p>
//         <p>
//           <strong>Time:</strong> {time}
//         </p>
//         <p>
//           <strong>Diners:</strong> {diners}
//         </p>
//         <p>
//           <strong>Chef:</strong> {chef.chefId}
//         </p>
//         <p>
//           <strong>Slot:</strong> {chef.slot}
//         </p>
//         <p>
//           <strong>Address:</strong> {address?.details}
//         </p>
//       </div>

//       <div className="text-lg font-bold mb-4">Total: ₹{totalAmount}</div>

//       <button
//         className="bg-green-500 w-full py-2 rounded text-black font-bold hover:bg-green-600"
//         onClick={handlePayment}
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default PayNow;
