"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AlignJustify, Minus, Search, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownProfil from "./dropdown-profil";
import { useState } from "react";
import SidebarDashboard from "./sidebar-paste-library-dashboard";
import { motion } from "framer-motion";
import BtnLogout from "@/features/auth/btn-logout";

export default function NavbarPasteDashboard() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const blurbarVariants = {
    hidden: { x: "500%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const navItems = [
    {
      url: "component-library/logo.svg",
      link: `/component-library/dashboard/${userId}/library`,
      alt: "Icon de Paste",
    },
    {
      title: "Library",
      link: `/component-library/dashboard/${userId}/library`,
    },
    {
      title: "Extensions",
      link: `/component-library/dashboard/${userId}/extensions`,
    },
    {
      title: "Community",
      link: `/component-library/dashboard/${userId}/community`,
    },
    {
      title: "Membership",
      link: `/component-library/dashboard/${userId}/membership`,
    },
  ];

  const iconItem = navItems.slice(0, 1);
  const navigationItems = navItems.slice(1, 5);

  return (
    <nav
      className={cn(
        "text-white flex items-center justify-between w-full font-light py-6",
        "watch-sm:px-4 lg:px-8",
      )}
    >
      <ul>
        {iconItem.map((item) => (
          <Link href={item.link} key={item.alt}>
            <Image
              src={`/${item.url}`}
              width={100}
              height={100}
              alt="Logo"
              className=""
            />
          </Link>
        ))}
      </ul>
      <Minus className="rotate-90 h-[0.5px] bg-[#1D1D1D]" />
      <ul className={cn("flex items-center gap-8", "watch-sm:hidden lg:flex")}>
        {navigationItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className={cn(
                pathname?.includes(item.link) ? "text-white" : "text-[#7E7F81]",
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Minus className="rotate-90 h-[0.5px] bg-[#1D1D1D]" />
      <div className={cn("relative", "watch-sm:hidden xl:flex")}>
        <Search className="stroke-[#7E7F81] stroke-[0.5px] absolute top-2.5 left-4 size-4" />
        <Input
          className={cn(
            "bg-[#1D1D1D] pl-11 border-[#1D1D1D] placeholder:text-[#7E7F81]",
            "lg:h-[37px] lg:w-[680px]",
          )}
          placeholder="Search for specific components, sections, wireframes, and more..."
        />
      </div>
      <Minus className="rotate-90 h-[0.5px] bg-[#1D1D1D]" />
      <div className="watch-sm:hidden lg:flex">
        <DropdownProfil handleOpen={handleOpen} />
      </div>
      <div className="watch-sm:flex lg:hidden">
        {isOpen ? (
          <>
            <X onClick={handleOpen} className="stroke-neutral-100 z-40" />
            <motion.div
              className="absolute w-4/5 top-0 right-0 bg-black h-full z-30"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
            >
              <article className="flex flex-col text-center gap-10 px-4">
                <ul className="flex flex-col items-center gap-10 mt-7">
                  {navigationItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.link}
                        className={cn(
                          pathname?.includes(item.link)
                            ? "text-white"
                            : "text-[#7E7F81]",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <SidebarDashboard handleOpen={handleOpen} />
                <BtnLogout redirection="/component-library/accueil" />
              </article>
            </motion.div>
            <motion.div
              className="absolute w-1/5 top-0 left-0 backdrop-blur-sm bg-neutral-500/50 min-h-full z-30"
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleOpen}
              variants={blurbarVariants}
            />
          </>
        ) : (
          <AlignJustify onClick={handleOpen} className="stroke-neutral-100" />
        )}
      </div>
    </nav>
  );
}
