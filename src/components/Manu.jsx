import React from "react";
import { NavLink } from "react-router-dom";
import "./manu.css";

const Manu = () => {
	return (
		<nav className="Manu_style">
			<ul>
				<li>
					<NavLink exact activeClassName="Active_class" to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName="Active_class" to="/about">
						About
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName="Active_class" to="/contact">
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName="Active_class" to="/search">
						Search
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Manu;
