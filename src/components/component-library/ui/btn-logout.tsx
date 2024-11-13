import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export default function BtnLogout() {
	const mutation = useMutation({
		mutationFn: async () => signOut(),
	});

	return (
		<Button
			className=""
			disabled={mutation.isPending}
			onClick={() => {
				mutation.mutate();
			}}>
			Se déconnecter
		</Button>
	);
}
