---
title: "Example blog post showcase"
description: "A compact Markdown showcase for blog metadata, media, lists, quotes, tables, code, and checklist states."
pubDate: 2026-06-30
updatedDate: 2026-07-01
tags: ["Example", "Markdown", "Astro", "Content"]
draft: false
heroImage: "/images/personal-website.webp"
---

This is the single published example post for the site. It is not a base template; it is a tight reference for the content features a blog post can use when a real article needs more than plain paragraphs.

![Personal website project preview used as the showcase hero image](/images/personal-website.webp)

## At a glance

A post can mix **strong emphasis**, _subtle emphasis_, [internal links](/projects/), and inline code such as `getCollection("blog")` without needing custom components.

- Frontmatter controls the title, summary, publish date, updated date, tags, draft state, and preview image.
- Markdown handles headings, images, lists, tables, quotes, and fenced code blocks.
- The blog index, detail pages, RSS feed, sitemap, and article metadata are generated from the same content entry.

### Checklist state

- [x] Show metadata in the page header and structured data.
- [x] Render a full-width image inside the article body.
- [x] Keep code snippets readable on narrow screens.
- [ ] Replace this example with real writing when the blog is ready.

## A short workflow

1. Write the post in `src/content/blog`.
2. Add practical tags and a concise description.
3. Run the build so Astro validates the content collection.

> Good examples are specific enough to test the layout, but small enough that the real content can replace them without a cleanup project.

## Code sample

```ts
const postFeatures = {
  metadata: ["title", "description", "pubDate", "updatedDate", "tags", "heroImage"],
  markdown: ["images", "lists", "tables", "quotes", "code"],
  output: ["static page", "RSS item", "sitemap URL", "article schema"],
};

export const isShowcaseReady = postFeatures.markdown.includes("tables");
```

## Comparison table

| Feature | Where it comes from | Used for |
| --- | --- | --- |
| Title and description | Frontmatter | SEO, RSS, cards, and page headers |
| Tags | Frontmatter array | Topic labels on cards and detail pages |
| Hero image | Frontmatter and Markdown | Link previews and visible article media |
| Code fences | Markdown body | Technical examples with horizontal scrolling |

## Secondary media

![Another project image showing that posts can include more than one image](/images/voice-ai-assistant-framework.webp)

This final paragraph keeps the post compact while still proving that normal prose continues cleanly after richer blocks.
