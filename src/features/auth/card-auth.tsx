import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Image from "next/image";
import BtnLogout from "./btn-logout";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);

	return {
		props: { session },
	};
};

type CardAuthProps = {
	session: Session | null;
};

export default function CardAuth({ session }: CardAuthProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>
					{session ? (
						<Image
							src={session.user?.image || ""}
							alt={session.user?.name || "Avatar"}
							width={30}
							height={30}
							className="rounded-full"
						/>
					) : (
						""
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel className="text-center">
					{session?.user.name}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link href={`/component-library/dashboard/${session?.user.id}`}>
							Dashboard
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<BtnLogout />
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
