import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getDeals = async ({
	userId,
	search = "",
	object = "",
	company = "",
	status = "",
}: {
	userId?: string;
	search?: string;
	object?: string;
	company?: string;
	status?: string;
} = {}) => {
	// Ajout du `= {}` ici pour définir une valeur par défaut
	return await prisma.deals.findMany({
		where: {
			AND: [
				userId ? { userId: userId } : {},
				object ? { object: { contains: object, mode: "insensitive" } } : {},
				company ? { company: { contains: company, mode: "insensitive" } } : {},
				status ? { statue: { equals: status, mode: "insensitive" } } : {},
				search
					? {
							OR: [
								{ object: { contains: search, mode: "insensitive" } },
								{ company: { contains: search, mode: "insensitive" } },
								{ statue: { contains: search, mode: "insensitive" } },
								{ amount: { contains: search, mode: "insensitive" } },
							],
					  }
					: {},
			],
		},
		select: {
			id: true,
			object: true,
			company: true,
			statue: true,
			amount: true,
			date: true,
		},
	});
};

export type DealsCard = Prisma.PromiseReturnType<typeof getDeals>[number];
