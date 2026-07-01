# Packet 02-route-links: routes and links

## Objective
Add explicit work and education route files and update existing cards/timelines to link to them.

## Context
Existing links use `/about/${getBackgroundSlug(item)}/`. Work and education need separate URL namespaces.

## Sources
- `src/components/Timeline.astro`
- `src/components/HomePage.astro`
- `src/pages/about.astro`
- `src/data/home.ts`
- `src/pages/about/[slug].astro`

## Ownership
Parent session.

## Write scope
- `src/pages/work/[slug].astro`
- `src/pages/education/[slug].astro`
- `src/pages/about/[slug].astro`
- `src/components/Timeline.astro`
- `src/components/HomePage.astro`
- `src/pages/about.astro`
- `src/data/home.ts`
- `src/styles/global.css`

## Coordination rule
You are not alone in the codebase. Do not revert edits made by others. Adapt to nearby changes.

## Do
- Add route files for `/work/[slug]/` and `/education/[slug]/`.
- Update timeline and home links to use the correct route family.
- Remove the old merged `/about/[slug]/` route.
- Add only the CSS needed for the background writeup section.

## Do not
- Change the public `/about/` page layout beyond link props.
- Add redirects unless needed for build correctness.

## Expected output
Route separation and link migration.

## Verification
Search for stale detail links before build.

## Handoff format
Record changed files, decisions, risks, and search evidence in `results/02-route-links.md`.
