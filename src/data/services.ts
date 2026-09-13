export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export const services: Service[] = [
  {
    slug: "desarrollo-web-fullstack",
    title: "Desarrollo web fullstack",
    description: "Hacemos tu web o aplicación completa: frontend y backend.",
    icon: "lucide:code-xml",
    accent: "from-accent to-cyan",
  },
  {
    slug: "apps-android",
    title: "Apps Android",
    description: "Creamos aplicaciones nativas para Android.",
    icon: "lucide:smartphone",
    accent: "from-cyan to-accent",
  },
  {
    slug: "backend-java",
    title: "Backend con Java",
    description: "APIs y sistemas robustos con Java y Spring Boot.",
    icon: "lucide:server",
    accent: "from-amber to-red",
  },
  {
    slug: "bases-de-datos",
    title: "Bases de datos",
    description: "Guardamos y organizamos tu información de forma segura.",
    icon: "lucide:database",
    accent: "from-purple to-accent",
  },
  {
    slug: "integraciones-y-pagos",
    title: "Integraciones y pagos",
    description: "Conectamos pasarelas de pago y servicios externos.",
    icon: "lucide:credit-card",
    accent: "from-pink to-purple",
  },
  {
    slug: "despliegue-y-soporte",
    title: "Despliegue y soporte",
    description: "Publicamos tu app en la nube y la mantenemos.",
    icon: "lucide:cloud-upload",
    accent: "from-accent to-purple",
  },
];
