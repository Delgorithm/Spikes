import { AlignCenter, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function NavbarEcommerce() {
	return (
		<nav className="flex items-center py-5 px-10 justify-between border-[0.5px]">
			<Link href="/ecommerce/shop">
				<h2 className="text-2xl">Cozy</h2>
			</Link>
			<ul className="flex items-center justify-center gap-10">
				<li>
					<Link
						href="/ecommerce/shop"
						className="text-sm uppercase font-semibold">
						Shop
					</Link>
				</li>
				<li>
					<Link
						href="/ecommerce/collective"
						className="text-sm uppercase font-semibold">
						Collective
					</Link>
				</li>
				<li>
					<Link
						href="/ecommerce/designers"
						className="text-sm uppercase font-semibold">
						Designers
					</Link>
				</li>
				<li>
					<Link
						href="/ecommerce/about-us"
						className="text-sm uppercase font-semibold">
						About us
					</Link>
				</li>
				<li>
					<Link
						href="/ecommerce/contact"
						className="text-sm uppercase font-semibold">
						Contact
					</Link>
				</li>
			</ul>
			<ul className="flex items-center gap-10">
				<li>
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
