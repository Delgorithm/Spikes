import { cn } from "@/lib/utils";
import Link from "next/link";

export type ButtonCTAProps = {
	text: string;
	className?: string;
};

export default function ButtonCTA({ text, className }: ButtonCTAProps) {
	return (
		<Link
			href="/component-library/auth/connexion"
			className={cn(
				"text-white",
				"h-9 px-4 py-2",
				"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
				"font-medium bg-gradient-to-b from-[#FF8517] to-[#FF3206] active:opacity-50",
				className
			)}>
			{text}
		</Link>
	);
}
