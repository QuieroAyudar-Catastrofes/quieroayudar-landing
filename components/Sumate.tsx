import { URL_REGISTRO } from "@/lib/enlaces";

export default function Sumate() {
  return (
    <section className="bg-bordo text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">
          La próxima emergencia no avisa.{" "}
          <span className="text-crema">Tu ayuda puede estar lista.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Registrate hoy y te avisamos cuando tu comunidad te necesite. Ser
          parte lleva un minuto; el impacto dura mucho más.
        </p>
        <a
          href={URL_REGISTRO}
          className="mt-10 rounded-md bg-crema px-8 py-4 text-lg font-bold text-bordo transition-colors hover:bg-white"
        >
          Quiero ser parte
        </a>
      </div>
    </section>
  );
}
