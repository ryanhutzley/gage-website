import React from "react";
import Icon from "./Icon";

export default function GamesCarouselCard({ game, onCompleted, onError }) {
	return (
		<div
			className={`flex w-36 shrink-0 snap-start flex-col ${
				game.invalid ? "justify-center" : "justify-between"
			} overflow-hidden rounded-lg bg-slate-50 p-2 drop-shadow`}
		>
			{game.invalid ? (
				"No more games this week!"
			) : (
				<>
					<div className="relative flex justify-between">
						<Icon
							name={game.awayTeam.name.toLowerCase()}
							onCompleted={onCompleted}
							onError={onError}
							className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 p-1"
						/>
						<Icon
							name={game.homeTeam.name.toLowerCase()}
							onCompleted={onCompleted}
							onError={onError}
							className="absolute mt-0 ml-0 h-8 w-8 translate-x-3/4 transform rounded-full border-2 border-white bg-slate-200 p-1"
						/>
						<p className="self-center text-slate-500">
							{game.diffDays} {game.diffDays === 1 ? "day" : "days"}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="font-bold">{game.shortName}</p>
					</div>
				</>
			)}
		</div>
	);
}
