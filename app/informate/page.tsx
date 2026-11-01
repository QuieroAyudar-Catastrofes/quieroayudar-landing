import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import PestanasCuidados from "@/components/PestanasCuidados";

export const metadata: Metadata = {
  title: "Cuidados ante una catástrofe | Quiero Ayudar",
  description:
    "Qué hacer antes, durante y después de un terremoto, un incendio o una inundación.",
};

export default function InformatePage() {
  return (
    <>
      <EncabezadoPagina
        acento="Informate"
        titulo="Cuidados ante una catástrofe"
        descripcion="Qué hacer antes, durante y después. Estar preparado también es ayudar."
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <PestanasCuidados />
        <p className="mt-12 text-sm text-tinta/60">
          Ante cualquier emergencia, seguí siempre las indicaciones de Defensa
          Civil y de las autoridades locales.
        </p>
      </div>
    </>
  );
}
