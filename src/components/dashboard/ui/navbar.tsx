import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { text: "Features", id: "features" },
  { text: "Avis", id: "reviews" },
  { text: "Pricing", id: "pricing" },
  { text: "FAQ", id: "faq" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mx-20 py-1.5 px-4 rounded-lg border-[0.5px]">
      {/* Logo */}
      <Link href="/myideals/accueil" className="flex items-center gap-2">
        <Image
          src="/dashboard/icons/deals_logo.svg"
          width={40}
          height={40}
          alt="MyIDeals's icon"
        />
        <p className="text-2xl">MyIDeals</p>
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-14 font-light">
        {navLinks.map(({ text, id }) => (
          <li key={id} className="relative group">
            <Link href={`#${id}`} className="text-black/70 transition relative">
              {text}
              {/* Underline Span */}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <Link
        href="/myideals/auth/connexion"
        className={cn(
          "flex items-center gap-2 font-light bg-[#F5F7F9] px-6 py-1.5 rounded-lg",
          "hover:text-white hover:bg-black/90 transition-all ease-in-out",
          "active:translate-y-0.5",
        )}
      >
        <p>Se connecter</p>
        <ArrowRight className="w-4" />
      </Link>
    </nav>
  );
}
