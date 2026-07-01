# Result 01-content-model: content model

## Summary
Added a `background` content collection, helpers for grouping localized entries, a shared `BackgroundDetail.astro` renderer, and initial Markdown content for all current work and education records.

## Evidence
- `src/content.config.ts` now defines `background`.
- `src/background.ts` centralizes translation grouping and route slug helpers.
- `src/components/BackgroundDetail.astro` renders hero/details plus Markdown body content.
- `src/content/background/` contains English and Finnish entries for Clevoy, Tampere University work, Prima Power, Tampere University education, and Seinäjoki University of Applied Sciences.

## Handoff
Handoff:
- Summary: Background detail pages are content-driven and can render both English and Finnish on the same canonical URL.
- Changed surfaces: content schema, background helper module, shared detail component, Markdown content.
- Contracts satisfied: structured hero/details and freestyle Markdown writeup are separate.
- Assumptions: public route slug lives in `routeSlug` to avoid Astro collection id collisions.
- Local checks: build caught the original reserved `slug` collision; fixed by renaming to `routeSlug`.
- Integration evidence: final build generated both Tampere work and education pages.
- Risks: timeline summary data and detail-page content are duplicated for now.

## Files changed
- `src/content.config.ts`
- `src/background.ts`
- `src/components/BackgroundDetail.astro`
- `src/content/background/*.md`

## Decisions
- Kept one canonical URL per page with language switching via existing `data-language-block` behavior.
- Used `routeSlug` instead of `slug` because Astro treats `slug` as an entry id field inside content collections.

## Risks
The same role summaries now exist in both profile/home data and background content. A later cleanup could derive timeline cards from the content collection, but that was outside this scoped implementation.

## Verification run
Covered by packet 03.

## Open questions
None blocking.
