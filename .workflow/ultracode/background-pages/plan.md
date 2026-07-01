# Background pages

## Goal
Split workplace and education detail pages into explicit `/work/[slug]/` and `/education/[slug]/` pages, backed by Markdown content with a shared structured template.

## Success criteria
- Tampere University work and education resolve to separate URLs.
- Background writeups render with structured hero/details plus Markdown body content.
- Existing about/home timeline links point to the new route families.
- The static build passes.

## Current context
- Blog posts already use Astro content collections and Markdown rendering.
- The current `/about/[slug]/` groups experience and education by organization slug, which merges Tampere University.
- About/home timeline data still lives in `src/data/profile.ts` and localized wrappers in `src/data/home.ts`.

## Constraints
- Keep changes surgical and static-site friendly.
- Do not add dependencies.
- Preserve existing bilingual page behavior where English and Finnish blocks are switched on the same URL.
- Do not commit, push, publish, or deploy.

## Risk level
Medium. The change touches routing, content collections, shared links, and build output, but no auth, data storage, or external systems.

## Approval gates
No additional approval required. No destructive repository operation, dependency change, deployment, or credential handling is planned.

## Mode
Workflow mode.

Native delegation is not used because the implementation is tightly coupled across route generation, content schema, links, and rendering; parallel agents would add coordination overhead without reducing risk.

## Work packets
- `01-content-model`: Add the background collection, helper functions, Markdown entries, and shared detail renderer.
- `02-route-links`: Add `/work/` and `/education/` routes and update existing links.
- `03-verification`: Run build and inspect the final diff.

## Eval contract
- Outcome: explicit work and education detail pages with blog-style Markdown bodies.
- Shared surfaces: Astro content config, background helpers, routes, Timeline/HomePage/About links, global CSS.
- Required checks: `npm run build`, final grep for stale `/about/{slug}` detail links, diff review.
- Blocking conditions: content collection type errors, duplicate static paths, broken route generation.
- Handoff evidence: changed files, build result, remaining risks.

## Integration policy
Keep one shared renderer for both route families. Avoid custom per-organization templates. Leave existing timeline data in place unless routing requires a small prop/link update.

## Verification plan
Run `npm run build`, then inspect relevant changed files and route-link search output.

## Completion criteria
All planned files exist, the build passes, and no stale generated detail links point to `/about/[slug]/`.
