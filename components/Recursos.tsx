import Link from "next/link";
import TarjetaNewsletter from "@/components/TarjetaNewsletter";
import {
  ContenidoTarjetaRecurso,
  claseTarjetaRecurso,
} from "@/components/TarjetaRecurso";

const entidades = {
  titulo: "Conocé las entidades registradas",
  descripcion:
    "Encontrá puntos de donación y centros de acopio cercanos, y conocé cómo podés colaborar cuando se active una emergencia.",
  icono: { src: "/img/icono-entidades.png", ancho: 120, alto: 120 },
};

const cuidados = {
  titulo: "Informate sobre los cuidados ante una catástrofe",
  descripcion:
    "Conocé las medidas de seguridad que podés anticipar para protegerte ante un evento.",
  icono: { src: "/img/icono-cuidados.png", ancho: 108, alto: 108 },
};

const newsletter = {
  titulo: "Suscribite a nuestro Newsletter",
  descripcion:
    "Enterate a tiempo de los pedidos y sé el primero en ayudar. No enviaremos SPAM.",
  icono: { src: "/img/icono-newsletter.png", ancho: 104, alto: 104 },
};

const estadisticas = {
  titulo: "Consultá nuestras estadísticas",
  descripcion:
    "Nuestros datos son transparentes y los podés leer antes de realizar tu donación.",
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
