import type { IconName } from "../Icon";
import type { WorkspaceReference } from "../Workspace/workspace-references";

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size?: number;
  url?: string;
}

export interface ComposeSendPayload {
  references: WorkspaceReference[];
}

export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  attachments?: Attachment[];
  status?: "sending" | "error" | "delivered";
  meta?: Record<string, unknown>;
}

export interface MessageAction {
  id: string;
  label: string;
  icon?: IconName;
}

export interface BubbleActionDefinition {
  id: string;
  label: string;
  icon?: IconName;
}

export interface ToolStatus {
  id: string;
  description: string;
  running: boolean;
}
