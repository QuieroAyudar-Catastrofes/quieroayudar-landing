import Image from "next/image";
import { conBase } from "@/lib/rutas";

const pasos = [
  {
    titulo: "Se publica la emergencia",
    descripcion: "Un ente oficial informa qué insumos hacen falta.",
  },
  {
    titulo: "Elegís qué llevar",
    descripcion: "Ves la lista y el centro de acopio más cercano.",
  },
  {
    titulo: "Lo llevás o te ayudan",
    descripcion: "Si no podés moverte, un transportista lo lleva.",
  },
  {
    titulo: "Seguís tu donación",
    descripcion: "Con un QR sabés cuándo llegó.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-crema-claro">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="tracking-wide text-rojo uppercase">
          Cómo funciona
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          De tus manos a quien lo necesita
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
            src={conBase("/img/app-donante.jpg")}
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
