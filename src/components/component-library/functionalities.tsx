import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Functionalities() {
  return (
    <section
      id="fonctionnalites"
      className="flex flex-col justify-center items-center text-white"
    >
      <div className={cn("watch-sm:w-full xl:w-[1108px]")}>
        <h2
          className={cn(
            "font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
            "watch-sm:text-[20px] xl:text-[30px]",
            "watch-sm:text-center xl:text-left",
          )}
        >
          Fait pour répondre à des <br /> besoins préçis
        </h2>
        <div
          className={cn(
            "mt-[45px]",
            "watch-sm:flex watch-sm:flex-col watch-sm:justify-center watch-sm:items-center",
            "watch-sm:gap-[20px] lg:gap-0 xl:gap-[54px]",
            "lg:grid lg:grid-cols-3 lg:mx-10 lg:pl-4",
            "xl:grid-rows-custom-functionalities-rows xl:grid-cols-custom-functionalities-cols",
          )}
        >
          <article
            className={cn(
              "bg-[#1D1D1D] rounded-[20px] flex flex-col items-end",
              "watch-sm:w-72 watch-sm:h-72 xl:w-auto xl:h-80",
            )}
          >
            <Image
              src="/component-library/brackets.svg"
              width={100}
              height={100}
              alt="Bracket's logo"
              className={cn(
                "pointer-events-none",
                "watch-sm:m-[12px] xl:m-[30px]",
                "watch-sm:w-16 xl:size-[60px]",
              )}
            />
            <div
              className={cn(
                "flex flex-col items-center gap-[20px]",
                "xl:pb-[40px]",
              )}
            >
              <p
                className={cn(
                  "medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
                  "watch-sm:text-[18px] xl:text-[20px]",
                  "watch-sm:w-5/6 xl:w-full",
                  "xl:ml-[3.5rem]",
                )}
              >
                Un seul objectif, un design uni
              </p>
              <p className="text-[12px] w-5/6 font-medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
                Chaque composant est conçu avec une précision absolue, mettant
                en avant l’essentiel pour une utilisation ciblée. La simplicité
                d’un objet unique permet une intégration sans effort tout en
                conservant l’unité visuelle.
              </p>
            </div>
          </article>

          <article
            className={cn(
              "bg-[#1D1D1D] rounded-[20px] flex flex-col items-end",
              "watch-sm:w-72 watch-sm:h-72 xl:w-auto xl:h-80",
            )}
          >
            <Image
              src="/component-library/hexagon.svg"
              width={100}
              height={100}
              alt="Bracket's logo"
              className={cn(
                "pointer-events-none",
                "watch-sm:m-[12px] xl:m-[30px]",
                "watch-sm:w-16 xl:size-[60px]",
              )}
            />
            <div
              className={cn(
                "flex flex-col items-center gap-[20px]",
                "xl:pb-[40px]",
              )}
            >
              <p
                className={cn(
                  "medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
                  "watch-sm:text-[18px] xl:text-[20px]",
                  "watch-sm:w-5/6 xl:w-full",
                  "xl:ml-[3.5rem]",
                )}
              >
                Des design minimalistes
              </p>
              <p className="text-[12px] w-5/6 font-medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
                Adoptez la puissance de la simplicité. Nos composants
                minimalistes garantissent une expérience utilisateur fluide et
                élégante, sans distractions inutiles. Idéal pour les interfaces
                modernes et intuitives.
              </p>
            </div>
          </article>

          <article
            className={cn(
              "bg-[#1D1D1D] rounded-[20px] flex flex-col items-end",
              "watch-sm:w-72 watch-sm:h-72 xl:w-auto xl:h-80",
            )}
          >
            <Image
              src="/component-library/wand-sparkles.svg"
              width={100}
              height={100}
              alt="Bracket's logo"
              className={cn(
                "pointer-events-none",
                "watch-sm:m-[12px] xl:m-[30px]",
                "watch-sm:w-16 xl:size-[60px]",
              )}
            />
            <div
              className={cn(
                "flex flex-col items-center gap-[20px]",
                "xl:pb-[40px]",
              )}
            >
              <p
                className={cn(
                  "medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent",
                  "watch-sm:text-[18px] xl:text-[20px]",
                  "watch-sm:w-5/6 xl:w-full",
                  "xl:ml-[3.5rem]",
                )}
              >
                Chaque pixels comptent
              </p>
              <p className="text-[12px] w-5/6 font-medium bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
                Une attention aux détails pixel par pixel, où chaque élément
                trouve sa juste place. Nos composants sont optimisés pour offrir
                un rendu impeccable, assurant une expérience visuelle
                harmonieuse.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
