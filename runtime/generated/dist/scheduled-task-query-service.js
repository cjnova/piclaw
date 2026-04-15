/**
 * scheduled-task-query-service.ts – Shared query helpers for scheduled-task inspection.
 *
 * Provides one canonical, structured retrieval surface for scheduled tasks so
 * agent tools and slash commands do not query SQLite ad hoc.
 */
import { getDb } from "./db.js";
const TASK_STATUS_VALUES = new Set(["active", "paused", "completed"]);
function summarizeText(value, maxLen = 140, fallback = "(none)") {
    const normalized = (value || "").replace(/\r\n/g, "\n").trim();
    if (!normalized)
        return fallback;
    const firstLine = normalized.split("\n")[0]?.trim() || fallback;
    if (firstLine.length <= maxLen)
        return firstLine;
    return `${firstLine.slice(0, maxLen - 1)}…`;
}
function summarizeInternalTask(prompt) {
    const token = (prompt || "").trim().toLowerCase();
    if (!token)
        return "(internal task)";
    if (token === "dream" || token === "/dream")
        return "dream maintenance";
    return token;
}
function summarizeTask(row) {
    const taskKind = row.task_kind ?? "agent";
    if (taskKind === "shell") {
        const commandSummary = summarizeText(row.command, 140, "(no command)");
        return { prompt_summary: summarizeText(row.prompt, 140, "(no prompt)"), command_summary: commandSummary, summary: commandSummary };
    }
    if (taskKind === "internal") {
        const summary = summarizeInternalTask(row.prompt);
        return { prompt_summary: summary, command_summary: null, summary };
    }
    const promptSummary = summarizeText(row.prompt, 140, "(no prompt)");
    return { prompt_summary: promptSummary, command_summary: null, summary: promptSummary };
}
function normalizeStatus(status) {
    if (!status)
        return null;
    return TASK_STATUS_VALUES.has(status) ? status : null;
}
function getTaskCounts() {
    const rows = getDb()
        .prepare("SELECT status, COUNT(*) as count FROM scheduled_tasks GROUP BY status")
        .all();
    const map = new Map(rows.map((row) => [row.status, row.count]));
    return {
        active: map.get("active") ?? 0,
        paused: map.get("paused") ?? 0,
        completed: map.get("completed") ?? 0,
    };
}
function getLatestRunLog(taskId) {
    const row = getDb()
        .prepare("SELECT task_id, run_at, duration_ms, status, result, error FROM task_run_logs WHERE task_id = ? ORDER BY run_at DESC LIMIT 1")
        .get(taskId);
    if (!row)
        return null;
    return {
        task_id: row.task_id,
        run_at: row.run_at,
        duration_ms: row.duration_ms,
        status: row.status,
        result: row.result,
        error: row.error,
        result_summary: row.result ? summarizeText(row.result, 180, "") : null,
        error_summary: row.error ? summarizeText(row.error, 180, "") : null,
    };
}
function mapTaskRow(row, includeLatestRunLog) {
    const summary = summarizeTask(row);
    return {
        id: row.id,
        chat_jid: row.chat_jid,
        task_kind: row.task_kind ?? "agent",
        status: row.status,
        schedule_type: row.schedule_type,
        schedule_value: row.schedule_value,
        next_run: row.next_run,
        last_run: row.last_run,
        last_result: row.last_result,
        created_at: row.created_at,
        model: row.model ?? null,
        prompt_summary: summary.prompt_summary,
        command_summary: summary.command_summary,
        summary: summary.summary,
        latest_run_log: includeLatestRunLog ? getLatestRunLog(row.id) : undefined,
    };
}
export function listScheduledTasks(query = {}) {
    const db = getDb();
    const filters = [];
    const params = [];
    const normalizedStatus = normalizeStatus(query.status ?? null);
    const chatJid = query.chat_jid?.trim() || null;
    const taskId = query.id?.trim() || null;
    const limit = Math.min(Math.max(query.limit ?? 20, 1), 50);
    const includeLatestRunLog = query.include_latest_run_log === true;
    if (taskId) {
        filters.push("id = ?");
        params.push(taskId);
    }
    if (chatJid) {
        filters.push("chat_jid = ?");
        params.push(chatJid);
    }
    if (normalizedStatus) {
        filters.push("status = ?");
        params.push(normalizedStatus);
    }
    const whereClause = filters.length > 0 ? ` WHERE ${filters.join(" AND ")}` : "";
    const orderBy = normalizedStatus ? " ORDER BY next_run IS NULL, next_run ASC, created_at DESC" : " ORDER BY created_at DESC";
    const rows = db
        .prepare(`SELECT * FROM scheduled_tasks${whereClause}${orderBy} LIMIT ?`)
        .all(...params, limit);
    return {
        counts: getTaskCounts(),
        tasks: rows.map((row) => mapTaskRow(row, includeLatestRunLog)),
    };
}
export function getScheduledTaskInspection(taskId, options = {}) {
    const id = taskId.trim();
    if (!id)
        return null;
    const result = listScheduledTasks({
        ...options,
        id,
        limit: 1,
    });
    return result.tasks[0] ?? null;
}
