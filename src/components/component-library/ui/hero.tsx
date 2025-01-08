"use client";

import Image from "next/image";
import ButtonCTA from "./button-cta";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.05 } },
};

const dashboardImg = "/component-library/dashboard.webp";

export default function Hero() {
  const { data: session } = useSession();
  return (
    <section className="flex flex-col justify-center items-center">
      <article className="flex flex-col items-center gap-[25px]">
        <h1
          className={cn(
            "font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center",
            "watch-sm:text-[28px] xl:text-[44px]",
          )}
        >
          Créer ta librairie de composants
        </h1>
        <p
          className={cn(
            "font-semibold bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent text-center",
            "watch-sm:text-xs xl:text-[14px]",
            "watch-sm:mx-4",
          )}
        >
          Des composants de design réalisés avec passion pour que tu puisses les
          utiliser à souhait
        </p>
        {session ? (
          <Link
            className={cn(
              "text-white",
              "h-9 px-4 py-2",
              "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              "font-medium bg-gradient-to-b from-[#FF8517] to-[#FF3206] active:opacity-50",
            )}
            href={`/component-library/dashboard/${session?.user.id}/library`}
          >
            Dashboard
          </Link>
        ) : (
          <ButtonCTA text="Essayer gratuitement" className={cn("watch-sm:")} />
        )}
      </article>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className={cn(
          "relative my-[75px]",
          "watch-sm:w-72",
          "md:w-[700px]",
          "lg:w-[900px]",
          "xl:w-[1110px] xl:h-[774px]",
          "watch-sm:rounded-[10px] xl:rounded-[20px]",
        )}
      >
        <BorderBeam />
        <Image
          src={dashboardImg}
          width={5000}
          height={5000}
          alt="Dashboard"
          priority={true}
          quality={100}
          className={cn(
            "w-full h-full border-[0.25px] border-[#FF7A00]/60 drop-shadow-custom-dashboard pointer-events-none",
            "watch-sm:rounded-[10px] xl:rounded-[20px]",
          )}
        />
      </motion.div>
    </section>
  );
}
