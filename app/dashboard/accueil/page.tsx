import Functionalities from "@/components/dashboard/ui/functionalities";
import Hero from "@/components/dashboard/ui/hero";
import Navbar from "@/components/dashboard/ui/navbar";
import SocialProof from "@/components/dashboard/ui/social-proof";

export default function AccueilPage() {
	return (
		<section className="px-24 mt-6">
			{/* <Navbar />
			<Hero /> */}
			<div className="px-24">
				{/* <SocialProof /> */}
				<Functionalities />
			</div>
		</section>
	);
}
