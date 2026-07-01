import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/[^_]*.{md,mdx}" }),
  schema: z.object({
    lang: z.enum(["en", "fi"]).default("en"),
    translationKey: z.string().optional(),
    slug: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

const background = defineCollection({
  loader: glob({ base: "./src/content/background", pattern: "**/[^_]*.{md,mdx}" }),
  schema: z.object({
    kind: z.enum(["work", "education"]),
    lang: z.enum(["en", "fi"]).default("en"),
    translationKey: z.string().optional(),
    routeSlug: z.string().optional(),
    organization: z.string(),
    role: z.string(),
    period: z.string(),
    logo: z.string(),
    url: z.string(),
    summary: z.string(),
    details: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, background };
