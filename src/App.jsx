import Main from "./pages/Main.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	
	return (
		<div className={"max-w-(--breakpoint-xl) mx-auto px-5"}>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}

export default App
