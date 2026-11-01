export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function conBase(ruta: string) {
  return `${BASE_PATH}${ruta}`;
}
