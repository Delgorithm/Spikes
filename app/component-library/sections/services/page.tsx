import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye } from "lucide-react";
import Image from "next/image";
import { getServiceSection } from "./services.query";

export default async function HeroPage() {
	const getServiceData = await getServiceSection();
	const newServiceData = getServiceData.slice(16, 22);
	const firstHowItWorksData = getServiceData.slice(19, 20);

	return (
		<section className="px-6 py-8 grid md:grid-cols-1 md:auto-rows-auto gap-10">
			<section className="grid md:grid-cols-2 md:h-96 gap-10">
				<section className="flex flex-col justify-between">
					<section>
						<div className="flex gap-2 mb-5">
							<h2 className="text-white text-2xl relative">How It Works</h2>
							<span className="inline-block text-sm text-transparent bg-clip-text ml-1 bg-gradient-to-t from-[#FF7A00] to-[#FF2900]">
								Pro
							</span>
						</div>
						<small>
							Detailed services section with heading and graphique/image centred
							and feature <br /> cards on either side.
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
				<section className="bg-[#292929] rounded-xl">
					{firstHowItWorksData.map((firstHiw) => (
						<div key={firstHiw.id}>
							<Image
								src={firstHiw.image}
								alt={firstHiw.title}
								width={1000}
								height={500}
								style={{ objectFit: "cover" }}
								className="rounded-lg hover:scale-[102%] transition-all ease-out"
							/>
						</div>
					))}
				</section>
			</section>
			<section>
				<Separator />
				<section className="flex justify-between items-center my-10">
					<h2 className="text-2xl text-white font-light">
						Other sections you might like
					</h2>
					<Button className="bg-[#292929] font-thin">Browse all</Button>
				</section>
				<section className="grid grid-cols-3 auto-rows-auto gap-10">
					{newServiceData.map((hiw) => (
						<article
							key={hiw.id}
							className="hover:scale-[102%] transition-all ease-out">
							<Image
								src={hiw.image}
								alt={hiw.title}
								width={500}
								height={300}
								style={{ objectFit: "cover" }}
								className="rounded-lg"
							/>
							<div className="flex gap-2 mb-2 pt-2">
								<h2 className="text-white text-sm font-thin relative">
									{hiw.title}
								</h2>
								<span className="inline-block text-sm text-transparent bg-clip-text ml-1 bg-gradient-to-t from-[#FF7A00] to-[#FF2900]">
									Pro
								</span>
							</div>
						</article>
					))}
				</section>
			</section>
		</section>
	);
}
