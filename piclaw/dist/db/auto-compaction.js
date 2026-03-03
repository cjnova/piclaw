import { deleteRouterState, getRouterState, setRouterState } from "./router-state.js";
const KEY_PREFIX = "auto_compact:";
function buildKey(chatJid) {
    return `${KEY_PREFIX}${chatJid}`;
}
export function getAutoCompactState(chatJid) {
    const raw = getRouterState(buildKey(chatJid));
    if (!raw)
        return null;
    try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && typeof parsed.status === "string") {
            return parsed;
        }
    }
    catch {
        // swallow JSON errors and treat as missing state
    }
    return null;
}
export function setAutoCompactState(chatJid, state) {
    setRouterState(buildKey(chatJid), JSON.stringify(state));
}
export function clearAutoCompactState(chatJid) {
    deleteRouterState(buildKey(chatJid));
}
