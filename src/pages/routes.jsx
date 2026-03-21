import Main from "./Main.jsx";
import PricingPage from "./PricingPage.jsx";

const routes = [{
	element: <Main/>,
	path: "/"
},
	{
		element: <PricingPage/>,
		path: "/pricing"
	},]
const links = ["Features", "Pricing", "About", "Blog", "Contact"]

export {routes, links}