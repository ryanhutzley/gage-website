import React from "react";

export default function BlogCard({ blog }) {
	return (
		<a href={blog.link} className="block">
			<div className="hvr-sweep-to-right h-full overflow-hidden rounded-xl bg-gray-100 p-1">
				<div className="flex h-full flex-col">
					<img src={blog.thumbnail} alt="football" className="basis-1/2 rounded-lg object-cover" />
					<div className="flex basis-1/2 flex-col items-center justify-center gap-2 p-5">
						<h2 className="font-bold">{blog.title}</h2>
						<div className="flex flex-wrap content-evenly gap-1">
							{blog.categories.map((cat, index) => {
								return (
									<span
										className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300"
										key={index}
									>
										{cat}
									</span>
								);
							})}
						</div>
						<span>{new Date(blog.pubDate).toLocaleDateString()}</span>
					</div>
				</div>
			</div>
		</a>
	);
}
