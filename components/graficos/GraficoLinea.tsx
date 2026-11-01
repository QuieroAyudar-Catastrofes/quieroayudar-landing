"use client";

import { useState } from "react";
import type { Dato } from "@/lib/datos/estadisticas";

type GraficoLineaProps = {
  datos: Dato[];
  unidad: string;
};

const ANCHO = 640;
const ALTO = 260;
const MARGEN = { arriba: 16, derecha: 16, abajo: 28, izquierda: 44 };

function escalaRedonda(maximo: number) {
  const paso = Math.pow(10, Math.floor(Math.log10(maximo)));
  return Math.ceil(maximo / paso) * paso;
}

export default function GraficoLinea({ datos, unidad }: GraficoLineaProps) {
  const [activo, setActivo] = useState<number | null>(null);

  const techo = escalaRedonda(Math.max(...datos.map((d) => d.valor)));
  const anchoPlot = ANCHO - MARGEN.izquierda - MARGEN.derecha;
  const altoPlot = ALTO - MARGEN.arriba - MARGEN.abajo;
  const x = (i: number) => MARGEN.izquierda + (i / (datos.length - 1)) * anchoPlot;
  const y = (v: number) => MARGEN.arriba + altoPlot - (v / techo) * altoPlot;
  const lineasGuia = [0, 0.25, 0.5, 0.75, 1].map((f) => f * techo);

  const trazo = datos.map((d, i) => `${i ? "L" : "M"}${x(i)},${y(d.valor)}`).join(" ");
  const area = `${trazo} L${x(datos.length - 1)},${y(0)} L${x(0)},${y(0)} Z`;
  const punto = activo !== null ? datos[activo] : null;
  const ultimo = datos.length - 1;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${ANCHO} ${ALTO}`}
        className="w-full"
        role="img"
        aria-label={`Evolución mensual de ${unidad}`}
        onMouseLeave={() => setActivo(null)}
      >
        {lineasGuia.map((v) => (
          <g key={v}>
            <line
              x1={MARGEN.izquierda}
              x2={ANCHO - MARGEN.derecha}
              y1={y(v)}
              y2={y(v)}
              className="stroke-marino/10"
            />
            <text
              x={MARGEN.izquierda - 8}
              y={y(v) + 4}
              textAnchor="end"
              className="fill-tinta/50 text-[11px]"
            >
              {v.toLocaleString("es-AR")}
            </text>
          </g>
        ))}
        {datos.map((d, i) => (
          <text
            key={d.etiqueta}
            x={x(i)}
            y={ALTO - 8}
            textAnchor="middle"
            className="fill-tinta/50 text-[11px]"
          >
            {d.etiqueta}
          </text>
        ))}

        <path d={area} className="fill-rojo/10" />
        <path d={trazo} fill="none" strokeWidth={2} className="stroke-rojo" />

        <circle cx={x(ultimo)} cy={y(datos[ultimo].valor)} r={4} className="fill-rojo stroke-white" strokeWidth={2} />
        <text
          x={x(ultimo) - 8}
          y={y(datos[ultimo].valor) - 10}
          textAnchor="end"
          className="fill-tinta text-[12px] font-semibold"
        >
          {datos[ultimo].valor.toLocaleString("es-AR")}
        </text>

        {punto && activo !== null && (
          <g>
            <line
              x1={x(activo)}
              x2={x(activo)}
              y1={MARGEN.arriba}
              y2={y(0)}
              className="stroke-tinta/30"
              strokeDasharray="3 3"
            />
            <circle cx={x(activo)} cy={y(punto.valor)} r={5} className="fill-rojo stroke-white" strokeWidth={2} />
          </g>
        )}

        {datos.map((d, i) => (
          <rect
            key={d.etiqueta}
            x={x(i) - anchoPlot / (datos.length - 1) / 2}
            y={MARGEN.arriba}
            width={anchoPlot / (datos.length - 1)}
            height={altoPlot}
            fill="transparent"
            onMouseEnter={() => setActivo(i)}
          />
        ))}
      </svg>

      {punto && activo !== null && (
        <div
          role="tooltip"
          className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 rounded-md bg-tinta px-3 py-1.5 text-xs whitespace-nowrap text-white shadow-lg"
          style={{ left: `${(x(activo) / ANCHO) * 100}%` }}
        >
          <strong>{punto.etiqueta}</strong> · {punto.valor.toLocaleString("es-AR")}{" "}
          {unidad}
        </div>
      )}
    </div>
  );
}
