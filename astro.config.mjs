import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ala-ranta.la",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fi"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
