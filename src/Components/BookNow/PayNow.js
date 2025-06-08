import React from "react";

const PayNow = ({ time, date, diners, chef, address, onBack }) => {
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
			// No `order_id` here, as we are skipping backend order creation
			handler: function (response) {
				alert("Payment successful!");
				console.log("Payment ID:", response.razorpay_payment_id);
				console.log("Signature:", response.razorpay_signature);
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
				<p>
					<strong>Date:</strong> {date}
				</p>
				<p>
					<strong>Time:</strong> {time}
				</p>
				<p>
					<strong>Diners:</strong> {diners}
				</p>
				<p>
					<strong>Chef:</strong> {chef.chefId}
				</p>
				<p>
					<strong>Slot:</strong> {chef.slot}
				</p>
				<p>
					<strong>Address:</strong> {address?.details}
				</p>
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
