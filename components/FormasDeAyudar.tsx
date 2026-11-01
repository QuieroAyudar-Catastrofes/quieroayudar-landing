import { URL_APP } from "@/lib/enlaces";

const formas = [
  {
    titulo: "Donar objetos",
    descripcion: "Elegí los insumos que podés acercar a un centro de acopio.",
  },
  {
    titulo: "Ofrecer transporte",
    descripcion: "Ayudá a mover las donaciones hasta donde hacen falta.",
  },
  {
    titulo: "Ofrecer espacio",
    descripcion: "Participá como punto de acopio para recibir donaciones.",
  },
  {
    titulo: "Donar dinero",
    descripcion: "Aportá para comprar lo más urgente.",
  },
];

export default function FormasDeAyudar() {
  return (
    <section id="formas-de-ayudar" className="scroll-mt-16 bg-gris-panel">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-acento tracking-wide text-rojo uppercase">
          Tu ayuda importa
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          ¿Cómo te gustaría ayudar?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-tinta/75">
          No hace falta mucho: con tiempo, un vehículo, un espacio o una caja
          de alimentos ya podés hacer la diferencia.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {formas.map((forma) => (
            <li key={forma.titulo}>
              <a
                href={URL_APP}
                className="group flex h-full items-center justify-between gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="text-xl font-bold">{forma.titulo}</h3>
                  <p className="mt-1 text-tinta/75">{forma.descripcion}</p>
                </div>
                <span
                  aria-hidden
                  className="text-3xl font-semibold text-rojo transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
