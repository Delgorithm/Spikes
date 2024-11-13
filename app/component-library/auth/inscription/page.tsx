import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import BtnAuth from "@/components/component-library/ui/btn-auth";
import Link from "next/link";
import FormRegister from "../form-register";

export default function AuthPage() {
	return (
		<section
			className={cn(
				"grid items-center center w-full h-screen",
				"md:grid-cols-2 md:grid-rows-1",
				"bg-black"
			)}>
			<article className="flex flex-col items-center gap-6">
				<div>
					<h1
						className={cn(
							"text-center bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-[32px]"
						)}>
						Bienvenue
					</h1>
					<p
						className={cn(
							"text-center bg-gradient-to-tl from-[#a7a8ab] to-[#FFFFFF] bg-clip-text text-transparent",
							"watch-sm:text-xs"
						)}>
						Entrer vos détails pour vous enregistrer
					</p>
				</div>
				<FormRegister />
				<div className="flex w-full justify-center items-center gap-4">
					<Separator
						orientation="horizontal"
						className="h-[0.25px] rounded-full w-1/5"
					/>
					<p className="bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
						Ou
					</p>
					<Separator
						orientation="horizontal"
						className="h-[0.25px] rounded-full w-1/5"
					/>
				</div>

				<div className="flex justify-center items-center gap-2">
					<BtnAuth
						source="google.svg"
						alt="Google's auth"
						name="Google"
						provider="google"
					/>
					<BtnAuth
						source="github.svg"
						alt="Github's auth"
						name="Github"
						provider="github"
					/>
				</div>

				<div className="flex items-center gap-2">
					<p className="text-sm text-white/40 font-light">
						Vous avez déjà un compte ?
					</p>
					<Link
						href="/component-library/auth/connexion"
						className="font-bold text-white/60 underline text-sm">
						Se connecter
					</Link>
				</div>
			</article>
		</section>
	);
}
