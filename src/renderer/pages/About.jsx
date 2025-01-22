import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("..");
	};

	return (
		<>
			<h1>About Page</h1>
			<button onClick={handleClick}>Click to go back!</button>
		</>
	);
};

export default About;
