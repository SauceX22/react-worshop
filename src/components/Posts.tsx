import { useEffect, useState } from "react";

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const N_POSTS_AT_A_TIME = 10; // NUMBER OF POSTS TO DISPLAY AT A TIME

function Posts() {
	// State to store the list of posts
	const [posts, setPosts] = useState<Post[]>([]);

	// useEffect to fetch posts data when the component mounts
	useEffect(() => {
		async function fetchPosts() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/posts"
				);
				const data = (await response.json()) as Post[];
				setPosts(data);
			} catch (e) {
				alert("Failed to fetch posts data");
			}
		}
		fetchPosts();
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<section className="flex flex-col w-2/3 gap-2 mx-auto p-4 items-center justify-center m-4">
			<h1 className="text-3xl font-bold">Posts</h1>
			<p className="text-lg text-gray-600">
				Number of posts: {posts.length}
			</p>
			<p className="text-sm text-gray-400">
				Showing {N_POSTS_AT_A_TIME} posts
			</p>
			<div className="mt-4 grid grid-cols-2 gap-2">
				{posts.slice(0, N_POSTS_AT_A_TIME).map((post) => (
					<div
						key={post.id}
						className="border p-4 rounded-lg shadow-md"
					>
						<h2 className="text-xl font-bold">{post.title}</h2>
						<p className="text-gray-600 mt-2">{post.body}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Posts;
