import React from "react";
import { AiFillClockCircle } from "react-icons/ai";

const Counter = ({ seconds, minutes, hours, days }) => {
	return (
		<div className="TotalCounter d-flex">
			<div className="IconFrame">
				<AiFillClockCircle />
			</div>

			<div className="four"> {days} </div>
			<div className="three"> {hours} </div>
			<div className="two"> {minutes} </div>
			<div className="one"> {seconds} </div>
		</div>
	);
};

export default Counter;
