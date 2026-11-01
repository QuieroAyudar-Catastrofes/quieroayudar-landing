const preguntas = [
  { pregunta: "¿Qué necesitan?", respuesta: "Los entes oficiales publicarán una lista de insumos que mantendrán actualizada." },
  { pregunta: "¿Dónde lo llevo?", respuesta: "Podrás visualizar los centros de acopio cerca tuyo y alguien lo puede llevar por vos." },
  { pregunta: "¿Si no puedo donar?", respuesta: "Podrás ofrecerte como mano de obra o transportista para llevar las donaciones a destino" },
];

export default function PorQueSumarte() {
  return (
    <section className="bg-crema">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Querés ayudar. <span className="text-rojo">Nosotros te decimos cómo.</span>
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {preguntas.map((p) => (
            <li
              key={p.pregunta}
              className="rounded-xl border-t-4 border-rojo bg-crema-claro px-6 py-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{p.pregunta}</h3>
              <p className="mt-2 text-lg text-tinta/75">{p.respuesta}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-light text-lg tracking-wide text-marino uppercase">
          Una red autogestiva y sin fines de lucro
        </p>
      </div>
    </section>
  );
}
