import { CronExpressionParser } from "cron-parser";
import { SCHEDULER_POLL_INTERVAL, TIMEZONE } from "./config.js";
import { getDueTasks, getTaskById, logTaskRun, updateTaskAfterRun } from "./db.js";
import { detectChannel, formatOutbound } from "./router.js";
export function computeNextRun(scheduleType, scheduleValue) {
    if (scheduleType === "cron") {
        try {
            return CronExpressionParser.parse(scheduleValue, { tz: TIMEZONE }).next().toISOString();
        }
        catch {
            return null;
        }
    }
    if (scheduleType === "interval") {
        const ms = parseInt(scheduleValue, 10);
        if (isNaN(ms) || ms <= 0)
            return null;
        return new Date(Date.now() + ms).toISOString();
    }
    if (scheduleType === "once") {
        return null;
    }
    return null;
}
export async function runScheduledTask(task, deps) {
    // Re-check task status (may have been paused/cancelled while queued)
    const fresh = getTaskById(task.id);
    if (!fresh || fresh.status !== "active")
        return;
    const start = Date.now();
    let result = null;
    let error = null;
    // Save session position so we can restore after the task.
    // This isolates the task's prompt/response in a side branch of the session
    // tree, preventing context pollution of the user's conversation.
    const savedLeafId = await deps.agentPool.saveSessionPosition(task.chat_jid);
    const savedModel = await deps.agentPool.getCurrentModelLabel(task.chat_jid);
    try {
        // Switch model if task specifies one
        if (task.model) {
            const slash = task.model.indexOf("/");
            const provider = slash > 0 ? task.model.slice(0, slash) : undefined;
            const modelId = slash > 0 ? task.model.slice(slash + 1) : task.model;
            const control = await deps.agentPool.applyControlCommand(task.chat_jid, {
                type: "model",
                provider,
                modelId,
                raw: `/model ${task.model}`,
            });
            if (control.status === "error") {
                error = `Model switch failed: ${control.message}`;
            }
        }
        if (!error) {
            const out = await deps.agentPool.runAgent(task.prompt, task.chat_jid);
            if (out.status === "error") {
                error = out.error || "Unknown";
            }
            else if (out.result) {
                result = out.result;
                const t = formatOutbound(result, detectChannel(task.chat_jid));
                if (t) {
                    await deps.sendMessage(task.chat_jid, t);
                    await deps.sendNudge?.(t);
                }
            }
        }
    }
    catch (e) {
        error = e instanceof Error ? e.message : String(e);
    }
    finally {
        // Navigate back to the saved position — the task's prompt and response
        // stay in a side branch and won't pollute the user's conversation context.
        await deps.agentPool.restoreSessionPosition(task.chat_jid, savedLeafId);
        // Restore the original model if it was changed
        if (task.model && savedModel && savedModel !== task.model) {
            const slash = savedModel.indexOf("/");
            const provider = slash > 0 ? savedModel.slice(0, slash) : undefined;
            const modelId = slash > 0 ? savedModel.slice(slash + 1) : savedModel;
            await deps.agentPool.applyControlCommand(task.chat_jid, {
                type: "model",
                provider,
                modelId,
                raw: `/model ${savedModel}`,
            });
        }
    }
    logTaskRun({
        task_id: task.id,
        run_at: new Date().toISOString(),
        duration_ms: Date.now() - start,
        status: error ? "error" : "success",
        result,
        error,
    });
    const nextRun = computeNextRun(task.schedule_type, task.schedule_value);
    updateTaskAfterRun(task.id, nextRun, error ? `Error: ${error}` : (result?.slice(0, 200) || "Completed"));
}
let started = false;
export function startSchedulerLoop(deps) {
    if (started)
        return;
    started = true;
    console.log("[scheduler] Started");
    const loop = async () => {
        try {
            for (const task of getDueTasks()) {
                const cur = getTaskById(task.id);
                if (!cur || cur.status !== "active")
                    continue;
                deps.queue.enqueueTask(cur.id, () => runScheduledTask(cur, deps));
            }
        }
        catch (e) {
            console.error("[scheduler]", e);
        }
        setTimeout(loop, SCHEDULER_POLL_INTERVAL);
    };
    loop();
}
