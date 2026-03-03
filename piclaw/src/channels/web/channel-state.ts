import { getRouterState, setRouterState } from "../../db.js";

interface PendingResume {
  prevTimestamp: string;
  messageId: string;
  threadRootId: number | null;
  createdAt: string;
}

export class WebChannelState {
  lastAgentTimestamp: Record<string, string> = {};
  pendingResumes: Record<string, PendingResume> = {};
  queuedFollowupPlaceholders = new Map<string, number[]>();

  constructor(private stateKey: string) {}

  load(): void {
    const data = getRouterState(this.stateKey);
    try {
      const parsed = data ? JSON.parse(data) : {};
      if (parsed && typeof parsed === "object" && "lastAgentTimestamp" in parsed) {
        const record = parsed as { lastAgentTimestamp?: Record<string, string>; pendingResumes?: Record<string, PendingResume> };
        this.lastAgentTimestamp = record.lastAgentTimestamp && typeof record.lastAgentTimestamp === "object"
          ? record.lastAgentTimestamp
          : {};
        this.pendingResumes = record.pendingResumes && typeof record.pendingResumes === "object"
          ? record.pendingResumes
          : {};
      } else if (parsed && typeof parsed === "object") {
        this.lastAgentTimestamp = parsed as Record<string, string>;
        this.pendingResumes = {};
      } else {
        this.lastAgentTimestamp = {};
        this.pendingResumes = {};
      }
    } catch {
      this.lastAgentTimestamp = {};
      this.pendingResumes = {};
    }
  }

  save(): void {
    setRouterState(
      this.stateKey,
      JSON.stringify({
        lastAgentTimestamp: this.lastAgentTimestamp,
        pendingResumes: this.pendingResumes,
      })
    );
  }

  setPendingResume(chatJid: string, info: PendingResume): void {
    this.pendingResumes[chatJid] = info;
  }

  clearPendingResume(chatJid: string): void {
    delete this.pendingResumes[chatJid];
  }

  getPendingResume(chatJid: string): PendingResume | undefined {
    return this.pendingResumes[chatJid];
  }

  getPendingResumes(): Record<string, PendingResume> {
    return { ...this.pendingResumes };
  }

  enqueueFollowupPlaceholder(chatJid: string, rowId: number): void {
    const existing = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
    existing.push(rowId);
    this.queuedFollowupPlaceholders.set(chatJid, existing);
  }

  consumeFollowupPlaceholder(chatJid: string): number | null {
    const queue = this.queuedFollowupPlaceholders.get(chatJid);
    if (!queue || queue.length === 0) return null;
    const next = queue.shift() ?? null;
    if (!queue.length) this.queuedFollowupPlaceholders.delete(chatJid);
    return next;
  }
}
