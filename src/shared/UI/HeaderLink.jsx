import React from "react";
import {NavLink} from "react-router/internal/react-server-client";

const HeaderLink = ({text, link, children, styles}) => {
	return (
		<li
			className={"py-2 lg:px-3 text-gray-500 cursor-pointer hover:text-black transition-colors duration-300 " + styles}>
			<NavLink to={`/${link}`}>{text}</NavLink>
			{children}
		</li>
	);
};

export default HeaderLink;