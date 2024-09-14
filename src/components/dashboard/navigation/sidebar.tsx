import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { AuthButton } from "@/features/auth/AuthButton";
import {
	Bell,
	ChartColumnIncreasing,
	CircleArrowLeft,
	CircleArrowRight,
	Command,
	CopyCheck,
	Crown,
	House,
	Layers3,
	SearchIcon,
	Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SidebarDashboard() {
	return (
		<section className="flex flex-col justify-between w-full">
			<Link href="/dashboard">
				<Image
					src="/dashboard-img/dashboard-logo.svg"
					width={30}
					height={30}
					alt="Logo"
				/>
			</Link>
			<div className="relative flex items-center">
				<SearchIcon className="absolute left-2 size-5 text-neutral-400" />
				<Input
					placeholder="Search"
					className="pl-8 text-neutral-400 bg-white"
				/>
				<Command className="absolute right-2 p-1 bg-neutral-100 rounded text-neutral-500" />
			</div>
			<div>
				<p className="text-neutral-400 text-sm">Navigation</p>
				<nav className=" text-neutral-600 p-4">
					<ul className="flex flex-col gap-4">
						<li>
							<Link
								href="/dashboard"
								className="flex items-center gap-2 text-sm">
								<House className="size-6" />
								<p>Home</p>
							</Link>
						</li>
						<li>
							<div className="flex items-center gap-2 text-sm">
								<ChartColumnIncreasing className="size-6" />
								<p>Clients</p>
							</div>
						</li>
						<li>
							<div className="flex items-center gap-2 text-sm">
								<Layers3 className="size-6" />
								<p>Leads</p>
							</div>
						</li>
						<li>
							<Link
								href="/dashboard/deals"
								className="flex items-center gap-2 text-sm">
								<CopyCheck className="size-6" />
								<p>Deals</p>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<p className="text-neutral-400 text-sm">Your Lists</p>
				<nav className="text-neutral-600 p-4">
					<ul className="flex flex-col gap-4">
						<li>
							<div className="flex items-center gap-2 text-sm">
								<CircleArrowLeft className="size-6" />
								<p>Inbound</p>
							</div>
						</li>
						<li>
							<div className="flex items-center gap-2 text-sm">
								<CircleArrowRight className="size-6" />
								<p>Outbound</p>
							</div>
						</li>
						<li>
							<div className="flex items-center gap-2 text-sm">
								<Layers3 className="size-6" />
								<p>Ads</p>
							</div>
						</li>
					</ul>
					<ul className="flex flex-col gap-4 mt-8">
						<li>
							<div className="flex items-center gap-2 text-sm">
								<Bell className="size-6" />
								<p>Notifications</p>
								<Badge className="h-3.5 text-xs">3</Badge>
							</div>
						</li>
						<li>
							<div className="flex items-center gap-2 text-sm">
								<Settings className="size-6" />
								<p>Settings</p>
							</div>
						</li>
					</ul>
				</nav>
			</div>
			<Card className="p-4 flex flex-col gap-2">
				<div className="flex items-center gap-2 text-sm">
					<CopyCheck className="size-4" />
					<p>Deals</p>
				</div>
				<Progress value={70} />
				<small className="text-xs text-neutral-500">
					5 Deals left from 30 Leads
				</small>
				<Button className="w-full flex items-center gap-2">
					<Crown />
					Upgrade to pro
				</Button>
			</Card>
			<Card className="flex items-center gap-2 py-2 px-1">
				<Image src="/dashboard-img/pp.png" width={40} height={40} alt="ok" />
				<div>
					<p className="text-sm">Arthur Bossuyt</p>
					<p className="text-sm text-neutral-400">Arthur@squared.studio</p>
				</div>
			</Card>
			<AuthButton />
		</section>
	);
}
