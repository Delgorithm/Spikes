"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import useScrollProgress from "../../../hooks/use-scroll-progress";
import { useEffect } from "react";

const variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function RoadLightBeam() {
	const scrollProgress = useScrollProgress();
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			backgroundColor: `rgba(255, 122, 0, ${scrollProgress / 100})`,
		});
	}, [scrollProgress, controls]);

	return (
		<section
			id="howitworks"
			className="flex flex-col justify-center items-center gap-20 text-white">
			<motion.h2
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.8 }}
				variants={variants}
				className={cn(
					"text-center translate-y-6 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
					"watch-sm:text-[26px] xl:text-[30px]"
				)}>
				Simplicité, efficacité
			</motion.h2>
			<div
				className={cn(
					"grid",
					"watch-sm:grid-cols-custom-4",
					"xl:grid-cols-custom-3",
					"gap-2"
				)}>
				{/* 1 */}
				<div
					className={cn("watch-sm:row-span-4", "xl:row-span-4 xl:col-start-2")}>
					<div className="flex flex-col items-center">
						<motion.div
							initial={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
							animate={controls}
							className={cn(
								"size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange",
								"transition-all duration-500"
							)}
						/>
						<motion.div
							initial={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
							animate={controls}
							className={cn(
								"w-[2px] bg-red-200",
								"watch-sm:h-[230px] xl:h-[185px]",
								"transition-all duration-500"
							)}
						/>
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
						<div
							className={cn(
								"w-[2px] bg-red-200",
								"watch-sm:h-[230px] xl:h-[185px]"
							)}
						/>
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
						<div
							className={cn(
								"w-[2px] bg-red-200",
								"watch-sm:h-[230px] xl:h-[185px]"
							)}
						/>
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
						<div
							className={cn(
								"w-[2px] bg-red-200",
								"watch-sm:h-[230px] xl:h-[185px]"
							)}
						/>
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
					</div>
				</div>

				{/* 2 */}
				<div className={cn("xl:col-start-3", "flex flex-col justify-center")}>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Interface intuitive
					</motion.p>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn("watch-sm:text-[14px] xl:text-base")}>
						Accédez aux fonctionnalités sans complexité. Nos composants sont
						conçus pour une navigation fluide et une prise en main rapide,
						permettant à vos utilisateurs de se concentrer sur l’essentiel.
					</motion.p>
				</div>

				{/* 3 */}
				<div
					className={cn(
						"watch-sm:col-start-2 watch-sm:row-start-2",
						"xl:col-start-1 xl:row-start-2",
						"flex flex-col justify-center"
					)}>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Intégration directe
					</motion.p>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn("watch-sm:text-[14px] xl:text-base")}>
						Des composants pensés pour se fondre naturellement dans votre code.
						Avec une documentation claire, bénéficiez d’une installation rapide
						et sans friction, pour un gain de temps considérable.
					</motion.p>
				</div>

				{/* 4 */}
				<div
					className={cn(
						"watch-sm:col-start-2 watch-sm:row-start-3",
						"xl:col-start-3 xl:row-start-3",
						"flex flex-col justify-center"
					)}>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Code allégé
					</motion.p>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn("watch-sm:text-[14px] xl:text-base")}>
						Chaque ligne de code est optimisée pour réduire la charge. Nos
						composants minimisent la consommation de ressources tout en
						maximisant les performances, pour un développement durable et
						efficace.
					</motion.p>
				</div>

				{/* 5 */}
				<div
					className={cn(
						"watch-sm:col-start-2 watch-sm:row-start-4",
						"xl:col-start-1 xl:row-start-4",
						"flex flex-col justify-center"
					)}>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Maintenance simplifiée
					</motion.p>
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						variants={variants}
						className={cn("watch-sm:text-[14px] xl:text-base")}>
						Facilitez la gestion de vos projets avec des composants modulaires
						et bien documentés. Notre approche de conception garantit des mises
						à jour sans stress et un code facile à maintenir au fil du temps.
					</motion.p>
				</div>
			</div>
		</section>
	);
}
