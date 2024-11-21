import Functionalities from "@/components/component-library/functionalities";
import ContactUs from "@/components/component-library/ui/contact-us";
import Faq from "@/components/component-library/ui/faq";
import GridBentoLanding from "@/components/component-library/ui/grid-bento-landing";
import Hero from "@/components/component-library/ui/hero";
import Navbar from "@/components/component-library/ui/navbar";
import Pricing from "@/components/component-library/ui/pricing";
import RoadLightBeam from "@/components/component-library/ui/road-light-beam";
import SocialProof from "@/components/component-library/ui/social-proof";
import { cn } from "@/lib/utils";
import Image from "next/image";

const lux = "/images/component-library/lux.png";

export default function LandingPage() {
	return (
		<div
			className={cn(
				"flex flex-col bg-neutral-950 relative noise",
				"watch-sm:gap-12 xl:gap-24"
			)}>
			<Image
				src={lux}
				width={1000}
				height={1000}
				priority={false}
				alt="Light"
				className={cn("absolute pointer-events-none z-[2]", "block")}
			/>

			<div className={cn("flex flex-col z-10", "watch-sm:gap-16 xl:gap-24")}>
				<Navbar />
				<Hero />
				<SocialProof />
				<Functionalities />
				<GridBentoLanding />
				<RoadLightBeam />
				<Pricing />
				<Faq />
				<ContactUs />
			</div>
		</div>
	);
}
