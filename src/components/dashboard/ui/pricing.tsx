import { Check } from "lucide-react";
import CTAFree from "./cta-free";
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="flex flex-col justify-center px-24 mt-[80px]">
      <h2 className="text-3xl font-semibold pb-16 text-center">
        Le prix d'un produit unique en son genre
      </h2>
      <section className="flex justify-center gap-8">
        <section className="flex flex-col gap-[30px] px-14 py-12 rounded-[2rem] bg-gradient-to-t from-[#A6A6A6]/10 to-[#D9D9D9]/10 border-[0.25px] border-[#D9D9D9]">
          <p className="text-xl font-light underline">Offre limitée</p>
          <div className="flex items-center gap-6">
            <p className="text-6xl font-semibold">96€</p>
            <div className="text-3xl font-light flex items-center gap-4 opacity-30">
              <p className="line-through">149€</p>
              <p>/ mois</p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] font-light">
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
          <CTAFree className="flex justify-center border-[1px] shadow-lg" />
        </section>
        <section className="flex flex-col justify-center gap-5 w-3/5">
          <div className="flex items-center justify-center gap-2 w-56 py-2 rounded-lg border-[0.25px] border-[#D9D9D9]">
            <Image
              src="/dashboard/icons/deals_logo.svg"
              height="0"
              width="0"
              sizes="50vw"
              style={{ width: "auto", height: "auto" }}
              alt="MyIDeals' logo"
            />
            <p className="text-lg font-semibold">Choix populaire</p>
          </div>
          <h2 className="text-6xl font-semibold">
            Obtenez la version actuelle et bénéficiez de tous ses avantages
          </h2>
          <p className="font-light text-[#292929]">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum{" "}
          </p>
        </section>
      </section>
      <section className="px-10 py-6 m-6 bg-gradient-to-r from-[#F2F2F2] to-white grid grid-cols-4 grid-rows-2 gap-4 mt-[50px] shadow-lg rounded-xl items-center justify-center">
        <p className="text-3xl font-semibold">Custom</p>
        <article className="flex items-center gap-4">
          <Check className="stroke-[1.5px]" />
          <p>Offre limitée</p>
        </article>
        <article className="flex items-center gap-4 ">
          <Check className="stroke-[1.5px]" />
          <p>Offre limitée</p>
        </article>
        <p className="col-start-1 row-start-2">
          Passez d'une étincelle à une étoile
        </p>
        <article className="flex items-center gap-4 col-start-2 row-start-2">
          <Check className="stroke-[1.5px]" />
          <p>Offre limitée</p>
        </article>
        <article className="flex items-center gap-4 col-start-3 row-start-2">
          <Check className="stroke-[1.5px]" />
          <p>Offre limitée</p>
        </article>
        <p className="row-span-2 col-start-4 flex items-center w-full justify-center py-3 rounded-lg bg-gradient-to-l from-[#A6A6A6]/10 to-[#D9D9D9]/10 border-[0.25px] border-[#D9D9D9] shadow-lg">
          Nous concacter
        </p>
      </section>
    </section>
  );
}
