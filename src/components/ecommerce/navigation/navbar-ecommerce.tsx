import { AlignCenter, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function NavbarEcommerce() {
	return (
		<nav className="flex items-center py-5 px-10 justify-between border-[0.5px]">
			<Link href="/ecommerce/shop">
				<h2 className="text-2xl">Cozy</h2>
			</Link>
			<ul className="watch-sm:hidden lg:flex items-center justify-center gap-10">
				<li>
					<Link
						href="/ecommerce/shop"
						className="text-sm uppercase font-semibold">
						Shop
					</Link>
				</li>
				<li className="text-sm uppercase font-semibold">Collective</li>
				<li className="text-sm uppercase font-semibold">Designers</li>
				<li className="text-sm uppercase font-semibold">About us</li>
				<li className="text-sm uppercase font-semibold">Contact</li>
			</ul>
			<ul className="flex items-center gap-10">
				<li className="watch-sm:flex lg:hidden">
					<AlignCenter />
				</li>
				<li>
					<Search />
				</li>
				<li>
					<ShoppingCart />
				</li>
			</ul>
		</nav>
	);
}
