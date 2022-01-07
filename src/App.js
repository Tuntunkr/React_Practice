import Header from "./users/Header";
import EMA30 from "./users/EMA30";
import Stakes from "./users/Stakes";
import About from "./users/About";
import Home from "./users/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route
					path="/EMA30"
					element={<EMA30/>}
				/>
				<Route path="/Stakes" element={<Stakes />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
