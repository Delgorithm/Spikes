import { cn } from "@/lib/utils";
import FormConnection from "../../../../src/features/auth/form-connection";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import BtnAuth from "@/features/auth/btn-auth";
import Image from "next/image";

const dashboardImg = "/component-library/dashboard.webp";

export default function AuthPage() {
  return (
    <section
      className={cn(
        "grid items-center center w-full h-screen z-50",
        "md:grid-cols-2 md:grid-rows-1",
        "bg-black/90",
      )}
    >
      <article className="flex flex-col items-center gap-6">
        <div>
          <h1
            className={cn(
              "text-center bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
              "watch-sm:text-[32px]",
            )}
          >
            Bienvenue
          </h1>
          <p
            className={cn(
              "text-center bg-gradient-to-tl from-[#a7a8ab] to-[#FFFFFF] bg-clip-text text-transparent",
              "watch-sm:text-xs",
            )}
          >
            Entrez vos détails pour vous connecter
          </p>
        </div>

        {/* Formulaire de connexion */}
        <FormConnection />

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

        {/* Boutons d'auth providers */}
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
          <p className="text-sm text-white/80 font-light">
            Pas encore de compte ?{" "}
          </p>
          <Link
            href="/component-library/auth/inscription"
            className="font-bold text-white underline text-sm"
          >
            S'inscrire
          </Link>
        </div>
      </article>
      <Image
        src={dashboardImg}
        width={5000}
        height={5000}
        alt="Dashboard"
        priority={true}
        quality={100}
        className={cn(
          "w-5/6 border-[0.25px] border-[#FF7A00]/60 drop-shadow-custom-dashboard pointer-events-none",
          "rounded-[20px]",
          "watch-sm:hidden md:block",
        )}
      />
    </section>
  );
}
