export interface Service {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  accent: string;
}

export const services: Service[] = [
  {
    slug: "desarrollo-web-fullstack",
    title: "Desarrollo web fullstack",
    description:
      "Diseñamos y desarrollamos tu web o aplicación de principio a fin: desde la interfaz que ve el usuario hasta la lógica del servidor. Usamos tecnologías modernas para crear productos rápidos, escalables y fáciles de mantener.",
    shortDescription: "Webs y aplicaciones completas, del frontend al backend.",
    icon: "lucide:code-xml",
    accent: "from-accent to-cyan",
  },
  {
    slug: "apps-android",
    title: "Apps Android",
    description:
      "Creamos aplicaciones nativas para Android con una experiencia fluida y un rendimiento óptimo. Nos ocupamos del diseño, el desarrollo y la publicación en Google Play, cuidando cada detalle para que tu app destaque.",
    shortDescription: "Apps nativas para Android, fluidas y listas para Google Play.",
    icon: "lucide:smartphone",
    accent: "from-cyan to-accent",
  },
  {
    slug: "backend-java",
    title: "Backend con Java",
    description:
      "Construimos APIs y sistemas backend robustos con Java y Spring Boot, preparados para soportar altos volúmenes de uso. Priorizamos la seguridad, el rendimiento y una arquitectura limpia que pueda escalar con tu producto.",
    shortDescription: "APIs y sistemas robustos y escalables con Java y Spring Boot.",
    icon: "lucide:server",
    accent: "from-amber to-red",
  },
  {
    slug: "bases-de-datos",
    title: "Bases de datos",
    description:
      "Diseñamos, optimizamos y administramos tus bases de datos para que la información esté siempre segura, organizada y disponible. Cuidamos la estructura y el rendimiento de las consultas para que tu aplicación responda sin demoras.",
    shortDescription: "Bases de datos seguras, ordenadas y con buen rendimiento.",
    icon: "lucide:database",
    accent: "from-purple to-accent",
  },
  {
    slug: "integraciones-y-pagos",
    title: "Integraciones y pagos",
    description:
      "Conectamos tu aplicación con pasarelas de pago, APIs y servicios externos para que todo funcione como un solo sistema. Integramos cobros, notificaciones y terceros de forma segura para automatizar procesos y ampliar tu producto.",
    shortDescription: "Pagos, APIs y servicios externos integrados de forma segura.",
    icon: "lucide:credit-card",
    accent: "from-pink to-purple",
  },
  {
    slug: "despliegue-y-soporte",
    title: "Despliegue y soporte",
    description:
      "Publicamos tu aplicación en la nube y nos aseguramos de que esté siempre disponible y actualizada. Ofrecemos monitoreo, mantenimiento y soporte continuo para que tu producto evolucione sin interrupciones.",
    shortDescription: "Publicamos y mantenemos tu app en la nube, siempre disponible.",
    icon: "lucide:cloud-upload",
    accent: "from-accent to-purple",
  },
];
