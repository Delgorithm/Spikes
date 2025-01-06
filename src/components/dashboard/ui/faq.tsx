import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqQuestion = [
    {
      question: "À qui s'adresse MyIDeals ?",
      answer:
        "MyIDeals est conçu pour les freelances, les entrepreneurs indépendants, les start-ups, et les petites entreprises souhaitenant mieux gérer leurs finances et leurs devis.",
    },
    {
      question: "Pourquoi devrais-je utiliser MyIDeals ?",
      answer:
        "Si vous souhaitez gagner du temps, suivre vos devis et revenus sans effort, et éviter les erreurs dans la gestion de vos finances, notre solution est faite pour vous.",
    },
    {
      question: "Que puis-je suivre avec MyIDeals ?",
      answer:
        "Vous pouvez suivre l’état de vos devis (en cours, acceptés, en attente de confirmation, refusés), surveiller les entreprises clientes, consulter les montants associés, et télécharger vos données sous format PDF.",
    },
    {
      question: "Mes données financières sont-elles en sécurité ?",
      answer:
        "Oui, la sécurité de vos données est notre priorité. Toutes les données sont cryptées et stockées de manière sécurisée.",
    },
    {
      question: "Partagez-vous mes informations avec des tiers ?",
      answer:
        "Non, vos données restent strictement confidentielles. Nous ne partageons jamais vos informations avec des tiers.",
    },
    {
      question: "Puis-je sauvegarder mes données en dehors de la plateforme ?",
      answer:
        "Oui, vous pouvez exporter vos données à tout moment, au format PDF ou CSV.",
    },
    {
      question: "Y a-t-il un essai gratuit ?",
      answer:
        "Oui, profitez de 30 jours d’essai gratuit pour explorer toutes les fonctionnalités avant de vous engager.",
    },
    {
      question: "Sur quels appareils puis-je utiliser MyIDeals",
      answer:
        "MyIDeals est disponible sur tous les appareils : ordinateurs, tablettes et smartphones.",
    },
  ];

  return (
    <section className="px-24 flex flex-col justify-center items-center mt-[80px]">
      <p className="text-2xl font-semibold mb-10 w-full">
        Des questions ? Des réponses !
      </p>
      {faqQuestion.map((item) => (
        <Accordion
          type="single"
          collapsible
          key={item.question}
          className="w-[70%] mx-12"
        >
          <AccordionItem value={item.question} className="flex flex-col">
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
