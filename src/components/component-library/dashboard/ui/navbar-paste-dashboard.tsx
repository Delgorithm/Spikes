"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function NavbarPasteDashboard() {
	const pathname = usePathname();
	const { data: session } = useSession();
	const userId = session?.user?.id;

	const navItems = [
		{
			url: "paste-icon.svg",
		},
		{
			title: "Library",
			link: `/dashboard/${userId}/library`,
		},
		{
			title: "Extensions",
			link: `/dashboard/${userId}/extensions`,
		},
		{
			title: "Community",
			link: `/dashboard/${userId}/community`,
		},
		{
			title: "Membership",
			link: `/dashboard/${userId}/membership`,
		},
	];

	return (
		<nav>
			<ul>
				<li>Library</li>
			</ul>
		</nav>
	);
}
