/**
 * test/channels/web/web-sse-client.test.ts – Tests for the browser-side SSEClient.
 *
 * Verifies reconnection scheduling, cooldown enforcement, and
 * event dispatch in the frontend SSE client class.
 */

import { expect, test } from "bun:test";
import "../../helpers.js";

import { SSEClient, streamSidePrompt } from "../../../web/src/api.ts";

test("SSEClient scheduleReconnect triggers cooldown", () => {
  const client = new SSEClient(() => {}, () => {});

  const originalSetTimeout = globalThis.setTimeout;
  const originalNow = Date.now;
  let scheduledDelay = 0;

  globalThis.setTimeout = ((_, delay) => {
    scheduledDelay = Number(delay);
    return 1 as unknown as ReturnType<typeof setTimeout>;
  }) as typeof setTimeout;
  Date.now = () => 1000;

  client.reconnectAttempts = 10;
  client.scheduleReconnect();

  expect(client.cooldownUntil).toBe(61000);
  expect(scheduledDelay).toBe(60000);

  globalThis.setTimeout = originalSetTimeout;
  Date.now = originalNow;
});

test("SSEClient reconnectIfNeeded respects cooldown", () => {
  const client = new SSEClient(() => {}, () => {});
  let connected = false;
  client.connect = () => {
    connected = true;
  };

  client.status = "disconnected";
  client.cooldownUntil = Date.now() + 10000;
  client.reconnectIfNeeded();

  expect(connected).toBe(false);
});

test("streamSidePrompt parses SSE event frames and returns the final payload", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () => {
    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode('event: side_prompt_start\ndata: {"chat_jid":"web:default"}\n\n'));
        controller.enqueue(encoder.encode('event: side_prompt_thinking_delta\ndata: {"delta":"plan"}\n\n'));
        controller.enqueue(encoder.encode('event: side_prompt_text_delta\ndata: {"delta":"answer"}\n\n'));
        controller.enqueue(encoder.encode('event: side_prompt_done\ndata: {"status":"success","result":"answer","thinking":"plan","model":"openai/gpt-test"}\n\n'));
        controller.close();
      },
    });
    return new Response(stream, {
      status: 200,
      headers: { "Content-Type": "text/event-stream" },
    });
  }) as typeof fetch;

  const seen: Array<string> = [];
  const result = await streamSidePrompt("What changed?", {
    onThinkingDelta: (delta) => seen.push(`thinking:${delta}`),
    onTextDelta: (delta) => seen.push(`text:${delta}`),
  });

  expect(seen).toEqual(["thinking:plan", "text:answer"]);
  expect(result).toEqual({
    status: "success",
    result: "answer",
    thinking: "plan",
    model: "openai/gpt-test",
  });

  globalThis.fetch = originalFetch;
});
