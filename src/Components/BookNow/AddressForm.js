//import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

const AddressForm = ({ onBack, onContinue, form, setForm }) => {
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onContinue();
	};

	return (
		<div className="text-white space-y-4">
			<div className="flex items-center space-x-2 mb-2">
				<button onClick={onBack}>
					<ChevronLeft className="text-white w-5 h-5" />
				</button>
				<h2 className="text-lg font-semibold">Add New Address</h2>
			</div>

			<form onSubmit={handleSubmit} className="space-y-3">
				<input
					name="name"
					placeholder="Address Name (e.g. Home, Office)"
					value={form.name}
					onChange={handleChange}
					className="w-full p-2 rounded-md bg-gray-800 text-white"
					required
				/>
				<input
					name="house"
					placeholder="House No. / Flat"
					value={form.house}
					onChange={handleChange}
					className="w-full p-2 rounded-md bg-gray-800 text-white"
					required
				/>
				<input
					name="area"
					placeholder="Area / Street"
					value={form.area}
					onChange={handleChange}
					className="w-full p-2 rounded-md bg-gray-800 text-white"
					required
				/>
				<input
					name="landmark"
					placeholder="Landmark"
					value={form.landmark}
					onChange={handleChange}
					className="w-full p-2 rounded-md bg-gray-800 text-white"
				/>
				<input
					name="pincode"
					placeholder="Pincode"
					value={form.pincode}
					onChange={handleChange}
					className="w-full p-2 rounded-md bg-gray-800 text-white"
					required
				/>

				<div className="h-32 w-full bg-gray-700 flex items-center justify-center rounded-md text-sm text-gray-300">
					Map Placeholder (Google Maps)
				</div>

				<button
					type="submit"
					className="w-full py-2 mt-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white"
				>
					Continue
				</button>
			</form>
		</div>
	);
};

export default AddressForm;
