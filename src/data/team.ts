export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: "Daniela Gutiérrez",
    role: "Co-Founder & Software Developer",
    photo: "/team/daniela-gutierrez.png",
    description:
      "Desarrolladora apasionada por transformar ideas en productos digitales reales. Su experiencia abarca el desarrollo web, aplicaciones móviles, inteligencia artificial y soluciones tecnológicas orientadas a resolver necesidades concretas. En NDSOFT Labs trabaja en la creación de productos propios y soluciones innovadoras con impacto práctico.",
  },
  {
    name: "Norman Leyva",
    role: "Co-Founder & Software Developer",
    description:
      "Desarrollador orientado a convertir conceptos en aplicaciones y soluciones digitales que aporten valor. Le interesa construir proyectos sólidos, funcionales y bien planteados, combinando creatividad con una visión práctica del desarrollo de software. En NDSOFT Labs participa en la creación y evolución de productos propios, contribuyendo a que cada idea pueda convertirse en una experiencia digital útil y real.",
  },
];
