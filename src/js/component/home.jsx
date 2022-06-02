import React from "react";
import Counter from "./Counter";

// //create your first component

const Home = ({ digitOne, digitTwo, digitThree, digitFour }) => {
	return (
		<div>
			<Counter
				seconds={digitOne}
				minutes={digitTwo}
				hours={digitThree}
				days={digitFour}
			/>
		</div>
	);
};

export default Home;
