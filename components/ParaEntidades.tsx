import { URL_REGISTRO_ENTIDAD } from "@/lib/enlaces";

const tipos = [
  {
    titulo: "Entes oficiales",
    quienes: "Defensa Civil, bomberos, municipios",
    tareas: [
      "Crean emergencias",
      "Publican y actualizan los insumos que faltan",
      "Certifican centros de acopio",
      "Consultan sus estadísticas",
    ],
  },
  {
    titulo: "Organizaciones",
    quienes: "Clubes, parroquias, ONG, comedores",
    tareas: [
      "Abren un centro de acopio",
      "Reciben donaciones de todo tipo",
      "Consiguen voluntarios y transporte",
      "Difunden todo en un mismo lugar",
    ],
  },
];

export default function ParaEntidades() {
  return (
    <section id="para-entidades" className="scroll-mt-16 bg-marino text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="tracking-wide text-celeste uppercase">
          Para entidades
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">
          Menos tiempo coordinando, más ayuda llegando
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tipos.map((tipo) => (
            <article
              key={tipo.titulo}
              className="rounded-xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold">{tipo.titulo}</h3>
              <p className="mt-1 text-celeste">{tipo.quienes}</p>
              <ul className="mt-6 space-y-3">
                {tipo.tareas.map((tarea) => (
                  <li key={tarea} className="flex gap-3">
                    <span aria-hidden className="font-bold text-rojo">
                      ✓
                    </span>
                    {tarea}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 rounded-xl bg-crema p-8 text-tinta sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-2xl font-bold">Sumá tu entidad a la red</h3>
          <a
            href={URL_REGISTRO_ENTIDAD}
            className="shrink-0 rounded-md bg-rojo px-6 py-3 font-semibold text-white transition-colors hover:bg-bordo"
          >
            Registrar mi entidad
          </a>
        </div>
      </div>
    </section>
  );
}
