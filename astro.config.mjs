import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite"; // 1. Importa el plugin nativo

export default defineConfig({
  // Asegúrate de que NO haya nada de tailwind() en integrations
  integrations: [],

  vite: {
    plugins: [tailwindcss()], // 2. Agrégalo aquí
  },
});
