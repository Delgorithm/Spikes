"use server";

import { authenticatedAction } from "@/lib/action";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { DealFormSchema } from "./deal.schema";

const DealActionEditProps = z.object({
	dealId: z.string(),
	data: DealFormSchema,
});

export const dealActionEdit = authenticatedAction
	.schema(DealActionEditProps)
	.action(async ({ parsedInput, ctx }) => {
		const { dealId, data } = parsedInput;
		const { userId } = ctx;

		if (!userId) {
			throw new Error("User ID is required");
		}

		const deal = await prisma.deals.update({
			where: {
				id: dealId,
				userId,
			},
			data: data,
		});

		return {
			message: "Deal updated successfully",
			deal,
		};
	});

export const dealActionCreate = authenticatedAction
	.schema(DealFormSchema)
	.action(async ({ parsedInput, ctx }) => {
		const userId = ctx.userId;

		if (!userId) {
			throw new Error("User ID is required");
		}

		const deal = await prisma.deals.create({
			data: {
				...parsedInput,
				creatorId: userId,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});

		return {
			message: "Deal created successfully",
			deal,
		};
	});
