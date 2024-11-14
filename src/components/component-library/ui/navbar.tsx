"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ButtonCTA from "./button-cta";
import { useSession } from "next-auth/react";
import CardAuth from "@/features/auth/card-auth";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { data: session, status } = useSession();

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={cn(
				"flex items-center justify-between pt-[25px]",
				"watch-sm:mx-4 xl:mx-24"
			)}>
			<Link href="/component-library/accueil">
				<Image
					src="/images/component-library/paste-logo.svg"
					height={100}
					width={100}
					alt="Logo"
					className="watch-sm:w-20 xl:w-28"
				/>
			</Link>
			<ul className="watch-sm:hidden xl:flex items-center gap-10">
				<li className="relative group bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center">
					<Link href="#fonctionnalites">
						Fonctionnalités
						<span className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] transition-transform duration-200 origin-left group-hover:scale-x-100"></span>
					</Link>
				</li>
				<li className="relative group bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center">
					<Link href="#howitworks">
						Comment ça marche
						<span className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] transition-transform duration-200 origin-left group-hover:scale-x-100"></span>
					</Link>
				</li>
				<li className="relative group bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center">
					<Link href="#pricing">
						Prix
						<span className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] transition-transform duration-200 origin-left group-hover:scale-x-100"></span>
					</Link>
				</li>
				<li className="relative group bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center">
					<Link href="#faq">
						FAQ
						<span className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] transition-transform duration-200 origin-left group-hover:scale-x-100"></span>
					</Link>
				</li>
			</ul>
			<div>
				{status === "loading" ? (
					<p className="text-white">Chargement...</p>
				) : session ? (
					<CardAuth session={session} />
				) : (
					<ButtonCTA text="Se connecter" />
				)}
			</div>
			<AlignJustify
				onClick={handleOpen}
				className="watch-sm:flex xl:hidden stroke-neutral-100"
			/>
		</nav>
	);
}
