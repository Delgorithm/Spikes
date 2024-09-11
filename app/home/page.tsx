import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
	return (
		<section>
			<h1>Quel challenge souhaitez-vous découvir ? </h1>
			<div>
				<Card>
					<Link href="/component-library">Librairie de composants</Link>
				</Card>
				<Card>
					<Link href="/dashboard">Dashboard</Link>
				</Card>
			</div>
		</section>
	);
}
