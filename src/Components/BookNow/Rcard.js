import React from "react";

const RCard = () => {
	return (
		<div className="absolute right-8  flex items-end gap-6 z-0">
			{/* Left column: Top image above bottom-left image */}
			<div className="flex flex-col items-end gap-y-14 pt-10">
				<img
					src="https://thechefkart.com/booking-tag.png"
					alt="Top Right"
					className="w-[320px] h-[140px] object-contain rounded"
				/>
				<img
					src="https://thechefkart.com/booking-asset.png"
					alt="Bottom Right 1"
					className="mb-24 w-[380px] h-[280px] object-contain rounded"
				/>
			</div>

			{/* Right QR image */}
			<img
				src="https://thechefkart.com/qr.png"
				alt="Bottom Right 2"
				className="mb-16 w-48 h-48 object-contain rounded"
			/>
		</div>
	);
};

export default RCard;
