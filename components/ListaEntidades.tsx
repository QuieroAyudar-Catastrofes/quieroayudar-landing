"use client";

import { useState } from "react";
import { entidades, type TipoEntidad } from "@/lib/datos/entidades";

const tipos: Array<TipoEntidad | "Todas"> = ["Todas", "Defensa Civil", "Bomberos"];
const provincias = [
  "Todas",
  ...Array.from(new Set(entidades.map((e) => e.provincia))).sort(),
];

export default function ListaEntidades() {
  const [tipo, setTipo] = useState<(typeof tipos)[number]>("Todas");
  const [provincia, setProvincia] = useState("Todas");

  const filtradas = entidades.filter(
    (e) =>
      (tipo === "Todas" || e.tipo === tipo) &&
      (provincia === "Todas" || e.provincia === provincia),
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {tipos.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTipo(t)}
            aria-pressed={tipo === t}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tipo === t
                ? "bg-marino text-white"
                : "bg-white text-tinta hover:bg-gris-panel"
            }`}
          >
            {t}
          </button>
        ))}
        <label className="ml-auto flex items-center gap-2 text-sm">
          Provincia
          <select
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            className="rounded-md border border-marino/20 bg-white px-3 py-2"
          >
            {provincias.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-tinta/60">
        {filtradas.length} entidades
      </p>
      <ul className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtradas.map((e) => (
          <li
            key={e.nombre}
            className="flex flex-col rounded-xl border-t-4 border-rojo bg-white p-5 shadow-sm"
          >
            <span className="font-acento text-xs tracking-wide text-rojo uppercase">
              {e.tipo}
            </span>
            <h3 className="mt-1 text-lg leading-snug font-bold">{e.nombre}</h3>
            <p className="text-sm text-tinta/60">
              {e.localidad}, {e.provincia}
            </p>
            <p className="mt-3 flex-1 text-tinta/80">{e.descripcion}</p>
            <a
              href={`tel:${e.telefono}`}
              className="mt-4 self-start rounded-md bg-marino px-3 py-1.5 text-sm font-semibold text-white"
            >
              Emergencias: {e.telefono}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
