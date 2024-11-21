import prisma from "@/lib/prisma";
import { hashPassword } from "@/utils/hashPassword";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Méthode non autorisée" });
	}

	const { email, password } = req.body;

	try {
		const existingUser = await prisma.user.findUnique({ where: { email } });
		if (existingUser) {
			return res.status(400).json({ message: "L'utilisateur existe déjà" });
		}

		const hashedPassword = await hashPassword(password);

		const newUser = await prisma.user.create({
			data: {
				email,
				hashedPassword,
			},
		});

		return res
			.status(201)
			.json({ message: "Utilisateur créer avec succès", user: newUser });
	} catch (error) {
		console.error("Erreur lors de la création de l'utilisatuer: ", error);
		return res.status(500).json({ message: "Erreur interne du serveur" });
	}
}
