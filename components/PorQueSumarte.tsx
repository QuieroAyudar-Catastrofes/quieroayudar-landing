const razones = [
  {
    titulo: "Tu ayuda llega a destino",
    descripcion:
      "Cada donación tiene un código QR que se escanea en cada paso: sabés cuándo está en camino y cuándo fue entregada.",
  },
  {
    titulo: "Ayudás con lo que hace falta",
    descripcion:
      "Los centros de acopio publican qué insumos necesitan, para que nada sobre y nada falte.",
  },
  {
    titulo: "Todo es transparente",
    descripcion:
      "Nuestras estadísticas son públicas y las podés consultar antes de donar.",
  },
];

export default function PorQueSumarte() {
  return (
    <section className="bg-crema">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
          Una red de personas que no mira para otro lado
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-tinta/75">
          Vecinos, instituciones y transportistas que se organizan para que la
          ayuda llegue rápido y a quien la necesita. Sumarte es simple, y cada
          aporte cuenta.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {razones.map((razon) => (
            <li
              key={razon.titulo}
              className="rounded-xl border-t-4 border-rojo bg-crema-claro p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold">{razon.titulo}</h3>
              <p className="mt-2 text-tinta/75">{razon.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
