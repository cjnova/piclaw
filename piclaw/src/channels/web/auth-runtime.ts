/**
 * channels/web/auth-runtime.ts – web auth mode evaluation + auth context builders.
 */

import {
  buildSessionCookieHeader,
  isRequestAuthenticated,
  isRequestTotpSession,
} from "./session-auth.js";
import { isInternalSecretRequestAuthorized } from "./internal-secret.js";
import type { TotpAuthContext, TotpFailureTrackerLike } from "./totp-auth.js";
import type { WebauthnAuthContext } from "./webauthn-auth.js";
import type { WebauthnEnrolPageContext } from "./webauthn-enrol-page.js";
import type { WebauthnChallengeTracker } from "./webauthn-challenges.js";

export interface WebAuthRuntimeConfig {
  passkeyMode: string;
  totpSecret: string;
  internalSecret: string;
  sessionTtlSeconds: number;
  hasTls: boolean;
}

export function isTotpEnabled(config: WebAuthRuntimeConfig): boolean {
  return Boolean(config.totpSecret && config.totpSecret.trim());
}

export function isPasskeyEnabled(config: WebAuthRuntimeConfig): boolean {
  const mode = (config.passkeyMode || "").toLowerCase();
  if (mode === "totp-only") return false;
  if (mode === "passkey-only") return true;
  return isTotpEnabled(config);
}

export function isPasskeyOnly(config: WebAuthRuntimeConfig): boolean {
  return (config.passkeyMode || "").toLowerCase() === "passkey-only";
}

export function isAuthEnabled(config: WebAuthRuntimeConfig): boolean {
  return isTotpEnabled(config) || isPasskeyEnabled(config);
}

export function isInternalSecretEnabled(config: WebAuthRuntimeConfig): boolean {
  return Boolean(config.internalSecret && config.internalSecret.trim());
}

export function isTotpSession(req: Request, config: WebAuthRuntimeConfig): boolean {
  return isRequestTotpSession(req, isTotpEnabled(config));
}

export function verifyInternalSecret(req: Request, config: WebAuthRuntimeConfig): boolean {
  return isInternalSecretRequestAuthorized(req, config.internalSecret || "");
}

export function isAuthenticated(req: Request, config: WebAuthRuntimeConfig): boolean {
  return isRequestAuthenticated(req, isAuthEnabled(config));
}

export function buildSessionCookie(token: string, req: Request, config: WebAuthRuntimeConfig): string {
  return buildSessionCookieHeader(token, req, config.sessionTtlSeconds, config.hasTls);
}

interface AuthContextDeps {
  json(payload: unknown, status?: number): Response;
  getClientKey(req: Request): string;
  logAuthEvent(req: Request, event: string): void;
}

interface TotpAuthContextDeps extends AuthContextDeps {
  failureTracker: TotpFailureTrackerLike;
}

interface WebauthnAuthContextDeps extends AuthContextDeps {
  challenges: WebauthnChallengeTracker;
}

export function createTotpAuthContext(
  config: WebAuthRuntimeConfig,
  deps: TotpAuthContextDeps
): TotpAuthContext {
  return {
    isAuthEnabled: () => isAuthEnabled(config),
    isTotpEnabled: () => isTotpEnabled(config),
    json: deps.json,
    getClientKey: deps.getClientKey,
    logAuthEvent: deps.logAuthEvent,
    buildSessionCookie: (token, req) => buildSessionCookie(token, req, config),
    failureTracker: deps.failureTracker,
  };
}

export function createWebauthnAuthContext(
  config: WebAuthRuntimeConfig,
  deps: WebauthnAuthContextDeps
): WebauthnAuthContext {
  return {
    isPasskeyEnabled: () => isPasskeyEnabled(config),
    json: deps.json,
    buildSessionCookie: (token, req) => buildSessionCookie(token, req, config),
    logAuthEvent: deps.logAuthEvent,
    getClientKey: deps.getClientKey,
    challenges: deps.challenges,
  };
}

export function createWebauthnEnrolPageContext(
  config: WebAuthRuntimeConfig,
  deps: Pick<AuthContextDeps, "json">
): WebauthnEnrolPageContext {
  return {
    isPasskeyEnabled: () => isPasskeyEnabled(config),
    json: deps.json,
  };
}
