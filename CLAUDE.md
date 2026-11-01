@AGENTS.md

# quieroayudar-landing

Landing page estática de Quiero Ayudar. Proyectos hermanos: `../quieroayudar-client`, `../quieroayudar-admin`, `../quieroayudar-backend`.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (configuración en `app/globals.css` con `@theme`, no hay `tailwind.config`)
- `output: "export"` en `next.config.ts`: `npm run build` genera el sitio estático en `out/`

## Comandos
- `npm run dev` — servidor de desarrollo (http://localhost:3000)
- `npm run build` — build estático en `out/`
- `npm run lint` — ESLint

Después de cada cambio, correr `npm run lint` y `npm run build` y que ambos pasen.

## Convenciones
- Textos en español rioplatense (voseo: "elegí", "sumate").
- Secciones de la landing como componentes en `components/` (PascalCase, `export default`), importadas en `app/page.tsx` con el alias `@/`.
- Estilos solo con clases de Tailwind. Colores solo vía los tokens de marca definidos en `app/globals.css` (`marino`, `rojo`, `bordo`, `crema`, `crema-claro`, `celeste`, `tinta`…), nunca hex sueltos.
- Fuentes: `font-sans` (Inter) para texto, `font-logo` (Boldonse) solo para el logo, `font-acento` (Inder) para los textos chicos en mayúsculas tipo "TU AYUDA IMPORTA".
- El logo es el componente `components/Logo.tsx` (texto en Boldonse, no imagen).
- Diseño de referencia: Figma "catastrofe", página "landing" (https://www.figma.com/design/CC5q6f3jNhIa9AXlkP7ech/catastrofe?node-id=516-101). Assets en `public/img/`.
- Enlaces a la app centralizados en `lib/enlaces.ts`.
- Server Components por defecto; `"use client"` solo si hace falta interactividad.

## Restricciones (por la exportación estática)
No usar: Server Actions, Route Handlers con `Request`, `cookies()`, rewrites/redirects/headers en `next.config`, proxy, ISR, ni rutas dinámicas sin `generateStaticParams()`. Ver `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`.
