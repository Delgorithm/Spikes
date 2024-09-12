"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { z } from "zod";

export const paymentSchema = {
	id: z.string(),
	amount: z.number(),
	status: z.enum([
		"completed",
		"pending",
		"ongoing",
		"cancelled",
		"waiting-for-confirmation",
	]),
	date: z.string(),
};

export type Payment = z.infer<typeof paymentSchema>;

const companyImageMap = {
	"Stripe Inc": "stripe-logo.svg",
	Amazon: "amazon-logo.svg",
	Google: "google-logo.svg",
	"Adobe LLC.": "adobe-logo.svg",
	"The Browser Company": "arc-logo.svg",
	Figma: "figma-logo.svg",
	"Github Corp.": "github-logo.svg",
	Opensea: "opensea-logo.svg",
	"Slack Inc.": "slack-logo.svg",
	Steam: "steam-logo.svg",
};

const statueImageMap = {
	Pending: "pending-logo.svg",
	Cancelled: "cancelled-logo.svg",
	Ongoing: "ongoing-logo.svg",
	Completed: "completed-logo.svg",
	"Waiting for Confirmation": "waiting-logo.svg",
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "add",
		header: ({ table }) => (
			<div className="flex items-center font-bold">
				<Checkbox
					checked={table.getIsAllRowsSelected()}
					onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
					aria-label="Select all"
				/>
				<span className="ml-2">Add</span>
				<ArrowDown className="size-5" />
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-2">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected()}
				/>
				<span>{row.original.date}</span>
			</div>
		),
	},
	{
		accessorKey: "object",
		header: "Object",
	},
	{
		accessorKey: "company",
		header: "Company",
		cell: ({ row }) => {
			const imageName = companyImageMap[row.original.company] || null;
			return (
				<div className="flex items-center gap-2">
					<Image
						src={`/dashboard-img/${imageName}`}
						alt={row.original.company}
						width={24}
						height={24}
						className="size-5"
					/>
					<span>{row.original.company}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "statue",
		header: "Statue",
		cell: ({ row }) => {
			const imageName = statueImageMap[row.original.statue] || null;
			return (
				<div className="flex items-center gap-2 my-2">
					<Image
						src={`/dashboard-img/${imageName}`}
						alt={row.original.statue}
						width={1}
						height={1}
						className="size-[5px]"
					/>
					<span>{row.original.statue}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "amount",
		header: "Amount",
	},
];
