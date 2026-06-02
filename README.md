<div align="center">
  <br />
  <img src="public/assets/favicon.ico" alt="Ala-Ranta.la icon" width="64" height="64" />

  <h3><a href="https://ala-ranta.la/" target="_blank">Ala-Ranta.la</a></h3>
  <p>Personal portfolio and writing by Juha Ala-Rantala.</p>
  <br />
</div>

## Overview

This repository contains the Astro version of my personal portfolio. The site is still fully static, but the source is now organized around reusable components, typed local data, and Markdown blog posts.

## Tech

- Framework: [Astro](https://astro.build/)
- Content: Markdown blog posts in `src/content/blog`
- Styling: plain CSS in `src/styles/global.css`
- Hosting target: static hosting through GitHub Pages or Cloudflare Pages
- Generated output: `dist/`

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The build generates static HTML, RSS, and sitemap files. Astro telemetry is disabled in npm scripts so local builds do not write outside the repository.

## Writing Posts

Create a Markdown file in `src/content/blog`:

```md
---
title: "Post title"
description: "One sentence summary used for previews and SEO."
pubDate: 2026-06-01
tags: ["Astro", "Portfolio"]
draft: false
---

Write the post in Markdown.
```

Files beginning with `_`, such as `_template.md`, are ignored by the blog collection.

## Projects

Project data lives in `src/data/projects.json`. Project index and detail pages are generated at build time so the content is available as static HTML.

## Deployment

The included GitHub Actions workflow builds the Astro site and deploys `dist/` to GitHub Pages when changes are pushed to `main`. The custom domain file lives in `public/CNAME` so it is included in the generated output.

## License

Distributed under the MIT License. See `LICENSE` for more information.
