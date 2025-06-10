import React from "react";

const Star = ({ size = "size-32", className = "" }) => {
	return (
		<div className={`${size} ${className}`}>
			<svg
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
			>
				<path
					d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0"
					fill="#D6E7EF"
				/>
			</svg>
		</div>
	);
};

export default Star;
