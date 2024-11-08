import Image from "next/image";
import ButtonCTA from "./button-cta";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between mx-24 pt-[25px]">
			<Image
				src="/images/component-library/paste-logo.svg"
				height={100}
				width={100}
				alt="Logo"
			/>
			<ul className="text-white flex items-center gap-10">
				<li>Fonctionnalités</li>
				<li>Comment ça marche</li>
				<li>Prix</li>
				<li>FAQ</li>
			</ul>
			<ButtonCTA text="Se connecter" />
		</nav>
	);
}
