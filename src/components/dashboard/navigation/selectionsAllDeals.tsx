import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Download, FolderPlus, SearchIcon } from "lucide-react";

export default function SelectionsAllDeals() {
	return (
		<section className="flex items-center justify-between">
			<div className="flex items-center gap-4">
				<div className="relative flex items-center w-[200px]">
					<SearchIcon className="absolute left-2 size-5 text-neutral-400" />
					<Input
						placeholder="Search"
						className="pl-8 text-neutral-400 bg-white"
					/>
				</div>
				<Select>
					<SelectTrigger className="w-[100px]">Object</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="product-design">
								Product Design : Payment
							</SelectItem>
							<SelectItem value="app-redisign">
								App Redesign : Onboarding
							</SelectItem>
							<SelectItem value="pitch-deck-b2b">Pitch Deck B2B</SelectItem>
							<SelectItem value="mobile-app-ux-audit">
								Mobile App, UX Audit
							</SelectItem>
							<SelectItem value="splash-screen-illustrator">
								Splash Screen Illustrator
							</SelectItem>
							<SelectItem value="features-add">Features Add</SelectItem>
							<SelectItem value="brand-guidelines">Brand Guidelines</SelectItem>
							<SelectItem value="new-messages-ux">New messages UX</SelectItem>
							<SelectItem value="landing-page">Landing Page</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="w-[120px]">Company</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="stripe">Stripe Inc.</SelectItem>
							<SelectItem value="github">Github.</SelectItem>
							<SelectItem value="amazon">Amazon</SelectItem>
							<SelectItem value="steam">Steam</SelectItem>
							<SelectItem value="adobe">Adobe LLC.</SelectItem>
							<SelectItem value="the-browser-company">
								The Browser Company
							</SelectItem>
							<SelectItem value="figma">Figma</SelectItem>
							<SelectItem value="slack">Slack Inc.</SelectItem>
							<SelectItem value="opensea">Opensea.</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="w-[100px]">Statue</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="completed">Completed</SelectItem>
							<SelectItem value="ongoing">Ongoing</SelectItem>
							<SelectItem value="pending">Pending</SelectItem>
							<SelectItem value="waiting-for-confirmation">
								Waiting for Confirmation
							</SelectItem>
							<SelectItem value="cancelled">Cancelled</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center gap-4">
				<Button variant="outline" className="flex items-center gap-2">
					<Download className="size-5" />
					Export
				</Button>
				<Button className="flex items-center gap-2">
					<FolderPlus className="size-5" />
					New Deal
				</Button>
			</div>
		</section>
	);
}
