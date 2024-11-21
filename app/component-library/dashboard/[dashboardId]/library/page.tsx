import { cn } from "@/lib/utils";

export default function LibraryPage() {
	return (
		<section className="watch-sm:p-8 md:p-16 flex flex-col gap-10">
			<section
				className={cn(
					"grid gap-8",
					"watch-sm:grid-cols-1 lg:grid-cols-2",
					"watch-sm:grid-rows-2 lg:grid-rows-1",
					"xl:h-[388px] xl:w-[1096]"
				)}>
				<div className="flex flex-col gap-6">
					<h1 className="text-5xl bg-gradient-to-tl from-[#FF8517] to-[#FF3206] bg-clip-text text-transparent">
						Welcome to the library
					</h1>
					<p className="text-white text-pretty">
						Paste is a meticulously crafted component library designed to
						empower users with pixel-perfect, highly customizable UI components.
						It enables developers and designers to build seamless, professional
						interfaces with ease, thanks to its robust design system and
						consistent styling. Each component in Paste is optimized for
						responsiveness and accessibility, ensuring a top-tier user
						experience. Whether you're creating simple layouts or complex
						applications, Paste provides the tools to achieve flawless design
						precision effortlessly.
					</p>
				</div>
			</section>
		</section>
	);
}
