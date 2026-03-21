import React from "react";

const ButtonDark = ({children, className}) => {
	return (
		<button
			className={className + " rounded-sm text-center flex items-center justify-center gap-2 py-2 bg-black text-white hover:bg-gray-800 w-full"}>
			{children}
		</button>
	);
};

export default ButtonDark;