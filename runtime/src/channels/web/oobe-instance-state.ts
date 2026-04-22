import { getDb, getRouterState, setRouterState } from "../../db.js";

export type OobeInstanceCompletionKind = "provider-ready";

const OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY = "web:oobe:provider-ready:completed";

export function isProviderReadyOobeCompletedForInstance(): boolean {
  if (getRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY) === "true") {
    return true;
  }
  // Auto-complete for established installs with existing conversation history.
  const row = getDb().prepare("SELECT 1 FROM messages LIMIT 1").get() as Record<string, unknown> | undefined;
  if (row) {
    markProviderReadyOobeCompletedForInstance();
    return true;
  }
  return false;
}

export function markProviderReadyOobeCompletedForInstance(): void {
  setRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY, "true");
}

export function completeOobeForInstance(kind: OobeInstanceCompletionKind): void {
  if (kind === "provider-ready") {
    markProviderReadyOobeCompletedForInstance();
  }
}

export { OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY };
