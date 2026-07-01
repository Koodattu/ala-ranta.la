# Packet 03-verification: verification

## Objective
Verify route/content changes with the smallest relevant checks.

## Context
This is a static Astro site. The build validates content collections, route generation, and sitemap output.

## Sources
- Changed files from packets 01 and 02
- Build output
- Search output for stale links

## Ownership
Parent session.

## Do
- Run stale link search.
- Run `npm run build`.
- Inspect the final diff for unrelated or excessive changes.
- Update workflow results and final report.

## Do not
- Commit, push, publish, or deploy.

## Expected output
Verification result with pass/fail evidence.

## Verification
This packet is the verification step.

## Handoff format
Record commands, outcomes, and remaining risks in `results/03-verification.md`.
