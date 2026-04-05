/**
 * runtime/wiring.ts – Runtime message/scheduler wiring helpers.
 */
import { ensureDreamTask, runDreamAgentTurn } from "../dream.js";
import { startIpcWatcher } from "../ipc.js";
import { startSchedulerLoop } from "../task-scheduler.js";
import { createUuid } from "../utils/ids.js";
import { createLogger } from "../utils/logger.js";
const log = createLogger("runtime.wiring");
/** Build sendMessage/sendNudge closures for runtime workers. */
export function createRuntimeSenders(web, whatsapp, pushover) {
    const sendMessage = async (jid, text, options) => {
        if (jid.startsWith("web:")) {
            await web.sendMessage(jid, text, options);
            return;
        }
        await whatsapp.sendMessage(jid, text);
    };
    const sendNudge = pushover
        ? async (text) => {
            await pushover.sendMessage("", text).catch((err) => log.error("Failed to send pushover nudge", {
                operation: "send_nudge",
                err,
            }));
        }
        : undefined;
    return { sendMessage, sendNudge };
}
/** Start IPC and scheduler background workers with runtime callbacks. */
export function startRuntimeWorkers(queue, agentPool, web, senders) {
    ensureDreamTask("web:default");
    startIpcWatcher({
        sendMessage: senders.sendMessage,
        sendNudge: senders.sendNudge,
        resolveModel: (input) => agentPool.resolveModelInput(input),
        resumeChat: async (data) => {
            const chatJid = typeof data.chatJid === "string" && data.chatJid.trim()
                ? data.chatJid.trim()
                : "web:default";
            const threadRootId = typeof data.threadRootId === "number" ? data.threadRootId : null;
            web.resumeChat(chatJid, threadRootId);
        },
        resumePending: async (data) => {
            const chatJid = typeof data?.chatJid === "string" && data.chatJid.trim()
                ? data.chatJid.trim()
                : undefined;
            web.resumePendingChats(chatJid);
        },
        runDream: async (data) => {
            const chatJid = typeof data.chatJid === "string" && data.chatJid.trim()
                ? data.chatJid.trim()
                : typeof data.chat_jid === "string" && data.chat_jid.trim()
                    ? data.chat_jid.trim()
                    : "web:default";
            const mode = data.mode === "auto" ? "auto" : "manual";
            const days = typeof data.days === "number" && Number.isFinite(data.days)
                ? Math.max(1, Math.floor(data.days))
                : typeof data.days === "string" && data.days.trim()
                    ? Math.max(1, Number.parseInt(data.days, 10) || 7)
                    : 7;
            const taskId = `dream-ipc:${createUuid("dream")}`;
            queue.enqueueTask(taskId, async () => {
                const result = await runDreamAgentTurn({
                    chatJid,
                    days,
                    mode,
                    agentPool,
                });
                if (mode !== "auto") {
                    await senders.sendMessage(chatJid, result.result, { forceRoot: true, source: "dream" });
                }
            }, `chat:${chatJid}`);
        },
    });
    startSchedulerLoop({
        queue,
        agentPool,
        sendMessage: senders.sendMessage,
        sendNudge: senders.sendNudge,
    });
}
