# Result 02-route-links: routes and links

## Summary
Added explicit `/work/[slug]/` and `/education/[slug]/` routes, removed the old merged `/about/[slug]/` route, and migrated timeline/home links to route by background kind.

## Evidence
- `src/pages/work/[slug].astro` filters `background` entries by `kind === "work"`.
- `src/pages/education/[slug].astro` filters `background` entries by `kind === "education"`.
- `src/components/Timeline.astro` accepts `detailKind`.
- `src/components/HomePage.astro` and `src/pages/about.astro` pass `work` or `education`.
- `src/data/home.ts` now links the Clevoy focus card to `/work/clevoy/`.
- `src/pages/about/[slug].astro` was deleted.

## Handoff
Handoff:
- Summary: Work and school timeline cards now route to distinct namespaces.
- Changed surfaces: route files, timeline component props, home/about call sites, focus links.
- Contracts satisfied: Tampere University no longer has a single merged detail page.
- Assumptions: previous-logo proof links remain organization-deduped, so Tampere's logo points to the work page there while the education page remains reachable from the education timeline.
- Local checks: stale detail link search returned no matches.
- Integration evidence: preview requests to both Tampere pages returned 200.
- Risks: old public `/about/{slug}/` URLs now 404 because no compatibility redirect was added.

## Files changed
- `src/pages/work/[slug].astro`
- `src/pages/education/[slug].astro`
- `src/pages/about/[slug].astro`
- `src/components/Timeline.astro`
- `src/components/HomePage.astro`
- `src/pages/about.astro`
- `src/data/home.ts`
- `src/styles/global.css`
- `src/utils.ts`

## Decisions
- Removed the old merged route instead of keeping an ambiguous compatibility page.
- Added only small CSS for the new Markdown writeup section.

## Risks
Existing external links to `/about/clevoy/`, `/about/tampere-university/`, and similar old detail pages will no longer resolve unless redirects are added later.

## Verification run
`rg` found no stale source links to `/about/{slug}` detail pages.

## Open questions
Whether to add explicit redirects for old background URLs is safe to defer.
