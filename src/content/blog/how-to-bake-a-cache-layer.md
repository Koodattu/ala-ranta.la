---
title: "How to bake a cache layer using only rumors"
description: "A fake tutorial showing ordered steps, warnings, inline code, and a small JavaScript example."
pubDate: 2026-06-06
tags: ["Tutorial", "JavaScript", "Caching"]
draft: false
heroImage: "/images/tsumppi-coffee-shop.webp"
---

This recipe creates one cache layer. It is not edible, but neither are most cache layers.

![A coffee shop image used as a placeholder for a cache tutorial](/images/tsumppi-coffee-shop.webp)

## Ingredients

1. One stale response.
2. Two tablespoons of `max-age`.
3. A pinch of panic.
4. A monitoring dashboard nobody opens during normal business hours.

## Method

```js
const pantry = new Map();

export function remember(key, value, ttlMs) {
  pantry.set(key, {
    value,
    expiresAt: Date.now() + ttlMs,
  });
}

export function recall(key) {
  const entry = pantry.get(key);
  if (!entry || entry.expiresAt < Date.now()) {
    pantry.delete(key);
    return undefined;
  }

  return entry.value;
}
```

## Warning

Do not season a cache with mystery invalidation unless you are ready to answer questions from your future self.

If the feature still feels slow, rename it to "eventually fresh" and write a blog post about tradeoffs.
