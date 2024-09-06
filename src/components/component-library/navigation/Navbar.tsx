"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Search, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className="flex items-center justify-between px-6 pt-6">
			<ul>
				<li>
					<Link href="/component-library">
						<Image
							src="/images/logo.svg"
							alt="App's logo"
							width={100}
							height={100}
							priority
						/>
					</Link>
				</li>
			</ul>
			<ul className="flex gap-10 text-[#7E7F81] font-extralight px-12 border-x-[0.5px] border-[#292929]">
				<li
					className={
						pathname === `/component-library/library` ? "text-white " : ""
					}>
					<Link href="/component-library/library">Library</Link>
				</li>
				<li
					className={
						pathname === `/component-library/extensions` ? "text-white " : ""
					}>
					<Link href="/component-library/extensions">Extensions</Link>
				</li>
				<li
					className={
						pathname === `/component-library/community` ? "text-white " : ""
					}>
					<Link href="/component-library/community">Community</Link>
				</li>
				<li
					className={
						pathname === `/component-library/membership` ? "text-white " : ""
					}>
					<Link href="/component-library/membership">Membership</Link>
				</li>
			</ul>
			<ul>
				<li className="relative font-extralight">
					<Search className="absolute bottom-4 left-4 text-[#7E7F81] size-5" />
					<Input
						placeholder="Search for specific components, sections, wireframes, and more..."
						className="pl-12 w-[40rem] bg-[#121212] border-black text-[#7E7F81] py-6"
					/>
				</li>
			</ul>
			<ul className="px-5 border-l-[0.5px] border-[#292929]">
				<li>
					<Card className="bg-[#121212] border-[#1D1D1D]">
						<Avatar className="flex items-center justify-center">
							<User className="text-white" />
						</Avatar>
					</Card>
				</li>
			</ul>
		</nav>
	);
}
