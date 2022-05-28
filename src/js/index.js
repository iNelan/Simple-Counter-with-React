//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(
	<SimpleCounter
		DigitOne={One}
		DigitTwo={Two}
		DigitThree={Three}
		DigitFour={Four}
		DigitFive={Five}
		DigitSix={Six}
	/>
),
	document.querySelector("#app");
