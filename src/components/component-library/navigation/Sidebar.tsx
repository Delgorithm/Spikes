"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Bookmark, LayoutGrid, Sparkles, Star, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();

	const pathPages = [
		{ href: "/component-library/sections/hero", label: "Hero" },
		{
			href: "/component-library/sections/how-it-works",
			label: "How it Works",
		},
		{ href: "/component-library/sections/services", label: "Services" },
		{
			href: "/component-library/sections/testimonials",
			label: "Testimonials",
		},
		{ href: "/component-library/sections/pricing", label: "Pricing" },
		{ href: "/component-library/sections/faq", label: "FAQ" },
		{ href: "/component-library/sections/footer", label: "Footer" },
	];

	return (
		<nav className="h-full bg-[#121212] flex flex-col justify-between border-r-[0.25px] border-[#7E7F81]/20">
			<ul>
				<li>
					<Accordion type="single" collapsible className="p-6 flex flex-col">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<p className="flex items-center gap-2 uppercase font-normal">
									<ZapIcon />
									Platform
								</p>
							</AccordionTrigger>
							<Link href="/component-library/plateform/webflow">
								<AccordionContent className="p-6">
									<div className="flex items-center gap-2">
										<Image
											src="/images/webflow-logo.svg"
											width={20}
											height={20}
											alt="Webflow's logo"
										/>
										<p
											className={
												pathname === `/component-library/plateform/webflow`
													? "text-white"
													: ""
											}>
											Webflow
										</p>
									</div>
								</AccordionContent>
							</Link>
							<Link href="/component-library/plateform/figma">
								<AccordionContent className="p-6">
									<div className="flex items-center gap-2">
										<Image
											src="/images/figma-logo.svg"
											width={20}
											height={20}
											alt="Figma's logo"
										/>
										<p
											className={
												pathname === `/component-library/plateform/figma`
													? "text-white"
													: ""
											}>
											Figma
										</p>
									</div>
								</AccordionContent>
							</Link>
						</AccordionItem>
					</Accordion>
				</li>
				<li>
					<Accordion type="single" collapsible className="p-6">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<p className="flex items-center gap-2 uppercase font-normal">
									<LayoutGrid />
									Sections
								</p>
							</AccordionTrigger>
							{pathPages.map((item) => (
								<Link key={item.href} href={item.href}>
									<AccordionContent className="pl-6 py-4">
										<div className="flex items-center gap-2">
											{pathname === item.href && (
												<Image
													src="/images/paste-icon.svg"
													alt="Navigation's logo"
													height={5}
													width={5}
												/>
											)}
											<p
												className={`text-sm ${
													pathname === item.href ? "text-white" : ""
												}`}>
												{item.label}
											</p>
										</div>
									</AccordionContent>
								</Link>
							))}
							<Link href="https://www.spikes-challenges.fr/" target="°blank">
								<AccordionContent className="py-4">
									<div className="flex items-center gap-2">
										<p className="text-sm">Show more +</p>
									</div>
								</AccordionContent>
							</Link>
						</AccordionItem>
					</Accordion>
				</li>
				<li>
					<Accordion type="single" collapsible className="p-6">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<p className="flex items-center gap-2 uppercase font-normal">
									<Sparkles />
									Style
								</p>
							</AccordionTrigger>
						</AccordionItem>
					</Accordion>

					<Accordion type="single" collapsible className="p-6">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<p className="flex items-center gap-2 uppercase font-normal">
									<Bookmark />
									Saved
								</p>
							</AccordionTrigger>
						</AccordionItem>
					</Accordion>

					<Accordion type="single" collapsible className="p-6">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<p className="flex items-center gap-2 uppercase font-normal">
									<Star />
									Plan
								</p>
							</AccordionTrigger>
						</AccordionItem>
					</Accordion>
				</li>
				<li>
					<Link
						href="/component-library/upgrade"
						className="flex justify-center items-center mx-4">
						<Button className="font-light w-full">
							Upgrade to{" "}
							<span className="inline-block text-transparent bg-clip-text ml-1 bg-gradient-to-t from-[#FF7A00] to-[#FF2900]">
								Pro
							</span>
						</Button>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
