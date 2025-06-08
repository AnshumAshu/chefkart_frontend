import React, { useState } from "react";
import AddressSelect from "./AddressSelect";
import AddressForm from "./AddressForm";

const AddressManager = ({ onContinue, onBack }) => {
	const [step, setStep] = useState("select"); // 'select' or 'form'
    const [form, setForm] = useState({
		name: "",
		house: "",
		area: "",
		landmark: "",
		pincode: "",
	});
    const [addresses, setAddresses] = useState([]);

	const handleNewAddressSubmit = () => {
		const newAddress = {
			id: Date.now(),
			name: form?.name || "New Address",
			details: `${form?.house}, ${form?.area}, ${form?.landmark}, ${form?.pincode}`,
		};

		setAddresses([...addresses, newAddress]);
		setStep("select"); // Go back to selection with updated list
	};

	return (
		<div>
			{step === "select" ? (
				<AddressSelect
					addresses={addresses}
					onNewAddress={() => setStep("form")}
					onAddressSelected={onContinue}
					onBack={onBack}
				/>
			) : (
				<AddressForm
                    form={form}
                    setForm={setForm}
					onBack={() => setStep("select")}
					onContinue={handleNewAddressSubmit}
				/>
			)}
		</div>
	);
};

export default AddressManager;
