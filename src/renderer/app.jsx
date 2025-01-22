import * as React from "react";

const App = () => {
	return (
		<div>
			<h1>Hello from React!</h1>
			<p>Welcome to the Electron-React app.</p>
			<button onClick={() => console.log("Button Clicked!")}>Click Me</button>
			<ul>
				<li>Feature 1</li>
				<li>Feature 2</li>
				<li>Feature 3</li>
			</ul>
		</div>
	);
};

export default App;
