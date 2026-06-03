import { signal } from "@preact/signals";
import type { IdentityProviderDefinition } from "@cjnova/preact-shell-identity-contracts";

export type {
  DeviceFlowStatusResult,
  IdentityProviderDefinition,
  SignInResult,
} from "@cjnova/preact-shell-identity-contracts";

const providerRegistry = new Map<string, IdentityProviderDefinition>();
export const identityRegistryVersion = signal(0);

export function registerIdentityProvider(provider: IdentityProviderDefinition): void {
  providerRegistry.set(provider.id, provider);
  identityRegistryVersion.value += 1;
}

export function getRegisteredProviders(): IdentityProviderDefinition[] {
  return Array.from(providerRegistry.values());
}

export function getProvider(id: string): IdentityProviderDefinition | undefined {
  return providerRegistry.get(id);
}
