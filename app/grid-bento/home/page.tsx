"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<section className="w-full min-h-full mx-48 my-10 grid grid-cols-4 grid-row-5 gap-3 text-white">
			{/* Grid 1 */}
			<div className="col-span-2 row-span-2 bg-gradient-to-tr from-cyan-900/50 via-orange-900/50 to-cyan-900/50 rounded-[2rem]">
				<div className="m-10 flex flex-col gap-4">
					<h2>
						DesignLuch -{" "}
						<span className="font-thin">
							Product Designer and noCode Developper
						</span>
					</h2>
					<Separator className="bg-[#B3B3B3]/40" />
					<small>Journaling</small>
					<section>
						<ul className="flex flex-col gap-6 list-disc ml-8 text-sm">
							<li>
								<span className="font-thin">25 jan:</span>Started a new mobile
								design project.
							</li>
							<li>
								<span className="font-thin">24 jan: </span>Received a
								certification in advanced UX design techniques.
							</li>
							<li>
								<span className="font-thin">23 jan: </span>Completed a user
								research phase for on ongoing web design project.
							</li>
							<li>
								<span className="font-thin">22 jan: </span>Attented a workshop
								on the latest trends in UI animation.
							</li>
							<li>
								<span className="font-thin">21 jan: </span>Launched a redesigned
								website for a pro{" "}
							</li>
						</ul>
					</section>
				</div>
			</div>

			{/* Grid 2 */}
			<div className="col-span-2 col-start-3  bg-[#1D1D1D] rounded-[2rem]">
				<div className="mx-10 py-6 flex flex-col justify-center h-full gap-10 ">
					<div className="flex items-start justify-between">
						<div>
							<p>My adventure lasting 10+ years</p>
							<p className="text-xs">
								<span className=" text-[#B3B3B3]/50 font-light">
									21 projects realised{" "}
								</span>
								🎉
							</p>
						</div>
						<ArrowUpRight className="text-[#B3B3B3]/50" />
					</div>
					<Image
						src="/bento-img/adventure-lasting.svg"
						width={500}
						height={500}
						alt="Apps"
						className="w-full border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-[#B3B3B3]/30 px-4 py-2 bg-[#1D1D1D] rounded-l-xl"
					/>
				</div>
			</div>

			{/* Grid 3 */}
			<div className="col-span-2 col-start-1 flex flex-col bg-[#1D1D1D] rounded-[2rem]">
				<div className="mx-10 py-6 flex flex-col justify-center h-full gap-10 ">
					<div className="flex items-start justify-between">
						<div>
							<p>Adventure with Orangesoft lasting 5 years</p>
							<p className="text-xs">
								<span className=" text-[#B3B3B3]/50 font-light">
									21 projects realised{" "}
								</span>
								🎉
							</p>
						</div>
						<ArrowUpRight className="text-[#B3B3B3]/50" />
					</div>
					<div className="flex items-center gap-10">
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/bento-img/orangesoft-1.svg"
								width={100}
								height={100}
								alt="Apps"
							/>
							<p className="text-xs text-[#B3B3B3] font-light">Mr.Hashtag</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/bento-img/orangesoft-2.svg"
								width={100}
								height={100}
								alt="Apps"
							/>
							<p className="text-xs text-[#B3B3B3] font-light">Energy Saver</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/bento-img/orangesoft-3.svg"
								width={100}
								height={100}
								alt="Apps"
							/>
							<p className="text-xs text-[#B3B3B3] font-light">Online School</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/bento-img/orangesoft-4.svg"
								width={100}
								height={100}
								alt="Apps"
							/>
							<p className="text-xs text-[#B3B3B3] font-light">Covid Plans</p>
						</div>
					</div>
				</div>
			</div>

			{/* Grid 4 */}
			<div className="row-span-2 col-start-3 row-start-2 bg-gradient-to-tr from-teal-400/30 via-purple-900/40 to-neutral-900 rounded-[2rem]  overflow-hidden">
				<div className="flex items-start justify-between mx-5 my-4">
					<div>
						<p>Application Name</p>
						<p className="text-xs">
							<span className=" text-[#B3B3B3]/50 font-light">Subtitle</span>
						</p>
					</div>
					<ArrowUpRight className="text-[#B3B3B3]/50" />
				</div>
				<div className="flex justify-end">
					<Image
						src="/bento-img/application-name.png"
						width={220}
						height={220}
						alt="App"
						className="translate-y-6"
					/>
				</div>
			</div>

			{/* Grid 5 */}
			<div className="col-start-4 row-start-2  bg-[#1D1D1D]  rounded-[2rem]">
				<div className="mx-8 my-4">
					<div className="flex items-start justify-between">
						<div className="flex items-center gap-2">
							<Image
								src="/bento-img/twitter-pp.svg"
								height={40}
								width={40}
								alt="pp"
							/>
							<div>
								<p className="text-sm">Name</p>
								<p className="text-xs font-light text-[#B3B3B3]/50">@name</p>
							</div>
						</div>
						<Link href="https://x.com/delgorithm" target="_blank">
							<Image
								src="/bento-img/twitter-logo.svg"
								width={25}
								height={25}
								alt="Twitter"
							/>
						</Link>
					</div>
					<p className="my-2 font-extralight text-[#B3B3B3]">
						I neved imagined I would do this, but I recently published my first
						case study on Dribble. 😎
					</p>
					<div className="flex items-center justify-center relative">
						<Button className="border-[0.5px] text-[#B3B3B3]/50 border-[#B3B3B3]/50 rounded-full w-full">
							Read my [Social]
						</Button>
						<Send className="text-[#B3B3B3]/50 size-4 absolute right-3" />
					</div>
				</div>
			</div>

			{/* Grid 6 */}
			<div className="col-start-4 row-start-3 bg-slate-100 rounded-[2rem]">
				<Image
					src="/bento-img/twitter-img.png"
					height={200}
					width={200}
					alt="dashboard"
				/>
			</div>

			{/* Grid 7 */}
			<div className="col-span-2 row-span-2 row-start-4 bg-amber-500 rounded-[2rem]">
				<div>
					<div>
						<p>45+ Downloads in Figma</p>
						<p>Freebie design systems & libraries for design community</p>
					</div>
					<Image
						src="/bento-img/download-figma.svg"
						height={300}
						width={300}
						alt="figma"
					/>
				</div>
			</div>

			{/* Grid 8 */}
			<div className="col-span-2 col-start-3 row-start-4 bg-teal-500 rounded-[2rem]">
				<div>
					<p>Application Name</p>
					<p>Subtitle</p>
				</div>
				<Image
					src="/bento-img/dashboard-twitter.png"
					height={300}
					width={300}
					alt="twitter"
				/>
			</div>

			{/* Grid 9 */}
			<div className="col-start-3 row-start-5 bg-pink-500 rounded-[2rem]">
				<div>
					<p>Application Name</p>
					<p>Subtitle</p>
				</div>
				<Image
					src="/bento-img/smile-blue-red.svg"
					height={100}
					width={100}
					alt="figma"
				/>
			</div>

			{/* Grid 10 */}
			<div className="col-start-4 row-start-5 bg-amber-100 rounded-[2rem]">
				<p>Say, Hello 👋</p>
				<div>
					<Input placeholder="Click to message" />
					<Button>
						<Image
							src="/bento-img/message-send-blue.svg"
							height={20}
							width={20}
							alt="figma"
						/>
					</Button>
				</div>
			</div>
		</section>
	);
}
