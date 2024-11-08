import Image from "next/image";
import ButtonCTA from "./button-cta";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Hero() {
	return (
		<section className="flex flex-col justify-center items-center">
			<article className="flex flex-col items-center gap-[25px]">
				<h1 className="text-[44px] font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Créer ta librairie de composants
				</h1>
				<p className="text-[14px] font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Des composants de design réalisés avec passion pour que tu puisses les
					utiliser à souhait
				</p>
				<ButtonCTA text="Essayer gratuitement" />
			</article>
			<div className="relative my-[75px] w-[1110px] h-[774px] rounded-[20px]">
				<BorderBeam />
				<Image
					src="/images/component-library/dashboard.webp"
					width={5000}
					height={5000}
					alt="Dashboard"
					className="w-full h-full border-[0.25px] border-[#FF7A00]/60 rounded-[20px] drop-shadow-custom-dashboard pointer-events-none"
				/>
			</div>
		</section>
	);
}
