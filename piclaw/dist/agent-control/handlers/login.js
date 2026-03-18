/**
 * agent-control/handlers/login.ts – Provider authentication via /login and /logout.
 *
 * Handles OAuth login flows and API key entry for AI model providers.
 * Works without a running model — all UI is hardcoded adaptive cards
 * posted via the internal message route.
 *
 * Commands:
 *   /login            – show provider picker card
 *   /login <provider> – start login for a specific provider
 *   /logout           – show logged-in providers for logout
 *   /logout <provider> – logout from a specific provider
 */
/** Known providers that support direct API key authentication. */
const API_KEY_PROVIDERS = [
    { id: "anthropic", name: "Anthropic", envVar: "ANTHROPIC_API_KEY" },
    { id: "openai", name: "OpenAI", envVar: "OPENAI_API_KEY" },
    { id: "google", name: "Google AI", envVar: "GOOGLE_API_KEY" },
    { id: "azure", name: "Azure OpenAI", envVar: "AZURE_OPENAI_API_KEY" },
];
function getAuthStorage(session, modelRegistry) {
    const registry = session.modelRegistry ?? modelRegistry;
    return registry?.authStorage ?? null;
}
function getProviderStatus(authStorage) {
    const oauthProviders = authStorage.getOAuthProviders();
    const oauthIds = new Set(oauthProviders.map((p) => p.id));
    const apiKeyIds = new Set(API_KEY_PROVIDERS.map((p) => p.id));
    // Merge OAuth + API key providers into unified list
    const seen = new Set();
    const result = [];
    for (const p of oauthProviders) {
        seen.add(p.id);
        const cred = authStorage.get(p.id);
        result.push({
            id: p.id,
            name: p.name,
            type: cred?.type === "oauth" ? "oauth" : cred?.type === "api_key" ? "api_key" : "none",
            hasOAuth: true,
            hasApiKey: apiKeyIds.has(p.id),
        });
    }
    for (const p of API_KEY_PROVIDERS) {
        if (seen.has(p.id))
            continue;
        seen.add(p.id);
        const cred = authStorage.get(p.id);
        result.push({
            id: p.id,
            name: p.name,
            type: cred?.type === "api_key" ? "api_key" : cred?.type === "oauth" ? "oauth" : "none",
            hasOAuth: false,
            hasApiKey: true,
        });
    }
    return result;
}
/** Handle /login — show provider picker or start login for a specific provider. */
export async function handleLogin(session, modelRegistry, command) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage) {
        return { status: "error", message: "Auth storage is not available." };
    }
    const providers = getProviderStatus(authStorage);
    if (providers.length === 0) {
        return { status: "error", message: "No authentication providers available." };
    }
    // Build provider summary
    const lines = ["**Available providers:**", ""];
    for (const p of providers) {
        const status = p.type === "none" ? "not logged in" : `✓ ${p.type}`;
        const methods = [];
        if (p.hasOAuth)
            methods.push("OAuth");
        if (p.hasApiKey)
            methods.push("API key");
        lines.push(`• **${p.name}** (${p.id}) — ${status} — supports: ${methods.join(", ")}`);
    }
    lines.push("");
    lines.push("Use `/login <provider>` to authenticate, or enter an API key with `/login <provider> key:<your-key>`.");
    // If a specific provider was given, try to start login
    if (command.provider) {
        const providerArg = command.provider.trim();
        // Check for key:<value> syntax: /login anthropic key:sk-ant-...
        const keyMatch = providerArg.match(/^(\S+)\s+key:(.+)$/i);
        if (keyMatch) {
            const providerId = keyMatch[1].toLowerCase();
            const apiKey = keyMatch[2].trim();
            if (!apiKey) {
                return { status: "error", message: "API key cannot be empty. Usage: `/login <provider> key:<your-key>`" };
            }
            authStorage.set(providerId, { type: "api_key", key: apiKey });
            authStorage.reload();
            return { status: "success", message: `✓ API key stored for **${providerId}**. Use \`/model\` to select a model from this provider.` };
        }
        // Check if provider supports OAuth
        const providerId = providerArg.toLowerCase();
        const provider = providers.find((p) => p.id === providerId);
        if (!provider) {
            return {
                status: "error",
                message: `Unknown provider "${providerArg}". Available: ${providers.map((p) => p.id).join(", ")}`,
            };
        }
        if (provider.hasOAuth) {
            // Start OAuth flow with manual-paste callbacks
            return await runOAuthLogin(authStorage, providerId, provider.name);
        }
        // API-key-only provider without a key
        return {
            status: "error",
            message: `**${provider.name}** only supports API key auth. Use: \`/login ${providerId} key:<your-api-key>\``,
        };
    }
    return { status: "success", message: lines.join("\n") };
}
/** Run the OAuth login flow with manual-paste callbacks. */
async function runOAuthLogin(authStorage, providerId, providerName) {
    let authUrl = "";
    let authInstructions = "";
    let resolveManualCode = null;
    let rejectManualCode = null;
    const progressMessages = [];
    try {
        await authStorage.login(providerId, {
            onAuth: (info) => {
                authUrl = info.url;
                authInstructions = info.instructions || "";
            },
            onProgress: (message) => {
                progressMessages.push(message);
            },
            onPrompt: async (prompt) => {
                // For now, we can't do interactive prompts in this flow.
                // Return empty to let the provider handle it or fail gracefully.
                return "";
            },
            onManualCodeInput: () => {
                return new Promise((resolve, reject) => {
                    resolveManualCode = resolve;
                    rejectManualCode = reject;
                });
            },
        });
        authStorage.reload();
        return {
            status: "success",
            message: `✓ Successfully logged in to **${providerName}** via OAuth. Use \`/model\` to select a model.`,
        };
    }
    catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        // If we got an auth URL but the callback failed, show the URL for manual flow
        if (authUrl) {
            const lines = [
                `OAuth login for **${providerName}** needs manual completion:`,
                "",
                `1. Open this URL in your browser:`,
                `   ${authUrl}`,
                authInstructions ? `   ${authInstructions}` : "",
                `2. Complete the login in the browser`,
                `3. Copy the redirect URL from your browser's address bar`,
                `4. Run: \`/login ${providerId} key:<paste-redirect-url-or-token>\``,
                "",
                progressMessages.length > 0 ? `Progress: ${progressMessages.join("; ")}` : "",
                `Error: ${msg}`,
            ].filter(Boolean);
            return { status: "error", message: lines.join("\n") };
        }
        return { status: "error", message: `Failed to login to **${providerName}**: ${msg}` };
    }
}
/** Handle /logout — remove credentials for a provider. */
export async function handleLogout(session, modelRegistry, command) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage) {
        return { status: "error", message: "Auth storage is not available." };
    }
    if (!command.provider) {
        // List logged-in providers
        const providers = getProviderStatus(authStorage);
        const loggedIn = providers.filter((p) => p.type !== "none");
        if (loggedIn.length === 0) {
            return { status: "success", message: "No providers are currently logged in." };
        }
        const lines = ["**Logged in providers:**", ""];
        for (const p of loggedIn) {
            lines.push(`• **${p.name}** (${p.id}) — ${p.type}`);
        }
        lines.push("");
        lines.push("Use `/logout <provider>` to remove credentials.");
        return { status: "success", message: lines.join("\n") };
    }
    const providerId = command.provider.trim().toLowerCase();
    const cred = authStorage.get(providerId);
    if (!cred) {
        return { status: "error", message: `No credentials found for "${providerId}".` };
    }
    authStorage.set(providerId, undefined);
    authStorage.reload();
    return { status: "success", message: `✓ Logged out from **${providerId}**.` };
}
