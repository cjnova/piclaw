import { UiBridge } from "./ui-bridge.js";
function getBridge(channel) {
    return channel.uiBridge ?? new UiBridge(channel);
}
export async function bindSessionUiContext(channel, session, chatJid) {
    return getBridge(channel).bindSession(session, chatJid);
}
export function createUiContext(channel, chatJid) {
    return getBridge(channel).createUiContext(chatJid);
}
