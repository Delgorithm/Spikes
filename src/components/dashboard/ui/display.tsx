import Image from "next/image";
import CTAFree from "./cta-free";

export default function Display() {
  return (
    <section className="px-32 mt-[80px]">
      <div className="bg-[#F2F2F2] h-[800px] shadow-xl rounded-xl border-[0.25px] border-[#D9D9D9]">
        <div className="flex">
          <div className="rounded-tl-xl w-2/5 h-[80px] border-b-[1px] border-r-[1px]"></div>
          <div className="rounded-tr-xl w-3/5 h-[80px] border-b-[1px]"></div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center gap-10 px-12 rounded-bl-xl h-[720px] w-2/5 border-r-[1px]">
            <p className="text-5xl">
              Découvrez comment suivre vos finances et devis de manière
              simplifié
            </p>
            <CTAFree className="justify-center mx-12" />
          </div>
          <Image
            src="/dashboard/display-dashboard.webp"
            width={1000}
            height={1000}
            className="rounded-br-xl h-[720px] w-3/5"
            alt="MyIDeals' dashboard"
          />
        </div>
      </div>
    </section>
  );
}
