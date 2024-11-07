import ButtonCTA from "@/components/component-library/ui/button-cta";
import GridBentoLanding from "@/components/component-library/ui/grid-bento-landing";

export default function LandingPage() {
	return (
		<div>
			<p>Landing Page</p>

			<ButtonCTA text="Se connecter" />
			<ButtonCTA text="Essayer gratuitement" />
			<GridBentoLanding />
		</div>
	);
}
