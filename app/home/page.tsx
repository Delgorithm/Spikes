import Link from "next/link";

export default function HomePage() {
	return (
		<section>
			<h1>Quel challenge souhaitez-vous découvir ? </h1>
			<Link href="/component-library">Librairie de composants</Link>
		</section>
	);
}
