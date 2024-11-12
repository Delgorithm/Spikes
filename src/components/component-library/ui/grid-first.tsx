import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GridFirst() {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center w-full relative",
				"watch-sm:h-24 xl:h-72"
			)}>
			{/* Circuit */}
			<Image
				src="/images/component-library/grid-1-a.svg"
				width={100}
				height={100}
				alt="Paste's icon"
				className={cn("pointer-events-none", "w-full")}
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
					"pointer-events-none",
					"absolute w-24",
					"top-0 right-24",
					"drop-shadow-custom-orange"
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
					"pointer-events-none",
					"absolute w-24",
					"right-12",
					"drop-shadow-custom-orange"
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
					"pointer-events-none",
					"absolute w-24",
					"bottom-10 right-32",
					"drop-shadow-custom-orange"
				)}
				loading="lazy"
				priority={false}
				quality={100}
			/>
		</div>
	);
}
