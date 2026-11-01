export type Etapa = { titulo: string; consejos: string[] };

export type Cuidado = {
  id: string;
  nombre: string;
  intro: string;
  etapas: Etapa[];
};

export const cuidados: Cuidado[] = [
  {
    id: "basicos",
    nombre: "Básicos",
    intro:
      "Lo que conviene tener resuelto antes de cualquier emergencia. Prepararse lleva una tarde y puede hacer toda la diferencia.",
    etapas: [
      {
        titulo: "Armá tu kit de emergencia",
        consejos: [
          "Agua potable: al menos 3 litros por persona por día, para 3 días.",
          "Alimentos no perecederos que no necesiten cocción.",
          "Linterna, radio a pilas y pilas de repuesto.",
          "Botiquín de primeros auxilios y medicación habitual.",
          "Copias de documentos en una bolsa impermeable.",
          "Cargador portátil, algo de efectivo, silbato y abrigo.",
        ],
      },
      {
        titulo: "Hacé un plan familiar",
        consejos: [
          "Acordá un punto de encuentro fuera de casa y otro fuera del barrio.",
          "Definí quién busca a los chicos, adultos mayores y mascotas.",
          "Sabé cómo cortar el gas, la luz y el agua.",
          "Tené un contacto de referencia que viva en otra ciudad.",
        ],
      },
      {
        titulo: "Números que tenés que saber",
        consejos: [
          "100 · Bomberos",
          "103 · Defensa Civil",
          "107 · Emergencias médicas (SAME)",
          "911 · Emergencias",
        ],
      },
    ],
  },
  {
    id: "terremoto",
    nombre: "Terremoto",
    intro:
      "En zonas sísmicas como Mendoza, San Juan o Salta, saber qué hacer en los primeros segundos protege tu vida.",
    etapas: [
      {
        titulo: "Antes",
        consejos: [
          "Fijá a la pared muebles altos, estantes y calefones.",
          "Identificá en cada ambiente un lugar seguro: debajo de una mesa firme o junto a una columna.",
          "No pongas objetos pesados sobre camas o sillones.",
        ],
      },
      {
        titulo: "Durante",
        consejos: [
          "Agachate, cubrite y sujetate debajo de un mueble firme.",
          "Alejate de ventanas, espejos y objetos que puedan caer.",
          "No uses ascensores ni corras hacia la salida mientras tiembla.",
          "Si estás en la calle, alejate de edificios, postes y cables.",
        ],
      },
      {
        titulo: "Después",
        consejos: [
          "Esperá a que termine y salí con calma: puede haber réplicas.",
          "Si sentís olor a gas, no prendas luces ni fósforos; cortá la llave y ventilá.",
          "Usá el teléfono solo para emergencias y seguí la información oficial.",
        ],
      },
    ],
  },
  {
    id: "incendio",
    nombre: "Incendio",
    intro:
      "Tanto en casa como en zonas de bosque o pastizal, el fuego avanza rápido. Prevenir y actuar sin demora es clave.",
    etapas: [
      {
        titulo: "Antes",
        consejos: [
          "Revisá instalaciones eléctricas y de gas; no sobrecargues enchufes.",
          "Tené un matafuego en casa y aprendé a usarlo.",
          "En zonas rurales o de montaña, no hagas fuego al aire libre ni quemes basura.",
          "Mantené limpio de pasto seco y ramas el perímetro de tu casa.",
        ],
      },
      {
        titulo: "Durante",
        consejos: [
          "Llamá al 100 apenas veas fuego o humo.",
          "Salí agachado, donde hay menos humo, y cubrite nariz y boca con un paño húmedo.",
          "Antes de abrir una puerta, tocala: si está caliente, buscá otra salida.",
          "Nunca uses ascensores ni vuelvas a entrar a buscar objetos.",
          "En un incendio forestal, alejate en dirección contraria al viento.",
        ],
      },
      {
        titulo: "Después",
        consejos: [
          "No vuelvas hasta que bomberos lo autorice.",
          "Revisá que no queden brasas encendidas.",
          "Si inhalaste humo, consultá a un médico aunque te sientas bien.",
        ],
      },
    ],
  },
  {
    id: "inundacion",
    nombre: "Inundación",
    intro:
      "Las lluvias intensas y las crecidas pueden subir el agua en pocas horas. Anticiparse permite salir a tiempo.",
    etapas: [
      {
        titulo: "Antes",
        consejos: [
          "Mantené limpias canaletas, desagües y la vereda frente a tu casa.",
          "Guardá documentos y objetos de valor en lugares altos.",
          "Conocé la ruta de evacuación y el centro de evacuados más cercano.",
          "Seguí los alertas meteorológicos oficiales.",
        ],
      },
      {
        titulo: "Durante",
        consejos: [
          "Cortá la luz y el gas desde la llave general.",
          "Subí a un lugar alto y esperá instrucciones de Defensa Civil.",
          "No camines ni manejes por calles inundadas: 30 cm de agua en movimiento pueden arrastrar un auto.",
          "Alejate de cables caídos y postes de luz.",
        ],
      },
      {
        titulo: "Después",
        consejos: [
          "No consumas agua de la canilla hasta confirmar que es potable.",
          "Descartá alimentos que hayan estado en contacto con el agua.",
          "Limpiá y desinfectá con lavandina antes de volver a habitar.",
          "Antes de reconectar la electricidad, hacé revisar la instalación.",
        ],
      },
    ],
  },
];
