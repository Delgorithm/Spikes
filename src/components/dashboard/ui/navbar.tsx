import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{ text: "Features", id: "features" },
	{ text: "Avis", id: "avis" },
	{ text: "Pricing", id: "pricing" },
	{ text: "FAQ", id: "faq" },
];

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between mx-auto">
			<Link
				href="http://localhost:3000/dashboard/accueil"
				className="flex items-center gap-2">
				<Image
					src="/dashboard/icons/deals_logo.svg"
					width={40}
					height={40}
					alt="MyIDeals's icon"
				/>
				<p className="text-2xl">MyIDeals</p>
			</Link>
			<ul className="flex items-center gap-14 font-light">
				{navLinks.map(({ text, id }) => (
					<li key={id}>
						<Link
							href={`#${id}`}
							className="group hover:font-normal transition-all ease-in-out relative">
							{text}
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black absolute bottom-0 left-0"></span>
						</Link>
					</li>
				))}
			</ul>

			<Link
				href="http://localhost:3000/dashboard/connexion"
				className={cn(
					"flex items-center gap-2 font-light bg-[#F5F7F9] px-6 py-1.5 rounded-lg",
					"hover:opacity-65 transition-all ease-in-out",
					"active:translate-y-0.5"
				)}>
				<p>Se connecter</p>
				<ArrowRight className="w-4" />
			</Link>
		</nav>
	);
}
