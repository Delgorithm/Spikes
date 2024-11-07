import Globe from "@/components/ui/globe";
import Image from "next/image";

export default function GridBentoLanding() {
	return (
		<section className="flex flex-col gap-[30px]">
			<div className="grid xl:grid-cols-[800px_281px] xl:grid-rows-[344px] gap-[30px]">
				<div className="bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px]">
					<h3 className="text-[23px] translate-y-6 ml-8 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Rapidité d'intégration
					</h3>
					<div className="flex items-center justify-center w-full xl:h-72 relative">
						<Image
							src="/images/component-library/grid-1-a.svg"
							height={1000}
							width={1000}
							alt="Paste's icon"
						/>
					</div>
				</div>

				<div className=" bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px]">
					<h3 className="p-6 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Personnalisation avancée
					</h3>
					<div className="px-4 flex items-center justify-center w-full h-52 relative">
						<Image
							src="/images/component-library/grid-2-logos.svg"
							height={200}
							width={200}
							alt="Paste's icon"
							className="w-80 object-contain"
						/>
						<Image
							src="/images/component-library/grid-2-logo-main.svg"
							height={80}
							width={80}
							alt="Paste's icon"
							className="absolute object-contain w-[25%]"
						/>
					</div>
				</div>
			</div>

			<div className="grid xl:grid-cols-[457px_621px] xl:grid-rows-[344px] gap-[30px]">
				<div className=" bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px] relative">
					<h3 className="p-6 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent relative z-20">
						Support et évolutivité
					</h3>
					<div className="flex items-center justify-center z-10">
						<Image
							src="/images/component-library/grid-points.svg"
							width={100}
							height={100}
							className="absolute object-contain top-0 w-[98.5%] "
							alt="Decoration for the grid"
						/>
						<Image
							src="/images/component-library/grid-points-logo.svg"
							width={100}
							height={100}
							className="absolute object-contain xl:top-[60px] xl:left-[112px] xl:size-[230px]"
							alt="Decoration for the grid"
						/>
					</div>
				</div>

				<div className="bg-gradient-to-b from-[#131313] to-[#1D1D1D] rounded-[20px] overflow-hidden relative">
					<h3 className="px-6 py-6 text-[23px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Performance optimale
					</h3>
					<Globe className="translate-x-52" />
				</div>
			</div>
		</section>
	);
}
