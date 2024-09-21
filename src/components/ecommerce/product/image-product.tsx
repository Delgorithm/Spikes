"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImageProduct() {
	const images = [
		{ src: "/ecommerce/chair1.webp", id: 1 },
		{ src: "/ecommerce/chair2.webp", id: 2 },
		{ src: "/ecommerce/chair3.webp", id: 3 },
		{ src: "/ecommerce/chair4.webp", id: 4 },
		{ src: "/ecommerce/chair5.webp", id: 5 },
	];

	const [selectedImage, setSelectedImage] = useState(images[0]);

	const handlePrevImage = () => {
		if (selectedImage.id > 1) {
			setSelectedImage(images[selectedImage.id - 2]);
		}
	};

	const handleNextImage = () => {
		if (selectedImage.id < images.length) {
			setSelectedImage(images[selectedImage.id]);
		}
	};

	const handleImageClick = (image: { src: string; id: number }) => {
		setSelectedImage(image);
	};

	return (
		<section className="flex flex-col justify-between h-full">
			<div className="flex justify-end">
				<div className="flex flex-col gap-6">
					<p className="text-3xl">
						0{selectedImage.id}{" "}
						<span className="text-xl text-slate-400">/ 05</span>
					</p>
					<div className="flex gap-16">
						<button onClick={handlePrevImage}>
							<ChevronLeft />
						</button>
						<button onClick={handleNextImage}>
							<ChevronRight />
						</button>
					</div>
				</div>
			</div>
			<div className="relative">
				<Image src={selectedImage.src} width={400} height={400} alt="Chair" />
				<Image
					src="/ecommerce/rectangle.svg"
					width={500}
					height={500}
					alt="rectangle"
					className="absolute -right-16 top-8"
				/>
			</div>
			<div className="flex items-center gap-10">
				{images.map((image) => (
					<div
						key={image.id}
						className={`cursor-pointer ${
							selectedImage.id === image.id
								? "border-2 border-[#3AA39F] rounded-md"
								: "border-2 border-neutral-200 rounded-md"
						}`}
						onClick={() => handleImageClick(image)}>
						<Image src={image.src} width={100} height={100} alt="Chair" />
					</div>
				))}
			</div>
		</section>
	);
}
