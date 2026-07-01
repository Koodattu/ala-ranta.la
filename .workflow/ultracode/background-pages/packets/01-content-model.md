# Packet 01-content-model: content model

## Objective
Add a typed background content collection, helper functions, Markdown entries, and a shared detail renderer for work and education pages.

## Context
The existing blog collection proves the Markdown rendering pattern. The old background route groups work and education by organization slug, which must be replaced.

## Sources
- `src/content.config.ts`
- `src/pages/blog/[slug].astro`
- `src/pages/about/[slug].astro`
- `src/data/profile.ts`
- `src/data/home.ts`

## Ownership
Parent session.

## Write scope
- `src/content.config.ts`
- `src/background.ts`
- `src/components/BackgroundDetail.astro`
- `src/content/background/`

## Coordination rule
You are not alone in the codebase. Do not revert edits made by others. Adapt to nearby changes.

## Do
- Add a background collection with work/education kind, language, slug, organization, role, period, logo, url, summary, details, tags, and draft fields.
- Add helper functions for grouping translations and deriving URLs.
- Create initial Markdown entries for existing experience and education items in English and Finnish.
- Render both languages on one canonical URL using existing `data-language-block` behavior.

## Do not
- Add dependencies.
- Move timeline data into content during this packet.
- Create per-organization custom templates.

## Expected output
Content schema, helper module, shared detail component, and Markdown content files.

## Verification
Type/build verification happens in packet 03.

## Handoff format
Record changed files, decisions, risks, and any assumptions in `results/01-content-model.md`.
