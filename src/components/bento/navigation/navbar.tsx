"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarGrid() {
	const pathname = usePathname();

	return (
		<nav className="text-white flex justify-center p-10">
			<ul className="flex items-center justify-center gap-20 font-light border-[0.5px] border-[#B3B3B3]/20 rounded-full px-2 py-2 transition-all ease-in-out">
				<li
					className={
						pathname === `/grid-bento/home`
							? "bg-[#B3B3B3]/5 text-white px-10 py-3 rounded-full"
							: "text-[#B3B3B3]/20"
					}>
					<Link href="/grid-bento/home">Home</Link>
				</li>
				<li
					className={
						pathname === `/grid-bento/about`
							? "bg-[#B3B3B3]/5 text-white px-10 py-3 rounded-full"
							: "text-[#B3B3B3]/20"
					}>
					<Link href="/grid-bento/about">About</Link>
				</li>
				<li
					className={
						pathname === `/grid-bento/projects`
							? "bg-[#B3B3B3]/5 text-white px-10 py-3 rounded-full"
							: "text-[#B3B3B3]/20"
					}>
					<Link href="/grid-bento/projects">Projects</Link>
				</li>
				<li
					className={
						pathname === `/grid-bento/contact`
							? "bg-[#B3B3B3]/5 text-white px-10 py-3 rounded-full"
							: "text-[#B3B3B3]/20"
					}>
					<Link href="/grid-bento/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
