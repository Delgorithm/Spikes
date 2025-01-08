import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export type CTAFreeProps = {
  className?: string;
};

export default function CTAFree({ className }: CTAFreeProps) {
  return (
    <Link
      href="/myideals/auth/inscription"
      className={cn(
        "flex items-center gap-2 py-2 px-4 rounded-lg bg-[#F5F7F9] border-[1px] shadow-lg",
        "hover:text-white hover:bg-black/80 active:translate-y-0.5 transition-all ease-in-out",
        className,
      )}
    >
      <Image
        src="/dashboard/icons/deals_logo.svg"
        height="0"
        width="0"
        sizes="50vw"
        style={{ width: "auto", height: "auto" }}
        alt="MyIDeals' logo"
      />
      J'essaye gratuitement
    </Link>
  );
}
