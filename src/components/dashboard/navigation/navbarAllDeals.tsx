"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarAllDeals() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="flex items-center gap-8">
				<li
					className={
						pathname === `/dashboard/deals/alldeals`
							? "border-b-[0.5px] border-neutral-700 text-neutral-700"
							: "text-neutral-300 border-b-[0.5px]"
					}>
					<Link href="/dashboard/deals/alldeals">All deals</Link>
				</li>
				<li
					className={
						pathname === `/dashboard/deals/completed`
							? "border-b-[0.5px] border-neutral-700 text-neutral-700"
							: "text-neutral-300 border-b-[0.5px]"
					}>
					<Link href="/dashboard/deals/completed">Completed</Link>
				</li>
				<li
					className={
						pathname === `/dashboard/deals/pending`
							? "border-b-[0.5px] border-neutral-700 text-neutral-700"
							: "text-neutral-300 border-b-[0.5px]"
					}>
					<Link href="/dashboard/deals/pending">Pending</Link>
				</li>
				<li
					className={
						pathname === `/dashboard/deals/ongoing`
							? "border-b-[0.5px] border-neutral-700 text-neutral-700"
							: "text-neutral-300 border-b-[0.5px]"
					}>
					<Link href="/dashboard/deals/ongoing">Ongoing</Link>
				</li>
				<li
					className={
						pathname === `/dashboard/deals/waiting`
							? "border-b-[0.5px] border-neutral-700 text-neutral-700"
							: "text-neutral-300 border-b-[0.5px]"
					}>
					<Link href="/dashboard/deals/waiting">Waiting for Confirmation</Link>
				</li>
			</ul>
		</nav>
	);
}
