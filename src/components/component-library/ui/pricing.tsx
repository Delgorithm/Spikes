import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import ButtonCTA from "./button-cta";

export default function Pricing() {
	return (
		<section className="flex flex-col justify-center items-center gap-[90px] h-screen ">
			<article className="flex items-center text-center gap-4">
				<p className="font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Mensuel
				</p>
				<Switch className="bg-[#FF7A00]" />
				<p className="font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Annuelle
				</p>

				<Badge className="bg-gradient-to-b from-[#292929] to-[#7E7F81]">
					Remise de -20%
				</Badge>
			</article>
			<section className="grid grid-cols-custom-price-cols grid-rows-custom-price-rows gap-[30px]">
				<article className="flex flex-col justify-between gap-2 translate-y-[45px] bg-gradient-to-b from-[#0C0C0C] to-[#292929] rounded-[20px] shadow-inner-custom-pricing drop-shadow-custom-white-pricing">
					<div className="p-[30px]">
						<p className="text-[24px] font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Free
						</p>
						<Separator className="bg-white/20 mb-[20px]" />
						<p className="mb-[35px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
							Gratuit
						</p>
						<div className="flex flex-col gap-[15px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center mb-[20px] mx-[25px]">
						<Separator className="bg-white/20 mb-[15px]" />
						<Button className="w-full rounded-lg bg-gradient-to-b from-[#292929] to-[#0C0C0C] font-medium drop-shadow-custom-btn-pricing">
							Essayer gratuitement
						</Button>
					</div>
				</article>

				<article className="flex flex-col justify-between gap-2 bg-gradient-to-b from-[#FF7900]/80 to-[#FF7A00]/20 rounded-[20px] shadow-inner-main-pricing drop-shadow-custom-main-pricing drop-shadow-custom-main-pricing-2">
					<div className="p-[30px]">
						<p className="text-[24px] font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Pro
						</p>
						<Separator className="bg-white/20 mb-[20px]" />
						<p className="mb-[30px] text-[20px] flex items-center gap-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
							8€ / <span className="text-sm">mois</span>
						</p>
						<div className="flex flex-col gap-[15px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center mb-[20px] mx-[25px]">
						<Separator className="bg-white/20 mb-[15px]" />
						<ButtonCTA
							text="Devenir professionnel"
							className="w-full font-medium drop-shadow-custom-btn-pricing"
						/>
					</div>
				</article>

				<article className="flex flex-col justify-between gap-2 translate-y-[45px] bg-gradient-to-b from-[#0C0C0C] to-[#292929] rounded-[20px] shadow-inner-custom-pricing drop-shadow-custom-white-pricing">
					<div className="p-[30px]">
						<p className="text-[24px] font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Entreprise
						</p>
						<Separator className="bg-white/20 mb-[20px]" />
						<p className="mb-[35px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
							Discutons-en
						</p>
						<div className="flex flex-col gap-[15px] bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
							<div className="flex items-center gap-2">
								<Check className="size-[18px] text-white" />
								<p>Lorem ipsum</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center mb-[20px] mx-[25px]">
						<Separator className="bg-white/20 mb-[15px]" />
						<Button className="w-full rounded-lg bg-gradient-to-b from-[#292929] to-[#0C0C0C] font-medium drop-shadow-custom-btn-pricing">
							Nous contacter
						</Button>
					</div>
				</article>
			</section>
		</section>
	);
}
