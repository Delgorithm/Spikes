import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
	return (
		<section className="flex flex-col justify-center items-center h-screen">
			<div>
				<Link href="/component-library/accueil" prefetch={true}>
					<Card className="py-16 px-8 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
						Librairie de composants
					</Card>
				</Link>
			</div>
		</section>
	);
}
