import {BrowserRouter, Routes, Route} from "react-router";
import Main from "../pages/Main.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const RouterProvider = () => {
	return <BrowserRouter>
		<Header/>
		<Routes>
			<Route path="/" element={<Main/>}/>
		</Routes>
		<Footer/>
	</BrowserRouter>
}

export default RouterProvider