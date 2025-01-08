"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const starFirst = "/component-library/btn-star-1.svg";
const starSecond = "/component-library/btn-star-2.svg";

export default function ButtonUpgrade() {
  const { data: session } = useSession();
  return (
    <Link
      href={`/component-library/dashboard/${session?.user?.id}/membership`}
      className="relative flex items-center justify-center gap-1 px-3 py-2 bg-[#1D1D1D] noise rounded-md border-[0.5px] border-[#7E7F81]/30 text-white hover:shadow-lg hover:shadow-[#FF8517]/50 hover:scale-105 transition-all ease-in-out"
    >
      Upgrade to{" "}
      <span className="bg-gradient-to-tl from-[#FF8517] to-[#FF3206] bg-clip-text text-transparent">
        Pro
      </span>
      <Image
        src={starFirst}
        height={20}
        width={20}
        alt="Star"
        className="absolute left-4"
      />
      <Image
        src={starSecond}
        height={20}
        width={20}
        alt="Star"
        className="absolute right-4"
      />
    </Link>
  );
}
