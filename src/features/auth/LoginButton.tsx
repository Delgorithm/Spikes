"use client";

import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export type LoggedInButton = {
	user: Session["user"];
};

export const LoggedInButton = (props: LoggedInButton) => {
	const mutation = useMutation({
		mutationFn: async () => signOut(),
	});

	return (
		<DropdownMenu>
			<AlertDialog>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="sm">
						<Avatar className="mr-2 h-6 w-6">
							<AvatarFallback>{props.user?.name?.[0]}</AvatarFallback>
							{props.user.image && (
								<AvatarImage
									src={props.user.image}
									alt={props.user.name ?? "user picture"}
								/>
							)}
						</Avatar>
						{props.user.name}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<AlertDialogTrigger asChild>
						<Button
							className="w-full"
							disabled={mutation.isPending}
							onClick={() => {
								mutation.mutate();
							}}>
							{mutation.isPending ? (
								<Loader className="mr-2" size={12} />
							) : (
								<LogOut className="mr-2" size={12} />
							)}
							Logout
						</Button>
					</AlertDialogTrigger>
				</DropdownMenuContent>
			</AlertDialog>
		</DropdownMenu>
	);
};
