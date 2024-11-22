import { z } from "zod";

export const emailSchema = z.object({
	name: z.string().min(1, "Le nom est obligatoire"),
	email: z.string().email("L'email doit être valide"),
	message: z.string().min(20, "Le message doit contenir au minimum 1 phrase"),
});
