import FormConnection from "@/features/auth/form-connection-myideals";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Connexion() {
  return (
    <section className="relative grid grid-cols-custom-connexion-myideals h-screen">
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <Image
          src="/dashboard/icons/deals_logo.svg"
          width={40}
          height={40}
          alt="MyIDeals's icon"
        />
        <h1 className="text-4xl">Connexion</h1>
        <p>Bon retour !</p>
        <FormConnection />
        <div className="text-sm mt-6 flex flex-col items-center">
          <p className="text-[#7E7F81] font-extralight">Pas encore inscrit ?</p>
          <Link href="/myideals/auth/inscription" className=" underline">
            Se créer un compte
          </Link>
        </div>
      </div>
      <div className="h-full bg-[#7E7F81]/5 rounded-l-3xl flex flex-col justify-center items-center">
        <Image
          src="/dashboard/dashboard-img.webp"
          height={1000}
          width={1000}
          alt="MyIDeals' dashboard"
          className="rounded-xl w-5/6 shadow-xl"
        />
      </div>
      <Link
        href="/myideals/accueil"
        prefetch={true}
        className="absolute top-2 left-2 flex items-center gap-1"
      >
        <ArrowLeft className="stroke-[1.5px] w-5" />
        Page d'accueil
      </Link>
    </section>
  );
}
