"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BtnGoBack() {
	const router = useRouter();

	return (
		<button type="button" onClick={() => router.back()}>
			<ArrowLeft className="w-10" />
		</button>
	);
}
