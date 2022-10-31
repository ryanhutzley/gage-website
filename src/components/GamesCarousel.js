import GamesCarouselCard from "./GamesCarouselCard";
import { useState, useRef, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import useWidth from "../hooks/useWidth";

export default function GamesCarousel({ onCompleted, onError }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [maxScrollWidth, setMaxScrollWidth] = useState(0);
	const carousel = useRef(null);
	const visibleWidth = useWidth(carousel);
	const placeholderData = Array(6).fill({ invalid: true });

	const getDateAndDateTime = (dateObj) => {
		const dateTimeString = dateObj.toLocaleString();
		const dateString = dateObj.toLocaleDateString();
		return [new Date(dateTimeString), new Date(dateString)];
	};

	const getUpcomingGames = useCallback((data) => {
		const oneDay = 24 * 60 * 60 * 1000;
		const [todayDateTime, todayDate] = getDateAndDateTime(new Date());
		const upcomingGames = [];
		data.data.forEach((game) => {
			const [gameDateTime, gameDate] = getDateAndDateTime(new Date(game.date));
			if (gameDateTime > todayDateTime) {
				const diffDays = (gameDate - todayDate) / oneDay;
				game["invalid"] = false;
				game["diffDays"] = diffDays;
				upcomingGames.push(game);
			}
		});
		upcomingGames.sort((a, b) => a.diffDays - b.diffDays);
		if (upcomingGames.length < 6) {
			const extra = Array(6 - upcomingGames.length).fill({ invalid: true });
			upcomingGames.push(...extra);
		}
		return upcomingGames;
	}, []);

	const query = useQuery(
		["games"],
		async () => {
			const res = await fetch("https://nfl-schedule.p.rapidapi.com/v1/schedules", {
				headers: {
					"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
					"X-RapidAPI-Host": "nfl-schedule.p.rapidapi.com",
				},
			});
			const data = await res.json();
			console.log(data);
			return data;
		},
		{
			select: getUpcomingGames,
			staleTime: 60000 * 5,
		}
	);

	useEffect(() => {
		setMaxScrollWidth(carousel.current ? carousel.current.scrollWidth - visibleWidth : 0);
	}, [query.data, visibleWidth]);

	const moveNext = () => {
		const nextPos = scrollPosition + Math.floor(visibleWidth / 144) * 144;
		setScrollPosition(nextPos >= maxScrollWidth ? maxScrollWidth : nextPos);
	};

	const movePrev = () => {
		const prevPos = scrollPosition - Math.floor(visibleWidth / 144) * 144;
		setScrollPosition(prevPos <= 0 ? 0 : prevPos);
	};

	const isDisabled = (direction) => {
		if (direction === "prev") {
			return scrollPosition <= 0;
		}

		if (direction === "next") {
			return scrollPosition >= maxScrollWidth;
		}

		return false;
	};

	const games = query.isLoading || query.error ? placeholderData : query.data;

	if (carousel.current) {
		carousel.current.scrollLeft = scrollPosition;
	}

	return (
		<div className="container mb-5 flex h-20 max-w-lg overflow-hidden rounded-lg bg-red-100 drop-shadow-lg backdrop-blur-lg md:max-w-4xl">
			<div className="flex w-24 shrink-0 items-center justify-center bg-red-500 p-3 sm:w-32">
				<p className="sm:text-md text-sm font-bold text-white">NFL Upcoming Games</p>
			</div>
			<div
				className="relative flex touch-pan-x snap-x snap-mandatory overflow-hidden scroll-smooth"
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
