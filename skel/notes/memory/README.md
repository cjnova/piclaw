# Memory outputs

Dream mode maintains this directory.

Dream and AutoDream maintain this directory via an out-of-band model turn on a temporary `dream:` channel.
The Dream channel is cleaned up after the cycle ends.

The model follows the original 4-phase Dream flow:
1. Orient
2. Signal
3. Consolidate
4. Prune and Index

Files created and refreshed here include:
- `MEMORY.md` — compact startup index
- `current-state.json` — machine-readable dream state
- `recent-context.md` — concise recent digest
- `user.md` — durable role and preference memory
- `feedback.md` — corrections and steering cues
- `project.md` — ongoing work and recent outcomes
- `reference.md` — note index and external pointers
- `days/YYYY-MM-DD.md` — detailed per-day memory derived from daily notes and message history

Human-readable overview stays in `notes/daily/`.
