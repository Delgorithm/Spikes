import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section
      id="faq"
      className="text-white flex flex-col justify-center items-center"
    >
      <Accordion type="single" collapsible className="w-2/3">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
            Quels types de composants sont inclus dans la librairie ?
          </AccordionTrigger>
          <AccordionContent className=" pt-4">
            Notre librairie propose une gamme complète de composants allant des
            éléments UI essentiels, comme les boutons et les formulaires, aux
            composants plus avancés, tels que les tableaux de données, les
            cartes interactives et les animations dynamiques.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg bg-gradient-to-tl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
            Puis-je personnaliser les styles des composants pour les adapter à
            mon design ?
          </AccordionTrigger>
          <AccordionContent className=" pt-4">
            Oui, tous nos composants sont hautement personnalisables et conçus
            pour s’adapter aux exigences de votre projet. Grâce à notre
            documentation, ajuster les styles est simple et rapide.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg bg-gradient-to-bl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
            La librairie est-elle compatible avec tous les frameworks JavaScript
            ?
          </AccordionTrigger>
          <AccordionContent className=" pt-4">
            L’intégration est simple. Après avoir installé la librairie via npm
            ou yarn, vous pouvez importer les composants directement dans votre
            projet en suivant les instructions claires fournies dans notre
            documentation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg bg-gradient-to-bl from-[#7E7F81] to-[#FFFFFF] bg-clip-text text-transparent">
            Puis-je essayer les composants avant de les utiliser ?
          </AccordionTrigger>
          <AccordionContent className=" pt-4">
            Absolument ! Nous proposons une démo interactive où vous pouvez
            tester chaque composant et explorer leurs différentes options avant
            de les intégrer dans votre projet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
