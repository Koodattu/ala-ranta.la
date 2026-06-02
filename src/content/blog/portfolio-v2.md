---
title: "Rebuilding this portfolio as a small static site"
description: "Why this site moved from hand-written HTML into Astro while keeping the static, simple spirit of the original version."
pubDate: 2026-06-01
tags: ["Astro", "Static sites", "Portfolio"]
draft: false
heroImage: "/images/preview.jpg"
---

The first version of this site was intentionally simple: hand-written HTML, CSS, and a little JavaScript. That was the right choice at the time. A personal portfolio should not need a full application stack just to explain who you are and what you have built.

The problem appears once the site starts behaving like a small content system. Blog posts need unique metadata, archive pages, RSS, sitemap entries, canonical URLs, and predictable rendering. Project pages should be real HTML instead of content that only appears after client-side JavaScript runs.

Astro fits that middle ground. The site is still static. The content is still local. The browser receives HTML first. The build step handles the repetitive parts that are easy to forget when everything is maintained by hand.

The goal for v2 is to keep the original spirit but make the workflow better:

- write posts in Markdown
- generate project pages from structured data
- keep JavaScript optional and narrowly scoped
- ship fast pages with useful metadata
- preserve a small visual moment without turning the site into a heavy app

That is the kind of boring upgrade I like: less manual work, better output, and no backend required.
