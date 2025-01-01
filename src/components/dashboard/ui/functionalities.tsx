import FunctionalitiesDesgin from "../design/functionalities-design";
import CTAFree from "./cta-free";

export default function Functionalities() {
	return (
		<section className="flex flex-col gap-10 mt-[70px] w-full">
			<h2 className="text-3xl font-bold text-center">
				Gardez un oeil sur vos avancées
			</h2>
			<div className="flex flex-col justify-start gap-2">
				<p className="font-semibold">Facile comme 1+1</p>
				<div className="flex items-center justify-between">
					<p className="text-2xl font-bold">Comment ça fonctionne ?</p>
					<CTAFree />
				</div>
			</div>
			<FunctionalitiesDesgin />
		</section>
	);
}
