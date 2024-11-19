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
import FormError from "@/components/component-library/form/form-error";
import FormSuccess from "@/components/component-library/form/form-success";

// Définition du schéma de validation
const formSchema = z.object({
	email: z.string().email("L'adresse mail doit être valide."),
	password: z
		.string()
		.min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

export default function FormConnection() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
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
								className="bg-white"
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
								className="bg-white"
								required
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormError message="" />
			<FormSuccess message="Yey" />
			<Button type="submit" className="w-full">
				Se connecter
			</Button>
		</Form>
	);
}
