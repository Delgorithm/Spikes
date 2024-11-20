import prisma from "@/lib/prisma";
import { hashPassword } from "@/utils/hashPassword";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { email, password } = req.body;

	try {
		const existingUser = await prisma.user.findUnique({ where: { email } });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
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
			.json({ message: "User created successfully", user: newUser });
	} catch (error) {
		console.error("Error creating user: ", error);
		return res.status(500).json({ message: "Internal server error " });
	}
}
