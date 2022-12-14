import BlogCard from "./BlogCard";
import React from "react";
import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import errorPic from "../assets/images/this_is_fine.jpeg";
import loadingPic from "../assets/icons/loading.png";
import { useQuery } from "@tanstack/react-query";

export default function BlogsContainer() {
	const [blogsCount, setBlogsCount] = useState(2);
	const parent = useRef(null);

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent, blogsCount]);

	// { isLoading, isError, data, error, refetch }
	const query = useQuery(
		["blogs"],
		async () => {
			const mediumURL = "https://medium.com/feed/@gagehutzley";
			const unixTimestamp = Math.floor(new Date().getTime() / 1000);
			const res = await fetch(
				`https://api.rss2json.com/v1/api.json?rss_url=${mediumURL}?t=${unixTimestamp}`
			);
			const data = await res.json();
			return data;
		},
		{
			staleTime: 60000 * 5,
		}
	);

	const addOrRemoveBlogs = () => {
		blogsCount === 2 ? setBlogsCount(query.data.length) : setBlogsCount(2);
	};

	return (
		<div className="relative mb-6 max-w-md rounded-lg bg-white bg-opacity-20 p-8 drop-shadow-lg backdrop-blur-lg md:max-w-3xl">
			<div
				className="grid auto-cols-auto auto-rows-max grid-cols-1 gap-6 md:grid-cols-2"
				ref={parent}
			>
				{query.isLoading || query.error ? (
					<>
						<img
							src={query.isLoading ? loadingPic : errorPic}
							alt={query.isLoading ? "loading" : "error"}
						/>
						<img
							src={query.isLoading ? loadingPic : errorPic}
							alt={query.isLoading ? "loading" : "error"}
						/>
					</>
				) : (
					query.data.items.slice(0, blogsCount).map((blog, index) => {
						return <BlogCard blog={blog} key={index} />;
					})
				)}
			</div>
			<button
				className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 object-center py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-25"
				onClick={addOrRemoveBlogs}
				disabled={query.error || query.isLoading}
			>
				{query?.data && blogsCount < query.data.items.length ? "Show More" : "Show Less"}
			</button>
		</div>
	);
}
