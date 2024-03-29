import { useEffect, useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Clicked ${count} times`;
	}, [count]);

	return (
		// use tailwind for nice styling
		<section className="flex flex-col w-1/3 gap-4 items-center justify-center m-4">
			<h2 className="font-bold text-6xl mb-4">{count}</h2>
			<div className="flex flex-row gap-4 items-center justify-center">
				<button
					onClick={() => setCount(count + 1)}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white text-black hover:bg-white/90 h-10 px-4 py-2 w-40"
				>
					Increment
				</button>
				<button
					onClick={() => setCount(count - 1)}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white text-black hover:bg-white/90 h-10 px-4 py-2 w-40"
				>
					Decrement
				</button>
			</div>
		</section>
	);
};

export default Counter;
