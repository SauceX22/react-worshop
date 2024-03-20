import { useState } from "react";
import { concat } from "./lib/utils";
import reactLogo from "/react.svg";
import tailwindLogo from "/tailwind.svg";
import viteLogo from "/vite.svg";

function App() {
	const [todos, setTodos] = useState<string[]>([]);
	const [input, setInput] = useState<string>("");

	const addTodo = () => {
		if (input.length > 0) {
			setTodos([...todos, input]);
			setInput("");
		}
	};

	const removeTodo = (index: number) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	return (
		<main className="flex flex-col items-center justify-start py-40 h-screen bg-black">
			<header className="flex flex-row items-center justify-center mb-10">
				<img
					src={reactLogo}
					alt="react logo"
					className="h-24 w-24 transition-colors duration-150 hover:drop-shadow-[0_0_2rem_#61dafb]"
				/>
				<img
					src={viteLogo}
					alt="vite logo"
					className="h-24 w-24 transition-colors duration-150 hover:drop-shadow-[0_0_2rem_#61dafb]"
				/>
				<img
					src={tailwindLogo}
					alt="tailwind logo"
					className="h-28 w-28 transition-colors duration-150 hover:drop-shadow-[0_0_2rem_#61dafb]"
				/>
			</header>
			<section className="flex flex-col gap-4 items-center justify-center">
				<h2 className="font-bold text-6xl mb-4">
					{input.length > 0 ? input : "Create a Task"}
				</h2>
				<div className="flex flex-row gap-4 items-center justify-center">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								addTodo();
							}
						}}
						className={concat(
							"flex h-10 w-full rounded-md border-2 border-gray-400 bg-black px-3 py-2",
							"text-sm ring-offset-black focus-visible:outline-none",
							"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
						)}
					/>
					<button
						onClick={addTodo}
						className={concat(
							"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
							"ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2",
							"focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
							"bg-white text-black hover:bg-white/90 h-10 px-4 py-2 w-40"
						)}
					>
						Add
					</button>
				</div>
			</section>
			<ul className="flex flex-col items-start justify-start overflow-y-scroll max-h-96 mt-8 w-1/4 divide-y-2 divide-neutral-600 border-2 rounded-lg p-4 border-neutral-500">
				{todos.map((todo, index) => (
					<li
						key={index}
						className="flex items-center justify-between py-2 px-3 w-full"
					>
						<p className="font-semibold text-xl">{todo}</p>
						<button
							onClick={() => removeTodo(index)}
							className={concat(
								"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
								"ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2",
								"focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
								"bg-red-400 text-black hover:bg-red-400/90 h-10 px-4 py-2"
							)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
