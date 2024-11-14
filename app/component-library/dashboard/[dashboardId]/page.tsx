"use client";

import { useSession } from "next-auth/react";

export default function DashboardUserPage() {
	const { data: session, status } = useSession();
	return (
		<section>
			<p>Salut {session?.user.name}</p>
		</section>
	);
}
