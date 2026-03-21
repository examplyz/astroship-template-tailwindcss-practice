import React from "react";
import {SiTicktick} from "react-icons/si";
import {NavLink} from "react-router/internal/react-server-client";
import PageHeadline from "../components/PageHeadline.jsx";

const heading = "Pricing"
const paragraph = "Simple & Predictable pricing. No Surprises."

const PricingPage = () => {
	return (
		<div className={"mt-16"}>
			<PageHeadline heading={heading} paragraph={paragraph}/>
			<div
				className={"mb-16 auto-rows-fr grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12 max-w-(--breakpoint-lg) mx-auto"}>
				<div
					className={"px-5 py-10 flex-col text-center rounded-lg flex h-full justify-between border-gray-200 border"}>
					<h4 className={"text-gray-400 text-lg font-medium"}>
						Personal
					</h4>
					<p className={"text-4xl font-bold mt-4"}>Free</p>
					<ul className={"flex-col gap-5 flex mt-7 mb-8"}>
						<li
							className={"flex items-center gap-3 text-gray-800"}><SiTicktick
							className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Lifetime
							free
						</li>
						<li
							className={"flex items-center gap-3 text-gray-800"}><SiTicktick
							className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Up to 3
							users
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Unlimited
							Pages
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Astro
							Sub domain
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Basic
							Integrations
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> ommunity
							Support
						</li>
					</ul>
					<button
						className={"w-full hover:bg-slate-100 cursor-pointer border-black border py-2 rounded-md"}>Get
						started
					</button>
				</div>
				<div
					className={"px-5 py-10 flex-col text-center rounded-lg flex h-full justify-between  border-gray-200 border"}>
					<h4 className={"text-gray-400 text-lg font-medium"}>
						Startup
					</h4>
					<p className={"text-4xl font-bold mt-4"}>$19</p>
					<ul className={"flex-col gap-5 flex mt-7 mb-8"}>
						<li
							className={"flex items-center gap-3 text-gray-800"}><SiTicktick
							className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> All
							Free Features
						</li>
						<li
							className={"flex items-center gap-3 text-gray-800"}><SiTicktick
							className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Up to
							20 users
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> 20
							Custom domains
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Unlimited
							Collaborators
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Advanced
							Integrations
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Priority
							Support
						</li>
					</ul>
					<button
						className={"w-full hover:bg-slate-800 cursor-pointer text-white bg-black py-2 rounded-md"}>Get
						started
					</button>
				</div>
				<div
					className={"px-5 py-10 flex-col text-center rounded-lg flex h-full justify-between  border-gray-200 border"}>
					<h4 className={"text-gray-400 text-lg font-medium"}>
						Enterprise
					</h4>
					<p className={"text-4xl font-bold mt-4"}>Custom</p>
					<ul className={"flex-col gap-5 flex mt-7 mb-8"}>
						<li
							className={"flex items-center gap-3 text-gray-800"}><SiTicktick
							className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> All Pro
							Features
						</li>
						<li
							className={"flex items-center gap-3 text-gray-800"}><SiTicktick
							className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> Unlimited
							Custom domains
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/> 99.99%
							Uptime SLA
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/>SAML &
							SSO Integration
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/>Dedicated
							Account Manager
						</li>
						<li className={"flex items-center gap-3 text-gray-800"}>
							<SiTicktick
								className={"text-lg bg-slate-200 rounded-full p-[-2px]"}/>24/7
							Phone Support
						</li>
					</ul>
					<NavLink to={"/contact"}>
						<button
							className={"w-full hover:bg-slate-100 cursor-pointer border-black border py-2 rounded-md"}>Contact
							us
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default PricingPage;