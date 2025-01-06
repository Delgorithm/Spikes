import { Check } from "lucide-react";
import FunctionalitiesDesgin from "../design/functionalities-design";
import CTAFree from "./cta-free";

export default function Functionalities() {
  return (
    <section id="features">
      <section className="flex flex-col gap-10 mt-[70px] w-full px-24">
        <h2 className="text-3xl font-bold text-center">
          Gardez un oeil sur vos avancées
        </h2>
        <div className="flex flex-col justify-start gap-2">
          <p className="font-semibold">Facile comme 1+1</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">Comment ça fonctionne ?</p>
            <CTAFree />
          </div>
        </div>
        <FunctionalitiesDesgin />
      </section>

      <section className="relative w-full h-[800px] flex flex-col justify-center items-center gap-[114px] bg-[#F2F2F2] mt-[80px]">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="grid grid-cols-3 gap-[14px] px-24">
          <div className="w-[346px] h-[250px] bg-[#F6F6F6] border-[0.5px] border-[#7E7F81] rounded-lg flex flex-col gap-5 p-10">
            <Check className="stroke-[1px] size-10" />
            <p>Clarté et responsabilité</p>
          </div>
          <div className="w-[346px] h-[250px] bg-[#F6F6F6] border-[0.5px] border-[#7E7F81] rounded-lg flex flex-col gap-5 p-10">
            <Check className="stroke-[1px] size-10" />
            <p>Clarté et responsabilité</p>
          </div>
          <div className="w-[346px] h-[250px] bg-[#F6F6F6] border-[0.5px] border-[#7E7F81] rounded-lg flex flex-col gap-5 p-10">
            <Check className="stroke-[1px] size-10" />
            <p>Clarté et responsabilité</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[14px] px-24">
          <div className="w-[346px] h-[250px] bg-[#F6F6F6] border-[0.5px] border-[#7E7F81] rounded-lg flex flex-col gap-5 p-10">
            <Check className="stroke-[1px] size-10" />
            <p>Clarté et responsabilité</p>
          </div>

          <div className="w-[346px] h-[250px] bg-[#F6F6F6] border-[0.5px] border-[#7E7F81] rounded-lg flex flex-col gap-5 p-10">
            <Check className="stroke-[1px] size-10" />
            <p>Clarté et responsabilité</p>
          </div>
          <div className="w-[346px] h-[250px] bg-[#F6F6F6] border-[0.5px] border-[#7E7F81] rounded-lg flex flex-col gap-5 p-10">
            <Check className="stroke-[1px] size-10" />
            <p>Clarté et responsabilité</p>
          </div>
        </div>
      </section>
    </section>
  );
}
