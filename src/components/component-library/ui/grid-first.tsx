import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GridFirst() {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center w-full relative",
				"watch-sm:h-24 md:h-64 xl:h-72"
			)}>
			{/* Circuit */}
			<Image
				src="/images/component-library/grid-1-a.svg"
				width={100}
				height={100}
				alt="Paste's icon"
				className={cn("pointer-events-none", "w-full", "")}
				loading="lazy"
				priority={false}
				quality={100}
			/>

			{/* Vue JS */}
			<Image
				src="/images/component-library/grid-1-logo-vue.svg"
				width={100}
				height={100}
				alt="Paste's icon"
				className={cn(
					"absolute pointer-events-none",
					"watch-sm:top-0 right-10 xl:top-0 xl:right-24",
					"drop-shadow-custom-orange",
					"watch-sm:w-8 md:w-14 xl:w-24",
					"md:top-14"
				)}
				loading="lazy"
				priority={false}
				quality={100}
			/>

			{/* Next JS */}
			<Image
				src="/images/component-library/grid-1-logo-next.svg"
				width={100}
				height={100}
				alt="Paste's icon"
				className={cn(
					"absolute pointer-events-none",
					"watch-sm:right-7 xl:right-12",
					"drop-shadow-custom-orange",
					"watch-sm:w-8 md:w-14 xl:w-24",
					"md:right-0"
				)}
				loading="lazy"
				priority={false}
				quality={100}
			/>

			{/* React JS */}

			<Image
				src="/images/component-library/grid-1-logo-react.svg"
				width={100}
				height={100}
				alt="Paste's icon"
				className={cn(
					"absolute pointer-events-none",
					"watch-sm:bottom-0 watch-sm:right-10",
					"md:bottom-12",
					"xl:bottom-10 xl:right-32",
					"drop-shadow-custom-orange",
					"watch-sm:w-8 md:w-14 xl:w-24"
				)}
				loading="lazy"
				priority={false}
				quality={100}
			/>
		</div>
	);
}
