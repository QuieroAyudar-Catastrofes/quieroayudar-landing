export type Dato = { etiqueta: string; valor: number };

export const resumen = [
  { etiqueta: "Donaciones entregadas", valor: 12480 },
  { etiqueta: "Personas que ayudaron", valor: 3215 },
  { etiqueta: "Centros de acopio activos", valor: 148 },
  { etiqueta: "Emergencias atendidas", valor: 27 },
];

export const donacionesPorMes: Dato[] = [
  { etiqueta: "Nov", valor: 420 },
  { etiqueta: "Dic", valor: 610 },
  { etiqueta: "Ene", valor: 980 },
  { etiqueta: "Feb", valor: 1420 },
  { etiqueta: "Mar", valor: 1180 },
  { etiqueta: "Abr", valor: 760 },
  { etiqueta: "May", valor: 690 },
  { etiqueta: "Jun", valor: 840 },
  { etiqueta: "Jul", valor: 1050 },
  { etiqueta: "Ago", valor: 1260 },
  { etiqueta: "Sep", valor: 1530 },
  { etiqueta: "Oct", valor: 1740 },
];

export const zonasConMasAyuda: Dato[] = [
  { etiqueta: "Mendoza", valor: 2860 },
  { etiqueta: "Córdoba", valor: 2310 },
  { etiqueta: "Buenos Aires", valor: 1970 },
  { etiqueta: "Corrientes", valor: 1420 },
  { etiqueta: "Santa Fe", valor: 1180 },
  { etiqueta: "Río Negro", valor: 960 },
  { etiqueta: "Salta", valor: 740 },
];

export const tiposDeAyuda: Dato[] = [
  { etiqueta: "Donación de objetos", valor: 7350 },
  { etiqueta: "Donación de dinero", valor: 2640 },
  { etiqueta: "Transporte", valor: 1610 },
  { etiqueta: "Espacio de acopio", valor: 880 },
];
