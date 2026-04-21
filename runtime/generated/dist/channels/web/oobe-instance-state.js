import { getDb, getRouterState, setRouterState } from "../../db.js";
const OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY = "web:oobe:provider-ready:completed";
export function isProviderReadyOobeCompletedForInstance() {
    if (getRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY) === "true") {
        return true;
    }
    // Auto-complete for established installs with existing conversation history.
    const row = getDb().prepare("SELECT 1 FROM messages LIMIT 1").get();
    if (row) {
        markProviderReadyOobeCompletedForInstance();
        return true;
    }
    return false;
}
export function markProviderReadyOobeCompletedForInstance() {
    setRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY, "true");
}
export function completeOobeForInstance(kind) {
    if (kind === "provider-ready") {
        markProviderReadyOobeCompletedForInstance();
    }
}
export { OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY };
