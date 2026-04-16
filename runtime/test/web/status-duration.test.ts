import { expect, test } from "bun:test";
import {
  formatElapsedDuration,
  getStatusRetryCountdownLabel,
  parseStatusRetryAt,
} from "../../web/src/ui/status-duration.ts";

test("parseStatusRetryAt accepts retry_at and retryAt aliases", () => {
  expect(parseStatusRetryAt({ retry_at: "2026-04-16T09:00:05.000Z" })).toBe(Date.parse("2026-04-16T09:00:05.000Z"));
  expect(parseStatusRetryAt({ retryAt: "2026-04-16T09:00:06.000Z" })).toBe(Date.parse("2026-04-16T09:00:06.000Z"));
  expect(parseStatusRetryAt({ retry_at: "nope" })).toBeNull();
});

test("getStatusRetryCountdownLabel renders a live countdown and expiry label", () => {
  const retryAt = Date.parse("2026-04-16T09:00:10.000Z");
  expect(getStatusRetryCountdownLabel({ retry_at: "2026-04-16T09:00:10.000Z" }, retryAt - 5100)).toBe(`retry in ${formatElapsedDuration(5100)}`);
  expect(getStatusRetryCountdownLabel({ retry_at: "2026-04-16T09:00:10.000Z" }, retryAt + 1)).toBe("retrying now");
  expect(getStatusRetryCountdownLabel({}, retryAt)).toBeNull();
});
