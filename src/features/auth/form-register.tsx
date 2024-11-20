"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormError from "@/components/component-library/form/form-error";
import FormSuccess from "@/components/component-library/form/form-success";

const formSchema = z
	.object({
		email: z.string().email("L'adresse mail doit être valide."),
		password: z
			.string()
			.min(8, "Le mot de passe doit contenir au moins 8 caractères"),
		confirmPassword: z
			.string()
			.min(8, "Le mot de passe doit contenir au moins 8 caractères"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Les mots de passe doivent correspondre.",
		path: ["confirmPassword"],
	});
export default function FormConnection() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const mutation = useMutation({
		mutationFn: async (data: z.infer<typeof formSchema>) => {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Une erreur est survenue");
			}

			return response.json();
		},
		onSuccess: (data) => {
			setError(null);
			setSuccess("Connexion réussie");
			router.push("/component-library/auth/connexion");
		},
		onError: (error: Error) => {
			setSuccess(null);
			setError(error.message);
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		mutation.mutate(values);
	}

	return (
		<Form
			form={form}
			onSubmit={onSubmit}
			className="flex flex-col items-center justify-center gap-6 w-3/4 ">
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel className="bg-gradient-to-bl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Email
						</FormLabel>
						<FormControl>
							<Input
								placeholder="abc@mail.com"
								type="email"
								{...field}
								className="bg-white focus:bg-white"
								required
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel className="bg-gradient-to-bl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Mot de passe
						</FormLabel>
						<FormControl>
							<Input
								placeholder="********"
								type="password"
								{...field}
								className="bg-white focus:bg-white"
								required
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="confirmPassword"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel className="bg-gradient-to-bl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
							Confirmation du mot de passe
						</FormLabel>
						<FormControl>
							<Input
								placeholder="********"
								type="password"
								{...field}
								className="bg-white"
								required
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormError message={error ?? undefined} />
			<FormSuccess message={success ?? undefined} />
			<Button type="submit" className="w-full">
				S'enregistrer
			</Button>
		</Form>
	);
}
