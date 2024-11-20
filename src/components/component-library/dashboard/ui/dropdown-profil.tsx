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
import Link from "next/link";

export default function DropdownProfil() {
	const { data: session } = useSession();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div
					className={cn(
						"size-9 flex items-center justify-center rounded-[6px] border-[0.5px] border-[#1D1D1D] bg-[#121212]",
						"watch-sm:w-full"
					)}>
					<User />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="text-center">
				<DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup className="flex flex-col items-center gap-2 mx-3">
					<DropdownMenuItem className="w-full flex justify-center">
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem className="w-full flex justify-center">
						<Link href="/component-library">Accueil</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BtnLogout />
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
