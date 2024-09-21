import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Manu from "./Manu";
import Search from "./Search";
import Error from "./Error";

const App = () => {
	const Name = () => {
		return <h1>Hello, I am Name Page</h1>;
	};

	return (
		<>
			<Manu />
			<Routes>
				<Route path="/" element={<Name />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/search" element={<Search />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
