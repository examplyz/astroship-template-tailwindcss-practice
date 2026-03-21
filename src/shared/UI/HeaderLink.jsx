import React from "react";

const HeaderLink = ({text, link, children, styles}) => {
	return (
		<li
			className={"py-2 lg:px-3 text-gray-500 cursor-pointer hover:text-black transition-colors duration-300 " + styles}>
			<a href={`/${link}`}>{text}</a>
			{children}
		</li>
	);
};

export default HeaderLink;