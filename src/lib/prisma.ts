// import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {
// 	return new PrismaClient({
// 		datasources: {
// 			db: {
// 				url: process.env.DATABASE_URL,
// 			},
// 		},
// 	});
// };

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// const globalForPrisma = globalThis as unknown as {
// 	prisma: PrismaClientSingleton | undefined;
// };

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "@prisma/client";

console.log(
	"Initializing Prisma Client with DATABASE_URL:",
	process.env.DATABASE_URL
);

const prismaClientSingleton = () => {
	try {
		return new PrismaClient({
			datasources: {
				db: {
					url: process.env.DATABASE_URL,
				},
			},
		});
	} catch (error) {
		console.error("Error initializing Prisma Client:", error);
		throw error; // Rejeter l'erreur pour qu'elle soit détectée dans les logs
	}
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
