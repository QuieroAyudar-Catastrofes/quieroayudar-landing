import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import ListaEntidades from "@/components/ListaEntidades";

export const metadata: Metadata = {
  title: "Entidades registradas | Quiero Ayudar",
  description:
    "Defensa Civil y cuerpos de bomberos de distintas provincias que trabajan junto a Quiero Ayudar.",
};

export default function EntidadesPage() {
  return (
    <>
      <EncabezadoPagina
        acento="Entidades registradas"
        titulo="Quienes están en la primera línea"
        descripcion="Los entes oficiales que publican emergencias e insumos. Sabé a quién llamar."
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <ListaEntidades />
        <div className="mt-12 rounded-xl bg-crema p-6">
          <h2 className="text-xl font-bold">Números de emergencia en todo el país</h2>
          <p className="mt-2 text-tinta/80">
            <strong>100</strong> Bomberos · <strong>103</strong> Defensa Civil ·{" "}
            <strong>107</strong> Emergencias médicas · <strong>911</strong>{" "}
            Emergencias
          </p>
        </div>
      </div>
    </>
  );
}
