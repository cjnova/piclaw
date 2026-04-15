/**
 * agent-pool/turn-coordinator.ts – Tracks streaming turns and prompt lifecycle helpers.
 *
 * Extracts turn aggregation, session subscription wiring, and prompt timeout
 * handling out of AgentPool so prompt orchestration can stay focused on the
 * higher-level run flow.
 */
/**
 * Coordinates per-run assistant turn tracking and event lifecycle helpers.
 */
export class AgentTurnCoordinator {
    options;
    constructor(options) {
        this.options = options;
    }
    createTracker(chatJid, onTurnComplete) {
        let currentTurnText = "";
        let currentTurnPhase = null;
        let turnCount = 0;
        let messageHasDelta = false;
        let lastError = null;
        const parseTextPhase = (signature) => {
            if (typeof signature !== "string" || !signature.trim())
                return null;
            try {
                const parsed = JSON.parse(signature);
                return parsed?.phase === "commentary" || parsed?.phase === "final_answer"
                    ? parsed.phase
                    : null;
            }
            catch {
                return null;
            }
        };
        const resolveTextPhaseFromBlock = (block) => {
            if (!block || block.type !== "text")
                return null;
            return parseTextPhase(block.textSignature);
        };
        const resolveTextPhaseFromPartial = (partial, contentIndex) => {
            if (!partial || typeof partial !== "object")
                return null;
            const content = partial.content;
            if (!Array.isArray(content))
                return null;
            const block = typeof contentIndex === "number" ? content[contentIndex] : undefined;
            return resolveTextPhaseFromBlock(block);
        };
        const extractAssistantTextFromContent = (content) => {
            if (!Array.isArray(content)) {
                return {
                    text: typeof content === "string" ? content : "",
                    phase: null,
                };
            }
            const textBlocks = content.filter((block) => block?.type === "text");
            const nonCommentaryText = textBlocks
                .filter((block) => resolveTextPhaseFromBlock(block) !== "commentary")
                .map((block) => (typeof block.text === "string" ? block.text : ""))
                .join("");
            if (nonCommentaryText) {
                const lastNonCommentaryPhase = [...textBlocks]
                    .reverse()
                    .map((block) => resolveTextPhaseFromBlock(block))
                    .find((phase) => phase !== "commentary") ?? null;
                return { text: nonCommentaryText, phase: lastNonCommentaryPhase };
            }
            return { text: "", phase: textBlocks.some((block) => resolveTextPhaseFromBlock(block) === "commentary") ? "commentary" : null };
        };
        const flushTurn = () => {
            const text = currentTurnText.trim();
            if ((!text || currentTurnPhase === "commentary") && !onTurnComplete) {
                currentTurnText = "";
                currentTurnPhase = null;
                messageHasDelta = false;
                return;
            }
            if ((text && currentTurnPhase !== "commentary") || turnCount > 0) {
                onTurnComplete?.({
                    text: currentTurnPhase === "commentary" ? "" : text,
                    attachments: this.options.takeAttachments(chatJid),
                });
                turnCount += 1;
            }
            currentTurnText = "";
            currentTurnPhase = null;
            messageHasDelta = false;
        };
        const handleMessageUpdate = (event) => {
            if (event.type === "message_update") {
                const messageEvent = event.assistantMessageEvent;
                if (messageEvent.type === "text_start") {
                    if (onTurnComplete) {
                        flushTurn();
                    }
                    else {
                        messageHasDelta = false;
                        currentTurnText = "";
                    }
                    currentTurnPhase = resolveTextPhaseFromPartial(messageEvent.partial, messageEvent.contentIndex);
                }
                if (messageEvent.type === "text_delta") {
                    messageHasDelta = true;
                    currentTurnPhase ??= resolveTextPhaseFromPartial(messageEvent.partial, messageEvent.contentIndex);
                    currentTurnText += messageEvent.delta || "";
                }
                if (messageEvent.type === "text_end") {
                    currentTurnPhase ??= resolveTextPhaseFromPartial(messageEvent.partial, messageEvent.contentIndex);
                }
                return;
            }
            if (event.type === "message_end") {
                const message = event.message;
                if (message?.role === "assistant") {
                    if (message.stopReason === "error" && message.errorMessage) {
                        lastError = { stopReason: "error", errorMessage: message.errorMessage };
                    }
                    const extracted = extractAssistantTextFromContent(message.content);
                    if (!messageHasDelta) {
                        currentTurnText = extracted.text;
                    }
                    currentTurnPhase = extracted.phase;
                    if (currentTurnPhase === "commentary") {
                        currentTurnText = "";
                    }
                }
                messageHasDelta = false;
            }
        };
        return {
            handleMessageUpdate,
            getFinalText: () => currentTurnPhase === "commentary" ? "" : currentTurnText.trim(),
            getTurnCount: () => turnCount,
            getError: () => lastError,
        };
    }
    subscribe(session, chatJid, tracker, onEvent) {
        return session.subscribe((event) => {
            this.options.touchSession(chatJid);
            if (onEvent) {
                try {
                    onEvent(event);
                }
                catch (err) {
                    this.options.onWarn?.("Event handler error", {
                        operation: "subscribe_to_session.on_event",
                        chatJid,
                        err,
                    });
                }
            }
            tracker.handleMessageUpdate(event);
            if (event.type === "message_end") {
                try {
                    this.options.recordMessageUsage(chatJid, event.message);
                }
                catch (err) {
                    this.options.onWarn?.("Failed to persist message usage", {
                        operation: "subscribe_to_session.record_usage",
                        chatJid,
                        err,
                    });
                }
            }
        });
    }
    startPromptTimeout(session, chatJid, timeoutMs) {
        const timedOutRef = { value: false };
        if (!timeoutMs || timeoutMs <= 0) {
            return { timeoutId: null, timedOutRef };
        }
        const timeoutId = setTimeout(async () => {
            timedOutRef.value = true;
            this.options.onError?.("Prompt timed out; aborting session", {
                operation: "start_prompt_timeout",
                chatJid,
                timeoutMs,
            });
            await session.abort();
        }, timeoutMs);
        return { timeoutId, timedOutRef };
    }
}
