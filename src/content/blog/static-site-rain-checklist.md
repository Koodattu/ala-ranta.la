---
title: "Static site rain checklist"
description: "A checklist-format placeholder post for prelaunch reviews, mixed Markdown, and practical nonsense."
pubDate: 2026-06-04
tags: ["Checklist", "Static sites", "QA"]
draft: false
heroImage: "/images/staff-restaurant-lunch-menu-app.webp"
---

Before deploying a static site into light rain, perform the following checks with a clipboard you do not intend to use.

![A placeholder app image for a launch checklist](/images/staff-restaurant-lunch-menu-app.webp)

## Preflight

- [x] Confirm every page has a title.
- [x] Confirm RSS still builds after the third coffee.
- [ ] Replace the sentence that says "write something better here."
- [ ] Ask whether the button should do anything.

## Smoke test

```sh
npm run build
npm run preview
```

## Review table

| Check | Expected result | Actual result |
| --- | --- | --- |
| Home page | Loads before the kettle clicks | Probably |
| Blog page | Shows several posts | Yes |
| Sitemap | Exists quietly | Yes |

The deployment can proceed when the rain becomes mostly decorative.
