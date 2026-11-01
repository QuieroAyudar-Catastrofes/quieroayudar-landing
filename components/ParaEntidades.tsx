import { URL_REGISTRO_ENTIDAD } from "@/lib/enlaces";

const beneficios = [
  {
    titulo: "Creá nuevas emergencias",
    descripcion:
      "Activá una emergencia en minutos y la comunidad la ve al instante en el mapa.",
  },
  {
    titulo: "Pedí exactamente lo que falta",
    descripcion:
      "Informá y actualizá la lista de insumos requeridos para que nada sobre y nada falte.",
  },
  {
    titulo: "Certificá centros de acopio",
    descripcion:
      "Validá los puntos de recepción para que la gente done con confianza.",
  },
  {
    titulo: "Consultá tus estadísticas",
    descripcion:
      "Mirá cuánto se recibió, qué se entregó y dónde, para decidir con datos.",
  },
  {
    titulo: "Ahorrá tiempo y transporte",
    descripcion:
      "Coordiná donantes, transportistas y centros desde un solo lugar y llegá antes.",
  },
  {
    titulo: "Toda la difusión en un mismo lugar",
    descripcion:
      "Un único canal oficial para tus pedidos, en lugar de mensajes dispersos en redes.",
  },
];

export default function ParaEntidades() {
  return (
    <section id="para-entidades" className="scroll-mt-16 bg-marino text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-acento tracking-wide text-celeste uppercase">
          Para entidades
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">
          ¿Sos Defensa Civil, bomberos o una organización que responde ante
          emergencias?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Quiero Ayudar es la herramienta para coordinar la ayuda cuando más se
          necesita. Registrá tu entidad y gestioná toda la respuesta solidaria
          desde un solo panel.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <li
              key={b.titulo}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <span className="font-acento text-sm text-celeste">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-bold">{b.titulo}</h3>
              <p className="mt-2 text-white/75">{b.descripcion}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-xl bg-crema p-8 text-tinta sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Sumá tu entidad a la red
            </h3>
            <p className="mt-1 text-tinta/75">
              El registro es gratuito. Cuanto antes estés, más rápido vas a
              poder responder.
            </p>
          </div>
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
