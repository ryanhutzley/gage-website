import React from "react";
import { useState } from "react";
import Blog1Pic from "../assets/images/vikings-blog-1.png";

export default function BlogsContainer() {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="container mb-6 max-w-sm rounded-lg bg-white bg-opacity-20 p-8 drop-shadow-lg backdrop-blur-lg md:max-w-xl">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="overflow-hidden rounded-xl border-2 border-gray-300 bg-gray-100">
					<div className="flex flex-col">
						<img src={Blog1Pic} alt="football" className="flex-1 bg-white object-cover" />
						<div className="flex flex-1 flex-col items-center gap-2 p-5">
							<h2 className="">
								Top 10 Wide Receivers to Help You DOMINATE This Fantasy Season 🏈
							</h2>
							<div className="flex flex-wrap content-evenly gap-1">
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantasy Football
								</span>
								{/* <span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fan
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fanny
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span> */}
							</div>
							<span>09/12/2022</span>
						</div>
					</div>
				</div>
				<div className="overflow-hidden rounded-xl border-2 border-gray-300 bg-gray-100">
					<div className="flex flex-col">
						<img src={Blog1Pic} alt="football" className="flex-1 bg-white object-cover" />
						<div className="flex flex-1 flex-col items-center gap-2 p-5">
							<h2 className="">
								Top 10 Wide Receivers to Help You DOMINATE This Fantasy Season 🏈
							</h2>
							<div className="flex flex-wrap content-evenly gap-1">
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantasy Football
								</span>
								{/* <span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fan
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fanny
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span> */}
							</div>
							<span>09/12/2022</span>
						</div>
					</div>
				</div>
				{showMore && (
					<>
						<div className="overflow-hidden rounded-xl border-2 border-gray-300 bg-gray-100">
							<div className="flex flex-col">
								<img src={Blog1Pic} alt="football" className="flex-1 bg-white object-cover" />
								<div className="flex flex-1 flex-col items-center gap-2 p-5">
									<h2 className="">
										Top 10 Wide Receivers to Help You DOMINATE This Fantasy Season 🏈
									</h2>
									<div className="flex flex-wrap content-evenly gap-1">
										<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
											Fantasy Football
										</span>
										{/* <span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fan
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fanny
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span> */}
									</div>
									<span>09/12/2022</span>
								</div>
							</div>
						</div>
						<div className="overflow-hidden rounded-xl border-2 border-gray-300 bg-gray-100">
							<div className="flex flex-col">
								<img src={Blog1Pic} alt="football" className="flex-1 bg-white object-cover" />
								<div className="flex flex-1 flex-col items-center gap-2 p-5">
									<h2 className="">
										Top 10 Wide Receivers to Help You DOMINATE This Fantasy Season 🏈
									</h2>
									<div className="flex flex-wrap content-evenly gap-1">
										<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
											Fantasy Football
										</span>
										{/* <span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fan
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fanny
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span>
								<span className="ease cursor-pointer rounded-full bg-gray-200 p-2 text-sm font-semibold text-gray-500 active:bg-gray-300">
									Fantastic
								</span> */}
									</div>
									<span>09/12/2022</span>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			<button
				className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 object-center py-2 px-4 font-bold text-white hover:bg-blue-700"
				onClick={() => setShowMore(!showMore)}
			>
				{showMore ? "Show Less" : "Show More"}
			</button>
		</div>
	);
}
