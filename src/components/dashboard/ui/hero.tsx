import Image from "next/image";
import CTAFree from "./cta-free";

export default function Hero() {
	return (
		<section className="mt-[70px] flex flex-col gap-8 justify-center items-center">
			<h1 className="text-4xl font-bold w-[550px] text-center">
				La gestion des finances repensée pour les freelances et les PME
			</h1>
			<h4>Des outils puissants pour des résultats plus claires</h4>
			<CTAFree />
			<Image
				src="/dashboard/dashboard-img.webp"
				height={1000}
				width={1000}
				alt="MyIDeals' dashboard"
				className="rounded-xl"
			/>
		</section>
	);
}
