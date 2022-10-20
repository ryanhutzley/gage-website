import React from "react";
import logo from "../assets/images/football_png.png";
import Icon from "./Icon";

export default function Header({ onCompleted, onError }) {
	return (
		<div className="flex flex-wrap justify-center gap-x-5 font-heading">
			<Icon
				name={"football-helmet"}
				onCompleted={onCompleted}
				onError={onError}
				className="h-24 w-24 fill-white"
			/>
			<h1 className="self-center text-6xl leading-tight">
				<span className="text-red-500">Gage</span> <span className="text-blue-500">Sports</span>
			</h1>
			<Icon
				name={"football-helmet"}
				onCompleted={onCompleted}
				onError={onError}
				className="h-24 w-24 fill-white"
			/>
		</div>
	);
}
