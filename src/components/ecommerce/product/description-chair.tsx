import Image from "next/image";

export default function DescriptionChair() {
	return (
		<section className="flex flex-col gap-14">
			<article>
				<h1 className="text-4xl font-bold">Meryl Lounge Chair</h1>
				<div className="flex watch-sm:flex-col lg:flex-row lg:items-center justify-between lg:w-96 mt-6">
					<p className="font-bold text-lg">$149.99</p>
					<div className="flex   items-center gap-4">
						<Image
							src="/ecommerce/stars.svg"
							width={80}
							height={80}
							alt="stars reviews"
						/>
						<p className="text-sm">
							4.6 / 5.0 <span className="text-neutral-300">(556)</span>
						</p>
					</div>
				</div>
			</article>
			<p className="lg:w-[23rem] text-sm">
				The gently curved lines accentuated by swen details are kind to your
				body and pleasant to look at. Also, there's a tilt and height-adjusting
				mechanism that's built to outlast years of ups and downs.
			</p>
		</section>
	);
}