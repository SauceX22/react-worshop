import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Todo from "./components/Todo";
import reactLogo from "/react.svg";
import tailwindLogo from "/tailwind.svg";
import viteLogo from "/vite.svg";

function App() {
	return (
		<main className="flex flex-col items-center justify-start py-40 h-full min-h-screen bg-black select-none">
			<header className="flex flex-row items-center justify-center mb-10 transition-all duration-[200ms]">
				<img
					src={reactLogo}
					alt="react logo"
					className="h-24 w-24 hover:drop-shadow-[0_0_2rem_#61dafb] hover:animate-spin-slow"
				/>
				<img
					src={viteLogo}
					alt="vite logo"
					className="h-24 w-24 hover:drop-shadow-[0_0_2rem_#61dafb] hover:animate-spin-slow"
				/>
				<img
					src={tailwindLogo}
					alt="tailwind logo"
					className="h-28 w-28 hover:drop-shadow-[0_0_2rem_#61dafb] hover:animate-spin-slow"
				/>
			</header>
			<div className="flex flex-col items-center justify-center divide-y-2 divide-red-500 gap-10">
				<Counter />
				<Todo />
				<Posts />
			</div>
		</main>
	);
}

export default App;
