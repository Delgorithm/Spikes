"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import BtnLogout from "@/features/auth/btn-logout";
import { cn } from "@/lib/utils";
import { Minus, Search, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarPasteDashboard() {
	const pathname = usePathname();
	const { data: session } = useSession();
	const userId = session?.user?.id;

	const navItems = [
		{
			url: "logo.svg",
			link: `/component-library/dashboard/${userId}/`,
			alt: "Icon de Paste",
		},
		{
			title: "Library",
			link: `/component-library/dashboard/${userId}/library`,
		},
		{
			title: "Extensions",
			link: `/component-library/dashboard/${userId}/extensions`,
		},
		{
			title: "Community",
			link: `/component-library/dashboard/${userId}/community`,
		},
		{
			title: "Membership",
			link: `/component-library/dashboard/${userId}/membership`,
		},
	];

	const iconItem = navItems.slice(0, 1);
	const navigationItems = navItems.slice(1, 5);

	return (
		<nav
			className={cn(
				"text-white flex items-center justify-between w-full font-light",
				"lg:px-8 py-6"
			)}>
			<ul>
				{iconItem.map((item) => (
					<Link href={item.link} key={item.alt}>
						<Image
							src={`/images/${item.url}`}
							width={100}
							height={100}
							alt="Logo"
						/>
					</Link>
				))}
			</ul>
			<Minus className="rotate-90 h-[0.5px] bg-[#1D1D1D]" />
			<ul className="flex items-center gap-8">
				{navigationItems.map((item) => (
					<li key={item.title}>
						<Link
							href={item.link}
							className={cn(
								pathname?.includes(item.link) ? "text-white" : "text-[#7E7F81]"
							)}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
			<Minus className="rotate-90 h-[0.5px] bg-[#1D1D1D]" />
			<div className="relative">
				<Search className="stroke-[#7E7F81] stroke-[0.5px] absolute top-2.5 left-4 size-4" />
				<Input
					className={cn(
						"bg-[#1D1D1D] pl-11 border-[#1D1D1D] placeholder:text-[#7E7F81]",
						"lg:h-[37px] lg:w-[680px]"
					)}
					placeholder="Search for specific components, sections, wireframes, and more..."
				/>
			</div>
			<Minus className="rotate-90 h-[0.5px] bg-[#1D1D1D]" />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="size-9 flex items-center justify-center rounded-[6px] border-[0.5px] border-[#1D1D1D] bg-[#121212]">
						<User />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="text-center">
					<DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>
							<BtnLogout />
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	);
}
