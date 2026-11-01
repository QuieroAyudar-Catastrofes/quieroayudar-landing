import Link from "next/link";

type EncabezadoPaginaProps = {
  acento: string;
  titulo: string;
  descripcion: string;
};

export default function EncabezadoPagina({
  acento,
  titulo,
  descripcion,
}: EncabezadoPaginaProps) {
  return (
    <section className="bg-marino text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Link
          href="/#recursos"
          className="text-sm text-white/70 transition-colors hover:text-white"
        >
          ← Volver al inicio
        </Link>
        <p className="mt-6 font-acento tracking-wide text-celeste uppercase">
          {acento}
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-5xl">{titulo}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{descripcion}</p>
      </div>
    </section>
  );
}
