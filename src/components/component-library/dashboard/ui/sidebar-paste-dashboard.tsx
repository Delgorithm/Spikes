"use client";

import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Bookmark, LayoutGrid, Sparkles, Star, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SidebarDashboard() {
	const [openSection, setOpenSection] = useState<string | null>(null);
	const pathname = usePathname();
	const { data: session } = useSession();
	const userId = session?.user?.id;

	const handleOpen = (sectionTitle: string) => {
		setOpenSection(openSection === sectionTitle ? null : sectionTitle);
	};

	const navSections = [
		{
			title: "Platform",
			icon: (isOpen: boolean) => (
				<Zap
					className={cn(
						"stroke-[1.5px]",
						isOpen ? "stroke-white" : "stroke-[#7E7F81]"
					)}
				/>
			),
			items: [
				{
					title: "Webflow",
					link: `/component-library/dashboard/${userId}/plateform/webflow`,
					icon: "webflow-logo.svg",
				},
				{
					title: "Figma",
					link: `/component-library/dashboard/${userId}/plateform/figma`,
					icon: "figma-logo.svg",
				},
			],
		},
		{
			title: "Sections",
			icon: (isOpen: boolean) => (
				<LayoutGrid
					className={cn(
						"stroke-[1.5px]",
						isOpen ? "stroke-white" : "stroke-[#7E7F81]"
					)}
				/>
			),
			items: [
				{
					title: "Hero",
					link: `/component-library/dashboard/${userId}/sections/hero`,
				},
				{
					title: "How it works",
					link: `/component-library/dashboard/${userId}/sections/how-it-works`,
				},
				{
					title: "Services",
					link: `/component-library/dashboard/${userId}/sections/services`,
				},
				{
					title: "Testimonials",
					link: `/component-library/dashboard/${userId}/sections/testimonials`,
				},
				{
					title: "Pricing",
					link: `/component-library/dashboard/${userId}/sections/pricing`,
				},
				{
					title: "FAQ",
					link: `/component-library/dashboard/${userId}/sections/faq`,
				},
				{
					title: "Footer",
					link: `/component-library/dashboard/${userId}/sections/footer`,
				},
			],
		},
		{
			title: "Style",
			icon: (isOpen: boolean) => (
				<Sparkles
					className={cn(
						"stroke-[1.5px]",
						isOpen ? "stroke-white" : "stroke-[#7E7F81]"
					)}
				/>
			),
			items: [
				{
					title: "Custom",
					link: `/component-library/dashboard/${userId}/style/custom`,
				},
			],
		},
		{
			title: "Saved",
			icon: (isOpen: boolean) => (
				<Bookmark
					className={cn(
						"stroke-[1.5px]",
						isOpen ? "stroke-white" : "stroke-[#7E7F81]"
					)}
				/>
			),
			items: [
				{
					title: "Bookmarks",
					link: `/component-library/dashboard/${userId}/saved/bookmarks`,
				},
			],
		},
		{
			title: "Plan",
			icon: (isOpen: boolean) => (
				<Star
					className={cn(
						"stroke-[1.5px]",
						isOpen ? "stroke-white" : "stroke-[#7E7F81]"
					)}
				/>
			),
			items: [
				{
					title: "Subscription",
					link: `/component-library/dashboard/${userId}/plan/subscription`,
				},
			],
		},
	];

	return (
		<nav className="w-full pt-8">
			<Accordion type="single" collapsible className="w-full px-8">
				{navSections.map((section) => (
					<AccordionItem
						key={section.title}
						value={section.title.toLowerCase()}>
						<AccordionTrigger
							className="py-6"
							onClick={() => handleOpen(section.title)}>
							<div className="flex items-center gap-2">
								{section.icon(openSection === section.title)}
								<span
									className={cn(
										"uppercase font-medium",
										openSection === section.title
											? "text-white"
											: "text-[#7E7F81]"
									)}>
									{section.title}
								</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul className="pl-2 text-[#7E7F81] flex flex-col gap-6">
								{section.items.map((item) => (
									<li key={item.title} className="relative">
										<Link
											href={item.link}
											className={cn(
												"flex items-center gap-2",
												pathname === item.link ? "text-white" : "text-[#7E7F81]"
											)}>
											{item.icon && (
												<Image
													src={`/images/${item.icon}`}
													alt={`${item.title} icon`}
													width={20}
													height={20}
												/>
											)}
											<span>{item.title}</span>
										</Link>
										{pathname === item.link && section.title !== "Platform" && (
											<div className="size-1.5 rounded-full bg-gradient-to-t from-[#FF2900] to-[#FF7A00] absolute left-[-20px] top-1/2 transform -translate-y-1/2"></div>
										)}
									</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</nav>
	);
}
