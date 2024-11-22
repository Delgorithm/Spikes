import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Méthode non autorisée" });
	}

	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		return res
			.status(400)
			.json({ message: "Tous les champs doivent être remplis" });
	}

	try {
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_RECEIVER,
			subject: `Message de ${name}`,
			text: `Voici le message de ${name} : (${email}):\n\n ${message}`,
		};

		await transporter.sendMail(mailOptions);

		return res.status(200).json({ message: "Email envoyé avec succès" });
	} catch (error) {
		console.error("Erreur lors de l'envoi du mail", error);
		return res.status(500).json({ message: "Erreur interne" });
	}
}
