import Functionalities from "@/components/component-library/functionalities";
import ContactUs from "@/components/component-library/ui/contact-us";
import Faq from "@/components/component-library/ui/faq";
import GridBentoLanding from "@/components/component-library/ui/grid-bento-landing";
import Hero from "@/components/component-library/ui/hero";
import Navbar from "@/components/component-library/ui/navbar";
import Pricing from "@/components/component-library/ui/pricing";
import RoadLightBeam from "@/components/component-library/ui/road-light-beam";
import SocialProof from "@/components/component-library/ui/social-proof";
import Image from "next/image";

export default function LandingPage() {
	return (
		<div className="flex flex-col bg-black gap-24 relative">
			<Image
				src="/images/component-library/lux-before.svg"
				height={1000}
				width={1000}
				alt="Light"
				className="absolute pointer-events-none"
			/>
			<Image
				src="/images/component-library/lux-after.svg"
				height={1000}
				width={1000}
				alt="Light"
				className="absolute pointer-events-none"
			/>
			<div className="flex flex-col gap-24 z-10">
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
