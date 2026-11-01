import Link from "next/link";
import Logo from "@/components/Logo";
import { URL_REGISTRO } from "@/lib/enlaces";

const links = [
  { href: "/#como-funciona", texto: "Cómo funciona" },
  { href: "/#formas-de-ayudar", texto: "Formas de ayudar" },
  { href: "/#para-entidades", texto: "Para entidades" },
  { href: "/#recursos", texto: "Recursos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-marino">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 pt-6">
        <Link href="/" className="text-xl sm:text-2xl">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-light text-white/90 transition-colors hover:text-white"
            >
              {link.texto}
            </Link>
          ))}
        </nav>
        <a
          href={URL_REGISTRO}
          className="rounded-md bg-rojo px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-bordo"
        >
          Registrarse
        </a>
      </div>
    </header>
  );
}
