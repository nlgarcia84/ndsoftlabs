import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const servicesCollection = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    icon: z.string(),
    accent: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
};
