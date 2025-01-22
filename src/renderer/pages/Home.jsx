import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("about");
	};

	return (
		<>
			<h1>Home Page</h1>
			<button onClick={handleClick}>Click to navigate to About</button>
			<button>Button One</button>
			<button>Button Two</button>
			<button>Button Three</button>
		</>
	);
};

export default Home;
