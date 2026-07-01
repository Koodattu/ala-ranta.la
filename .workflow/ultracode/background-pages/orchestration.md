# Orchestration

## Parent critical path
Implement the content model, shared renderer, routes, link migration, and verification locally in the parent session.

## Packets
- `01-content-model`: parent-owned, write-capable.
- `02-route-links`: parent-owned, write-capable.
- `03-verification`: parent-owned, read/check only after edits.

## Delegation
No native delegation planned.

## Agents
None.

## Delegation limits
Agent count: 0. Wave count: 0.

## Wait points
None.

## Fallback
If the content collection approach fails during build, fall back to a typed data-driven shared renderer while preserving `/work/` and `/education/` route separation.

## Verification order
1. Search for stale `/about/[slug]/` detail links.
2. Run `npm run build`.
3. Inspect diff for unrelated edits.
