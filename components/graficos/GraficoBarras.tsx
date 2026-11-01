"use client";

import { useState } from "react";
import type { Dato } from "@/lib/datos/estadisticas";

type GraficoBarrasProps = {
  datos: Dato[];
  unidad: string;
};

export default function GraficoBarras({ datos, unidad }: GraficoBarrasProps) {
  const [activo, setActivo] = useState<string | null>(null);
  const maximo = Math.max(...datos.map((d) => d.valor));
  const total = datos.reduce((suma, d) => suma + d.valor, 0);

  return (
    <ul className="space-y-0.5">
      {datos.map((d) => {
        const porcentaje = Math.round((d.valor / total) * 100);
        return (
          <li
            key={d.etiqueta}
            onMouseEnter={() => setActivo(d.etiqueta)}
            onMouseLeave={() => setActivo(null)}
            className="relative grid grid-cols-[7.5rem_1fr] items-center gap-3 rounded-md py-1.5 sm:grid-cols-[10rem_1fr]"
          >
            <span className="truncate text-sm text-tinta/80">{d.etiqueta}</span>
            <div className="flex items-center gap-2">
              <div
                className={`h-5 rounded-r-[4px] bg-rojo transition-opacity ${
                  activo && activo !== d.etiqueta ? "opacity-40" : ""
                }`}
                style={{ width: `${(d.valor / maximo) * 85}%` }}
              />
              <span className="text-sm text-tinta/70 tabular-nums">
                {d.valor.toLocaleString("es-AR")}
              </span>
            </div>
            {activo === d.etiqueta && (
              <div
                role="tooltip"
                className="pointer-events-none absolute -top-9 left-1/2 z-10 rounded-md bg-tinta px-3 py-1.5 text-xs whitespace-nowrap text-white shadow-lg"
              >
                <strong>{d.etiqueta}</strong> ·{" "}
                {d.valor.toLocaleString("es-AR")} {unidad} ({porcentaje}% del
                total)
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
