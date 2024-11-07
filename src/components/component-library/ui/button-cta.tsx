import { Button } from "@/components/ui/button";

export type TextProps = {
	text: string;
};

export default function ButtonCTA({ text }: TextProps) {
	return (
		<Button className="font-medium bg-gradient-to-b from-[#FF8517] to-[#FF3206]">
			{text}
		</Button>
	);
}
