import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-marino text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div>
          <p className="font-acento text-lg tracking-wide text-celeste uppercase">
            Tu ayuda importa
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Cuando hay una emergencia,{" "}
            <span className="text-crema">nadie ayuda solo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Quiero Ayudar conecta a quienes quieren donar, transportar o prestar
            un espacio con las comunidades afectadas por una catástrofe. Vos
            elegís cómo ayudar; nosotros te decimos dónde hace falta.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#formas-de-ayudar"
              className="rounded-md bg-rojo px-6 py-3 font-semibold transition-colors hover:bg-bordo"
            >
              Quiero ayudar
            </a>
            <a
              href="#como-funciona"
              className="rounded-md border border-crema/60 px-6 py-3 font-semibold text-crema transition-colors hover:bg-crema/10"
            >
              Cómo funciona
            </a>
          </div>
        </div>
        <Image
          src="/img/cajas.svg"
          alt="Cajas de donaciones listas para entregar"
          width={724}
          height={441}
          priority
          className="mx-auto w-full max-w-md md:max-w-none"
        />
      </div>
    </section>
  );
}
