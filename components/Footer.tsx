import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-marino text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
        <Logo className="text-xl" />
        <p className="text-sm">
          © {new Date().getFullYear()} QuieroAyudar
        </p>
      </div>
    </footer>
  );
}
