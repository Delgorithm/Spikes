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

const luxBefore = "/images/component-library/lux-before.svg";
const luxAfter = "/images/component-library/lux-after.svg";

export default function LandingPage() {
	return (
		<div
			className={cn(
				"flex flex-col bg-neutral-950 relative noise",
				"watch-sm:gap-12 xl:gap-24"
			)}>
			<Image
				src={luxBefore}
				height={1000}
				width={1000}
				alt="Light"
				className={cn("absolute pointer-events-none", "flex")}
			/>
			<Image
				src={luxAfter}
				height={1000}
				width={1000}
				alt="Light"
				className={cn("absolute pointer-events-none", "flex")}
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
