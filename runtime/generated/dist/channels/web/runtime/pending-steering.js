/**
 * channels/web/pending-steering.ts – in-memory queue for pending steering timestamps.
 */
/** Per-chat pending steering timestamp queue used by run-control sequencing. */
export class PendingSteeringStore {
    pendingSteering = new Map();
    queue(chatJid, timestamp) {
        if (!timestamp)
            return;
        const existing = this.pendingSteering.get(chatJid) ?? [];
        existing.push(timestamp);
        this.pendingSteering.set(chatJid, existing);
    }
    consumeAll(chatJid) {
        const entries = this.pendingSteering.get(chatJid);
        if (!entries || entries.length === 0)
            return [];
        this.pendingSteering.delete(chatJid);
        return [...entries].sort();
    }
}
