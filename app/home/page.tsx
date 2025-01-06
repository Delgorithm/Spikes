import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 h-screen ">
      <Link href="/component-library/accueil" prefetch={true}>
        <Card className="px-8 py-14 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
          Librairie de composants
        </Card>
      </Link>
      <Link href="/myideals/accueil" prefetch={true}>
        <Card className="px-20 py-14 text-center hover:bg-neutral-100 hover:scale-105 transition-all ease-in-out">
          Dashboard
        </Card>
      </Link>
    </section>
  );
}
