"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Bookmark, LayoutGrid, Sparkles, Star, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ButtonUpgrade from "../../ui/button-upgrade";

type NavItem = {
  title: string;
  link: string;
  icon?: string;
};

type SidebarDashboardProps = {
  handleOpen?: () => void;
};

export default function SidebarDashboard({
  handleOpen,
}: SidebarDashboardProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const isSectionActive = (section: NavItem[]) =>
    section.some((item) => pathname === item.link);

  const navSections: {
    title: string;
    icon: (isOpen: boolean, isActive: boolean) => JSX.Element;
    items: NavItem[];
  }[] = [
    {
      title: "Platform",
      icon: (isOpen: boolean, isActive: boolean) => (
        <Zap
          className={cn(
            "stroke-[1.5px]",
            isOpen || isActive ? "stroke-white" : "stroke-[#7E7F81]",
          )}
        />
      ),
      items: [
        {
          title: "Webflow",
          link: `/component-library/dashboard/${userId}/library/plateform/webflow`,
          icon: "webflow-logo.svg",
        },
        {
          title: "Figma",
          link: `/component-library/dashboard/${userId}/library/plateform/figma`,
          icon: "figma-logo.svg",
        },
      ],
    },
    {
      title: "Sections",
      icon: (isOpen: boolean, isActive: boolean) => (
        <LayoutGrid
          className={cn(
            "stroke-[1.5px]",
            isOpen || isActive ? "stroke-white" : "stroke-[#7E7F81]",
          )}
        />
      ),
      items: [
        {
          title: "Hero",
          link: `/component-library/dashboard/${userId}/library/sections/hero`,
        },
        {
          title: "How it works",
          link: `/component-library/dashboard/${userId}/library/sections/how-it-works`,
        },
        {
          title: "Services",
          link: `/component-library/dashboard/${userId}/library/sections/services`,
        },
        {
          title: "Testimonials",
          link: `/component-library/dashboard/${userId}/library/sections/testimonials`,
        },
        {
          title: "Pricing",
          link: `/component-library/dashboard/${userId}/library/sections/pricing`,
        },
        {
          title: "FAQ",
          link: `/component-library/dashboard/${userId}/library/sections/faq`,
        },
        {
          title: "Footer",
          link: `/component-library/dashboard/${userId}/library/sections/footer`,
        },
      ],
    },
    {
      title: "Style",
      icon: (isOpen: boolean, isActive: boolean) => (
        <Sparkles
          className={cn(
            "stroke-[1.5px]",
            isOpen || isActive ? "stroke-white" : "stroke-[#7E7F81]",
          )}
        />
      ),
      items: [
        {
          title: "Custom",
          link: `/component-library/dashboard/${userId}/library/style/custom`,
        },
        {
          title: "Colors",
          link: "",
        },
        {
          title: "Font",
          link: "",
        },
        {
          title: "Theme",
          link: "",
        },
      ],
    },
    {
      title: "Saved",
      icon: (isOpen: boolean, isActive: boolean) => (
        <Bookmark
          className={cn(
            "stroke-[1.5px]",
            isOpen || isActive ? "stroke-white" : "stroke-[#7E7F81]",
          )}
        />
      ),
      items: [
        {
          title: "Bookmarks",
          link: `/component-library/dashboard/${userId}/library/saved/bookmarks`,
        },
      ],
    },
    {
      title: "Plan",
      icon: (isOpen: boolean, isActive: boolean) => (
        <Star
          className={cn(
            "stroke-[1.5px]",
            isOpen || isActive ? "stroke-white" : "stroke-[#7E7F81]",
          )}
        />
      ),
      items: [
        {
          title: "Subscription",
          link: `/component-library/dashboard/${userId}/library/plan/subscription`,
        },
      ],
    },
  ];

  return (
    <nav className="w-full mt-8 flex flex-col gap-4 watch-sm:px-2 md:px-8">
      <Accordion type="single" collapsible className="w-full ">
        {navSections.map((section) => {
          const isActive = isSectionActive(section.items);

          return (
            <AccordionItem
              key={section.title}
              value={section.title.toLowerCase()}
            >
              <AccordionTrigger
                className={cn("py-6", isActive && "text-white")}
                onClick={() =>
                  setOpenSection(
                    openSection === section.title ? null : section.title,
                  )
                }
              >
                <div className="flex items-center gap-2">
                  {section.icon(openSection === section.title, isActive)}
                  <span
                    className={cn(
                      "uppercase font-medium",
                      openSection === section.title || isActive
                        ? "text-white"
                        : "text-[#7E7F81]",
                    )}
                  >
                    {section.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="pl-4 text-[#7E7F81] flex flex-col gap-6">
                  {section.items.map((item) => (
                    <li key={item.title} className="relative">
                      <Link
                        href={item.link}
                        onClick={handleOpen}
                        className={cn(
                          "flex items-center gap-2",
                          pathname === item.link
                            ? "text-white"
                            : "text-[#7E7F81]",
                        )}
                      >
                        {"icon" in item && item.icon && (
                          <Image
                            src={`/component-library/${item.icon}`}
                            alt={`${item.title} icon`}
                            width={20}
                            height={20}
                          />
                        )}
                        <span>{item.title}</span>
                      </Link>
                      {pathname === item.link &&
                        section.title !== "Platform" && (
                          <div className="size-1.5 rounded-full bg-gradient-to-t from-[#FF2900] to-[#FF7A00] absolute left-[-20px] top-1/2 transform -translate-y-1/2"></div>
                        )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <ButtonUpgrade />
    </nav>
  );
}
