/**
 * agent-pool/session-manager.ts – Main/side session lifecycle management for AgentPool.
 *
 * Extracts chat-session creation, side-session sync, idle eviction, and shutdown
 * mechanics out of the top-level AgentPool coordinator while preserving the
 * existing map-based cache structure used by callers and tests.
 */
import { createDefaultSession, createSessionInDir, ensureNamedSessionDir, ensureSessionDir } from "./session.js";
import { seedRotatedSession } from "../session-rotation.js";
/**
 * Handles lifecycle operations for main and auxiliary AgentSession instances.
 */
export class AgentSessionManager {
    options;
    constructor(options) {
        this.options = options;
    }
    async refreshRuntime(chatJid, runtime) {
        const entry = this.options.pool.get(chatJid);
        if (entry) {
            entry.lastUsed = Date.now();
        }
        await this.options.bindSession(runtime, chatJid);
        this.options.ensureBranchRegistration(chatJid, runtime.session);
    }
    async getOrCreate(chatJid) {
        const existing = this.options.pool.get(chatJid);
        if (existing) {
            existing.lastUsed = Date.now();
            return existing.runtime;
        }
        this.options.onInfo?.("Creating new session", {
            operation: "get_or_create.create_main_session",
            chatJid,
        });
        const chatSessionDir = ensureSessionDir(chatJid);
        const runtime = this.options.createSession
            ? await this.options.createSession(chatJid, chatSessionDir)
            : await createDefaultSession(chatJid, {
                authStorage: this.options.authStorage,
                modelRegistry: this.options.modelRegistry,
                settingsManager: this.options.settingsManager,
                tools: this.options.createDefaultTools(),
            });
        this.options.pool.set(chatJid, { runtime, lastUsed: Date.now() });
        await this.applyDefaultModel(runtime.session);
        await this.refreshRuntime(chatJid, runtime);
        this.options.onInfo?.("Session ready", {
            operation: this.options.createSession ? "get_or_create.create_main_session" : "get_or_create.create_default_session",
            chatJid,
            poolSize: this.options.pool.size,
        });
        return runtime;
    }
    async getOrCreateSide(chatJid) {
        const existing = this.options.sidePool.get(chatJid);
        if (existing) {
            existing.lastUsed = Date.now();
            return existing.runtime;
        }
        this.options.onInfo?.("Creating new side session", {
            operation: "get_or_create_side.create_session",
            chatJid,
        });
        const sideSessionDir = ensureNamedSessionDir(chatJid, "btw-side");
        const runtime = this.options.createSideSession
            ? await this.options.createSideSession(chatJid, sideSessionDir)
            : await createSessionInDir(sideSessionDir, {
                authStorage: this.options.authStorage,
                modelRegistry: this.options.modelRegistry,
                settingsManager: this.options.settingsManager,
                tools: this.options.createDefaultTools(),
            });
        this.options.sidePool.set(chatJid, { runtime, lastUsed: Date.now() });
        return runtime;
    }
    async syncSideSessionFromMain(mainSession, sideRuntime) {
        try {
            const mainContext = mainSession.sessionManager.buildSessionContext();
            await sideRuntime.newSession({
                setup: async (sessionManager) => {
                    seedRotatedSession(sessionManager, mainContext, {
                        sessionName: "BTW",
                        model: mainContext.model,
                    });
                },
            });
        }
        catch (err) {
            this.options.onWarn?.("Failed to reseed side session from main context", {
                operation: "sync_side_session_from_main.reseed",
                err,
            });
        }
        const sideSession = sideRuntime.session;
        const mainModel = mainSession.model;
        const sideModel = sideSession.model;
        if (mainModel && (!sideModel || sideModel.provider !== mainModel.provider || sideModel.id !== mainModel.id)) {
            try {
                await sideSession.setModel(mainModel);
            }
            catch (err) {
                this.options.onWarn?.("Failed to sync side-session model", {
                    operation: "sync_side_session_from_main.model",
                    model: `${mainModel.provider}/${mainModel.id}`,
                    err,
                });
            }
        }
        try {
            sideSession.setThinkingLevel(mainSession.thinkingLevel);
        }
        catch (err) {
            this.options.onWarn?.("Failed to sync side-session thinking level", {
                operation: "sync_side_session_from_main.thinking_level",
                err,
            });
        }
        try {
            sideSession.setActiveToolsByName(mainSession.getActiveToolNames());
        }
        catch (err) {
            this.options.onWarn?.("Failed to sync side-session tool selection", {
                operation: "sync_side_session_from_main.tools",
                err,
            });
        }
    }
    async shutdown() {
        for (const [jid, entry] of this.options.pool) {
            try {
                await entry.runtime.dispose();
                this.options.onInfo?.("Disposed session", {
                    operation: "shutdown.dispose_main_session",
                    chatJid: jid,
                });
            }
            catch (err) {
                this.options.onError?.("Failed to dispose session during shutdown", {
                    operation: "shutdown.dispose_main_session",
                    chatJid: jid,
                    err,
                });
            }
        }
        for (const [jid, entry] of this.options.sidePool) {
            try {
                await entry.runtime.dispose();
                this.options.onInfo?.("Disposed side session", {
                    operation: "shutdown.dispose_side_session",
                    chatJid: jid,
                });
            }
            catch (err) {
                this.options.onError?.("Failed to dispose side session during shutdown", {
                    operation: "shutdown.dispose_side_session",
                    chatJid: jid,
                    err,
                });
            }
        }
        this.options.pool.clear();
        this.options.sidePool.clear();
    }
    evictIdle(idleTtlMs) {
        const now = Date.now();
        for (const [jid, entry] of this.options.pool) {
            const session = entry.runtime.session;
            if (session.isStreaming || session.isBashRunning || session.isCompacting) {
                entry.lastUsed = now;
                continue;
            }
            if (now - entry.lastUsed > idleTtlMs) {
                this.options.onInfo?.("Evicting idle session", {
                    operation: "evict_idle.main_session",
                    chatJid: jid,
                });
                Promise.resolve(entry.runtime.dispose()).catch((err) => {
                    this.options.onWarn?.("Failed to dispose evicted session", {
                        operation: "evict_idle.main_session",
                        chatJid: jid,
                        err,
                    });
                });
                this.options.pool.delete(jid);
            }
        }
        for (const [jid, entry] of this.options.sidePool) {
            const session = entry.runtime.session;
            if (session.isStreaming || session.isBashRunning || session.isCompacting) {
                entry.lastUsed = now;
                continue;
            }
            if (now - entry.lastUsed > idleTtlMs) {
                this.options.onInfo?.("Evicting idle side session", {
                    operation: "evict_idle.side_session",
                    chatJid: jid,
                });
                Promise.resolve(entry.runtime.dispose()).catch((err) => {
                    this.options.onWarn?.("Failed to dispose evicted side session", {
                        operation: "evict_idle.side_session",
                        chatJid: jid,
                        err,
                    });
                });
                this.options.sidePool.delete(jid);
            }
        }
    }
    async applyDefaultModel(session) {
        const provider = this.options.settingsManager.getDefaultProvider();
        const modelId = this.options.settingsManager.getDefaultModel();
        if (!provider || !modelId)
            return;
        const current = session.model;
        if (current)
            return;
        const sessionRegistry = session.modelRegistry ?? this.options.modelRegistry;
        const resolved = sessionRegistry.find(provider, modelId);
        if (!resolved)
            return;
        const setModel = session.setModel;
        if (typeof setModel !== "function")
            return;
        try {
            await setModel.call(session, resolved);
        }
        catch (err) {
            this.options.onWarn?.("Failed to restore model", {
                operation: "apply_default_model",
                model: `${provider}/${modelId}`,
                err,
            });
        }
    }
}
