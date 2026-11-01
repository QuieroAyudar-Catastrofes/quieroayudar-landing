import Image from "next/image";
import { conBase } from "@/lib/rutas";

export type Icono = { src: string; ancho: number; alto: number };

export const claseTarjetaRecurso =
  "group flex h-full w-full items-center gap-4 rounded-[14px] border border-rojo bg-white p-4 text-left shadow-[0_0_7px_rgba(0,0,0,0.25),0_8px_4px_rgba(0,0,0,0.41)] transition-transform hover:-translate-y-0.5";

type ContenidoProps = {
  titulo: string;
  descripcion: string;
  icono: Icono;
};

export function ContenidoTarjetaRecurso({
  titulo,
  descripcion,
  icono,
}: ContenidoProps) {
  return (
    <>
      <Image
        src={conBase(icono.src)}
        alt=""
        width={icono.ancho}
        height={icono.alto}
        className="size-14 shrink-0 object-contain sm:size-20"
      />
      <div className="flex-1">
        <h3 className="text-lg leading-snug font-bold">{titulo}</h3>
        <p className="mt-1 text-sm text-tinta">{descripcion}</p>
      </div>
      <span
        aria-hidden
        className="text-3xl font-semibold text-rojo transition-transform group-hover:translate-x-1 sm:text-4xl"
      >
        →
      </span>
    </>
  );
}
