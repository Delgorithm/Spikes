import { z } from "zod";

export const DealFormSchema = z.object({
	object: z.string().min(3).max(40),
	company: z.string(),
	statue: z.enum([
		"completed",
		"ongoing",
		"pending",
		"waiting-for-confirmation",
		"cancelled",
	]),
	amount: z.string(),
});

export type DealFormSchema = z.infer<typeof DealFormSchema>;
