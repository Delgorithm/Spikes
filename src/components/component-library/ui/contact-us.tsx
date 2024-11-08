import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
	return (
		<section className="flex flex-col justify-center items-center text-white pb-24">
			<form className="w-[1004px] flex flex-col gap-6">
				<h2 className="text-xl bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
					Nous contacter
				</h2>
				<div className="flex items-center justify-between">
					<Input
						placeholder="Nom"
						className="text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] h-[45px] w-[270px] bg-[#1B1B1B]"
					/>
					<Input
						placeholder="Mail"
						className="text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] h-[45px] w-[270px] bg-[#1B1B1B]"
					/>
					<Input
						placeholder="Téléphone"
						className="text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] h-[45px] w-[270px] bg-[#1B1B1B]"
					/>
				</div>
				<Textarea
					placeholder="Un message à nous faire parvenir ?"
					className="text-white placeholder:text-white/60 border-[0.5px] border-[#7E7F81] h-[200px] p-6 bg-[#1B1B1B]"
				/>
				<Button className="w-44 border-[0.5px] border-[#7E7F81] ">
					Envoyer
				</Button>
			</form>
		</section>
	);
}
