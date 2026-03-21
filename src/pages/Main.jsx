import React from "react";
import astro from "../assets/astro.webp"
import ButtonDark from "../shared/UI/ButtonDark.jsx";
import {FaCloudDownloadAlt, FaGithub, FaReact} from "react-icons/fa";
import {RiSvelteFill, RiTailwindCssFill, RiAngularjsLine} from "react-icons/ri";
import {PiBagSimpleFill} from "react-icons/pi";
import {IoLogoVercel} from "react-icons/io5";
import {SiAstro} from "react-icons/si";

const icons = [<FaReact/>, <RiSvelteFill/>, <IoLogoVercel/>,
	<RiTailwindCssFill/>, <RiAngularjsLine/>, <SiAstro/>]


const GridElement = () => {
	return <div className={"flex gap-4 items-start"}>
		<PiBagSimpleFill
			className={"shrink-0 text-white bg-black p-2 text-3xl rounded-full"}/>
		<div>
			<p className={"text-lg font-semibold"}>
				Bring Your Own Framework
			</p>
			<p className={"text-gray-600 mt-2 leading-relaxed"}>
				Build your site using React, Svelte, Vue, Preact, web
				components, or just plain ol' HTML + JavaScript.
			</p>
		</div>
	</div>
}

const Main = () => {
	return (
		<div>
			<main
				className={"grid lg:grid-cols-2 place-items-center pt-16 pb-8"}>
				<div>
					<h3 className={"text-5xl lg:text-6xl lg:font-bold font-semibold"}>
						Marketing website done with Astro
					</h3>
					<p className={"mt-4 text-lg text-gray-600"}>
						Astroship is a starter template for startups, marketing websites &
						landing pages. Built with Astro.build and TailwindCSS. You can
						quickly
						create any website with this starter.
					</p>
					<div className={"flex mt-5 mb-3 gap-3 flex-col lg:flex-row"}>
						<ButtonDark><FaCloudDownloadAlt/>
							Download for Free</ButtonDark>
						<button
							className={"w-full py-2 items-center flex justify-center gap-2 border-black border-2 rounded-sm hover:bg-slate-100"}>
							<FaGithub/>
							GitHub
							Repo
						</button>
					</div>
				</div>
				<img className={"md:block hidden"} src={astro} alt={"astro"}/>
			</main>
			<section>
				<h3 className={"lg:text-5xl text-3xl font-semibold"}>
					Everything you need to start a website
				</h3>
				<p className={"mt-4 lg:text-lg text-gray-600"}>
					Astro comes batteries included. It takes the best parts of
					state-of-the-art tools and adds its own innovations.
				</p>
				<div className={"grid gap-16 sm:grid-cols-2 md:grid-cols-3 mt-16"}>
					<GridElement/>
					<GridElement/>
					<GridElement/>
					<GridElement/>
					<GridElement/>
					<GridElement/>
				</div>
			</section>
			<section className={"mt-24 text-center"}>
				<p className={"text-gray-600"}>Works with your
					technologies</p>
				<div
					className={"mt-10 flex md:text-6xl text-4xl flex-wrap gap-3 justify-around"}>
					{icons.map((icon, i) => <span key={i}>{icon}</span>)}
				</div>
			</section>
			<section
				className={"mt-16 mb-10 text-white px-6 text-center py-18 bg-black rounded-lg"}>
				<h3 className={"text-2xl sm:text-4xl font-semibold mb-3"}>Build faster
					websites.</h3>
				<p className={"text-gray-400 "}>
					Pull content from anywhere and serve it fast with Astro's next-gen
					island architecture.
				</p>
				<button
					className={"px-5 text-black cursor-pointer py-3 mt-4 bg-white rounded-sm"}>Get
					Started
				</button>
			</section>
		</div>
	);
};

export default Main;