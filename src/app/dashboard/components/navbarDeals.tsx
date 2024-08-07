"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarDeals() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="flex gap-4 items-center">
				<li
					className={
						pathname === "/dashboard/deals"
							? "text-black underline"
							: "text-black/20"
					}>
					<Link href="/dashboard/deals/" className="flex items-center gap-2">
						All Deals
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/deals/completed"
							? "text-black underline"
							: "text-black/20"
					}>
					<Link
						href="/dashboard/deals/completed"
						className="flex items-center gap-2">
						Completed
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/deals/pending"
							? "text-black underline"
							: "text-black/20"
					}>
					<Link
						href="/dashboard/deals/pending"
						className="flex items-center gap-2">
						Pending
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/deals/ongoing"
							? "text-black underline"
							: "text-black/20"
					}>
					<Link
						href="/dashboard/deals/ongoing"
						className="flex items-center gap-2">
						Ongoing
					</Link>
				</li>
				<li
					className={
						pathname === "/dashboard/deals/confirmation"
							? "text-black underline"
							: "text-black/20"
					}>
					<Link
						href="/dashboard/deals/confirmation"
						className="flex items-center gap-2">
						Waiting for Confirmation
					</Link>
				</li>
			</ul>
		</nav>
	);
}
