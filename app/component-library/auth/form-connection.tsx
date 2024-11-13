"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { signIn, useSession } from "next-auth/react";

export default function FormConnection() {
	const { data: session } = useSession();
	const mutation = useMutation({
		mutationFn: async () => signIn(),
	});

	const handleEmailSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		const email = (e.target as HTMLFormElement).email.value;
		await signIn("email", {
			email,
			callbackUrl: session
				? `/dashboard/${session.user.id}`
				: "/component-library/auth/connexion",
		});
	};

	return (
		<section className="w-3/4">
			<form
				onSubmit={handleEmailSignIn}
				className="flex flex-col items-center justify-center gap-4">
				<div className="w-full flex flex-col gap-2">
					<label
						htmlFor="email"
						className="bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Email
					</label>
					<Input type="email" name="email" className="bg-white" required />
				</div>
				<div className="w-full flex flex-col gap-2">
					<label
						htmlFor="password"
						className="bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Mot de passe
					</label>
					<Input
						type="password"
						name="password"
						className="bg-white"
						required
					/>
				</div>
				<div className="w-full mt-4">
					<Button
						type="submit"
						className="w-full rounded-lg bg-gradient-to-b from-[#292929] to-[#0C0C0C] font-medium drop-shadow-custom-btn-pricing">
						Se connecter
					</Button>
				</div>
			</form>
		</section>
	);
}
