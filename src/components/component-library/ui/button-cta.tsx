import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ButtonCTAProps = {
	text: string;
	className?: string;
};

export default function ButtonCTA({ text, className }: ButtonCTAProps) {
	return (
		<Button
			className={cn(
				"font-medium bg-gradient-to-b from-[#FF8517] to-[#FF3206] active:opacity-50",
				className
			)}>
			{text}
		</Button>
	);
}
