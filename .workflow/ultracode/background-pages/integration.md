# Integration

## Accepted
- Content-driven background detail pages using a shared renderer.
- Explicit `/work/[slug]/` and `/education/[slug]/` route families.
- `routeSlug` frontmatter field to avoid Astro collection id collisions.
- Timeline/home link migration by detail kind.
- Removal of the old merged `/about/[slug]/` route.

## Rejected
- Reusing the blog collection directly, because these are not blog posts or RSS entries.
- Keeping the old merged `/about/[slug]/` page, because it preserves the Tampere ambiguity.
- Per-organization templates, because the shared hero/details/writeup structure is enough.

## Conflicts
Astro's reserved `slug` handling caused a content id collision between work and education Tampere entries. Resolved by renaming the public route field to `routeSlug`.

## Decisions
The page model is now: structured metadata in frontmatter, long-form writeup in Markdown, one shared background detail component, and separate route namespaces for work and education.

## Final changes
- New background content collection and helper module.
- New shared detail page component.
- New Markdown content entries.
- New `/work/[slug]/` and `/education/[slug]/` routes.
- Updated links from timeline, home proof logos, and focus card.
- Deleted old `/about/[slug]/` route.
- Added minimal CSS for the writeup block.

## Verification still needed
No required verification remains.

## Remaining risks
External old `/about/{slug}/` detail links are not redirected. `npm run build` remains incompatible with Windows due the existing package script.
