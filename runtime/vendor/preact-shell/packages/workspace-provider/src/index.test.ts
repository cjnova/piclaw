import { afterEach, describe, expect, it } from "bun:test";
import { access, mkdtemp, mkdir, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createWorkspaceRoutes } from "./index";

describe("workspace provider routes", () => {
  const cleanupPaths: string[] = [];

  afterEach(async () => {
    await Promise.all(cleanupPaths.splice(0).map((dirPath) => rm(dirPath, { recursive: true, force: true })));
  });

  it("creates archive with JS zip stream", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "workspace-provider-"));
    cleanupPaths.push(root);

    const folder = path.join(root, "sample");
    const nested = path.join(folder, "nested");
    await mkdir(nested, { recursive: true });
    await writeFile(path.join(folder, "hello.txt"), "hello archive", "utf8");
    await writeFile(path.join(nested, "data.bin"), Buffer.from([0, 255, 1, 2, 3, 4]));

    const app = createWorkspaceRoutes({ root });
    const response = await app.request("http://local/archive?path=sample");

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/zip");
    expect(response.headers.get("content-disposition")).toBe('attachment; filename="sample.zip"');

    const archive = Buffer.from(await response.arrayBuffer());
    expect(archive.subarray(0, 2).toString("utf8")).toBe("PK");

    const archiveText = archive.toString("utf8");
    expect(archiveText).toContain("hello.txt");
    expect(archiveText).toContain("nested/data.bin");
  });

  it("rejects traversal paths for archive route", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "workspace-provider-"));
    cleanupPaths.push(root);

    const app = createWorkspaceRoutes({ root });
    const response = await app.request("http://local/archive?path=../outside");

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("Invalid path");
  });

  it("blocks symlink escapes for read/create/raw/archive/move", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "workspace-provider-"));
    const outside = await mkdtemp(path.join(tmpdir(), "workspace-provider-outside-"));
    cleanupPaths.push(root, outside);

    await writeFile(path.join(outside, "secret.txt"), "outside", "utf8");
    await mkdir(path.join(root, "safe"), { recursive: true });
    await writeFile(path.join(root, "safe", "inside.txt"), "inside", "utf8");
    await symlink(outside, path.join(root, "escape"));

    const app = createWorkspaceRoutes({ root });

    const readResponse = await app.request("http://local/file?path=escape/secret.txt");
    expect(readResponse.status).toBe(400);

    const createResponse = await app.request("http://local/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ path: "escape/new.txt", content: "x" }),
    });
    expect(createResponse.status).toBe(400);

    const rawResponse = await app.request("http://local/raw?path=escape/secret.txt");
    expect(rawResponse.status).toBe(400);

    const archiveResponse = await app.request("http://local/archive?path=escape");
    expect(archiveResponse.status).toBe(400);

    const moveResponse = await app.request("http://local/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ sourcePath: "safe/inside.txt", targetDir: "escape" }),
    });
    expect(moveResponse.status).toBe(400);
  });

  it("omits out-of-root symlinks from tree listings", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "workspace-provider-"));
    const outside = await mkdtemp(path.join(tmpdir(), "workspace-provider-outside-"));
    cleanupPaths.push(root, outside);

    await mkdir(path.join(root, "safe"), { recursive: true });
    await writeFile(path.join(root, "safe", "inside.txt"), "inside", "utf8");
    await writeFile(path.join(outside, "secret.txt"), "outside", "utf8");
    await symlink(path.join(root, "safe"), path.join(root, "safe-link"));
    await symlink(path.join(outside, "secret.txt"), path.join(root, "secret-link.txt"));

    const app = createWorkspaceRoutes({ root });
    const response = await app.request("http://local/tree?path=.&depth=2");

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.children).toEqual([
      {
        name: "safe",
        path: "safe",
        type: "dir",
        size: null,
        mtime: expect.any(String),
        childCount: 1,
        children: [
          {
            name: "inside.txt",
            path: "safe/inside.txt",
            type: "file",
            size: 6,
            mtime: expect.any(String),
            childCount: null,
          },
        ],
      },
      {
        name: "safe-link",
        path: "safe-link",
        type: "dir",
        size: null,
        mtime: expect.any(String),
        childCount: 1,
        children: [
          {
            name: "inside.txt",
            path: "safe-link/inside.txt",
            type: "file",
            size: 6,
            mtime: expect.any(String),
            childCount: null,
          },
        ],
      },
    ]);
  });

  it("does not expose out-of-root symlink metadata in tree child counts", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "workspace-provider-"));
    const outside = await mkdtemp(path.join(tmpdir(), "workspace-provider-outside-"));
    cleanupPaths.push(root, outside);

    await mkdir(path.join(root, "safe"), { recursive: true });
    await writeFile(path.join(root, "safe", "inside.txt"), "inside", "utf8");
    await writeFile(path.join(outside, "secret.txt"), "outside", "utf8");
    await symlink(path.join(outside, "secret.txt"), path.join(root, "safe", "secret-link.txt"));

    const app = createWorkspaceRoutes({ root });
    const response = await app.request("http://local/tree?path=.&depth=1");

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.children).toEqual([
      {
        name: "safe",
        path: "safe",
        type: "dir",
        size: null,
        mtime: expect.any(String),
        childCount: 1,
        children: [
          {
            name: "inside.txt",
            path: "safe/inside.txt",
            type: "file",
            size: 6,
            mtime: expect.any(String),
            childCount: null,
          },
        ],
      },
    ]);
  });

  it("POST /file supports success, conflict, path validation and csrf", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "workspace-provider-"));
    cleanupPaths.push(root);

    const app = createWorkspaceRoutes({ root });

    const csrfResponse = await app.request("http://local/file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "docs/guide.md", content: "hello" }),
    });
    expect(csrfResponse.status).toBe(403);

    const successResponse = await app.request("http://local/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ path: "docs/guide.md", content: "hello" }),
    });
    expect(successResponse.status).toBe(200);
    expect(await successResponse.json()).toEqual({ ok: true, path: "docs/guide.md" });
    await access(path.join(root, "docs", "guide.md"));

    const conflictResponse = await app.request("http://local/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ path: "docs/guide.md", content: "hello" }),
    });
    expect(conflictResponse.status).toBe(409);
    expect(await conflictResponse.json()).toEqual({ error: "File already exists", conflict: true });

    const missingPathResponse = await app.request("http://local/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ content: "hello" }),
    });
    expect(missingPathResponse.status).toBe(400);

    const invalidPathResponse = await app.request("http://local/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ path: "../escape.txt", content: "hello" }),
    });
    expect(invalidPathResponse.status).toBe(400);

    const putCsrfResponse = await app.request("http://local/file", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "docs/guide.md", content: "updated" }),
    });
    expect(putCsrfResponse.status).toBe(403);

    const putMissingResponse = await app.request("http://local/file", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ path: "docs/missing.md", content: "updated" }),
    });
    expect(putMissingResponse.status).toBe(404);

    const putSuccessResponse = await app.request("http://local/file", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "preact-shell",
      },
      body: JSON.stringify({ path: "docs/guide.md", content: "updated" }),
    });
    expect(putSuccessResponse.status).toBe(200);
    expect(await putSuccessResponse.json()).toEqual({ ok: true });

    const updatedRead = await app.request("http://local/file?path=docs/guide.md");
    expect(updatedRead.status).toBe(200);
    const updatedPayload = await updatedRead.json();
    expect(updatedPayload.content).toBe("updated");
  });
});
