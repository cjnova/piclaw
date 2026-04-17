import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const MAKEFILE_PATH = resolve(import.meta.dir, "../../..", "Makefile");

test("make restart discovers the running supervisor config and falls back to plain supervisorctl", () => {
  const makefile = readFileSync(MAKEFILE_PATH, "utf8");

  expect(makefile).toContain('/proc/$$pid/cmdline');
  expect(makefile).toContain('supervisor_status_exists "$$supervisor_conf"');
  expect(makefile).toContain('supervisor_status_exists ""');
  expect(makefile).not.toContain('supervisorctl -c /workspace/.piclaw/supervisor/supervisord.conf status piclaw');
  expect(makefile).not.toContain('supervisorctl -c /workspace/.piclaw/supervisor/supervisord.conf restart piclaw');
});
