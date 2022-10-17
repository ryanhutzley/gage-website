import React from "react";
import logo from "../assets/images/football_png.png";

export default function Header() {
	return (
		<div className="flex flex-wrap justify-center font-heading">
			<img
				src={logo}
				alt="football"
				className="mr-5 h-24 w-24 rounded-full bg-white object-contain"
			/>
			<h1 className="self-center text-6xl">
				<span className="text-red-500">Gage's</span> <span className="text-blue-500">Picks</span>
			</h1>
		</div>
	);
}
