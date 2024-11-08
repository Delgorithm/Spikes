"use client";

import Image from "next/image";
import ButtonCTA from "./button-cta";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={cn(
				"flex items-center justify-between pt-[25px]",
				"watch-sm:mx-4 xl:mx-24"
			)}>
			<Image
				src="/images/component-library/paste-logo.svg"
				height={100}
				width={100}
				alt="Logo"
				className="watch-sm:w-20 xl:w-28"
			/>
			<ul className="text-white watch-sm:hidden xl:flex items-center gap-10">
				<li>Fonctionnalités</li>
				<li>Comment ça marche</li>
				<li>Prix</li>
				<li>FAQ</li>
			</ul>
			<ButtonCTA text="Se connecter" className="watch-sm:hidden xl:flex" />
			<AlignJustify
				onClick={handleOpen}
				className="watch-sm:flex xl:hidden stroke-neutral-100	"
			/>
		</nav>
	);
}
