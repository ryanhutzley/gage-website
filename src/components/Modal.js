import FootballHelper from "../assets/images/football-helper-logo.webp";
import { useState, useEffect } from "react";

export default function Modal() {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	useEffect(() => {
		const hasRendered = sessionStorage.getItem("hasRendered");
		if (!hasRendered) {
			setTimeout(() => {
				setModal(true);
				sessionStorage.setItem("hasRendered", 1);
			}, 10000);
		}
	}, []);

	useEffect(() => {
		if (modal) {
			const scrollString = `-${window.scrollY}px`;
			document.body.style.position = "fixed";
			document.body.style.top = scrollString;
		} else {
			const scrollY = document.body.style.top;
			document.body.style.position = "";
			document.body.style.top = "";
			window.scrollTo(0, parseInt(scrollY || "0") * -1);
		}
	}, [modal]);

	return (
		modal && (
			<div className="fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen">
				<div
					onClick={toggleModal}
					className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black bg-opacity-80"
				></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
					<div className="flex h-96 w-[80vw] flex-col items-center gap-3 overflow-auto rounded-lg border-2 border-white bg-black p-5 font-modal text-xl text-white animate__fadeInUp animate__animated sm:h-auto sm:w-max sm:text-2xl">
						<p>Want even more football insights???</p>
						<p>👇 👇 👇</p>
						<a
							href="https://footballhelper.com/#52e4cd11-149f-47b9-99a5-b0aadff00438"
							className="max-w-fit"
						>
							<img src={FootballHelper} alt="FootballHelper" />
						</a>
						<p className="sm:text-lg">
							Check out{" "}
							<a
								href="https://footballhelper.com/#52e4cd11-149f-47b9-99a5-b0aadff00438"
								className="italic underline hover:text-footballHelper"
							>
								FootballHelper
							</a>{" "}
							to learn how you can...
						</p>
						<ol className="list-inside list-decimal text-base">
							<li>Dominate your Fantasy league 💪</li>
							<li>Level up your Madden skills 📈</li>
							<li>Increase your overall football knowledge 🧠</li>
							<li>Understand what stats are most meaningful 📖</li>
						</ol>
						<button
							className="absolute top-0 left-full -translate-x-full transform rounded-full pr-2 text-base"
							onClick={toggleModal}
						>
							x
						</button>
					</div>
				</div>
			</div>
		)
	);
}
