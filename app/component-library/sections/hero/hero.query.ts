import prisma from "@/lib/prisma";

export const getHeroSections = async () => {
	try {
		const data = await prisma.content.findMany({
			select: {
				id: true,
				title: true,
				image: true,
				date: true,
			},
		});
		console.log("Fetched hero sections:", data);
		return data;
	} catch (error) {
		console.error("Error fetching hero sections:", error);
		throw error;
	}
};
