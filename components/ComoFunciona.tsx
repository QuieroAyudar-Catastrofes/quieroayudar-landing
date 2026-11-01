import Image from "next/image";

const pasos = [
  {
    titulo: "Elegí una emergencia",
    descripcion:
      "En el mapa ves las emergencias activas y qué necesita cada zona.",
  },
  {
    titulo: "Decidí cómo ayudar",
    descripcion:
      "Doná objetos o dinero, ofrecé transporte o prestá tu espacio como punto de acopio.",
  },
  {
    titulo: "Coordiná la entrega",
    descripcion:
      "Completá tus datos y te indicamos el centro de acopio o la ruta más cercana.",
  },
  {
    titulo: "Seguí tu donación",
    descripcion:
      "Mostrá tu QR al entregar y seguí el recorrido: en espera, en camino, entregado.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-crema-claro">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-acento tracking-wide text-rojo uppercase">
          Cómo funciona
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          De las ganas de ayudar a la ayuda entregada
        </h2>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <ol className="space-y-6">
            {pasos.map((paso, i) => (
              <li key={paso.titulo} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-marino font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{paso.titulo}</h3>
                  <p className="mt-1 text-tinta/75">{paso.descripcion}</p>
                </div>
              </li>
            ))}
          </ol>
          <Image
            src="/img/app-donante.jpg"
            alt="Vista de la app: mapa de la emergencia y opciones para ayudar"
            width={1520}
            height={1024}
            className="w-full rounded-xl border border-marino/10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
