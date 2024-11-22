"use client";

import { emailSchema } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FormError from "@/components/component-library/form/form-error";
import FormSuccess from "@/components/component-library/form/form-success";
import { useState } from "react";

type FormValues = z.infer<typeof emailSchema>;

export default function FormSendEmail() {
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const form = useForm<FormValues>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const clearMesages = () => {
		setTimeout(() => {
			setError(null), setSuccess(null);
		}, 5000);
	};

	const mutation = useMutation({
		mutationFn: async (data: FormValues) => {
			const response = await fetch("/api/email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message || "Failed to send email");
			}

			return response.json();
		},
		onSuccess: () => {
			setError(null);
			setSuccess("Votre email a été envoyé avec succès !");
			form.reset();
			clearMesages();
		},
		onError: (error: Error) => {
			setSuccess(null);
			setError(error.message);
			clearMesages();
		},
	});

	const onSubmit = (values: FormValues) => {
		mutation.mutate(values);
	};

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className={cn(
				"flex flex-col gap-6",
				"watch-sm:items-center xl:items-start",
				"watch-sm:w-max watch-sm:px-4 xl:w-[1004px]"
			)}>
			<h2 className="text-xl bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
				Nous contacter
			</h2>

			<div
				className={cn(
					"flex justify-between items-center xl:w-full",
					"watch-sm:flex-col watch-sm:gap-[20px] xl:flex-row xl:gap-0"
				)}>
				<div className="flex flex-col gap-2">
					<label htmlFor="name" className="text-sm font-medium">
						Nom
					</label>
					<Input
						id="name"
						placeholder="John Doe"
						{...form.register("name")}
						className={cn(
							"text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] bg-[#1B1B1B]",
							"h-[45px] xl:w-[370px]",
							"watch-sm:w-72"
						)}
					/>
					<p className="text-red-500 text-xs translate-y-2">
						{form.formState.errors.name?.message}
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="text-sm font-medium">
						Email
					</label>
					<Input
						id="email"
						type="email"
						placeholder="abc@mail.fr"
						{...form.register("email")}
						className={cn(
							"text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] bg-[#1B1B1B]",
							"h-[45px] xl:w-[370px]",
							"watch-sm:w-72"
						)}
					/>
					<p className="text-red-500 text-xs translate-y-2">
						{form.formState.errors.email?.message}
					</p>
				</div>
			</div>

			<div className="xl:w-full">
				<label htmlFor="message" className="hidden text-sm font-medium">
					Message
				</label>
				<Textarea
					id="message"
					placeholder="Un message à nous faire parvenir ?"
					{...form.register("message")}
					className={cn(
						"text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] p-6 bg-[#1B1B1B] h-[200px]",
						"watch-sm:w-72 xl:w-full"
					)}
				/>
				<p className="text-red-500 text-xs translate-y-2">
					{form.formState.errors.message?.message}
				</p>
			</div>
			<div className="flex watch-sm:flex-col xl:flex-row items-center gap-6">
				<Button
					type="submit"
					className={cn(
						"border-[0.5px] border-[#7E7F81]",
						"watch-sm:w-72 xl:w-44"
					)}>
					Envoyer
				</Button>
				<FormError message={error ?? undefined} />
				<FormSuccess message={success ?? undefined} />
			</div>
		</form>
	);
}
