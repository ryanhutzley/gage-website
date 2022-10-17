import Footer from "./components/Footer";
import GamesCarousel from "./components/GamesCarousel";
import BlogsContainer from "./components/BlogsContainer";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useCallback } from "react";

export default function App() {
	const handleOnCompleted = useCallback(
		(iconName) => console.log(`${iconName} successfully loaded`),
		[]
	);

	const handleIconError = useCallback((err) => console.error(err.message), []);

	const MediaIcons = [
		{ name: "insta", link: "https://www.instagram.com/gagehutzley/?next=%2Fgagehutzley%2F" },
		{ name: "linkedin", link: "https://www.linkedin.com/in/gage-hutzley/" },
		{ name: "medium", link: "https://medium.com/@gagehutzley" },
		{ name: "twitter", link: "https://twitter.com/gagehutzley" },
		{ name: "gmail", link: "mailto:gagehutzley@gmail.com" },
	];

	// const currentDate = new Date().toISOString();
	// console.log(typeof currentDate);

	return (
		<div className="flex grow flex-col items-center gap-10 bg-field bg-cover bg-fixed bg-center bg-no-repeat px-7 pt-12 pb-2 text-center">
			<Modal />
			<Header />
			<ProfileCard icons={MediaIcons} onCompleted={handleOnCompleted} onError={handleIconError} />
			<h2 className="text-border font-heading text-5xl text-white">My Blogs</h2>
			<BlogsContainer />
			<h2 className="text-border font-heading text-2xl text-white">
				Drop me a DM to get my take on any of the games below!
			</h2>
			<GamesCarousel />
			<Footer icons={MediaIcons} onCompleted={handleOnCompleted} onError={handleIconError} />
		</div>
	);
}
