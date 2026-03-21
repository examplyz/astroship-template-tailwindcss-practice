import {BrowserRouter, Routes, Route} from "react-router";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import {routes} from "../pages/routes.jsx";

const RouterProvider = () => {
	return <BrowserRouter>
		<Header/>
		<Routes>
			{routes.map(route => <Route path={route.path}
			                            element={route.element}/>)}
		</Routes>
		<Footer/>
	</BrowserRouter>
}

export default RouterProvider