import FormConnection from "@/features/auth/form-connection-myideals";

export default function Connexion() {
  return (
    <section className="grid grid-cols-2 h-screen">
      <div className="h-full flex flex-col justify-center items-center">
        <h1>Connexion</h1>
        <p>Bon retour !</p>
        <FormConnection />
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        Image
      </div>
    </section>
  );
}
