"use client";

import ButtonCTA from "@/components/component-library/ui/button-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function MembershipPage() {
	const [isPrice, setIsPrice] = useState(false);
	const { data: session, status } = useSession();

	const handlePricing = () => {
		setIsPrice(!isPrice);
	};

	const redirectionURL = isPrice
		? "https://buy.stripe.com/test_6oE9CtfvscUQgi4aEE"
		: "https://buy.stripe.com/test_aEU7ul3MK3kg4zm6op";

	return (
		<section
			id="pricing"
			className={cn(
				"flex flex-col justify-center items-center",
				"watch-sm:gap-[20px] md:gap-10 xl:gap-[50px] ",
				"watch-sm:my-[20px] xl:mt-[50px]"
			)}>
			<article
				className={cn(
					"flex items-center text-center gap-4",
					"watch-sm:flex-col xl:flex-row",
					"xl:ml-[110px]"
				)}>
				<p className="font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Mensuel
				</p>
				<Switch onClick={handlePricing} className="bg-[#FF7A00]" />
				<p className="font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Annuelle
				</p>

				<Badge className="bg-gradient-to-b from-[#292929] to-[#7E7F81]">
					Remise de -20%
				</Badge>
			</article>

			<section
				className={cn(
					"grid",
					"watch-sm:grid-cols-1 watch-sm:grid-rows-3 ",
					"md:grid-cols-3 md:grid-rows-1 md:mx-4 md:pb-10",
					"xl:grid-cols-custom-price-cols xl:grid-rows-custom-price-rows xl:mx-0",
					"watch-sm:gap-[80px] md:gap-4 xl:gap-[30px]"
				)}>
				<article
					className={cn(
						"flex flex-col justify-between gap-2 bg-gradient-to-b from-[#0C0C0C] to-[#292929] rounded-[20px]"
					)}>
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

				<article className="flex flex-col justify-between gap-2 bg-gradient-to-b from-[#FF7900]/80 to-[#FF7A00]/20 rounded-[20px]">
					<div className="p-[30px]">
						<p className="text-[24px] font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Pro
						</p>
						<Separator className="bg-white/20 mb-[20px]" />
						<p className="mb-[30px] text-[20px] flex items-center gap-2 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent font-medium">
							{isPrice ? (
								<>
									86€ / <span className="text-sm">an</span>
								</>
							) : (
								<>
									8€ / <span className="text-sm">mois</span>
								</>
							)}
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

						<Link
							href={redirectionURL}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"text-white",
								"h-9 px-4 py-2",
								"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
								"font-medium bg-gradient-to-b from-[#FF8517] to-[#FF3206] active:opacity-50"
							)}>
							Devenir professionnel
						</Link>
					</div>
				</article>

				<article
					className={cn(
						"flex flex-col justify-between gap-2 bg-gradient-to-b from-[#0C0C0C] to-[#292929] rounded-[20px]"
					)}>
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
