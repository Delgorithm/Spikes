"use client";

import { Progress } from "@/components/ui/progress";
import useScrollProgress from "./use-scroll-progress";

export default function ScrollProgressBar() {
	const scrollProgress = useScrollProgress();

	return (
		<div className="fixed top-0 left-0 w-full">
			<Progress value={scrollProgress} className="w-full h-2 bg-gray-800" />
		</div>
	);
}
