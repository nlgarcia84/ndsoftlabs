import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),
  output: "static",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
