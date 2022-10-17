import GamesCarouselCard from "./GamesCarouselCard";
import { useState, useRef, useEffect } from "react";

export default function GamesCarousel() {
	const maxScrollWidth = useRef(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const carousel = useRef(null);

	useEffect(() => {
		maxScrollWidth.current = carousel.current
			? carousel.current.scrollWidth - carousel.current.offsetWidth
			: 0;
	}, []);

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
			carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
		) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const isDisabled = (direction) => {
		if (direction === "prev") {
			return currentIndex <= 0;
		}

		if (direction === "next" && carousel.current !== null) {
			return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
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
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
				<GamesCarouselCard />
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
