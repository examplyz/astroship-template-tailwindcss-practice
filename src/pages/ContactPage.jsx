import React, {useState} from "react";
import PageHeadline from "../components/PageHeadline.jsx";
import {BsGeoAlt, BsTelephone} from "react-icons/bs";
import {CiMail} from "react-icons/ci";
import ButtonDark from "../shared/UI/ButtonDark.jsx";

const heading = "Contact"
const paragraph = "We are a here to help."

const ContactPage = () => {
	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [errors, setErrors] = useState({
		fullName: false,
		email: false,
		message: false
	})
	
	
	const simpleValidate = () => {
		setErrors(errors => {
			return {
				...errors,
				fullName: !fullName.length,
				email: !email.length,
				message: !message.length,
				
			}
		})
	}
	
	return (
		<div className={"my-16"}>
			<PageHeadline heading={heading} paragraph={paragraph}/>
			<div
				className={"mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 max-w-4xl mx-auto"}>
				<div>
					<h3 className={"text-2xl font-medium text-gray-800"}>Contact
						Astroship</h3>
					<p className={"text-slate-500 text-lg mt-3"}>Have something to say? We
						are
						here to help. Fill up the form or
						send email or call phone.</p>
					<div className={"flex-col flex mt-5"}>
						<p className={"flex items-center gap-2 text-gray-600"}><BsGeoAlt
							className={"text-sm"}/>
							1734 Sanfransico, CA 93063</p>
						<a
							href={"mailto:hello@astroshipstarter.com"}
							className={"flex items-center gap-2 text-gray-600"}><CiMail
							className={"text-sm"}/>
							hello@astroshipstarter.com</a>
						<a href={"tel:+1 (987) 4587 899"}
						   className={"flex items-center gap-2 text-gray-600"}><BsTelephone
							className={"text-sm"}/>
							+1 (987) 4587 899</a>
					</div>
				</div>
				<form className={"flex flex-col"}
				      onSubmit={e => e.preventDefault()}
				      noValidate={true}>
					<div className={"mb-5"}>
						<input type={"text"} placeholder={"Full Name"}
						       required={true}
						       onChange={(e) => setFullName(e.target.value)}
						       value={fullName}
						       className={" w-full  rounded-md focus:ring-4  border-2 py-3 px-4 ring-gray-100 placeholder-gray-800 " + (errors?.fullName ? "border-red-500" : " border-gray-300 focus:border-gray-600")}/>
						{errors?.fullName &&
							<div className={"text-sm text-red-400 mt-1"}>
								Please provide your full name.
							</div>}
					</div>
					<div className={"mb-5"}>
						<input type={"email"} placeholder={"Email Address"}
						       required={true}
						       onChange={(e) => setEmail(e.target.value)}
						       value={email}
						       className={"w-full   rounded-md focus:ring-4  border-2 py-3 px-4 ring-gray-100 placeholder-gray-800 " + (errors?.email ? "border-red-500" : " border-gray-300 focus:border-gray-600")}/>
						{errors?.email && <div className={"text-sm text-red-400 mt-1"}>
							Please provide your email address.
						</div>}
					</div>
					<div className={"mb-5"}>
					<textarea placeholder={"Your Message"}
					          required={true}
					          onChange={(e) => setMessage(e.target.value)}
					          value={message}
					          className={"w-full min-h-36  rounded-md focus:ring-4  border-2 py-3 px-4 ring-gray-100 placeholder-gray-800 " + (errors?.message ? "border-red-500" : " border-gray-300 focus:border-gray-600")}/>
						{errors?.message && <div className={"text-sm text-red-400 mt-1"}>
							Please enter your message.
						</div>}
					</div>
					<ButtonDark className={"py-3 px-6"} onClick={() => simpleValidate()}
					            type={"submit"}>Send
						Message</ButtonDark>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;