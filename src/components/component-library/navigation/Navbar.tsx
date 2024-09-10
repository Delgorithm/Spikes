"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const handleOpenMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="flex items-center justify-between px-6 pt-6">
			<ul>
				<li>
					<Link href="/component-library">
						<Image
							src="/images/logo.svg"
							alt="App's logo"
							sizes="100vw"
							width={100}
							height={100}
						/>
					</Link>
				</li>
			</ul>
			<ul className="watch-sm:hidden md:flex flex gap-10 text-[#7E7F81] font-extralight px-12 border-x-[0.5px] border-[#292929]">
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
			<ul className="watch-sm:hidden md:block">
				<li className="watch-sm:hidden md:block relative font-extralight">
					<Search className="absolute bottom-4 left-4 text-[#7E7F81] size-5" />
					<Input
						placeholder="Search for specific components, sections, wireframes, and more..."
						className="pl-12 bg-[#121212] border-black text-[#7E7F81] py-4 md:py-6 md:w-2 lg:w-full"
					/>
				</li>
			</ul>
			<ul className="watch-sm:hidden md:block px-5 border-l-[0.5px] border-[#292929]">
				<li>
					<Card className="bg-[#121212] border-[#1D1D1D]">
						<Avatar className="flex items-center justify-center">
							<User className="text-white" />
						</Avatar>
					</Card>
				</li>
			</ul>
			<ul className="md:hidden">
				<Button onClick={handleOpenMenu}>
					<Menu className="text-white" />
				</Button>
			</ul>
			{isOpen ? (
				<>
					<div
						className="absolute top-0 left-0 h-screen w-[30%] backdrop-blur-lg z-10"
						onClick={handleOpenMenu}></div>
					<section className="absolute top-0 right-0 h-screen w-[70%] z-10 overflow-y-auto">
						<section className="h-full bg-[#121212]">
							<Button onClick={handleOpenMenu}>
								<X className="text-white absolute right-10 top-8" />
							</Button>
							<nav className="flex flex-col pt-20">
								<ul className="flex flex-col gap-10 text-center text-[#7E7F81] font-extralight px-12 border-x-[0.5px] border-[#292929]">
									<li
										className={
											pathname === `/component-library/library`
												? "text-white"
												: ""
										}>
										<Link href="/component-library/library">Library</Link>
									</li>
									<li
										className={
											pathname === `/component-library/extensions`
												? "text-white "
												: ""
										}>
										<Link href="/component-library/extensions">Extensions</Link>
									</li>
									<li
										className={
											pathname === `/component-library/community`
												? "text-white "
												: ""
										}>
										<Link href="/component-library/community">Community</Link>
									</li>
									<li
										className={
											pathname === `/component-library/membership`
												? "text-white "
												: ""
										}>
										<Link href="/component-library/membership">Membership</Link>
									</li>
									<Link href="/component-library/profile">
										<Card className="bg-[#121212] border-[#1D1D1D] flex justify-center">
											<Avatar className="flex items-center justify-center">
												<User className="text-white " />
											</Avatar>
										</Card>
									</Link>
								</ul>
								<Sidebar />
							</nav>
						</section>
					</section>
				</>
			) : null}
		</nav>
	);
}
