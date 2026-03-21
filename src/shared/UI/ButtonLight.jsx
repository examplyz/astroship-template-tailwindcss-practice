import React from "react";

const ButtonLight = ({children, className}) => {
	return (
		<button
			className={className + " rounded-sm text-center px-4 py-2 bg-gray-100 text-black hover:bg-gray-200 w-full"}>
			{children}
		</button>
	);
};

export default ButtonLight;