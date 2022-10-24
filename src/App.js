import Footer from "./components/Footer";
import GamesCarousel from "./components/GamesCarousel";
import BlogsContainer from "./components/BlogsContainer";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
	const handleOnCompleted = useCallback((iconName) => iconName, []);

	const handleIconError = useCallback((err) => err.message, []);

	const MediaIcons = [
		{
			name: "insta",
			link: "https://www.instagram.com/gagehutzley/?next=%2Fgagehutzley%2F",
			style: "fill-insta",
		},
		{ name: "linkedin", link: "https://www.linkedin.com/in/gage-hutzley/", style: "fill-linkedin" },
		{ name: "medium", link: "https://medium.com/@gagehutzley", style: "fill-medium" },
		{ name: "twitter", link: "https://twitter.com/gagehutzley", style: "fill-twitter" },
		{ name: "gmail", link: "mailto:gagehutzley@gmail.com", style: "fill-gmail" },
	];

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex w-screen grow flex-col items-center gap-10 bg-field bg-cover bg-fixed bg-center bg-no-repeat px-7 pt-12 pb-2 text-center">
				<Modal />
				<Header onCompleted={handleOnCompleted} onError={handleIconError} />
				<ProfileCard icons={MediaIcons} onCompleted={handleOnCompleted} onError={handleIconError} />
				<h2 className="text-border font-heading text-5xl text-white">My Blogs</h2>
				<BlogsContainer />
				<h2 className="text-border font-heading text-2xl text-white">
					Drop me a DM to get my take on any of the games below!
				</h2>
				<GamesCarousel onCompleted={handleOnCompleted} onError={handleIconError} />
				<Footer icons={MediaIcons} onCompleted={handleOnCompleted} onError={handleIconError} />
			</div>
		</QueryClientProvider>
	);
}
