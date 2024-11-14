"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function SidebarDashboard() {
	const pathname = usePathname();
	const { data: session } = useSession();
	const userId = session?.user?.id;

	const navTitle = [
		{
			title: "Platform",
			icon: "icon-1.svg",
		},
		{
			title: "Sections",
			icon: "icon-2.svg",
		},
		{
			title: "Style",
			icon: "star.svg",
		},
		{
			title: "Saved",
			icon: "bookmark.svg",
		},
		{
			title: "Plan",
			icon: "star.svg",
		},
	];

	const navItems = [
		{
			title: "Webflow",
			link: `/dashboard/${userId}/webflow`,
			icon: "webflow-logo.svg",
		},
		{
			title: "Figma",
			link: `/dashboard/${userId}/figma`,
			icon: "figma-logo.svg",
		},
		{
			title: "Hero",
			link: `/dashboard/${userId}/hero`,
		},
		{
			title: "How it works",
			link: `/dashboard/${userId}/how-it-works`,
		},
		{
			title: "Services",
			link: `/dashboard/${userId}/services`,
		},
		{
			title: "Testimonials",
			link: `/dashboard/${userId}/testimonials`,
		},
		{
			title: "Pricing",
			link: `/dashboard/${userId}/pricing`,
		},
		{
			title: "FAQ",
			link: `/dashboard/${userId}/faq`,
		},
		{
			title: "Footer",
			link: `/dashboard/${userId}/footer`,
		},
	];
	return (
		<nav>
			<ul>
				<li>Plateform</li>
			</ul>
		</nav>
	);
}
