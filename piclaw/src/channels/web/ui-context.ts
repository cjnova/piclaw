import type { AgentSession, ExtensionUIContext } from "@mariozechner/pi-coding-agent";

import type { WebChannel } from "../web.js";
import { UiBridge } from "./ui-bridge.js";

function getBridge(channel: WebChannel): UiBridge {
  return (channel as any).uiBridge ?? new UiBridge(channel);
}

export async function bindSessionUiContext(channel: WebChannel, session: AgentSession, chatJid: string): Promise<void> {
  return getBridge(channel).bindSession(session, chatJid);
}

export function createUiContext(channel: WebChannel, chatJid: string): ExtensionUIContext {
  return getBridge(channel).createUiContext(chatJid);
}
