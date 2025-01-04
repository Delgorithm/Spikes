import { Check } from "lucide-react";
import CTAFree from "./cta-free";
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="flex flex-col justify-center px-24 mt-[80px]">
      <h2>Le prix d'un produit unique en son genre</h2>
      <section className="grid grid-cols-2">
        <div className="flex flex-col gap-[30px] w-2/3 p-10 rounded-[2rem] bg-gradient-to-t from-[#A6A6A6]/20 to-[#D9D9D9]/20 border-[0.25px] border-[#D9D9D9]">
          <p className="text-xl font-light underline">Offre limitée</p>
          <div className="flex items-center gap-6">
            <p className="text-6xl font-semibold">96€</p>
            <div className="text-3xl font-light flex items-center gap-4 opacity-30">
              <p className="line-through">149€</p>
              <p>/ mois</p>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] font-light">
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
            <article className="flex items-center gap-4">
              <Check className="stroke-[1.5px]" />
              <p>Offre limitée</p>
            </article>
          </div>
          <CTAFree className="flex justify-center" />
        </div>
        <div className="">
          <div>
            <Image
              src="/dashboard/icons/deals_logo.svg"
              height="0"
              width="0"
              sizes="50vw"
              style={{ width: "auto", height: "auto" }}
              alt="MyIDeals' logo"
            />
            <p>Choix populaire</p>
          </div>
        </div>
      </section>
    </section>
  );
}
