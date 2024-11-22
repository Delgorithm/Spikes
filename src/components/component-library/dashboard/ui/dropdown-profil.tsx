"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BtnLogout from "@/features/auth/btn-logout";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DropdownProfilProps = {
	handleOpen?: () => void;
};

export default function DropdownProfil({ handleOpen }: DropdownProfilProps) {
	const { data: session } = useSession();
	const pathname = usePathname();

	const isOnDashboard = pathname?.startsWith(
		`/component-library/dashboard/${session?.user?.id}`
	);

	const dynamicLink = isOnDashboard
		? "/component-library"
		: `/component-library/dashboard/${session?.user?.id}`;

	const dynamicText = isOnDashboard ? "Accueil" : "Dashboard";

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="relative">
				<div
					className={cn(
						"size-9 flex items-center justify-center rounded-[6px] border-[0.5px] border-[#1D1D1D] bg-[#121212]",
						"watch-sm:w-full"
					)}>
					{session?.user.image ? (
						<Image
							src={session?.user.image}
							width={100}
							height={100}
							alt="user's image"
							className={cn(
								"rounded-sm cursor-pointer",
								"watch-sm:size-8 md:size-[35px]"
							)}
						/>
					) : (
						<div className="p-2 border-[#7E7F81] cursor-pointer">
							<User />
						</div>
					)}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className={cn(
					"text-center absolute bg-[#27272a] border-[0.5px] border-[#1D1D1D] shadow-md",
					"watch-sm:-top-24 watch-sm:-right-[104px]",
					"md:-top-16 md:right-10"
				)}>
				<div className="m-2 border-[1px] border-dashed border-[#7E7F81] rounded-md text-white">
					<DropdownMenuLabel className="border-b-[1px] border-dashed border-[#7E7F81] ">
						{session?.user.name ? (
							<p>{session?.user.name}</p>
						) : (
							<p>Utilisateur</p>
						)}
					</DropdownMenuLabel>
					<DropdownMenuGroup className="flex flex-col items-center gap-3 mx-3 my-2">
						<DropdownMenuItem className="w-full flex justify-center">
							<Link href={dynamicLink} className="w-full" onClick={handleOpen}>
								{dynamicText}
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<BtnLogout />
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
