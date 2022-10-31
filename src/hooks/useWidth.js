import { useLayoutEffect, useState } from "react";

export default function useWindowSize(carousel) {
	const [size, setSize] = useState(0);
	useLayoutEffect(() => {
		function updateSize() {
			if (carousel.current) {
				const width = carousel.current.offsetWidth;
				setSize(width >= 144 ? width : 144);
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, [carousel]);
	return size;
}
