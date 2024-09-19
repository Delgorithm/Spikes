import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { AuthButton } from "@/features/auth/AuthButton";
import { getAuthSession } from "@/lib/auth";
import { Download, FolderPlus } from "lucide-react";
import DealForm from "../Forms/DealForm";
import SelectsAllDeals from "./selectsAllDeals";

export default async function SelectionsAllDeals() {
	const session = await getAuthSession();

	return (
		<section className="flex items-center justify-between">
			<SelectsAllDeals />
			<div className="flex items-center gap-4">
				<Button variant="outline" className="flex items-center gap-2">
					<Download className="size-5" />
					Export
				</Button>
				<Dialog>
					<DialogTrigger asChild>
						<Button className="flex items-center gap-2">
							<FolderPlus className="size-5" />
							New Deal
						</Button>
					</DialogTrigger>
					<DialogContent>
						{!session ? (
							<>
								<DialogHeader>You have to be connected</DialogHeader>
								<DialogDescription>
									In order to add a new deal you must be connected to your
									account
								</DialogDescription>
								<AuthButton />
							</>
						) : (
							<DealForm />
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
}
