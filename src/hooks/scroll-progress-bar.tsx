"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ProgressbarProps = {
	segments?: number;
};

export default function ScrollProgressBar({ segments = 5 }: ProgressbarProps) {
	const [visibleSegments, setVisibleSegments] = useState<number[]>([]);
	const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = Number(entry.target.getAttribute("data-index"));
					if (entry.isIntersecting) {
						setVisibleSegments((prev) => {
							if (!prev.includes(index - 1) && index > 0) {
								return [...prev, index - 1].sort((a, b) => a - b);
							}
							return prev;
						});
					}
				});
			},
			{
				threshold: 0.5,
			}
		);

		segmentRefs.current.forEach((ref) => {
			if (ref) {
				observer.observe(ref);
			}
		});

		return () => {
			segmentRefs.current.forEach((ref) => {
				if (ref) {
					observer.unobserve(ref);
				}
			});
		};
	}, [segments]);

	return (
		<div className="flex flex-col items-center">
			{Array.from({ length: segments }, (_, index) => (
				<div key={index} className="flex flex-col items-center">
					<div
						ref={(el) => {
							segmentRefs.current[index] = el;
						}}
						data-index={index}
						className={cn(
							"size-2 rounded-full transition-all duration-300",
							visibleSegments.includes(index)
								? "bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange"
								: "bg-gray-300"
						)}
					/>
					{index < segments - 1 && (
						<div
							className={cn(
								"w-[2px] transition-all duration-300",
								visibleSegments.includes(index)
									? "bg-gradient-to-b from-[#FF7A00] to-[#994900]"
									: "bg-gray-300",
								"watch-sm:h-[230px] xl:h-[185px]"
							)}
						/>
					)}
				</div>
			))}
		</div>
	);
}
