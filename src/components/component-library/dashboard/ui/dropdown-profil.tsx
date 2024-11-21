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
import BtnLogout from "@/features/auth/btn-logout";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function DropdownProfil() {
	const { data: session } = useSession();
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
							width={45}
							height={45}
							alt="user's image"
							className="rounded-sm cursor-pointer"
						/>
					) : (
						<User />
					)}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="text-center absolute -top-16 right-10 bg-[#27272a] border-[0.5px] border-[#1D1D1D] shadow-md ">
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
							<Link href="/component-library">Accueil</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="w-full flex justify-center">
							Profile
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
