import { Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    category: "Produit",
    links: [
      { name: "Navigation", href: "/myideals/accueil" },
      { name: "Listes", href: "/myideals/accueil" },
      { name: "Leads", href: "/myideals/accueil" },
      { name: "Deals", href: "/myideals/accueil" },
    ],
  },
  {
    category: "Ressources",
    links: [
      { name: "Blogs", href: "/myideals/accueil" },
      { name: "Mises à jours", href: "/myideals/accueil" },
      { name: "Outils gratuits", href: "/myideals/accueil" },
      { name: "Centre d'aide", href: "/myideals/accueil" },
    ],
  },
  {
    category: "Compagnie",
    links: [
      { name: "Prix", href: "/" },
      { name: "Nous contacter", href: "/myideals/accueil" },
      { name: "Affiliation", href: "/myideals/accueil" },
      { name: "Conditions d'utilisation", href: "/myideals/accueil" },
    ],
  },
];

export default function Footer() {
  return (
    <section className="px-24 mt-[150px] mb-[50px] flex items-center justify-between">
      {/* Logo and Social Media */}
      <div className="flex flex-col gap-24">
        <div>
          <Link href="/myideals/accueil" className="flex items-center gap-2">
            <Image
              src="/dashboard/icons/deals_logo.svg"
              width={30}
              height={30}
              alt="MyIDeals's icon"
            />
            <p className="text-xl">MyIDeals</p>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="">
            <Youtube className="stroke-[1.5px]" />
          </Link>
          <Link href="">
            <Linkedin className="stroke-[1.5px]" />
          </Link>
          <Link href="">
            <Twitter className="stroke-[1.5px]" />
          </Link>
        </div>
      </div>

      {/* Footer Navigation */}
      <nav className="grid grid-cols-3 gap-8">
        {footerLinks.map(({ category, links }) => (
          <ul key={category} className="space-y-2">
            <li className="font-semibold text-lg">{category}</li>
            {links.map(({ name, href }) => (
              <li key={name} className="relative group">
                <Link
                  href={href}
                  className="text-sm font-light text-black/40 transition relative"
                >
                  {name}
                  {/* Span for underline */}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </section>
  );
}
