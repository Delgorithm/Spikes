import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getDeals = async (userId?: string) => {
	return await prisma.deals.findMany({
		where: userId
			? {
					userId: userId,
			  }
			: undefined,
		select: {
			id: true,
			object: true,
			company: true,
			companyimg: true,
			statue: true,
			amount: true,
			date: true,
		},
	});
};

export const getDealsByStatus = async (status: string, userId?: string) => {
	return await prisma.deals.findMany({
		where: {
			statue: status,
			userId: userId ? userId : undefined,
		},
		select: {
			id: true,
			object: true,
			company: true,
			companyimg: true,
			statue: true,
			amount: true,
			date: true,
		},
	});
};

export type DealsCard = Prisma.PromiseReturnType<typeof getDeals>[number];
