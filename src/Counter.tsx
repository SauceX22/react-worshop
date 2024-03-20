// react counter example
import { useState } from "react";
import "../public/Counter.css";

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="bg">
			<p className="count">You clicked {count} times</p>
			<button className="add button" onClick={() => setCount(count + 1)}>
				Add One
			</button>
			<button className="add two button" onClick={() => setCount(0)}>
				Add Two
			</button>
			<button className="reset button" onClick={() => setCount(0)}>
				Reset
			</button>
		</div>
	);
};
