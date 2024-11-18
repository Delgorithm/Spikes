import BtnCopyPreview from "@/components/ui/btn-copy-preview";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Bookmark } from "lucide-react";

export default function BookmarksPage() {
	const gridItems = [
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
		{
			title: "Bookmarks section",
			subtitle: "Pro",
			date: "- Added 28th of Feb 2024",
			icon: <Bookmark />,
		},
	];

	return (
		<section className="p-8 flex flex-col gap-10">
			<section
				className={cn(
					"grid gap-8",
					"watch-sm:grid-cols-1 lg:grid-cols-2",
					"watch-sm:grid-rows-2 lg:grid-rows-1",
					"xl:h-[388px] xl:w-[1096]"
				)}>
				<article className="flex flex-col justify-between">
					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-4">
							<h1 className="text-[26px] text-white">Bookmarks Section</h1>
							<span className="bg-gradient-to-t from-[#FF2900] to-[#FF7A00] bg-clip-text text-transparent text-center">
								Pro
							</span>
						</div>
						<p className="text-pretty text-[#7E7F81] font-thin">
							Detailed header section with heading and graphic/image centred and
							feature cards on either side.
						</p>
					</div>
					<div className={cn("flex flex-col gap-4", "watch-sm:mt-10 lg:mt-0")}>
						<div className={cn("flex gap-4", "watch-sm:flex-col md:flex-row")}>
							<BtnCopyPreview
								source="webflow-logo.svg"
								alt="Webflow's logo"
								name="Copy to webflow"
							/>
							<BtnCopyPreview
								source="figma-logo.svg"
								alt="Figma's logo"
								name="Copy to Figma"
							/>
						</div>
						<BtnCopyPreview
							source="eye.svg"
							alt="Webflow's logo"
							name="Live Preview"
						/>
					</div>
				</article>
				<div className="bg-[#1B1B1B] border-[0.5px] border-[#292929] rounded-xl"></div>
			</section>
			<Separator />
			<section className="flex flex-col gap-10">
				<h2 className="text-white text-[26px]">
					Other sections you might like
				</h2>
				<section
					className={cn("grid gap-6", "watch-sm:grid-cols-1 lg:grid-cols-3")}>
					{gridItems.map((item, index) => (
						<article key={index} className="flex flex-col gap-2">
							<div className="bg-[#1B1B1B] border-[0.5px] border-[#292929] rounded-xl h-[217px]"></div>
							<div className="flex items-center gap-2">
								<p className="text-white">{item.title}</p>
								<span className="text-xs bg-gradient-to-t from-[#FF2900] to-[#FF7A00] bg-clip-text text-transparent text-center">
									{item.subtitle}
								</span>
							</div>
							<p className="text-sm font-thin text-[#7E7F81]">{item.date}</p>
						</article>
					))}
				</section>
			</section>
		</section>
	);
}
