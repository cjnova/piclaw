import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { getRouterState, setRouterState } from "../db.js";

export class RuntimeState {
  lastTimestamp = "";
  lastAgentTimestamp: Record<string, string> = {};
  chatJids: Set<string> = new Set();

  private processedCommandIds = new Map<string, Set<string>>();

  constructor(private dataDir: string) {}

  loadChats(): void {
    const chatsFile = join(this.dataDir, "chats.json");
    if (existsSync(chatsFile)) {
      const data = JSON.parse(readFileSync(chatsFile, "utf-8"));
      this.chatJids = new Set(data.jids || []);
    }
  }

  saveChats(): void {
    const chatsFile = join(this.dataDir, "chats.json");
    writeFileSync(chatsFile, JSON.stringify({ jids: [...this.chatJids] }, null, 2));
  }

  loadTimestamps(): void {
    this.lastTimestamp = getRouterState("last_timestamp") || "";
    const agentTs = getRouterState("last_agent_timestamp");
    try {
      this.lastAgentTimestamp = agentTs ? JSON.parse(agentTs) : {};
    } catch {
      this.lastAgentTimestamp = {};
    }
  }

  saveTimestamps(): void {
    setRouterState("last_timestamp", this.lastTimestamp);
    setRouterState("last_agent_timestamp", JSON.stringify(this.lastAgentTimestamp));
  }

  markCommandProcessed(chatJid: string, messageId: string): void {
    this.getProcessedCommandSet(chatJid).add(messageId);
  }

  wasCommandProcessed(chatJid: string, messageId: string): boolean {
    return this.getProcessedCommandSet(chatJid).has(messageId);
  }

  private getProcessedCommandSet(chatJid: string): Set<string> {
    const existing = this.processedCommandIds.get(chatJid);
    if (existing) return existing;
    const set = new Set<string>();
    this.processedCommandIds.set(chatJid, set);
    return set;
  }
}
