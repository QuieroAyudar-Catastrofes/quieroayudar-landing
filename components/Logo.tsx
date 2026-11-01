type LogoProps = {
  fondo?: "oscuro" | "claro";
  className?: string;
};

export default function Logo({ fondo = "oscuro", className = "" }: LogoProps) {
  return (
    <span
      className={`font-logo leading-none tracking-[-0.07em] whitespace-nowrap ${className}`}
      aria-label="Quiero Ayudar"
    >
      <span className={fondo === "oscuro" ? "text-white" : "text-tinta"}>
        Quiero
      </span>
      <span className="text-[1.13em] text-rojo-logo">Ayudar</span>
    </span>
  );
}
