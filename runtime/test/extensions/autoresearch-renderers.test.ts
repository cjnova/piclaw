import { describe, expect, test } from "bun:test";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("autoresearch renderer integration", () => {
  test("experiment tools opt into self-managed render shells", async () => {
    const { default: autoresearchExtension } = await import("../../vendor/autoresearch/extensions/pi-autoresearch/index.ts");
    const fake = createFakeExtensionApi({ allTools: [] });

    autoresearchExtension(fake.api);

    expect(fake.tools.get("init_experiment")?.renderShell).toBe("self");
    expect(fake.tools.get("run_experiment")?.renderShell).toBe("self");
    expect(fake.tools.get("log_experiment")?.renderShell).toBe("self");
  });
});
