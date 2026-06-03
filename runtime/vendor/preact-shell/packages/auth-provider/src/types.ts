export interface Account {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  avatarUrl: string;
  active: boolean;
  connected: boolean;
  scopes: string[];
  provider: "github" | "m365";
}

export interface DeviceFlowResponse {
  flowId: string;
  code: string;
  url: string;
}

export interface FlowStatus {
  status: "pending" | "completed" | "failed";
  account?: Account;
  error?: string;
}

export interface Profile {
  username: string;
  displayName: string;
  email?: string;
  avatarUrl: string;
  bio?: string;
  company?: string;
  githubId: number;
}

export interface GhAccount {
  username: string;
  active: boolean;
  connected: boolean;
  scopes: string[];
}

export interface GhProfile {
  login: string;
  name?: string;
  email?: string;
  avatar_url: string;
  bio?: string;
  company?: string;
  id: number;
}
