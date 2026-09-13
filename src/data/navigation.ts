export interface Navigation {
  label: string;
  href: string;
}

export const navigation: Navigation[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];
