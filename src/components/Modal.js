import FootballHelper from "../assets/images/football-helper-logo.webp";
import { useState, useEffect } from "react";

export default function Modal() {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	useEffect(() => {
		setTimeout(() => {
			setModal(true);
		}, 2000);
	}, []);
	// if (modal) {
	// 	document.body.classList.add("active-modal");
	// } else {
	// 	document.body.classList.remove("active-modal");
	// }

	return (
		modal && (
			<div className="fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen">
				<div
					onClick={toggleModal}
					className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black bg-opacity-80"
				></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
					<div className="flex h-96 w-2/5 min-w-fit flex-col gap-3 overflow-auto rounded-lg border-2 border-white bg-black p-5 font-modal text-white animate__fadeInUp animate__animated sm:h-auto sm:text-2xl">
						<p>Want even more football insights???</p>
						<p>👇 👇 👇</p>
						<a href="https://footballhelper.com/#52e4cd11-149f-47b9-99a5-b0aadff00438">
							<img src={FootballHelper} className="inline" />
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
