export type TipoEntidad = "Defensa Civil" | "Bomberos";

export type Entidad = {
  nombre: string;
  tipo: TipoEntidad;
  provincia: string;
  localidad: string;
  telefono: string;
  descripcion: string;
};

export const entidades: Entidad[] = [
  {
    nombre: "Defensa Civil de la Ciudad de Buenos Aires",
    tipo: "Defensa Civil",
    provincia: "Ciudad de Buenos Aires",
    localidad: "CABA",
    telefono: "103",
    descripcion:
      "Coordina la respuesta ante temporales, anegamientos y emergencias urbanas.",
  },
  {
    nombre: "Defensa Civil de la Provincia de Buenos Aires",
    tipo: "Defensa Civil",
    provincia: "Buenos Aires",
    localidad: "La Plata",
    telefono: "103",
    descripcion:
      "Gestiona emergencias por inundaciones y temporales en todo el territorio bonaerense.",
  },
  {
    nombre: "Defensa Civil de Córdoba",
    tipo: "Defensa Civil",
    provincia: "Córdoba",
    localidad: "Córdoba",
    telefono: "103",
    descripcion:
      "Interviene en incendios forestales serranos y crecidas de ríos.",
  },
  {
    nombre: "Defensa Civil de Mendoza",
    tipo: "Defensa Civil",
    provincia: "Mendoza",
    localidad: "Mendoza",
    telefono: "103",
    descripcion:
      "Prepara a la población ante sismos, aluviones e incendios en zona de montaña.",
  },
  {
    nombre: "Protección Civil de Santa Fe",
    tipo: "Defensa Civil",
    provincia: "Santa Fe",
    localidad: "Santa Fe",
    telefono: "103",
    descripcion:
      "Monitorea crecidas del Paraná y del Salado y coordina evacuaciones.",
  },
  {
    nombre: "Defensa Civil de San Juan",
    tipo: "Defensa Civil",
    provincia: "San Juan",
    localidad: "San Juan",
    telefono: "103",
    descripcion:
      "Trabaja en prevención sísmica y simulacros en escuelas e instituciones.",
  },
  {
    nombre: "Defensa Civil de Neuquén",
    tipo: "Defensa Civil",
    provincia: "Neuquén",
    localidad: "Neuquén",
    telefono: "103",
    descripcion:
      "Responde ante nevadas, incendios forestales y emergencias climáticas.",
  },
  {
    nombre: "Defensa Civil de Salta",
    tipo: "Defensa Civil",
    provincia: "Salta",
    localidad: "Salta",
    telefono: "103",
    descripcion:
      "Asiste a comunidades afectadas por crecidas y aludes en época de lluvias.",
  },
  {
    nombre: "Defensa Civil de Corrientes",
    tipo: "Defensa Civil",
    provincia: "Corrientes",
    localidad: "Corrientes",
    telefono: "103",
    descripcion:
      "Coordina la respuesta ante incendios en esteros y campos.",
  },
  {
    nombre: "Bomberos Voluntarios de La Boca",
    tipo: "Bomberos",
    provincia: "Ciudad de Buenos Aires",
    localidad: "La Boca",
    telefono: "100",
    descripcion:
      "El primer cuerpo de bomberos voluntarios del país, fundado en 1884.",
  },
  {
    nombre: "Bomberos Voluntarios de Villa Carlos Paz",
    tipo: "Bomberos",
    provincia: "Córdoba",
    localidad: "Villa Carlos Paz",
    telefono: "100",
    descripcion:
      "Combaten incendios forestales en las sierras de Punilla.",
  },
  {
    nombre: "Bomberos Voluntarios de Godoy Cruz",
    tipo: "Bomberos",
    provincia: "Mendoza",
    localidad: "Godoy Cruz",
    telefono: "100",
    descripcion:
      "Rescate urbano, incendios y asistencia en emergencias sísmicas.",
  },
  {
    nombre: "Bomberos Voluntarios de San Carlos de Bariloche",
    tipo: "Bomberos",
    provincia: "Río Negro",
    localidad: "Bariloche",
    telefono: "100",
    descripcion:
      "Incendios en zona de bosque andino y rescate en montaña.",
  },
  {
    nombre: "Bomberos Voluntarios de Rosario",
    tipo: "Bomberos",
    provincia: "Santa Fe",
    localidad: "Rosario",
    telefono: "100",
    descripcion:
      "Incendios de pastizales en las islas del Paraná y rescate urbano.",
  },
  {
    nombre: "Bomberos Voluntarios de El Bolsón",
    tipo: "Bomberos",
    provincia: "Río Negro",
    localidad: "El Bolsón",
    telefono: "100",
    descripcion:
      "Prevención y combate de incendios en la Comarca Andina.",
  },
];
