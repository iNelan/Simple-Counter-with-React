import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import propTypes from "prop-types";

function SimpleCounter(props) {
	return (
		<div className="TotalCounter d-flex">
			<div className="IconFrame">
				<AiFillClockCircle />
			</div>
			<div className="six">{props.DigitSix}</div>
			<div className="five">{props.DigitFive}</div>
			<div className="four">{props.DigitFour}</div>
			<div className="three">{props.DigitThree}</div>
			<div className="two">{props.DigitTwo}</div>
			<div className="one">{props.DigitOne}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	DigitSix: propTypes.number,
	DigitFive: propTypes.number,
	DigitFour: propTypes.number,
	DigitThree: propTypes.number,
	DigitTwo: propTypes.number,
	DigitOne: propTypes.number,
};

let counter = 0;
setInterval(function () {
	const Six = Math.floor(counter / 1000000);
	const Five = Math.floor(counter / 100000);
	const Four = Math.floor(counter / 10000);
	const Three = Math.floor(counter / 1000);
	const Two = Math.floor(counter / 100);
	const One = Math.floor(counter / 10);
	counter++;
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
}, 1000);

export default SimpleCounter;
