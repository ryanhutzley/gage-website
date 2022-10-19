import GamesCarouselCard from "./GamesCarouselCard";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function GamesCarousel({ onCompleted, onError }) {
	// const maxScrollWidth = useRef(0);
	const [maxScrollWidth, setMaxScrollWidth] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [games, setGames] = useState([]);
	const carousel = useRef(null);

	const query = useQuery(["games"], async () => {
		const res = await fetch("https://nfl-schedule.p.rapidapi.com/v1/schedules", {
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
				"X-RapidAPI-Host": "nfl-schedule.p.rapidapi.com",
			},
		});
		const data = await res.json();
		console.log(data);
		return data;
	});

	useEffect(() => {
		if (query.status === "success") {
			const oneDay = 24 * 60 * 60 * 1000;
			const currentDate = new Date().toLocaleString();
			const today = new Date(currentDate);
			const upcomingGames = [];
			query.data.data.forEach((game) => {
				const date = new Date(game.date).toLocaleString();
				const localGameDate = new Date(date);
				if (localGameDate > today) {
					const diffDays = Math.round((localGameDate - today) / oneDay);
					game["invalid"] = false;
					game["diffDays"] = diffDays;
					upcomingGames.push(game);
				}
			});
			if (upcomingGames.length < 5) {
				const extra = Array(5 - upcomingGames.length).fill({ invalid: true });
				upcomingGames.push(...extra);
			}
			setGames(upcomingGames);
		}
	}, [query.status, query.data]);

	useEffect(() => {
		setMaxScrollWidth(
			carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
		);
	}, [games]);

	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
		}
	}, [currentIndex]);

	const movePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	const moveNext = () => {
		if (
			carousel.current !== null &&
			carousel.current.offsetWidth * currentIndex <= maxScrollWidth
		) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const isDisabled = (direction) => {
		if (direction === "prev") {
			return currentIndex <= 0;
		}

		if (direction === "next" && carousel.current !== null) {
			return carousel.current.offsetWidth * currentIndex >= maxScrollWidth;
		}

		return false;
	};

	return (
		<div className="container mb-5 flex h-20 max-w-lg overflow-hidden rounded-lg bg-red-100 drop-shadow-lg backdrop-blur-lg md:max-w-4xl">
			<div className="flex w-24 shrink-0 items-center justify-center bg-red-500 p-3 sm:w-32">
				<p className="sm:text-md text-sm font-bold text-white">NFL Upcoming Games</p>
			</div>
			<div
				className="ml-1 flex touch-pan-x snap-x snap-mandatory gap-1 overflow-hidden scroll-smooth"
				ref={carousel}
			>
				{games.map((game, index) => {
					return (
						<GamesCarouselCard
							key={index}
							game={game}
							onCompleted={onCompleted}
							onError={onError}
						/>
					);
				})}
			</div>
			<div className="z-10 flex w-8 shrink-0 flex-col divide-y divide-white bg-blue-500 text-white shadow sm:w-10">
				<button
					className="shrink-0 basis-1/2 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-25"
					onClick={moveNext}
					disabled={isDisabled("next")}
				>
					&gt;
				</button>
				<button
					className="shrink-0 basis-1/2 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-25"
					onClick={movePrev}
					disabled={isDisabled("prev")}
				>
					&lt;
				</button>
			</div>
		</div>
	);
}
