"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  ContenidoTarjetaRecurso,
  claseTarjetaRecurso,
  type Icono,
} from "@/components/TarjetaRecurso";

type TarjetaNewsletterProps = {
  titulo: string;
  descripcion: string;
  icono: Icono;
};

export default function TarjetaNewsletter(props: TarjetaNewsletterProps) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const [enviado, setEnviado] = useState(false);

  function abrir() {
    setEnviado(false);
    dialogo.current?.showModal();
  }

  function cerrar() {
    dialogo.current?.close();
  }

  function suscribir(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      <button type="button" onClick={abrir} className={claseTarjetaRecurso}>
        <ContenidoTarjetaRecurso {...props} />
      </button>

      <dialog
        ref={dialogo}
        aria-labelledby="titulo-newsletter"
        onClick={(e) => e.target === dialogo.current && cerrar()}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl p-0 backdrop:bg-marino/70"
      >
        <div className="relative p-8">
          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute top-3 right-4 text-2xl text-tinta/50 hover:text-tinta"
          >
            ×
          </button>

          {enviado ? (
            <div className="py-6 text-center">
              <p className="font-acento tracking-wide text-rojo uppercase">
                ¡Gracias!
              </p>
              <h2 className="mt-2 text-2xl font-bold">Ya sos parte</h2>
              <p className="mt-3 text-tinta/75">
                Te vamos a avisar cuando una comunidad necesite ayuda.
              </p>
              <button
                type="button"
                onClick={cerrar}
                className="mt-6 rounded-md bg-marino px-6 py-3 font-semibold text-white"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={suscribir}>
              <p className="font-acento tracking-wide text-rojo uppercase">
                Newsletter
              </p>
              <h2 id="titulo-newsletter" className="mt-2 text-2xl font-bold">
                Enterate antes que nadie
              </h2>
              <p className="mt-3 text-tinta/75">
                Recibí los pedidos de ayuda apenas se activa una emergencia. No
                enviaremos SPAM.
              </p>
              <label htmlFor="email-newsletter" className="mt-6 block text-sm font-semibold">
                Tu email
              </label>
              <input
                id="email-newsletter"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="nombre@ejemplo.com"
                className="mt-2 w-full rounded-md border border-marino/25 px-4 py-3 focus:border-marino focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-rojo px-6 py-3 font-semibold text-white transition-colors hover:bg-bordo"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
