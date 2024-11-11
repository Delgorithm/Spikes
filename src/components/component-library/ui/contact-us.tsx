import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function ContactUs() {
	return (
		<section className="flex flex-col justify-center items-center text-white pb-24">
			<form
				className={cn(
					"flex flex-col gap-6",
					"watch-sm:items-center xl:items-start",
					"watch-sm:w-full watch-sm:px-4 xl:w-[1004px]"
				)}>
				<h2 className="text-xl bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Nous contacter
				</h2>
				<div
					className={cn(
						"flex justify-between items-center w-full",
						"watch-sm:flex-col watch-sm:gap-[20px] xl:flex-row xl:gap-0"
					)}>
					<Input
						placeholder="Nom"
						className={cn(
							"text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] bg-[#1B1B1B]",
							"h-[45px] xl:w-[270px]",
							"watch-sm:w-72"
						)}
					/>
					<Input
						placeholder="Mail"
						className={cn(
							"text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] bg-[#1B1B1B]",
							"h-[45px] xl:w-[270px]",
							"watch-sm:w-72"
						)}
					/>
					<Input
						placeholder="Téléphone"
						className={cn(
							"text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] bg-[#1B1B1B]",
							"h-[45px] xl:w-[270px]",
							"watch-sm:w-72"
						)}
					/>
				</div>
				<Textarea
					placeholder="Un message à nous faire parvenir ?"
					className={cn(
						"text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] p-6 bg-[#1B1B1B] h-[200px]",
						"watch-sm:w-72 xl:w-full"
					)}
				/>
				<Button
					className={cn(
						"border-[0.5px] border-[#7E7F81]",
						"watch-sm:w-72 xl:w-44"
					)}>
					Envoyer
				</Button>
			</form>
		</section>
	);
}
