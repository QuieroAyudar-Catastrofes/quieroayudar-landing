import type { Metadata } from "next";
import type { ReactNode } from "react";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import GraficoBarras from "@/components/graficos/GraficoBarras";
import GraficoLinea from "@/components/graficos/GraficoLinea";
import TablaDatos from "@/components/graficos/TablaDatos";
import {
  donacionesPorMes,
  resumen,
  tiposDeAyuda,
  zonasConMasAyuda,
} from "@/lib/datos/estadisticas";

export const metadata: Metadata = {
  title: "Estadísticas | Quiero Ayudar",
  description:
    "Datos abiertos sobre las donaciones, las personas que ayudan y las zonas que más ayuda recibieron.",
};

function Tarjeta({
  titulo,
  subtitulo,
  children,
}: {
  titulo: string;
  subtitulo: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">{titulo}</h2>
      <p className="mt-1 mb-6 text-sm text-tinta/60">{subtitulo}</p>
      {children}
    </section>
  );
}

export default function EstadisticasPage() {
  return (
    <>
      <EncabezadoPagina
        acento="Transparencia"
        titulo="Nuestras estadísticas"
        descripcion="Lo que logramos juntos en los últimos 12 meses."
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-16">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {resumen.map((r) => (
            <li key={r.etiqueta} className="rounded-xl bg-marino p-5 text-white">
              <p className="text-3xl font-bold tabular-nums sm:text-4xl">
                {r.valor.toLocaleString("es-AR")}
              </p>
              <p className="mt-1 text-sm text-white/75">{r.etiqueta}</p>
            </li>
          ))}
        </ul>

        <Tarjeta
          titulo="Donaciones entregadas por mes"
          subtitulo="Noviembre 2025 – octubre 2026"
        >
          <GraficoLinea datos={donacionesPorMes} unidad="donaciones" />
          <TablaDatos datos={donacionesPorMes} columna="Mes" unidad="Donaciones" />
        </Tarjeta>

        <div className="grid gap-6 lg:grid-cols-2">
          <Tarjeta
            titulo="Zonas con más ayuda"
            subtitulo="Donaciones entregadas por provincia"
          >
            <GraficoBarras datos={zonasConMasAyuda} unidad="donaciones" />
            <TablaDatos datos={zonasConMasAyuda} columna="Provincia" unidad="Donaciones" />
          </Tarjeta>
          <Tarjeta
            titulo="¿Cómo ayuda la gente?"
            subtitulo="Aportes según el tipo de ayuda"
          >
            <GraficoBarras datos={tiposDeAyuda} unidad="aportes" />
            <TablaDatos datos={tiposDeAyuda} columna="Tipo de ayuda" unidad="Aportes" />
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
