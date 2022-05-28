import React from "react";
import { AiFillClockCircle } from "react-icons/ai";

function SimpleCounter(props) {
	return (
		<div className="TotalCounter d-flex">
			<div className="IconFrame">
				<AiFillClockCircle />
			</div>
			<div>{props.DigitSix}</div>
			<div>{props.DigitFive}</div>
			<div>{props.DigitFour}</div>
			<div>{props.DigitThree}</div>
			<div>{props.DigitTwo}</div>
			<div>{props.DigitOne}</div>
		</div>
	);
}

setInterval(function () {}, 1000);

export default SimpleCounter;
