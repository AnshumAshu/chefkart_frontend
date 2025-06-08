import React, { useState } from "react";
import Header from "./header";
import Calender from "./Calender";
import TimeSelector from "./TimeSelector";
import DinerSelector from "./DinerSelector";
import BookingFooter from "./BookingFooter";
import AddressManager from "./AddressManager"; // ✅ Import the unified manager
import ChefList from "./ChefList";
import PayNow from "./PayNow"; // <-- import your summary component

function Combine() {
	const [step, setStep] = useState("booking");
	const [diners, setDiners] = useState(1);
	const [selectedTime, setSelectedTime] = useState("10:30 AM");
    const [selectedChef, setSelectedChef] = useState(null);

	const handleContinue = () => {
		if (step === "booking") setStep("address");
	};

	const renderStep = () => {
		switch (step) {
			case "booking":
				return (
					<>
						<Header />
						<Calender />
						<TimeSelector
							selectedTime={selectedTime}
							setSelectedTime={setSelectedTime}
						/>
						<DinerSelector diners={diners} setDiners={setDiners} />
					</>
				);

			case "address":
				return (
					<AddressManager
						onContinue={() => setStep("chefs")}
						onBack={() => setStep("booking")}
					/>
				);

			case "chefs":
				return (
					<ChefList
						onBack={() => setStep("address")}
						onContinue={(chefData) => {
							setSelectedChef(chefData);
							setStep("summary"); // move to Pay Now card
						}}
					/>
				);

			case "summary":
				return (
					<PayNow
						time={selectedTime}
						diners={diners}
						chef={selectedChef}
						onBack={() => setStep("chefs")}
					/>
				);

			default:
				return null;
		}
	};

	return (
		<div className="ml-16 mt-16 w-[360px] h-[700px] bg-black rounded-2xl shadow-lg p-6 relative overflow-hidden">
			{renderStep()}
			{step === "booking" && (
				<div className="absolute bottom-0 left-0 w-full">
					<BookingFooter onContinue={handleContinue} />
				</div>
			)}
		</div>
	);
}

export default Combine;
