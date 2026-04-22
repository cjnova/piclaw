import {
  buildInjectedShellEnv,
  resolveKeychainPlaceholders,
} from "./keychain.js";

export type InjectedShellFamily = "posix" | "powershell";

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `'"'"'`)}'`;
}

function powerShellQuote(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

async function resolveInjectedExecParts(command: string, args: string[]): Promise<{ resolvedCommand: string; resolvedArgs: string[]; injectedEnv: Record<string, string> }> {
  const resolvedCommand = await resolveKeychainPlaceholders(command);
  const resolvedArgs = await Promise.all(args.map((value) => resolveKeychainPlaceholders(value)));
  const injectedEnv = await buildInjectedShellEnv({
    includeProcessEnv: false,
    referencedTexts: [command, ...args],
  });
  return { resolvedCommand, resolvedArgs, injectedEnv };
}

export async function buildInjectedExecCommand(
  shellFamily: InjectedShellFamily,
  command: string,
  args: string[] = [],
): Promise<{ command: string; commandArgs: string[]; env: Record<string, string> }> {
  const { resolvedCommand, resolvedArgs, injectedEnv } = await resolveInjectedExecParts(command, args);

  if (shellFamily === "powershell") {
    const lines = [
      "$ErrorActionPreference = 'Stop'",
      `& ${[resolvedCommand, ...resolvedArgs].map(powerShellQuote).join(" ")}`,
      "if ($null -ne $LASTEXITCODE) { exit $LASTEXITCODE }",
    ];
    return {
      command: "powershell",
      commandArgs: ["-NoProfile", "-Command", lines.join("; ")],
      env: injectedEnv,
    };
  }

  const execCommand = `exec ${[resolvedCommand, ...resolvedArgs].map(shellQuote).join(" ")}`;
  return {
    command: "sh",
    commandArgs: ["-lc", execCommand],
    env: injectedEnv,
  };
}

export async function buildInjectedPosixCommand(command: string, args: string[] = []): Promise<{ command: string; commandArgs: string[] }> {
  return buildInjectedExecCommand("posix", command, args);
}

export async function buildInjectedPowerShellCommand(command: string, args: string[] = []): Promise<{ command: string; commandArgs: string[] }> {
  return buildInjectedExecCommand("powershell", command, args);
}
