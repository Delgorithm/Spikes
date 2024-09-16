import { Button } from "@/components/ui/button";
import {
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { getRequiredAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
	object: z.string().min(1).max(40),
	company: z.string().min(1).max(30),
	statue: z.string(),
	amount: z.string(),
	userId: z.string(),
});

export default async function FormNewDeal() {
	const session = await getRequiredAuthSession();

	return (
		<form
			action={async (formData) => {
				"use server";

				const userSession = await getRequiredAuthSession();

				const object = formData.get("object");
				const company = formData.get("company");
				const statue = formData.get("statue");
				const amount = formData.get("amount");

				const safeData = FormSchema.safeParse({
					object,
					company,
					statue,
					amount,
				});

				if (!safeData.success) {
					console.log("Error somewhere");
					return;
				}

				await prisma.deals.create({
					data: safeData.data,
				});

				console.log("nice");
				revalidatePath("/dashboard/deals/alldeals");
			}}>
			<DialogHeader>
				<DialogTitle>New Deal</DialogTitle>
				<DialogDescription>Add a new deal to your CRM</DialogDescription>
			</DialogHeader>
			<div className="grid gap-4 py-4">
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="object" className="text-right">
						Object
					</Label>
					<Input
						id="object"
						name="object"
						placeholder="Mobile App..."
						className="col-span-3"
					/>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="company" className="text-right">
						Company
					</Label>
					<Input
						id="company"
						name="company"
						placeholder="Stripe Inc..."
						className="col-span-3"
					/>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="statue" className="text-right">
						Statue
					</Label>
					<Select name="statue">
						<SelectTrigger id="statue" className="col-span-3"></SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="completed" id="completed">
									Completed
								</SelectItem>
								<SelectItem value="ongoing" id="ongoing">
									Ongoing
								</SelectItem>
								<SelectItem value="pending" id="pending">
									Pending
								</SelectItem>
								<SelectItem
									value="waiting-for-confirmation"
									id="waiting-for-confirmation">
									Waiting for Confirmation
								</SelectItem>
								<SelectItem value="cancelled" id="cancelled">
									Cancelled
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="amount" className="text-right">
						Amount
					</Label>
					<Input
						id="amount"
						name="amount"
						placeholder="2.500 $USD..."
						className="col-span-3"
					/>
				</div>
			</div>
			<DialogFooter>
				<Button type="submit">Save changes</Button>
			</DialogFooter>
		</form>
	);
}
