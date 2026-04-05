import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { WORKSPACE_DIR } from "../core/config.js";
const DEFAULT_TIMEOUT_MS = 30_000;
const DEFAULT_RETRIES = 2;
const DEFAULT_RETRY_DELAY_MS = 1_000;
const DEFAULT_RETRY_BACKOFF_FACTOR = 2;
const DEFAULT_THROTTLE_MS = 250;
const DEFAULT_PAUSE_MS = 0;
const RETRIABLE_HTTP_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);
function clampInteger(value, fallback, minimum) {
    if (!Number.isFinite(value))
        return fallback;
    return Math.max(minimum, Math.trunc(value));
}
function sleep(ms) {
    if (ms <= 0)
        return Promise.resolve();
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function parseErrorStatus(error) {
    const message = error instanceof Error ? error.message : String(error ?? "");
    const match = message.match(/\bHTTP\s+(\d{3})\b/i) || message.match(/\bstatus\s+(\d{3})\b/i);
    if (!match)
        return undefined;
    const status = Number.parseInt(match[1] || "", 10);
    return Number.isFinite(status) ? status : undefined;
}
function isRetriableError(error) {
    const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
    const status = parseErrorStatus(error);
    if (typeof status === "number") {
        return { status, retriable: RETRIABLE_HTTP_STATUSES.has(status), message };
    }
    const normalized = message.toLowerCase();
    if (normalized.includes("timeout") || normalized.includes("timed out") || normalized.includes("network") || normalized.includes("econnreset") || normalized.includes("fetch failed")) {
        return { retriable: true, message };
    }
    return { retriable: true, message };
}
async function withTimeout(promise, timeoutMs, label) {
    if (timeoutMs <= 0)
        return promise;
    let timer = null;
    try {
        return await Promise.race([
            promise,
            new Promise((_, reject) => {
                timer = setTimeout(() => reject(new Error(`${label} timed out after ${timeoutMs}ms.`)), timeoutMs);
            }),
        ]);
    }
    finally {
        if (timer)
            clearTimeout(timer);
    }
}
function resolveOutputPath(rawPath) {
    const trimmed = rawPath.trim();
    if (!trimmed) {
        throw new Error("output_path must not be empty.");
    }
    const resolved = path.isAbsolute(trimmed) ? path.resolve(trimmed) : path.resolve(WORKSPACE_DIR, trimmed);
    const rel = path.relative(WORKSPACE_DIR, resolved);
    if (!rel || rel === ".") {
        throw new Error("output_path must point to a file inside the workspace.");
    }
    if (rel.startsWith("..") || path.isAbsolute(rel)) {
        throw new Error("output_path must stay within the workspace.");
    }
    return {
        path: resolved,
        relative_path: rel.split(path.sep).join("/"),
    };
}
function toJsonl(value) {
    const rows = Array.isArray(value)
        ? value
        : (value && typeof value === "object" && Array.isArray(value.results))
            ? (value.results)
            : [value];
    return `${rows.map((row) => JSON.stringify(row)).join("\n")}\n`;
}
export function writeRequestOutputFile(rawPath, format, value) {
    const resolved = resolveOutputPath(rawPath);
    const content = format === "jsonl"
        ? toJsonl(value)
        : `${JSON.stringify(value, null, 2)}\n`;
    mkdirSync(path.dirname(resolved.path), { recursive: true });
    writeFileSync(resolved.path, content, "utf8");
    return {
        path: resolved.path,
        relative_path: resolved.relative_path,
        format,
        size_bytes: Buffer.byteLength(content, "utf8"),
        line_count: content ? content.replace(/\r\n/g, "\n").split("\n").length : 0,
    };
}
export function appendOutputFileNote(text, outputFile) {
    if (!outputFile)
        return text;
    return `${text}\n\nOutput file: ${outputFile.relative_path} (${outputFile.format}, ${outputFile.size_bytes} bytes).`;
}
export async function runRequestBatch(options) {
    const timeoutMs = clampInteger(options.timeout_ms, DEFAULT_TIMEOUT_MS, 1);
    const retries = clampInteger(options.retries, DEFAULT_RETRIES, 0);
    const retryDelayMs = clampInteger(options.retry_delay_ms, DEFAULT_RETRY_DELAY_MS, 0);
    const retryBackoffFactor = Math.max(1, Number.isFinite(options.retry_backoff_factor) ? Number(options.retry_backoff_factor) : DEFAULT_RETRY_BACKOFF_FACTOR);
    const throttleMs = clampInteger(options.throttle_ms, DEFAULT_THROTTLE_MS, 0);
    const pauseMs = clampInteger(options.pause_ms, DEFAULT_PAUSE_MS, 0);
    const failFast = options.fail_fast !== false;
    const results = [];
    let stoppedEarly = false;
    let lastAttemptStartedAt = 0;
    for (let index = 0; index < options.requests.length; index += 1) {
        const request = options.requests[index];
        if (index > 0 && pauseMs > 0) {
            await sleep(pauseMs);
        }
        let completed = false;
        let attempt = 0;
        while (!completed) {
            if (throttleMs > 0 && lastAttemptStartedAt > 0) {
                const elapsed = Date.now() - lastAttemptStartedAt;
                if (elapsed < throttleMs) {
                    await sleep(throttleMs - elapsed);
                }
            }
            const startedAtMs = Date.now();
            lastAttemptStartedAt = startedAtMs;
            const startedAt = new Date(startedAtMs).toISOString();
            try {
                const response = await withTimeout(options.execute(request), timeoutMs, `${options.timeout_label_prefix} request ${index + 1}`);
                const finishedAtMs = Date.now();
                results.push({
                    index,
                    label: options.getLabel?.(request, index) ?? null,
                    ok: true,
                    request,
                    started_at: startedAt,
                    finished_at: new Date(finishedAtMs).toISOString(),
                    duration_ms: finishedAtMs - startedAtMs,
                    attempt_count: attempt + 1,
                    response,
                });
                completed = true;
            }
            catch (error) {
                const inspected = isRetriableError(error);
                const canRetry = inspected.retriable && attempt < retries;
                if (canRetry) {
                    const delayMs = Math.trunc(retryDelayMs * Math.pow(retryBackoffFactor, attempt));
                    if (delayMs > 0)
                        await sleep(delayMs);
                    attempt += 1;
                    continue;
                }
                const finishedAtMs = Date.now();
                results.push({
                    index,
                    label: options.getLabel?.(request, index) ?? null,
                    ok: false,
                    request,
                    started_at: startedAt,
                    finished_at: new Date(finishedAtMs).toISOString(),
                    duration_ms: finishedAtMs - startedAtMs,
                    attempt_count: attempt + 1,
                    error: {
                        message: inspected.message,
                        ...(typeof inspected.status === "number" ? { status: inspected.status } : {}),
                        retriable: inspected.retriable,
                    },
                });
                completed = true;
                if (failFast) {
                    stoppedEarly = true;
                }
            }
        }
        if (stoppedEarly)
            break;
    }
    const successCount = results.filter((entry) => entry.ok).length;
    const failureCount = results.length - successCount;
    return {
        mode: "batch",
        request_count: options.requests.length,
        attempted_count: results.length,
        skipped_count: Math.max(0, options.requests.length - results.length),
        success_count: successCount,
        failure_count: failureCount,
        ok: failureCount === 0,
        stopped_early: stoppedEarly,
        settings: {
            pause_ms: pauseMs,
            throttle_ms: throttleMs,
            timeout_ms: timeoutMs,
            retries,
            retry_delay_ms: retryDelayMs,
            retry_backoff_factor: retryBackoffFactor,
            fail_fast: failFast,
        },
        results,
    };
}
