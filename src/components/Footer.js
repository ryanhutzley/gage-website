import React from "react";
import Icon from "./Icon";

export default function Footer({ icons, onCompleted, onError }) {
	return (
		<div className="flex w-full justify-evenly border-t-2 border-yellow-100 p-4">
			{icons.map((icon, index) => (
				<a href={icon.link} key={index}>
					<Icon
						name={icon.name}
						className="h-8 w-8 fill-yellow-100 duration-300 hover:scale-125"
						onCompleted={onCompleted}
						onError={onError}
					/>
				</a>
			))}
		</div>
	);
}
