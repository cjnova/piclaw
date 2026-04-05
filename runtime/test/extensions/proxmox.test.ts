import { afterEach, expect, test } from "bun:test";

import { createTempWorkspace, setEnv, importFresh } from "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.ts";
import { proxmoxTool, setProxmoxToolHandlers } from "../../src/extensions/proxmox.js";

afterEach(() => {
  setProxmoxToolHandlers(null);
});

test("proxmox registers a normalized tool name", () => {
  const fake = createFakeExtensionApi();

  proxmoxTool(fake.api);

  expect(fake.tools.has("proxmox")).toBe(true);
});

test("proxmox set stores config through registered handlers", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-1", {
    action: "set",
    base_url: "https://proxmox.example.com:8006/api2/json",
    api_token_keychain: "proxmox/piclaw-management-token",
    allow_insecure_tls: false,
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "https://proxmox.example.com:8006/api2/json",
      api_token_keychain: "proxmox/piclaw-management-token",
      allow_insecure_tls: false,
    },
  });
  expect(result.details.apply_timing).toBe("immediate");
  expect(result.content[0].text).toContain("Stored Proxmox config");
});

test("proxmox request delegates through registered handlers", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
        path: "/cluster/resources",
        body: { data: [{ vmid: 117 }] },
      };
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-2", {
    action: "request",
    method: "get",
    path: "cluster/resources",
    query: { type: "vm" },
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      method: "GET",
      path: "cluster/resources",
      query: { type: "vm" },
    },
  });
  expect(result.details.response).toEqual({
    status: 200,
    method: "GET",
    path: "/cluster/resources",
    body: { data: [{ vmid: 117 }] },
  });
  expect(result.content[0].text).toContain("HTTP 200");
  expect(result.content[0].text).toContain("Response:");
  expect(result.content[0].text).toContain('"vmid": 117');
});

test("proxmox workflow delegates through registered handlers", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
        vmid: input.vmid,
        node: "pve",
        result: { status: "running", qmpstatus: "running" },
      };
    },
  });

  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-3", {
    action: "workflow",
    workflow: "vm.create",
    vmid: 117,
    node: "pve",
    name: "vm117",
    memory: 4096,
    slot: "ide2",
    iso_volume: "local:iso/debian.iso",
    config: { scsi0: "local-lvm:32" },
    timeout_ms: 1000,
    poll_ms: 250,
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      workflow: "vm.create",
      vmid: 117,
      node: "pve",
      name: "vm117",
      memory: 4096,
      slot: "ide2",
      iso_volume: "local:iso/debian.iso",
      config: { scsi0: "local-lvm:32" },
      timeout_ms: 1000,
      poll_ms: 250,
    },
  });
  expect(result.details.response).toEqual({
    workflow: "vm.create",
    vmid: 117,
    node: "pve",
    result: { status: "running", qmpstatus: "running" },
  });
  expect(result.content[0].text).toContain("workflow vm.create");
  expect(result.content[0].text).toContain("Result:");
  expect(result.content[0].text).toContain('"status": "running"');
});

test("proxmox capabilities and workflow_help are available without handlers", async () => {
  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const contract = await tool.execute("tool-contract", { action: "contract" });
  expect(contract.details.actions).toContain("request_help");
  expect(contract.details.request_contract.required_fields).toContain("path or requests");
  expect(contract.details.request_contract.response_shape.body_access_path).toBe("details.response.body");
  expect(contract.details.request_contract.response_shape.overflow_tool_output_access_path).toBe("details.response_tool_output or details.batch_tool_output");
  expect(Array.isArray(contract.details.request_contract.examples)).toBe(true);
  expect(contract.content[0].text).toContain("discover");

  const requestHelp = await tool.execute("tool-request-help", { action: "request_help" });
  expect(requestHelp.details.request_contract.optional_fields).toContain("query");
  expect(requestHelp.details.request_contract.optional_fields).toContain("requests");
  expect(requestHelp.details.request_contract.optional_fields).toContain("output_path");
  expect(requestHelp.details.request_contract.metrics_charting_patterns[0].steps[0]).toContain("/cluster/resources");
  expect(requestHelp.content[0].text).toContain("path for one request or requests for a sequential batch");
  expect(requestHelp.details.request_contract.response_shape.batch_results_access_path).toBe("details.batch.results");

  const capabilities = await tool.execute("tool-cap", { action: "capabilities" });
  expect(capabilities.details.workflow_count).toBeGreaterThan(10);
  expect(capabilities.details.workflow_families).toContain("vm");
  expect(capabilities.details.actions).toContain("recommend");
  expect(capabilities.details.actions).toContain("request_help");
  expect(capabilities.details.include_workflows).toBe(false);
  expect(capabilities.details.workflows).toBeUndefined();

  const family = await tool.execute("tool-cap-family", { action: "capabilities", category: "vm" });
  expect(family.details.category).toBe("vm");
  expect(family.details.include_workflows).toBe(true);
  expect(family.details.matching_workflow_count).toBeGreaterThan(8);

  const help = await tool.execute("tool-help", { action: "workflow_help", workflow: "vm.template.create", include_examples: true });
  expect(contract.details.workflow_contract.response_shape.overflow_tool_output_access_path).toBe("details.result_tool_output");
  expect(help.details.canonical_workflow).toBe("vm.template.create");
  expect(help.details.runtime_workflow).toBe("vm.template.create");
  expect(help.details.recommended_for).toContain("golden image preparation");
  expect(help.details.guidance.length).toBeGreaterThan(0);
  expect(Array.isArray(help.details.examples)).toBe(true);
  expect(help.content[0].text).toContain("Mark a VM as a template");

  const recommend = await tool.execute("tool-recommend", { action: "recommend", intent: "restore a VM from backup" });
  expect(recommend.details.recommendation_count).toBeGreaterThan(0);
  expect(recommend.details.recommendations[0].workflow).toBe("backup.restore");

  const provisionRecommend = await tool.execute("tool-recommend-2", { action: "recommend", category: "storage", intent: "download an ISO" });
  expect(provisionRecommend.details.recommendation_count).toBeGreaterThan(0);
  expect(provisionRecommend.details.recommendations[0].workflow).toBe("storage.download_url");
});

test("proxmox request supports sequential batches with retries and output files", async () => {
  const workspace = createTempWorkspace("piclaw-proxmox-batch-");
  const restore = setEnv({
    PICLAW_WORKSPACE: workspace.workspace,
    PICLAW_STORE: workspace.store,
    PICLAW_DATA: workspace.data,
  });

  try {
    const freshDb = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    freshDb.initDatabase();
    const fresh = await importFresh<typeof import("../src/extensions/proxmox.js")>("../src/extensions/proxmox.js");
    const seen: string[] = [];
    let metricsAttempts = 0;
    fresh.setProxmoxToolHandlers({
      get: () => null,
      async set() { throw new Error("unexpected"); },
      async clear() { return { deleted: false, apply_timing: "immediate" as const }; },
      async request(_chatJid, input) {
        seen.push(`${input.method} ${input.path}`);
        if (input.path === "nodes/pve/qemu/117/rrddata") {
          metricsAttempts += 1;
          if (metricsAttempts === 1) {
            throw new Error("Proxmox API GET /nodes/pve/qemu/117/rrddata failed with HTTP 502: upstream timeout");
          }
        }
        return {
          status: 200,
          method: input.method,
          path: input.path.startsWith("/") ? input.path : `/${input.path}`,
          body: { ok: true, path: input.path, attempt: metricsAttempts || 1 },
        };
      },
      async workflow() { throw new Error("unexpected"); },
    });

    const fake = createFakeExtensionApi();
    fresh.proxmoxTool(fake.api);
    const tool = fake.tools.get("proxmox");
    const result = await tool.execute("tool-batch-request", {
      action: "request",
      requests: [
        { label: "resources", method: "GET", path: "cluster/resources", query: { type: "vm" } },
        { label: "metrics", method: "GET", path: "nodes/pve/qemu/117/rrddata", query: { timeframe: "day", cf: "AVERAGE" } },
      ],
      retries: 1,
      retry_delay_ms: 0,
      throttle_ms: 0,
      pause_ms: 0,
      output_path: "exports/proxmox-batch.json",
    });

    expect(seen).toEqual([
      "GET cluster/resources",
      "GET nodes/pve/qemu/117/rrddata",
      "GET nodes/pve/qemu/117/rrddata",
    ]);
    expect(result.details.batch.success_count).toBe(2);
    expect(result.details.batch.failure_count).toBe(0);
    expect(result.details.batch.results[1].attempt_count).toBe(2);
    expect(result.details.output_file.relative_path).toBe("exports/proxmox-batch.json");
    expect(result.content[0].text).toContain("Output file:");
    const payload = JSON.parse(await Bun.file(result.details.output_file.path).text());
    expect(payload.request_count).toBe(2);
    expect(payload.success_count).toBe(2);
  } finally {
    restore();
    workspace.cleanup();
  }
});

test("proxmox stores large request bodies as tool-output and preserves full body in details", async () => {
  const workspace = createTempWorkspace("piclaw-proxmox-large-");
  const restore = setEnv({
    PICLAW_WORKSPACE: workspace.workspace,
    PICLAW_STORE: workspace.store,
    PICLAW_DATA: workspace.data,
    PICLAW_TOOL_OUTPUT_STORE_BYTES: "200",
    PICLAW_TOOL_OUTPUT_STORE_LINES: "3",
  });

  try {
    const largeBody = { data: Array.from({ length: 30 }, (_, index) => ({ vmid: 100 + index, node: `pve${index % 3}` })) };
    const freshDb = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    freshDb.initDatabase();
    const fresh = await importFresh<typeof import("../src/extensions/proxmox.js")>("../src/extensions/proxmox.js");
    fresh.setProxmoxToolHandlers({
      get: () => null,
      async set() { throw new Error("unexpected"); },
      async clear() { return { deleted: false, apply_timing: "immediate" as const }; },
      async request() {
        return { status: 200, method: "GET", path: "/cluster/resources", body: largeBody };
      },
      async workflow() { throw new Error("unexpected"); },
    });

    const fake = createFakeExtensionApi();
    fresh.proxmoxTool(fake.api);
    const tool = fake.tools.get("proxmox");
    const result = await tool.execute("tool-large-request", { action: "request", method: "GET", path: "/cluster/resources" });

    expect(result.content[0].text).toContain("tool-output:");
    expect(result.details.response.body).toEqual(largeBody);
    expect(result.details.response_tool_output.id).toMatch(/^out-/);
    expect(result.details.response_tool_output.path).toContain("tool-output");
  } finally {
    restore();
    workspace.cleanup();
  }
});

test("proxmox request can write a single response to an output file", async () => {
  const workspace = createTempWorkspace("piclaw-proxmox-output-");
  const restore = setEnv({
    PICLAW_WORKSPACE: workspace.workspace,
    PICLAW_STORE: workspace.store,
    PICLAW_DATA: workspace.data,
  });

  try {
    const fresh = await importFresh<typeof import("../src/extensions/proxmox.js")>("../src/extensions/proxmox.js");
    fresh.setProxmoxToolHandlers({
      get: () => null,
      async set() { throw new Error("unexpected"); },
      async clear() { return { deleted: false, apply_timing: "immediate" as const }; },
      async request(_chatJid, input) {
        return { status: 200, method: input.method, path: "/cluster/resources", body: { data: [{ vmid: 117 }] } };
      },
      async workflow() { throw new Error("unexpected"); },
    });

    const fake = createFakeExtensionApi();
    fresh.proxmoxTool(fake.api);
    const tool = fake.tools.get("proxmox");
    const result = await tool.execute("tool-output-file", { action: "request", method: "GET", path: "/cluster/resources", output_path: "exports/proxmox-single.json" });

    expect(result.details.output_file.relative_path).toBe("exports/proxmox-single.json");
    const payload = JSON.parse(await Bun.file(result.details.output_file.path).text());
    expect(payload.path).toBe("/cluster/resources");
    expect(payload.body.data[0].vmid).toBe(117);
  } finally {
    restore();
    workspace.cleanup();
  }
});

test("proxmox metrics workflow forwards charting parameters", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
        vmid: input.vmid,
        node: "pve",
        result: {
          source: "rrddata",
          scope: "vm",
          timeframe: "day",
          cf: "AVERAGE",
          metrics: ["cpu"],
          points: [{ time: 1, cpu: 0.5 }],
        },
      };
    },
  });

  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-5", {
    action: "workflow",
    workflow: "metrics.vm",
    vmid: 117,
    timeframe: "day",
    cf: "average",
    metric: "cpu",
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      workflow: "metrics.vm",
      vmid: 117,
      timeframe: "day",
      cf: "average",
      metric: "cpu",
    },
  });
  expect(result.content[0].text).toContain("(1 points)");
});

test("proxmox get reports missing config for the current session", async () => {
  setProxmoxToolHandlers({
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
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-4", { action: "get" });

  expect(result.details.configured).toBe(false);
  expect(result.content[0].text).toContain("No Proxmox config stored");
});

test("proxmox set can delegate discovery-friendly empty inputs", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
    get: () => null,
    async set(chatJid, config) {
      seen = { chatJid, config };
      return {
        apply_timing: "immediate",
        config: {
          chat_jid: chatJid,
          base_url: "https://192.168.1.10:8006/api2/json",
          api_token_keychain: "proxmox/piclaw-management-token",
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
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  await tool.execute("tool-6", { action: "set" });
  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "",
      api_token_keychain: "",
      allow_insecure_tls: true,
    },
  });
});
