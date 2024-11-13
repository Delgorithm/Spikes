"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Image from "next/image";

type BtnAuthProps = {
	source: string;
	alt: string;
	name: string;
	provider: string;
};

export default function BtnAuth({ source, alt, name, provider }: BtnAuthProps) {
	const signInMutation = useMutation({
		mutationFn: async () => {
			await signIn(provider, {
				callbackUrl: "http://localhost:3000/component-library/accueil",
			});
		},
	});

	const handleSignIn = () => {
		signInMutation.mutate();
	};

	return (
		<Button
			className="flex items-center gap-2 px-3 py-2 bg-white"
			onClick={handleSignIn}>
			<div className="relative w-6 h-6">
				<Image
					src={`/images/component-library/${source}`}
					alt={alt}
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<p className="text-sm font-medium bg-gradient-to-tl from-[#1b1b1b] to-[#707070] bg-clip-text text-transparent">
				{name}
			</p>
		</Button>
	);
}
