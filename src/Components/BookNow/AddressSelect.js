import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

const AddressSelect = ({
	addresses,
	onNewAddress,
	onAddressSelected,
	onBack,
}) => {
	const [selected, setSelected] = useState(null);

	return (
		<div className="text-white space-y-4">
			<div className="flex items-center space-x-2 mb-2">
				<button onClick={onBack}>
					<ChevronLeft className="text-white w-5 h-5" />
				</button>
				<h2 className="text-lg font-semibold">Select Address</h2>
			</div>

			{addresses.map((addr) => (
				<div
					key={addr.id}
					className={`p-3 rounded-lg border cursor-pointer ${
						selected === addr.id
							? "border-orange-400"
							: "border-gray-600"
					}`}
					onClick={() => setSelected(addr.id)}
				>
					<p className="font-medium">{addr.name}</p>
					<p className="text-sm text-gray-400">{addr.details}</p>
				</div>
			))}

			<button
				onClick={onNewAddress}
				className="mt-2 text-sm text-orange-400 underline"
			>
				+ Add New Address
			</button>

			<div className="mt-4">
				<button
					disabled={!selected}
					onClick={onAddressSelected}
					className={`w-full py-2 rounded-md ${
						selected
							? "bg-orange-500 hover:bg-orange-600 text-white"
							: "bg-gray-700 text-gray-400 cursor-not-allowed"
					}`}
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default AddressSelect;
