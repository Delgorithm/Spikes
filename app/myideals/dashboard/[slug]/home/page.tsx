"use client";

import BtnLogout from "@/features/auth/btn-logout";

export default function HomePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <section>
      <h1>Welcome : {slug}</h1>
      <BtnLogout redirection="/myideals/accueil" />
    </section>
  );
}
