import Image from "next/image";

export default function SocialProof() {
	return (
		<section className="text-white flex flex-col items-center">
			<p>Eux aussi ont choisi la qualité</p>
			<div className="flex items-center justify-between w-[1108px] mt-[60px]">
				<Image
					src="/images/component-library/socialproof-5.svg"
					width={100}
					height={100}
					alt="Social Proof"
				/>
				<Image
					src="/images/component-library/socialproof-4.svg"
					width={100}
					height={100}
					alt="Social Proof"
				/>
				<Image
					src="/images/component-library/socialproof-3.svg"
					width={100}
					height={100}
					alt="Social Proof"
				/>
				<Image
					src="/images/component-library/socialproof-2.svg"
					width={100}
					height={100}
					alt="Social Proof"
				/>
				<Image
					src="/images/component-library/socialproof-1.svg"
					width={100}
					height={100}
					alt="Social Proof"
				/>
			</div>
		</section>
	);
}
