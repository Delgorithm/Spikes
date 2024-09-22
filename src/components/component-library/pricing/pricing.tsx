import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleCheckBig } from "lucide-react";

export default function Pricing() {
	return (
		<section className="grid lg:grid-cols-3 p-10 gap-10 text-white">
			<article className="grid grid-rows-2 p-4 border-[0.25px] border-[#7E7F81]/20 rounded-xl bg-gradient-to-tr from-[#292929] from-90% to-gray-400/50">
				<div className="grid p-4">
					<p className="text-xl">Free</p>
					<div className="flex items-end">
						<h2 className="text-4xl">0.00€</h2>
						<small>/month</small>
					</div>
					<p className="text-xs py-2">
						Great for trying out and for tiny teams
					</p>
					<Button className="text-xl bg-[#FF7A00]">Current</Button>
					<div className="flex justify-center items-center gap-4">
						<Separator className="w-1/3 bg-white" />
						<small>Features</small>
						<Separator className="w-1/3 bg-white" />
					</div>
				</div>
				<div className="p-4 grid gap-6">
					<div className="flex items-center gap-4">
						<CircleCheckBig className="text-[#FF7A00]" />
						<p className="text-[#FF7A00]">Account Aggregation</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig className="text-[#FF7A00]" />
						<p className="text-[#FF7A00]">Expense Tracking</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig className="text-[#FF7A00]" />
						<p className="text-[#FF7A00]">Budgeting Tools</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig className="text-[#FF7A00]" />
						<p className="text-[#FF7A00]">Transation Insights</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig className="text-[#FF7A00]" />
						<p className="text-[#FF7A00]">Basic Security</p>
					</div>
				</div>
			</article>

			<article className="grid grid-rows-2 p-4 border-[0.25px] border-[#7E7F81]/20 rounded-xl bg-gradient-to-t from-[#292929] from-75% to-gray-400/50 -translate-y-2">
				<div className="grid p-4">
					<div className="flex items-center justify-between">
						<p className="text-xl text-transparent bg-clip-text ml-1 bg-gradient-to-t from-[#FF7A00] to-[#FF2900]">
							Pro
						</p>
						<p className="p-0.5 text-sm rounded-lg border-[0.25px] bg-gradient-to-t from-[#FF7A00] to-[#FF2900">
							Most popular
						</p>
					</div>
					<div className="flex items-end">
						<h2 className="text-4xl">19.99€</h2>
						<small>/month</small>
					</div>
					<p className="text-xs py-2">
						Great for trying out and for tiny teams
					</p>
					<Button className="text-xl">Start for free</Button>
					<div className="flex justify-center items-center gap-4">
						<Separator className="w-1/3 bg-white" />
						<small>Features</small>
						<Separator className="w-1/3 bg-white" />
					</div>
				</div>
				<div className="p-4 grid gap-6">
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Everything in Free</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Customizable components</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Advanced Budgeting</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Investment Tracking</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Enhanced Security</p>
					</div>
				</div>
			</article>

			<article className="grid grid-rows-2 p-4 border-[0.25px] border-[#7E7F81]/20 rounded-xl bg-gradient-to-tl from-[#292929] from-90% to-gray-400/50">
				<div className="grid p-4">
					<p className="text-xl">Team</p>
					<div className="flex items-end">
						<h2 className="text-4xl">149.99€</h2>
						<small>/month</small>
					</div>
					<p className="text-xs py-2">
						Great for trying out and for tiny teams
					</p>
					<Button className="text-xl">Start for free</Button>
					<div className="flex justify-center items-center gap-4">
						<Separator className="w-1/3 bg-white" />
						<small>Features</small>
						<Separator className="w-1/3 bg-white" />
					</div>
				</div>
				<div className="p-4 grid gap-6">
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Financial Planning Tools</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Priority Support</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Premium Widgets</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Advanced Security</p>
					</div>
					<div className="flex items-center gap-4">
						<CircleCheckBig />
						<p>Integration with 3rd-Party Services</p>
					</div>
				</div>
			</article>
		</section>
	);
}
