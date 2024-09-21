"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { CheckboxHeart } from "./button-heart-wishlist";
import Image from "next/image";

export default function SelectAmountProduct() {
	const [selected, setSelected] = useState<string | null>(null);
	const [count, setCount] = useState(1);

	const handleCheckboxChange = (value: string) => {
		setSelected(value);
	};

	const handleDecreaseAmount = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleIncreaseAmount = () => {
		if (count >= 1) {
			setCount(count + 1);
		}
	};

	return (
		<section className="flex flex-col gap-10">
			<div className="flex items-center gap-5">
				<Checkbox
					checked={selected === "option1"}
					onCheckedChange={() => handleCheckboxChange("option1")}
					className={`rounded-full bg-[#C1BDB3] size-5 border-none transition-all ease-in-out ${
						selected === "option1" ? "scale-150" : ""
					}`}
				/>
				<Checkbox
					checked={selected === "option2"}
					onCheckedChange={() => handleCheckboxChange("option2")}
					className={`rounded-full bg-[#58737D] size-5 border-none transition-all ease-in-out ${
						selected === "option2" ? "scale-150" : ""
					}`}
				/>
				<Checkbox
					checked={selected === "option3"}
					onCheckedChange={() => handleCheckboxChange("option3")}
					className={`rounded-full bg-[#545454] size-5 border-none transition-all ease-in-out ${
						selected === "option3" ? "scale-150" : ""
					}`}
				/>
				<Checkbox
					checked={selected === "option4"}
					onCheckedChange={() => handleCheckboxChange("option4")}
					className={`rounded-full bg-[#CBA5A5] size-5 border-none transition-all ease-in-out ${
						selected === "option4" ? "scale-150" : ""
					}`}
				/>
			</div>
			<div className="flex items-center gap-8">
				<div className="flex items-center justify-around border-[0.25px] border-neutral-500 py-3 w-44 rounded-lg">
					<button
						type="button"
						className="font-bold"
						onClick={handleDecreaseAmount}>
						<Minus />
					</button>
					<p className="font-bold">{count}</p>
					<button
						type="button"
						className="font-bold"
						onClick={handleIncreaseAmount}>
						<Plus />
					</button>
				</div>
				<Button className="bg-[#3AA39F] w-40 py-6">Add to Cart</Button>
			</div>
			<div className="w-[23rem]">
				<p>Free 3-5 day shipping - Tool-free assembly - 30 - day trial</p>
			</div>
			<div className="flex items-center justify-between w-[23rem]">
				<div className="flex items-center gap-2 relative text-sm">
					<CheckboxHeart />
					<p className="font-semibold text-[#3AA39F]">Add to Wishlit</p>
				</div>
				<nav>
					<ul className="flex items-center gap-6">
						<li>
							<Image
								src="/ecommerce/facebook.svg"
								width={20}
								height={20}
								alt="Facebook"
							/>
						</li>
						<li>
							<Image
								src="/ecommerce/twitter.svg"
								width={20}
								height={20}
								alt="Twitter"
							/>
						</li>
						<li>
							<Image
								src="/ecommerce/pinterest.svg"
								width={20}
								height={20}
								alt="Pinterest"
							/>
						</li>
						<li>
							<Image
								src="/ecommerce/instagram.svg"
								width={20}
								height={20}
								alt="Instagram"
							/>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
}
