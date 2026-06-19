---
title: "Tiny case study: making noisy buttons quieter"
description: "A pretend case study that demonstrates summary sections, numbers, screenshots, and restrained conclusions."
pubDate: 2026-06-02
tags: ["Case study", "UI", "Metrics"]
draft: false
heroImage: "/images/twitch-spotify-song-request.webp"
---

The original interface had seven buttons and every one of them sounded like the primary action.

![A placeholder app screenshot for a fake UI case study](/images/twitch-spotify-song-request.webp)

## What changed

- Primary actions became visually distinct.
- Secondary actions moved into calmer styling.
- Destructive actions stopped wearing friendly colors.
- Disabled buttons stopped looking like secrets.

## Imaginary results

| Metric | Before | After |
| --- | ---: | ---: |
| Accidental clicks | 48 | 12 |
| Questions in review | 19 | 4 |
| Buttons claiming urgency | 7 | 1 |

## Component sketch

```css
.button-primary {
  background: var(--accent);
  color: var(--accent-ink);
}

.button-secondary {
  background: var(--panel);
  color: var(--text);
}
```

The lesson is simple enough: when everything is loud, the actual next step becomes harder to hear.
