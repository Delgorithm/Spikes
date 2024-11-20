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

const formSchema = z.object({
	email: z.string().email("L'adresse mail doit être valide."),
	password: z
		.string()
		.min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

export default function FormConnection() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const mutation = useMutation({
		mutationFn: async (data: z.infer<typeof formSchema>) => {
			const response = await fetch("/api/auth/login", {
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
			console.log("Connexion réussie", data);
			alert("Connexion réussie !");
			router.push("/component-library/dashboard/${data.user.id}/library");
		},
		onError: (error: Error) => {
			console.error("Erreur:", error.message);
			alert(error.message);
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		mutation.mutate(values);
	}

	return (
		<Form
			form={form}
			onSubmit={onSubmit}
			className="flex flex-col items-center justify-center gap-6 w-3/4">
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input
								type="email"
								placeholder="abc@mail.com"
								{...field}
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
						<FormLabel>Mot de passe</FormLabel>
						<FormControl>
							<Input
								type="password"
								placeholder="********"
								{...field}
								required
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<Button type="submit" className="w-full">
				Se connecter
			</Button>
		</Form>
	);
}
