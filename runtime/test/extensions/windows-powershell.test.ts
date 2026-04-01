/**
 * test/extensions/windows-powershell.test.ts – Tests for the Windows PowerShell extension helpers.
 */

import { describe, expect, test } from "bun:test";
import "../helpers.js";

import { replaceBashWithPowerShell } from "../../extensions/platform/windows/powershell/index.js";

describe("windows powershell extension", () => {
  test("replaces bash with powershell and guarantees an active shell tool", () => {
    expect(replaceBashWithPowerShell(["read", "bash", "edit", "write"])).toEqual([
      "read",
      "powershell",
      "edit",
      "write",
    ]);

    expect(replaceBashWithPowerShell(["read", "edit", "write"])).toEqual([
      "read",
      "edit",
      "write",
      "powershell",
    ]);
  });
});
