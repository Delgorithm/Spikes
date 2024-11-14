import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SocialProof() {
	return (
		<section className="text-white flex flex-col items-center">
			<p className="font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center">
				Eux aussi ont choisi la qualité
			</p>
			<div
				className={cn(
					"flex items-center justify-between",
					"watch-sm:flex-col xl:flex-row",
					"watch-sm:gap-12 xl:gap-0",
					"xl:w-[1108px] xl:mt-[60px]",
					"watch-sm:mt-10 xl:mt-[60px]"
				)}>
				<Image
					src="/images/component-library/socialproof-5.svg"
					width={100}
					height={100}
					alt="Social Proof"
					style={{ width: "auto", height: "100%" }}
				/>
				<Image
					src="/images/component-library/socialproof-4.svg"
					width={100}
					height={100}
					alt="Social Proof"
					style={{ width: "auto", height: "100%" }}
				/>
				<Image
					src="/images/component-library/socialproof-3.svg"
					width={100}
					height={100}
					alt="Social Proof"
					style={{ width: "auto", height: "100%" }}
				/>
				<Image
					src="/images/component-library/socialproof-2.svg"
					width={100}
					height={100}
					alt="Social Proof"
					style={{ width: "auto", height: "100%" }}
				/>
				<Image
					src="/images/component-library/socialproof-1.svg"
					width={100}
					height={100}
					alt="Social Proof"
					style={{ width: "auto", height: "100%" }}
				/>
			</div>
		</section>
	);
}
