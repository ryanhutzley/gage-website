import React from "react";
import ProfilePic from "../assets/images/gage-profile-pic.jpeg";
import Icon from "./Icon";

export default function ProfileCard({ icons, onCompleted, onError }) {
	return (
		<div className="max-w-md overflow-hidden rounded-xl bg-stone-50 bg-opacity-70 p-8 shadow-lg md:max-w-4xl">
			<div className="content gap-8 md:flex">
				<img className="m-auto h-40 rounded-full md:shrink-0" src={ProfilePic} alt="Gage Hutzley" />
				<div className="py-5">
					<div className="text-2xl font-bold tracking-wide">Hi! My name is Gage 👋</div>
					<p className="mt-2 text-slate-700">
						I love football. And since you're reading this, I know you do too. I'm a former NFL
						employee and a Sports Communication and Media major from Rowan University who enjoys
						writing about football, fantasy, and sports betting. Please check out my blogs and hit
						me up on social media. And be sure to check the game schedule below - always excited to
						hear some NFL 🔥 takes.
					</p>
				</div>
			</div>
			<div className="mt-5 flex justify-evenly">
				{icons.map((icon, index) => (
					<a href={icon.link} key={index}>
						<Icon
							name={icon.name}
							className={`h-8 w-8 ${icon.style} duration-300 hover:scale-125`}
							onCompleted={onCompleted}
							onError={onError}
						/>
					</a>
				))}
			</div>
		</div>
	);
}
