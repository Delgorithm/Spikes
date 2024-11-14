"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BtnLogout() {
	const router = useRouter();

	const mutation = useMutation({
		mutationFn: async () => {
			await signOut({ redirect: false });
		},
		onSuccess: () => {
			router.push("/component-library/accueil");
		},
		onError: (error) => {
			console.error("Erreur lors de la déconnexion :", error);
		},
	});

	return (
		<Button
			className=""
			disabled={mutation.isPending}
			onClick={() => {
				mutation.mutate();
			}}>
			{mutation.isPending ? "Déconnexion..." : "Se déconnecter"}
		</Button>
	);
}
