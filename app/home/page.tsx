import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
	return (
		<section className="flex flex-col justify-center items-center h-screen">
			<div className="grid grid-cols-2 gap-4 mt-8 ">
				<Link href="/component-library">
					<Card className="py-16 px-8 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
						Librairie de composants
					</Card>
				</Link>
				<Link href="/dashboard">
					<Card className="py-16 px-8 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
						Dashboard
					</Card>
				</Link>
			</div>
		</section>
	);
}
