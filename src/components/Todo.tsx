import { useState } from "react";
import { concat } from "../lib/utils";

function Posts() {
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
		<section className="flex flex-col w-1/3 gap-4 items-center justify-center m-4">
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
						"focus-visible:ring-ring focus-visible:ring-offset-2",
						"bg-white text-black hover:bg-white/90 h-10 px-4 py-2 w-40"
					)}
				>
					Add
				</button>
			</div>
			<ul
				className={concat(
					"flex flex-col items-start justify-start mt-8 w-full",
					"divide-y-2 divide-neutral-600 rounded-lg p-4 border-neutral-500"
				)}
			>
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
		</section>
	);
}

export default Posts;
