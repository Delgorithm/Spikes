"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Globe = dynamic(() => import("@/components/ui/globe"), {
	ssr: false,
	loading: () => <div></div>,
});

const variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function GridBentoLanding() {
	return (
		<section className="flex flex-col gap-[30px] justify-center items-center">
			<div
				className={cn(
					"xl:grid gap-[30px]",
					"xl:grid-cols-custom-xl-1 xl:grid-rows-custom-xl",
					"watch-sm:flex watch-sm:flex-col watch-sm:justify-center watch-sm:items-center "
				)}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={variants}
					className={cn(
						"bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px]",
						"watch-sm:h-36 watch-sm:w-72",
						"xl:h-80 xl:w-auto"
					)}>
					<h3 className="text-[23px] translate-y-6 ml-8 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Rapidité d'intégration
					</h3>
					<div
						className={cn(
							"flex flex-col items-center justify-center w-full relative",
							"watch-sm:h-24 xl:h-72"
						)}>
						<Image
							src="/images/component-library/grid-1-a.svg"
							width={100}
							height={100}
							alt="Paste's icon"
							className={(cn("pointer-events-none"), "watch-sm:w-full")}
							loading="lazy"
							priority={false}
							quality={70}
						/>
					</div>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					variants={variants}
					className={cn(
						"bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px] h-80",
						"watch-sm:w-72 xl:w-auto"
					)}>
					<h3 className="p-6 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Personnalisation avancée
					</h3>
					<div className="px-4 flex items-center justify-center w-full h-48 relative">
						<Image
							src="/images/component-library/grid-2-logos.svg"
							alt="Paste's icon"
							width={100}
							height={100}
							loading="lazy"
							priority={false}
							quality={70}
							className="w-60 object-contain pointer-events-none"
						/>
						<Image
							src="/images/component-library/grid-2-logo-main.svg"
							height={80}
							width={80}
							alt="Paste's icon"
							loading="lazy"
							priority={false}
							quality={100}
							className="absolute object-contain w-[25%] pointer-events-none"
						/>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.6 }}
				variants={variants}
				className="grid xl:grid-cols-custom-xl-2 xl:grid-rows-custom-xl gap-[30px]">
				<div
					className={cn(
						"bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px] relative",
						"watch-sm:h-56 xl:h-auto"
					)}>
					<h3 className="p-6 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent relative z-20">
						Support et évolutivité
					</h3>
					<div className="flex items-center justify-center z-10">
						<Image
							src="/images/component-library/grid-points.webp"
							width={100}
							height={100}
							className={cn(
								"absolute object-contain pointer-events-none top-0",
								"watch-sm:w-full xl:w-[98.5%]"
							)}
							alt="Decoration for the grid"
							loading="lazy"
							priority={false}
							quality={100}
						/>
					</div>
				</div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.8 }}
					variants={variants}
					className={cn(
						"bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px] overflow-hidden relative",
						"watch-sm:h-[21rem] xl:h-auto"
					)}>
					<h3 className="px-6 py-6 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent z-20">
						Performance optimale
					</h3>
					<Globe
						className={cn(
							"w-full",
							"watch-sm:translate-x-0 watch-sm:translate-y-[50px]",
							"xl:translate-x-52 xl:-translate-y-0"
						)}
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}
