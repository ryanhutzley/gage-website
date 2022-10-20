import BlogCard from "./BlogCard";
import React from "react";
import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import errorPic from "../assets/images/this_is_fine.jpeg";
import loadingPic from "../assets/icons/loading.png";
import { useQuery } from "@tanstack/react-query";

export default function BlogsContainer() {
	const [blogs, setBlogs] = useState([]);
	const parent = useRef(null);

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent, blogs]);

	// { isLoading, isError, data, error, refetch }
	const query = useQuery(["blogs"], async () => {
		const mediumURL = "https://medium.com/feed/@gagehutzley";
		const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumURL}`);
		const data = await res.json();
		return data;
	});

	useEffect(() => {
		if (query.status === "success") {
			setBlogs(query.data.items.slice(0, 2));
		}
	}, [query.status, query.data]);

	if (query.isLoading || query.error) {
		return (
			<div className="container mb-6 max-w-sm rounded-lg bg-white bg-opacity-20 p-8 drop-shadow-lg backdrop-blur-lg md:max-w-xl">
				<div className="grid auto-cols-auto auto-rows-max grid-cols-1 gap-6 md:grid-cols-2">
					<img
						src={query.isLoading ? loadingPic : errorPic}
						alt={query.isLoading ? "loading" : "error"}
					/>
					<img
						src={query.isLoading ? loadingPic : errorPic}
						alt={query.isLoading ? "loading" : "error"}
					/>
				</div>
			</div>
		);
	}

	const addOrRemoveBlogs = () => {
		blogs.length === query.data.items.length
			? setBlogs(blogs.slice(0, 2))
			: setBlogs([...blogs, ...query.data.items.slice(2)]);
	};

	return (
		<div className="mb-6 max-w-md rounded-lg bg-white bg-opacity-20 p-8 drop-shadow-lg backdrop-blur-lg md:max-w-3xl">
			<div
				className="grid auto-cols-auto auto-rows-max grid-cols-1 gap-6 md:grid-cols-2"
				ref={parent}
			>
				{blogs.map((blog, index) => {
					return <BlogCard blog={blog} key={index} />;
				})}
			</div>
			<button
				className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 object-center py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-25"
				onClick={addOrRemoveBlogs}
				disabled={query.error || query.isLoading}
			>
				{blogs.length < query.data.items.length ? "Show More" : "Show Less"}
			</button>
		</div>
	);
}
