"use client";

import Image from "next/image";
import ButtonCTA from "./button-cta";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0, y: 0 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.05 } },
};

export default function Hero() {
	return (
		<section className="flex flex-col justify-center items-center">
			<article className="flex flex-col items-center gap-[25px]">
				<h1
					className={cn(
						"font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center",
						"watch-sm:text-[28px] xl:text-[44px]"
					)}>
					Créer ta librairie de composants
				</h1>
				<p
					className={cn(
						"font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center",
						"watch-sm:text-xs xl:text-[14px]",
						"watch-sm:mx-4"
					)}>
					Des composants de design réalisés avec passion pour que tu puisses les
					utiliser à souhait
				</p>
				<ButtonCTA text="Essayer gratuitement" className={cn("watch-sm:")} />
			</article>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={variants}
				className={cn(
					"relative my-[75px]",
					"watch-sm:w-72 xl:w-[1110px] xl:h-[774px]",
					"watch-sm:rounded-[10px] xl:rounded-[20px]"
				)}>
				<BorderBeam />
				<Image
					src="/images/component-library/dashboard.webp"
					width={5000}
					height={5000}
					alt="Dashboard"
					priority={true}
					quality={100}
					className={cn(
						"w-full h-full border-[0.25px] border-[#FF7A00]/60 drop-shadow-custom-dashboard pointer-events-none",
						"watch-sm:rounded-[10px] xl:rounded-[20px]"
					)}
				/>
			</motion.div>
		</section>
	);
}
