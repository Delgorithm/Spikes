import { cn } from "@/lib/utils";

export default function RoadLightBeam() {
	return (
		<section className="flex flex-col justify-center items-center gap-20 text-white">
			<h2
				className={cn(
					"text-center translate-y-6 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
					"watch-sm:text-[26px] xl:text-[30px]"
				)}>
				Simplicité, efficacité
			</h2>
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
					<p
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Interface intuitive
					</p>
					<p className={cn("watch-sm:text-[14px] xl:text-base")}>
						Accédez aux fonctionnalités sans complexité. Nos composants sont
						conçus pour une navigation fluide et une prise en main rapide,
						permettant à vos utilisateurs de se concentrer sur l’essentiel.
					</p>
				</div>

				{/* 3 */}
				<div
					className={cn(
						"watch-sm:col-start-2 watch-sm:row-start-2",
						"xl:col-start-1 xl:row-start-2",
						"flex flex-col justify-center"
					)}>
					<p
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Intégration directe
					</p>
					<p className={cn("watch-sm:text-[14px] xl:text-base")}>
						Des composants pensés pour se fondre naturellement dans votre code.
						Avec une documentation claire, bénéficiez d’une installation rapide
						et sans friction, pour un gain de temps considérable.
					</p>
				</div>

				{/* 4 */}
				<div
					className={cn(
						"watch-sm:col-start-2 watch-sm:row-start-3",
						"xl:col-start-3 xl:row-start-3",
						"flex flex-col justify-center"
					)}>
					<p
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Code allégé
					</p>
					<p className={cn("watch-sm:text-[14px] xl:text-base")}>
						Chaque ligne de code est optimisée pour réduire la charge. Nos
						composants minimisent la consommation de ressources tout en
						maximisant les performances, pour un développement durable et
						efficace.
					</p>
				</div>

				{/* 5 */}
				<div
					className={cn(
						"watch-sm:col-start-2 watch-sm:row-start-4",
						"xl:col-start-1 xl:row-start-4",
						"flex flex-col justify-center"
					)}>
					<p
						className={cn(
							"py-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[18px] xl:text-[23px]"
						)}>
						Maintenance simplifiée
					</p>
					<p className={cn("watch-sm:text-[14px] xl:text-base")}>
						Facilitez la gestion de vos projets avec des composants modulaires
						et bien documentés. Notre approche de conception garantit des mises
						à jour sans stress et un code facile à maintenir au fil du temps.
					</p>
				</div>
			</div>
		</section>
	);
}
