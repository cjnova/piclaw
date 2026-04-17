import { expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

const SCRIPT_PATH = resolve(import.meta.dir, "../../..", "scripts", "docker", "install-restic-release.sh");
const REPO_ROOT = resolve(import.meta.dir, "../../..");
const TEST_SHELL = process.env.SHELL || "bash";

test("install-restic-release cleans up its temp dir when curl fails", () => {
  const root = mkdtempSync(join(tmpdir(), "piclaw-restic-install-"));
  const fakeBin = join(root, "bin");
  const tempRoot = join(root, "tmp");
  const installDir = join(root, "install");
  mkdirSync(fakeBin, { recursive: true });
  mkdirSync(tempRoot, { recursive: true });
  mkdirSync(installDir, { recursive: true });

  try {
    writeFileSync(
      join(fakeBin, "curl"),
      "#!/usr/bin/env bash\nexit 23\n",
      { mode: 0o755 },
    );

    const run = Bun.spawnSync({
      cmd: [TEST_SHELL, SCRIPT_PATH],
      cwd: REPO_ROOT,
      stdout: "pipe",
      stderr: "pipe",
      env: {
        ...process.env,
        PATH: `${fakeBin}:${process.env.PATH ?? "/usr/bin:/bin"}`,
        TMPDIR: tempRoot,
        RESTIC_VERSION: "0.17.3",
        RESTIC_ARCH: "amd64",
        RESTIC_INSTALL_DIR: installDir,
      },
    });

    expect(run.exitCode).not.toBe(0);
    expect(readdirSync(tempRoot)).toEqual([]);
    expect(readdirSync(installDir)).toEqual([]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
