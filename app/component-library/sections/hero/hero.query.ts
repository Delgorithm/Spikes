import prisma from "@/lib/prisma";

export const getHeroSections = async () => {
	return await prisma.content.findMany({
		select: {
			id: true,
			title: true,
			image: true,
			date: true,
		},
	});
};
