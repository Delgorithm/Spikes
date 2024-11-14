"use client";

import { useSession } from "next-auth/react";

export default function DashboardUserPage() {
	const { data: session, status } = useSession();
	console.log(session);
	return (
		<section>
			<p>Salut {session?.user.name}</p>
		</section>
	);
}
