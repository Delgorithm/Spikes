import Image from "next/image";

export default function SocialProof() {
	const socialImg = [
		{
			src: "/dashboard/social-proof/social-proof-1.webp",
			alt: "Quotient's company",
		},
		{
			src: "/dashboard/social-proof/social-proof-2.webp",
			alt: "Hourglass' company",
		},
		{
			src: "/dashboard/social-proof/social-proof-3.webp",
			alt: "Command's company",
		},
		{
			src: "/dashboard/social-proof/social-proof-4.webp",
			alt: "Catalog's company",
		},
		{
			src: "/dashboard/social-proof/social-proof-5.webp",
			alt: "Circooles' company",
		},
		{
			src: "/dashboard/social-proof/social-proof-6.webp",
			alt: "Sisyphus' company",
		},
		{
			src: "/dashboard/social-proof/social-proof-7.webp",
			alt: "Layers' company",
		},
	];

	const firstSocialImg = socialImg.slice(0, 4);
	const secondSocialImg = socialImg.slice(4);

	return (
		<section className="flex flex-col items-center justify-center gap-10 mt-[70px]">
			<div className="flex items-center justify-between w-full">
				{firstSocialImg.map((item) => (
					<Image
						key={item.src}
						src={item.src}
						alt={item.alt}
						width="0"
						height="0"
						sizes="150vw"
						style={{ width: "auto", height: "auto" }}
					/>
				))}
			</div>
			<div className="flex items-center justify-around w-full">
				{secondSocialImg.map((item) => (
					<Image
						key={item.src}
						src={item.src}
						alt={item.alt}
						width="0"
						height="0"
						sizes="150vw"
						style={{ width: "auto", height: "auto" }}
					/>
				))}
			</div>
		</section>
	);
}
