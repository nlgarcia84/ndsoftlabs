import type { ImageMetadata } from "astro";
import danielaGutierrez from "../assets/team/daniela-gutierrez.png";
import normanLeyva from "../assets/team/norman-leyva.png";

export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  photo?: ImageMetadata;
}

export const team: TeamMember[] = [
  {
    name: "Daniela Gutiérrez",
    role: "Co-Founder · Backend, Android & IA",
    photo: danielaGutierrez,
    description:
      "Desarrolladora enfocada en backend, aplicaciones Android e inteligencia artificial. Le apasiona transformar ideas en productos digitales reales, combinando desarrollo web, móvil y soluciones de IA orientadas a resolver necesidades concretas. En NDSOFT Labs trabaja en la creación de productos propios y soluciones innovadoras con impacto práctico.",
  },
  {
    name: "Norman Leyva",
    role: "Co-Founder · Frontend & Diseño",
    photo: normanLeyva,
    description:
      "Desarrollador enfocado en frontend y diseño de interfaces. Le interesa construir proyectos sólidos, funcionales y bien planteados, cuidando la experiencia de usuario y combinando creatividad con una visión práctica del desarrollo de software. En NDSOFT Labs participa en la creación y evolución de productos propios, contribuyendo a que cada idea se convierta en una experiencia digital útil y real.",
  },
];
