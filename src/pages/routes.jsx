import Main from "./Main.jsx";
import PricingPage from "./PricingPage.jsx";
import ContactPage from "./ContactPage.jsx";

const routes = [{
	element: <Main/>,
	path: "/"
},
	{
		element: <PricingPage/>,
		path: "/pricing"
	},
	{
		element: <ContactPage/>,
		path: "/contact"
	},]
const links = ["Features", "Pricing", "About", "Blog", "Contact"]

export {routes, links}