import React, {useEffect, useState} from "react";
import {RxCross2, RxHamburgerMenu} from "react-icons/rx";
import ButtonLight from "../shared/UI/ButtonLight.jsx";
import ButtonDark from "../shared/UI/ButtonDark.jsx";
import HeaderLink from "../shared/UI/HeaderLink.jsx";
import {links} from "../pages/routes.jsx"
import {NavLink} from "react-router/internal/react-server-client";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
	
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	
	const toggleIsopen = () => {
		setIsOpen(!isOpen)
	}
	
	
	return (
		<header
			className={"lg:flex lg:items-center lg:justify-between"}>
			<div className={"flex justify-between items-center"}>
				<NavLink to={"/"}>
					<div className={"cursor-pointer"}>
						<h3 className={"font-semibold text-lg"}>Astro<span
							className={"text-gray-500 font-normal"}>ship</span></h3>
					</div>
				</NavLink>
				{isOpen ? <RxCross2 onClick={toggleIsopen} className={"lg:hidden"}/>
					: <RxHamburgerMenu onClick={toggleIsopen} className={"lg:hidden"}/>}
			</div>
			{
				(isOpen || !isMobile) && (
					<>
						<nav
							className={"my-2 font-normal "}>
							<ul
								className={"flex flex-col lg:flex-row lg:gap-3 lg:items-center lg:justify-between"}>
								{links.map(link => <HeaderLink text={link}
								                               key={link}
								                               link={link.toLowerCase().replace(/ /g, "")}/>)}
								<HeaderLink text={"Pro version"} link={"/pro"}
								            styles={"flex items-center gap-2"}>
									<span
										className={"text-[10px] bg-purple-500 text-slate-50 animate-pulse px-2 py-0.5 rounded-2xl"}>NEW</span>
								</HeaderLink>
								<li
									className={"py-2 flex gap-4 mt-3 lg:hidden"}>
									<ButtonLight>Log in</ButtonLight>
									<ButtonDark className={"px-4"}>Sign up</ButtonDark>
								</li>
							</ul>
						</nav>
						<div className={"hidden lg:flex gap-2 items-center"}>
							<a className={"w-20"}>Log in</a>
							<ButtonDark>Sign up</ButtonDark>
						</div>
					</>
				)
			}
		</header>
	);
};

export default Header;