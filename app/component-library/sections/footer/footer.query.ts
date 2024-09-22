import prisma from "@/lib/prisma";

export const getFooterSection = async () => {
	try {
		const data = await prisma.content.findMany({
			select: {
				id: true,
				title: true,
				image: true,
				date: true,
			},
		});
		return data;
	} catch (error) {
		throw error;
	}
};
