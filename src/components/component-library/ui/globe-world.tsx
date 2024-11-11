"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/ui/globe"), {
	ssr: false,
	loading: () => <div>Chargement...</div>,
});

export default function GlobeWorld() {
	const [isVisible, setIsVisible] = useState(false);
	const globeRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (globeRef.current) {
			observer.observe(globeRef.current);
		}

		return () => {
			if (globeRef.current) {
				observer.unobserve(globeRef.current);
			}
		};
	}, []);

	return (
		<div ref={globeRef}>
			{isVisible && (
				<Globe className="watch-sm:hidden xl:block xl:w-3/4 xl:translate-x-52 xl:translate-y-0" />
			)}
		</div>
	);
}
