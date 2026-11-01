"use client";

import { useState } from "react";
import { cuidados } from "@/lib/datos/cuidados";

export default function PestanasCuidados() {
  const [activa, setActiva] = useState(cuidados[0].id);
  const cuidado = cuidados.find((c) => c.id === activa) ?? cuidados[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Tipo de emergencia"
        className="flex gap-2 overflow-x-auto overflow-y-hidden border-b border-marino/15"
      >
        {cuidados.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={activa === c.id}
            aria-controls={`panel-${c.id}`}
            onClick={() => setActiva(c.id)}
            className={`-mb-px border-b-4 px-4 py-3 font-semibold whitespace-nowrap transition-colors ${
              activa === c.id
                ? "border-rojo text-rojo"
                : "border-transparent text-tinta/70 hover:text-tinta"
            }`}
          >
            {c.nombre}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${cuidado.id}`}
        aria-labelledby={`tab-${cuidado.id}`}
        className="pt-8"
      >
        <p className="max-w-3xl text-lg text-tinta/80">{cuidado.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cuidado.etapas.map((etapa) => (
            <section
              key={etapa.titulo}
              className="rounded-xl border-t-4 border-marino bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold">{etapa.titulo}</h2>
              <ul className="mt-4 space-y-3">
                {etapa.consejos.map((consejo) => (
                  <li key={consejo} className="flex gap-3 text-tinta/85">
                    <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-rojo" />
                    {consejo}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
