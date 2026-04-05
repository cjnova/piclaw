import { afterEach, expect, test } from "bun:test";

import { createTempWorkspace, setEnv, importFresh } from "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.ts";
import { portainerTool, setPortainerToolHandlers } from "../../src/extensions/portainer.js";

afterEach(() => {
  setPortainerToolHandlers(null);
});

test("portainer registers a normalized tool name", () => {
  const fake = createFakeExtensionApi();

  portainerTool(fake.api);

  expect(fake.tools.has("portainer")).toBe(true);
});

test("portainer set stores config through registered handlers", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set(chatJid, config) {
      seen = { chatJid, config };
      return {
        apply_timing: "immediate",
        config: {
          chat_jid: chatJid,
          ...config,
          created_at: "2026-04-05T00:00:00.000Z",
          updated_at: "2026-04-05T00:00:00.000Z",
        },
      };
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-1", {
    action: "set",
    base_url: "https://portainer.example.com:9443",
    api_token_keychain: "portainer/relay",
    allow_insecure_tls: false,
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "https://portainer.example.com:9443",
      api_token_keychain: "portainer/relay",
      allow_insecure_tls: false,
    },
  });
  expect(result.details.apply_timing).toBe("immediate");
  expect(result.content[0].text).toContain("Stored Portainer config");
});

test("portainer request delegates through registered handlers", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set() {
      throw new Error("unexpected");
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request(chatJid, input) {
      seen = { chatJid, input };
      return {
        status: 200,
        method: input.method,
        path: "/api/endpoints",
        body: [{ Id: 2, Name: "diskstation" }],
      };
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-2", {
    action: "request",
    method: "get",
    path: "api/endpoints",
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      method: "GET",
      path: "api/endpoints",
    },
  });
  expect(result.details.response).toEqual({
    status: 200,
    method: "GET",
    path: "/api/endpoints",
    body: [{ Id: 2, Name: "diskstation" }],
  });
  expect(result.content[0].text).toContain("HTTP 200");
  expect(result.content[0].text).toContain("Response:");
  expect(result.content[0].text).toContain("diskstation");
});

test("portainer workflow delegates through registered handlers", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set() {
      throw new Error("unexpected");
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow(chatJid, input) {
      seen = { chatJid, input };
      return {
        workflow: input.workflow,
        result: [{ Id: 2, Name: "diskstation" }],
      };
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-3", {
    action: "workflow",
    workflow: "endpoint.list",
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      workflow: "endpoint.list",
    },
  });
  expect(result.details.response).toEqual({
    workflow: "endpoint.list",
    result: [{ Id: 2, Name: "diskstation" }],
  });
  expect(result.content[0].text).toContain("(1 items)");
  expect(result.content[0].text).toContain("Result:");
  expect(result.content[0].text).toContain("diskstation");
});

test("portainer capabilities and workflow_help are available without handlers", async () => {
  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const contract = await tool.execute("tool-contract", { action: "contract" });
  expect(contract.details.actions).toContain("request_help");
  expect(contract.details.request_contract.required_fields).toContain("path or requests");
  expect(contract.details.request_contract.response_shape.body_access_path).toBe("details.response.body");
  expect(contract.details.request_contract.response_shape.overflow_tool_output_access_path).toBe("details.response_tool_output or details.batch_tool_output");
  expect(Array.isArray(contract.details.request_contract.examples)).toBe(true);
  expect(contract.content[0].text).toContain("discover");

  const requestHelp = await tool.execute("tool-request-help", { action: "request_help" });
  expect(requestHelp.details.request_contract.optional_fields).toContain("headers");
  expect(requestHelp.details.request_contract.optional_fields).toContain("requests");
  expect(requestHelp.details.request_contract.optional_fields).toContain("output_path");
  expect(requestHelp.details.request_contract.inventory_patterns[0].steps[0]).toContain("/api/endpoints");
  expect(requestHelp.details.request_contract.inventory_patterns[1].steps[2]).toContain("/stats?stream=false");
  expect(requestHelp.details.request_contract.examples.some((example: any) => String(example.path || "").includes("/docker/containers/04572d64c639/stats"))).toBe(true);
  expect(requestHelp.content[0].text).toContain("path for one request or requests for a sequential batch");
  expect(requestHelp.details.request_contract.response_shape.batch_results_access_path).toBe("details.batch.results");

  const capabilities = await tool.execute("tool-cap", { action: "capabilities" });
  expect(capabilities.details.workflow_count).toBeGreaterThan(10);
  expect(capabilities.details.workflow_families).toContain("container");
  expect(capabilities.details.actions).toContain("recommend");
  expect(capabilities.details.actions).toContain("request_help");
  expect(capabilities.details.include_workflows).toBe(false);
  expect(capabilities.details.workflows).toBeUndefined();

  const family = await tool.execute("tool-cap-family", { action: "capabilities", category: "container" });
  expect(family.details.category).toBe("container");
  expect(family.details.include_workflows).toBe(true);
  expect(family.details.matching_workflow_count).toBeGreaterThan(5);

  const help = await tool.execute("tool-help", { action: "workflow_help", workflow: "image.update_check", include_examples: true });
  expect(contract.details.workflow_contract.response_shape.overflow_tool_output_access_path).toBe("details.result_tool_output");
  expect(help.details.canonical_workflow).toBe("image.update_check");
  expect(help.details.runtime_workflow).toBe("image.update_check");
  expect(help.details.recommended_for).toContain("update planning");
  expect(help.details.guidance.length).toBeGreaterThan(0);
  expect(Array.isArray(help.details.examples)).toBe(true);
  expect(help.content[0].text).toContain("Compare local and remote image digests");

  const recommend = await tool.execute("tool-recommend", { action: "recommend", intent: "refresh a stack-managed workload" });
  expect(recommend.details.recommendation_count).toBeGreaterThan(0);
  expect(recommend.details.recommendations[0].workflow).toBe("stack.pull_and_update");
});

test("portainer request supports sequential batches with retries and output files", async () => {
  const workspace = createTempWorkspace("piclaw-portainer-batch-");
  const restore = setEnv({
    PICLAW_WORKSPACE: workspace.workspace,
    PICLAW_STORE: workspace.store,
    PICLAW_DATA: workspace.data,
  });

  try {
    const freshDb = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    freshDb.initDatabase();
    const fresh = await importFresh<typeof import("../src/extensions/portainer.js")>("../src/extensions/portainer.js");
    const seen: string[] = [];
    let infoAttempts = 0;
    fresh.setPortainerToolHandlers({
      get: () => null,
      async set() { throw new Error("unexpected"); },
      async clear() { return { deleted: false, apply_timing: "immediate" as const }; },
      async request(_chatJid, input) {
        seen.push(`${input.method} ${input.path}`);
        if (input.path === "api/endpoints/2/docker/info") {
          infoAttempts += 1;
          if (infoAttempts === 1) {
            throw new Error("Portainer API GET /api/endpoints/2/docker/info failed with HTTP 502: null");
          }
        }
        return {
          status: 200,
          method: input.method,
          path: input.path.startsWith("/") ? input.path : `/${input.path}`,
          body: { ok: true, path: input.path, attempt: infoAttempts || 1 },
        };
      },
      async workflow() { throw new Error("unexpected"); },
    });

    const fake = createFakeExtensionApi();
    fresh.portainerTool(fake.api);
    const tool = fake.tools.get("portainer");
    const result = await tool.execute("tool-batch-request", {
      action: "request",
      requests: [
        { label: "endpoints", method: "GET", path: "api/endpoints" },
        { label: "docker-info", method: "GET", path: "api/endpoints/2/docker/info" },
      ],
      retries: 1,
      retry_delay_ms: 0,
      throttle_ms: 0,
      pause_ms: 0,
      output_path: "exports/portainer-batch.json",
    });

    expect(seen).toEqual([
      "GET api/endpoints",
      "GET api/endpoints/2/docker/info",
      "GET api/endpoints/2/docker/info",
    ]);
    expect(result.details.batch.success_count).toBe(2);
    expect(result.details.batch.failure_count).toBe(0);
    expect(result.details.batch.results[1].attempt_count).toBe(2);
    expect(result.details.output_file.relative_path).toBe("exports/portainer-batch.json");
    expect(result.content[0].text).toContain("Output file:");
    const payload = JSON.parse(await Bun.file(result.details.output_file.path).text());
    expect(payload.request_count).toBe(2);
    expect(payload.success_count).toBe(2);
  } finally {
    restore();
    workspace.cleanup();
  }
});

test("portainer stores large request bodies as tool-output and preserves full body in details", async () => {
  const workspace = createTempWorkspace("piclaw-portainer-large-");
  const restore = setEnv({
    PICLAW_WORKSPACE: workspace.workspace,
    PICLAW_STORE: workspace.store,
    PICLAW_DATA: workspace.data,
    PICLAW_TOOL_OUTPUT_STORE_BYTES: "200",
    PICLAW_TOOL_OUTPUT_STORE_LINES: "3",
  });

  try {
    const largeBody = Array.from({ length: 30 }, (_, index) => ({ Id: index + 1, Name: `container-${index}`, Memory: 1024 * (index + 1) }));
    const freshDb = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    freshDb.initDatabase();
    const fresh = await importFresh<typeof import("../src/extensions/portainer.js")>("../src/extensions/portainer.js");
    fresh.setPortainerToolHandlers({
      get: () => null,
      async set() { throw new Error("unexpected"); },
      async clear() { return { deleted: false, apply_timing: "immediate" as const }; },
      async request() {
        return { status: 200, method: "GET", path: "/api/endpoints", body: largeBody };
      },
      async workflow() { throw new Error("unexpected"); },
    });

    const fake = createFakeExtensionApi();
    fresh.portainerTool(fake.api);
    const tool = fake.tools.get("portainer");
    const result = await tool.execute("tool-large-request", { action: "request", method: "GET", path: "/api/endpoints" });

    expect(result.content[0].text).toContain("tool-output:");
    expect(result.details.response.body).toEqual(largeBody);
    expect(result.details.response_tool_output.id).toMatch(/^out-/);
    expect(result.details.response_tool_output.path).toContain("tool-output");
  } finally {
    restore();
    workspace.cleanup();
  }
});

test("portainer request can write a single response to an output file", async () => {
  const workspace = createTempWorkspace("piclaw-portainer-output-");
  const restore = setEnv({
    PICLAW_WORKSPACE: workspace.workspace,
    PICLAW_STORE: workspace.store,
    PICLAW_DATA: workspace.data,
  });

  try {
    const fresh = await importFresh<typeof import("../src/extensions/portainer.js")>("../src/extensions/portainer.js");
    fresh.setPortainerToolHandlers({
      get: () => null,
      async set() { throw new Error("unexpected"); },
      async clear() { return { deleted: false, apply_timing: "immediate" as const }; },
      async request(_chatJid, input) {
        return { status: 200, method: input.method, path: "/api/endpoints", body: [{ Id: 2, Name: "diskstation" }] };
      },
      async workflow() { throw new Error("unexpected"); },
    });

    const fake = createFakeExtensionApi();
    fresh.portainerTool(fake.api);
    const tool = fake.tools.get("portainer");
    const result = await tool.execute("tool-output-file", { action: "request", method: "GET", path: "/api/endpoints", output_path: "exports/portainer-single.json" });

    expect(result.details.output_file.relative_path).toBe("exports/portainer-single.json");
    const payload = JSON.parse(await Bun.file(result.details.output_file.path).text());
    expect(payload.path).toBe("/api/endpoints");
    expect(payload.body[0].Name).toBe("diskstation");
  } finally {
    restore();
    workspace.cleanup();
  }
});

test("portainer get reports missing config for the current session", async () => {
  setPortainerToolHandlers({
    get: () => null,
    async set() {
      throw new Error("unexpected");
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-4", { action: "get" });

  expect(result.details.configured).toBe(false);
  expect(result.content[0].text).toContain("No Portainer config stored");
});

test("portainer set can delegate discovery-friendly empty inputs", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set(chatJid, config) {
      seen = { chatJid, config };
      return {
        apply_timing: "immediate",
        config: {
          chat_jid: chatJid,
          base_url: "https://portainer.example.com:9443",
          api_token_keychain: "portainer/relay",
          allow_insecure_tls: true,
          created_at: "2026-04-05T00:00:00.000Z",
          updated_at: "2026-04-05T00:00:00.000Z",
        },
      };
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  await tool.execute("tool-5", { action: "set" });
  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "",
      api_token_keychain: "",
      allow_insecure_tls: true,
    },
  });
});
