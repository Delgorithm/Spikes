import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
	return (
		<section className="flex flex-col justify-center items-center h-screen">
			<div className="grid md:grid-cols-2 gap-4 mt-8">
				<Link href="/component-library" prefetch={true}>
					<Card className="py-16 px-8 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
						Librairie de composants
					</Card>
				</Link>
				<Link href="/dashboard" prefetch={true}>
					<Card className="py-16 px-8 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
						Dashboard
					</Card>
				</Link>
				<Link href="/grid-bento" prefetch={true}>
					<Card className="py-16 px-8 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
						Grid Bento
					</Card>
				</Link>
				<Link href="/ecommerce/shop/chair/meryl-lounge-chair" prefetch={true}>
					<Card className="py-16 px-8 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
						E-commerce Product
					</Card>
				</Link>
			</div>
		</section>
	);
}
