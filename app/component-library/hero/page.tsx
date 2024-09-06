import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function HeroPage() {
	return (
		<section className="px-6 py-8 grid grid-cols-1 grid-rows-2 gap-10">
			<section className="grid grid-cols-2 gap-5 h-96">
				<section className="flex flex-col justify-between">
					<section>
						<div className="flex gap-2 mb-5">
							<h2 className="text-white text-2xl relative">Hero Section </h2>
							<span className="inline-block text-sm text-transparent bg-clip-text ml-1 bg-gradient-to-t from-[#FF7A00] to-[#FF2900]">
								Pro
							</span>
						</div>
						<small>
							Detailed header section with heading and graphig/image centred and
							feature <br /> cards on either side.
						</small>
					</section>

					<section className="grid grid-cols-2 grid-rows-2 gap-4">
						<Button className="row-start-2 flex justify-center items-center gap-3 py-6 rounded-md bg-[#292929] font-light">
							<Image
								src="/images/webflow-logo.svg"
								width={20}
								height={20}
								alt="Webflow's logo"
							/>
							<p className="text-white">Copy to Webflow</p>
						</Button>
						<Button className="row-start-2 flex justify-center items-center gap-3 py-6 rounded-md bg-[#292929] font-light">
							<Image
								src="/images/figma-logo.svg"
								width={20}
								height={20}
								alt="Webflow's logo"
							/>
							<p className="text-white">Copy to Figma</p>
						</Button>
						<Button className="row-start-3 col-span-2 flex justify-center items-center gap-3 py-6 rounded-md bg-[#292929] font-light">
							<Eye className="text-white" />
							<p className="text-white">Live to Preview</p>
						</Button>
					</section>
				</section>
				<section className="bg-[#292929] rounded-xl"></section>
			</section>
			<section>
				<Separator />
				<section className="flex justify-between items-center my-10">
					<h2 className="text-2xl text-white font-light">
						Other sections you might like
					</h2>
					<Button className="bg-[#292929] font-thin">Browse all</Button>
				</section>
				{/* <section className="grid grid-cols-3 auto-rows-auto gap-4">
					{heroData.hero.map((hero) => (
						<article key={hero.id}>
							<h2>{hero.title}</h2>
							<p>{hero.paragraphPro}</p>
							<p>{hero.paragraphDate}</p>
							<Image
								src={hero.imageSrc}
								alt={hero.altText}
								width={500}
								height={300}
								layout="responsive"
							/>
							<p className="text-sm text-gray-500">
								Credit:{" "}
								<a href={hero.url} target="_blank" rel="noopener noreferrer">
									{hero.credit}
								</a>
							</p>
						</article>
					))}
				</section> */}
			</section>
		</section>
	);
}
