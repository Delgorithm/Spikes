import Image from "next/image";

export default function Functionalities() {
	return (
		<section className="flex flex-col justify-center items-center text-white">
			<div className="w-[1108px]">
				<h2 className="text-[30px] font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Fais pour répondre à des <br /> besoins préçis
				</h2>
				<div className="grid grid-rows-custom-functionalities-rows grid-cols-custom-functionalities-cols gap-[54px] mt-[45px]">
					<article className="bg-[#1D1D1D] rounded-[20px] flex flex-col items-end ">
						<Image
							src="/images/component-library/brackets.svg"
							width={100}
							height={100}
							alt="Bracket's logo"
							className="m-[30px] size-[60px] pointer-events-none"
						/>
						<div className="flex flex-col items-center gap-[20px] mt-[40px]">
							<p className="text-[20px] medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
								Un seul objectif, un design uni
							</p>
							<p className="text-[12px] w-5/6 font-medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
								Chaque composant est conçu avec une précision absolue, mettant
								en avant l’essentiel pour une utilisation ciblée. La simplicité
								d’un objet unique permet une intégration sans effort tout en
								conservant l’unité visuelle.
							</p>
						</div>
					</article>

					<article className="bg-[#1D1D1D] rounded-[20px] flex flex-col items-end ">
						<Image
							src="/images/component-library/hexagon.svg"
							width={100}
							height={100}
							alt="Bracket's logo"
							className="m-[30px] size-[60px] pointer-events-none"
						/>
						<div className="flex flex-col items-center gap-[20px] mt-[40px]">
							<p className="text-[20px] w-5/6  medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
								Des design minimalistes
							</p>
							<p className="text-[12px] w-5/6 font-medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
								Adoptez la puissance de la simplicité. Nos composants
								minimalistes garantissent une expérience utilisateur fluide et
								élégante, sans distractions inutiles. Idéal pour les interfaces
								modernes et intuitives.
							</p>
						</div>
					</article>

					<article className="bg-[#1D1D1D] rounded-[20px] flex flex-col items-end ">
						<Image
							src="/images/component-library/wand-sparkles.svg"
							width={100}
							height={100}
							alt="Bracket's logo"
							className="m-[30px] size-[60px] pointer-events-none"
						/>
						<div className="flex flex-col items-center gap-[20px] mt-[40px]">
							<p className="text-[20px] w-5/6  medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
								Chaque pixels comptent
							</p>
							<p className="text-[12px] w-5/6 font-medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
								Une attention aux détails pixel par pixel, où chaque élément
								trouve sa juste place. Nos composants sont optimisés pour offrir
								un rendu impeccable, assurant une expérience visuelle
								harmonieuse.
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}
