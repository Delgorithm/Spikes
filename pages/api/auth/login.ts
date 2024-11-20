import prisma from "@/lib/prisma";
import { comparePasswords } from "@/utils/hashPassword";
import { signJwt } from "@/utils/jwt";
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
		const user = await prisma.user.findUnique({ where: { email } });

		if (!user || !user.hashedPassword) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const isPasswordValid = await comparePasswords(
			password,
			user.hashedPassword
		);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const token = signJwt({ userId: user.id, email: user.email });

		return res.status(200).json({
			message: "Login successful",
			token,
			user: {
				id: user.id,
				email: user.email,
			},
		});
	} catch (error) {
		console.error("Error during login: ", error);
		return res.status(500).json({ message: "Internal server error " });
	}
}
