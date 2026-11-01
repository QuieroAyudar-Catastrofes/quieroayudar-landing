import Link from "next/link";
import TarjetaNewsletter from "@/components/TarjetaNewsletter";
import {
  ContenidoTarjetaRecurso,
  claseTarjetaRecurso,
} from "@/components/TarjetaRecurso";

const entidades = {
  titulo: "Entidades registradas",
  descripcion: "Defensa Civil y bomberos de cada provincia.",
  icono: { src: "/img/icono-entidades.png", ancho: 120, alto: 120 },
};

const cuidados = {
  titulo: "Cuidados ante una catástrofe",
  descripcion: "Qué hacer antes, durante y después.",
  icono: { src: "/img/icono-cuidados.png", ancho: 108, alto: 108 },
};

const newsletter = {
  titulo: "Newsletter",
  descripcion: "Enterate a tiempo de cada pedido. Sin spam.",
  icono: { src: "/img/icono-newsletter.png", ancho: 104, alto: 104 },
};

const estadisticas = {
  titulo: "Estadísticas",
  descripcion: "Datos abiertos para donar con confianza.",
  icono: { src: "/img/icono-estadisticas.png", ancho: 120, alto: 120 },
};

export default function Recursos() {
  return (
    <section id="recursos" className="scroll-mt-16 bg-crema-claro">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Estar preparados también es ayudar
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          <li>
            <Link href="/entidades" className={claseTarjetaRecurso}>
              <ContenidoTarjetaRecurso {...entidades} />
            </Link>
          </li>
          <li>
            <Link href="/informate" className={claseTarjetaRecurso}>
              <ContenidoTarjetaRecurso {...cuidados} />
            </Link>
          </li>
          <li>
            <TarjetaNewsletter {...newsletter} />
          </li>
          <li>
            <Link
              href="/estadisticas"
              target="_blank"
              rel="noopener"
              className={claseTarjetaRecurso}
            >
              <ContenidoTarjetaRecurso {...estadisticas} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
