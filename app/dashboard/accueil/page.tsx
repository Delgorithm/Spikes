import Functionalities from "@/components/dashboard/ui/functionalities";
import Hero from "@/components/dashboard/ui/hero";
import Navbar from "@/components/dashboard/ui/navbar";
import Pricing from "@/components/dashboard/ui/pricing";
import Reviews from "@/components/dashboard/ui/reviews";
import SocialProof from "@/components/dashboard/ui/social-proof";

export default function AccueilPage() {
  return (
    <section className="mt-6">
      <Navbar />
      <Hero />
      <SocialProof />
      <Functionalities />
      <Reviews />
      <Pricing />
    </section>
  );
}
