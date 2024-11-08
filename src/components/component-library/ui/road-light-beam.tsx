export default function RoadLightBeam() {
	return (
		<section className="flex flex-col justify-center items-center gap-20 text-white">
			<h2 className="text-center text-[30px] translate-y-6 ml-8 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
				Simplicité, efficacité
			</h2>
			<div className="grid grid-cols-custom-3 gap-4">
				{/* 1 */}
				<div></div>

				{/* 2 */}
				<div className="col-start-3 row-start-1 xl:w-[324px]">
					<p className="py-2 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Interface intuitive
					</p>
					<p>
						Accédez aux fonctionnalités sans complexité. Nos composants sont
						conçus pour une navigation fluide et une prise en main rapide,
						permettant à vos utilisateurs de se concentrer sur l’essentiel.
					</p>
				</div>

				{/* 3 */}
				<div className="flex justify-end">
					<div className="col-start-1 row-start-2 xl:w-[324px]">
						<p className="py-2 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Intégration direct
						</p>
						<p>
							Des composants pensés pour se fondre naturellement dans votre
							code. Avec une documentation claire, bénéficiez d’une installation
							rapide et sans friction, pour un gain de temps considérable.
						</p>
					</div>
				</div>

				{/* 4 */}
				<div className="col-start-3 row-start-2"></div>

				{/* 5 */}
				<div className="col-start-1 row-start-3"></div>

				{/* 6 */}
				<div className="col-start-3 row-start-3 xl:w-[324px]">
					<p className="py-2 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Code allégé
					</p>
					<p>
						Chaque ligne de code est optimisée pour réduire la charge. Nos
						composants minimisent la consommation de ressources tout en
						maximisant les performances, pour un développement durable et
						efficace.
					</p>
				</div>

				{/* 7 */}
				<div className="row-span-4 col-start-2 row-start-1 flex justify-center">
					<div className="flex flex-col items-center">
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
						<div className="h-[185px] w-[2px] bg-red-200" />
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
						<div className="h-[195px] w-[2px] bg-red-200" />
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
						<div className="h-[185px] w-[2px] bg-red-200" />
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
						<div className="h-[185px] w-[2px] bg-red-200" />
						<div className="size-2 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#994900] drop-shadow-custom-orange" />
					</div>
				</div>

				{/* 8 */}
				<div className="flex justify-end">
					<div className="row-start-4 xl:w-[324px]">
						<p className="py-2 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Maintenance simplifiée
						</p>
						<p>
							Facilitez la gestion de vos projets avec des composants modulaires
							et bien documentés. Notre approche de conception garantit des
							mises à jour sans stress et un code facile à maintenir au fil du
							temps.
						</p>
					</div>
				</div>

				{/* 9 */}
				<div className="col-start-3 row-start-4"></div>
			</div>
		</section>
	);
}
