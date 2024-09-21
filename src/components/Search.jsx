import React, { useState } from "react";
import Searchresult from "./Searchresult";

const Search = () => {
	const [img, setImg] = useState("");
	const inputEvent = (event) => {
		const data = event.target.value;
		console.log(data);
		setImg(data);
	};
	return (
		<div className="searchbar">
			<input
				type="text"
				placeholder="Search Anything.."
				value={img}
				onChange={inputEvent}
			/>
			{img === "" ? null : <Searchresult name={img} />}
		</div>
	);
};

export default Search;

// import React, { useState } from "react";
// import Searchresult from "./Searchresult";
// import "./styles.css"; // Import the CSS file

// const Search = () => {
// 	const [img, setImg] = useState("");
// 	const inputEvent = (event) => {
// 		const data = event.target.value;
// 		console.log(data);
// 		setImg(data);
// 	};
// 	return (
// 		<div className="searchbar">
// 			<input
// 				type="text"
// 				placeholder="Search for images..."
// 				value={img}
// 				onChange={inputEvent}
// 			/>
// 			<Searchresult name={img} />
// 		</div>
// 	);
// };

// export default Search;
