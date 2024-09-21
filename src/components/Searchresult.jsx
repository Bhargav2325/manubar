// import React, { useState, useEffect } from "react";

// const Searchresult = ({ img }) => {
// 	const [results, setResults] = useState([""]);

// 	useEffect(() => {
// 		const fetchResults = async () => {
// 			if (img) {
// 				try {
// 					const response = await fetch(
// 						`https://66a8bdc1e40d3aa6ff5936fd.mockapi.io/api/image/user
//                         `
// 					);
// 					const data = await response.json();
// 					console.log("data", data);
// 					if (data.length > 0) {
// 						setResults(data[0]);
// 					}
// 				} catch (error) {
// 					console.error("Error fetching the search results:", error);
// 				}
// 			}
// 		};

// 		fetchResults();
// 	}, [img]);

// 	return (
// 		<div>
// 			{results != null ? (
// 				<div className="image-result">
// 					<img key={results.image} src={results.image} alt="search result" />
// 				</div>
// 			) : (
// 				<p>No result found for: {img}</p>
// 			)}
// 		</div>
// 	);
// };

// export default Searchresult;

import React from "react";

const Searchresult = (props) => {
	const img = `https://66a8bdc1e40d3aa6ff5936fd.mockapi.io/api/image/user/?${props.image}`;
	return (
		<>
			<div>
				<img src={img} alt="search.." />
			</div>
		</>
	);
};

export default Searchresult;
