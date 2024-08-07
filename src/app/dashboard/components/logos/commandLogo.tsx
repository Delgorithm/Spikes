import { Command } from "lucide-react";

interface CommandLogoProps {
	className: string;
}

export default function CommandLogo({ className }: CommandLogoProps) {
	return <Command className={className} />;
}
