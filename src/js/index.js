//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Counter from "./component/Counter";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

const contar = setInterval(() => {
	let four = Math.floor(counter / 1000);
	let restfour = counter % 1000;
	let three = Math.floor(restfour / 100);
	let restthree = restfour % 100;
	let two = Math.floor(restthree / 10);
	let restone = restthree % 10;

	counter++;

	ReactDOM.render(
		<Home
			digitOne={restone}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
