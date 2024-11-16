import Image from "next/image";
import { Button } from "./button";

type BtnCopyPreviewProps = {
	source: string;
	alt: string;
	name: string;
};

export default function BtnCopyPreview({
	source,
	alt,
	name,
}: BtnCopyPreviewProps) {
	return (
		<Button className="flex items-center gap-2 py-6 w-full bg-[#1B1B1B] border-[0.5px] border-[#292929]">
			<div className="relative w-6 h-6">
				<Image
					src={`/images/${source}`}
					alt={alt}
					width={20}
					height={20}
					className="translate-y-0.5"
				/>
			</div>
			<p className="text-xs font-light">{name}</p>
		</Button>
	);
}
