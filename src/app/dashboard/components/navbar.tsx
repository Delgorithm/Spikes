"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import logoDashboard from "../../../../public/logo.svg";
import Link from "next/link";
import HomeLogo from "./logos/homeLogo";
import ClientsLogo from "./logos/clientsLogo";
import LeadLogo from "./logos/leadLogo";
import InboundLogo from "./logos/inboundLogo";
import OutboundLogo from "./logos/outboundLogo";
import AdsLogo from "./logos/adsLogo";
import NotificationsLogo from "./logos/notificationsLogo";
import SettingsLogo from "./logos/settingsLogo";
import DealsLogo from "./logos/dealsLogo";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import UpgradeLogo from "./logos/upgradeLogo";
import profilPicture from "../../../../public/profilpicture.webp";
import ArrowDownLogo from "./logos/arrowdownLogo";
import CommandLogo from "./logos/commandLogo";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col justify-between py-5 px-8 w-[30%]">
			<Image
				src={logoDashboard}
				width={40}
				height={40}
				priority={true}
				alt="Logo of the Dashboard"
			/>
			<label htmlFor="search" className="relative">
				<Input type="search" id="search" name="search" placeholder="Search" />
				<CommandLogo
					className={"absolute top-2 right-5 bg-[#DEDEE8]/20 text-black/50"}
				/>
			</label>
			<ul className="flex flex-col gap-1">
				<p className="text-black/50">Navigation</p>
				<li
					className={
						pathname === "/dashboard" ? "p-3 bg-white rounded-lg" : "p-3"
					}>
					<Link href="/dashboard" className="flex items-center gap-2">
						<HomeLogo /> Home
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/clients"
							? "p-3 bg-white rounded-lg"
							: "p-3"
					}>
					<Link href="/dashboard/clients" className="flex items-center gap-2">
						<ClientsLogo /> Clients
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/leads" ? "p-3 bg-white rounded-lg" : "p-3"
					}>
					<Link href="/dashboard/leads" className="flex items-center gap-2">
						<LeadLogo /> Leads
					</Link>
				</li>
				<li
					className={
						pathname?.startsWith("/dashboard/deals")
							? "p-3 bg-white rounded-lg"
							: "p-3"
					}>
					<Link href="/dashboard/deals" className="flex items-center gap-2">
						<DealsLogo /> Deals
					</Link>
				</li>
			</ul>

			<ul className="flex flex-col gap-1">
				<p className="text-black/50">Your lists</p>
				<li
					className={
						pathname === "/dashboard/inbound"
							? "p-3 bg-white rounded-lg"
							: "p-3"
					}>
					<Link href="/dashboard/inbound" className="flex items-center gap-2">
						<InboundLogo /> Inbound
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/outbound"
							? "p-3 bg-white rounded-lg"
							: "p-3"
					}>
					<Link href="/dashboard/outbound" className="flex items-center gap-2">
						<OutboundLogo /> Outbound
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/ads" ? "p-3 bg-white rounded-lg" : "p-3"
					}>
					<Link href="/dashboard/ads" className="flex items-center gap-2">
						<AdsLogo /> Ads
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/notifications"
							? "p-3 bg-white rounded-lg"
							: "p-3"
					}>
					<Link
						href="/dashboard/notifications"
						className="flex items-center gap-2">
						<NotificationsLogo /> Notifications{" "}
						<Badge className="w-10 flex justify-center">3</Badge>
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/settings"
							? "p-3 bg-white rounded-lg"
							: "p-3"
					}>
					<Link href="/dashboard/settings" className="flex items-center gap-2">
						<SettingsLogo /> Settings
					</Link>
				</li>
			</ul>

			<ul className="flex flex-col gap-3 border-2 border-black/10 p-2">
				<li className="flex items-center gap-2">
					<DealsLogo /> Deals
				</li>
				<Progress value={80} />
				<small>5 Deals left from 30 Leads</small>
				<Button>
					<UpgradeLogo /> Upgrade to pro
				</Button>
			</ul>

			<section className="flex items-center gap-2 bg-white p-2 rounded-md border-2 border-black/10">
				<Image
					src={profilPicture}
					width={40}
					alt="User's profil picture"
					className="rounded-md"
					priority={true}
				/>
				<article className="flex items-center justify-between w-full">
					<div>
						<p>Maria Salvatore</p>
						<p className="text-black/50">Maria@squared.studio</p>
					</div>
					<ArrowDownLogo />
				</article>
			</section>
		</nav>
	);
}
