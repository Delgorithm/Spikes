"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ButtonCTA from "./button-cta";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import DropdownProfil from "../dashboard/ui/dropdown-profil";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { data: session, status } = useSession();

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const sidebarVariants = {
		hidden: { x: "100%" },
		visible: {
			x: 0,
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
		exit: {
			x: "100%",
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
	};

	const blurbarVariants = {
		hidden: { x: "500%" },
		visible: {
			x: 0,
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
		exit: {
			x: "100%",
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
	};

	// Constante pour les éléments de navigation
	const navLinks = [
		{ href: "#fonctionnalites", label: "Fonctionnalités" },
		{ href: "#howitworks", label: "Comment ça marche" },
		{ href: "#pricing", label: "Prix" },
		{ href: "#faq", label: "FAQ" },
	];

	return (
		<nav
			className={cn(
				"flex items-center justify-between pt-[25px] z-50",
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
				{navLinks.map((item, index) => (
					<li
						key={index}
						className="relative group bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center">
						<Link href={item.href}>
							{item.label}
							<span className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] transition-transform duration-200 origin-left group-hover:scale-x-100"></span>
						</Link>
					</li>
				))}
			</ul>

			<div className="watch-sm:hidden lg:flex">
				{status === "loading" ? (
					<p className="text-white">Chargement...</p>
				) : session ? (
					<DropdownProfil />
				) : (
					<ButtonCTA text="Se connecter" />
				)}
			</div>

			<div className="watch-sm:flex xl:hidden">
				{isOpen ? (
					<>
						<X onClick={handleOpen} className="stroke-neutral-100 z-40" />
						<motion.div
							className="absolute w-4/5 top-0 right-0 bg-black min-h-full z-30"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={sidebarVariants}>
							<article className="flex flex-col text-center gap-10 mt-24 px-4">
								{navLinks.map((item, index) => (
									<Link
										key={index}
										href={item.href}
										onClick={handleOpen}
										className="text-white w-full py-3 bg-[#1B1B1B] border-[0.5px] border-[#7E7F81] rounded-lg">
										{item.label}
									</Link>
								))}
							</article>
						</motion.div>
						<motion.div
							className="absolute w-1/5 top-0 left-0 backdrop-blur-sm bg-neutral-500/50 min-h-full z-30"
							initial="hidden"
							animate="visible"
							exit="exit"
							onClick={handleOpen}
							variants={blurbarVariants}></motion.div>
					</>
				) : (
					<AlignJustify onClick={handleOpen} className="stroke-neutral-100" />
				)}
			</div>
		</nav>
	);
}
