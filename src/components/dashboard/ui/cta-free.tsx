import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CTAFree() {
	return (
		<Link
			href=""
			className={cn(
				"flex items-center gap-2 py-1.5 px-4 rounded-lg bg-[#F5F7F9]",
				"hover:opacity-65 active:translate-y-0.5 transition-all ease-in-out"
			)}>
			<Image
				src="/dashboard/icons/deals_logo.svg"
				height="0"
				width="0"
				sizes="50vw"
				style={{ width: "auto", height: "auto" }}
				alt="MyIDeals' logo"
			/>
			J'essaye gratuitement
		</Link>
	);
}
