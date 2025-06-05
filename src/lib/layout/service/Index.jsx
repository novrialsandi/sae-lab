import React from "react";

const LayoutServiceComponent = ({ children }) => {
	return (
		<div className="flex">
			<div>layout</div>
			<>{children}</>
		</div>
	);
};

export default LayoutServiceComponent;
