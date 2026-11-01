import type { Dato } from "@/lib/datos/estadisticas";

type TablaDatosProps = {
  datos: Dato[];
  columna: string;
  unidad: string;
};

export default function TablaDatos({ datos, columna, unidad }: TablaDatosProps) {
  return (
    <details className="mt-4 text-sm">
      <summary className="cursor-pointer text-tinta/60 hover:text-tinta">
        Ver como tabla
      </summary>
      <table className="mt-3 w-full max-w-sm">
        <thead>
          <tr className="border-b border-marino/15 text-left text-tinta/60">
            <th className="py-1 font-semibold">{columna}</th>
            <th className="py-1 text-right font-semibold">{unidad}</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((d) => (
            <tr key={d.etiqueta} className="border-b border-marino/5">
              <td className="py-1">{d.etiqueta}</td>
              <td className="py-1 text-right tabular-nums">
                {d.valor.toLocaleString("es-AR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}
