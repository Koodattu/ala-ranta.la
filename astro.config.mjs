import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ala-ranta.la",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
