// @ts-nocheck
import { html, useState, useCallback } from '../../vendor/preact-htm.js';
import { sendAgentMessage } from '../../api.js';

export function ProvidersSection({ providers, setStatus }) {
    const [busy, setBusy] = useState(null);

    const login = useCallback(async (providerId) => {
        if (busy) return;
        setBusy(providerId);
        setStatus?.(`Starting login for ${providerId}\u2026`, 'info');
        try {
            await sendAgentMessage('default', `/login ${providerId}`, null, []);
            setStatus?.(`Login flow started for ${providerId}. Check the chat timeline for the auth card.`, 'success');
        } catch (e) {
            setStatus?.(String(e.message || e), 'error');
        } finally {
            setBusy(null);
        }
    }, [busy, setStatus]);

    const logout = useCallback(async (providerId) => {
        if (busy) return;
        setBusy(providerId);
        setStatus?.(`Logging out ${providerId}\u2026`, 'info');
        try {
            await sendAgentMessage('default', `/logout ${providerId}`, null, []);
            setStatus?.(`Logged out ${providerId}. Restart may be needed.`, 'success');
        } catch (e) {
            setStatus?.(String(e.message || e), 'error');
        } finally {
            setBusy(null);
        }
    }, [busy, setStatus]);

    const list = providers || [];

    return html`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${list.map(p => html`
                    <div class=${`settings-provider-card${p.configured ? ' configured' : ''}`}>
                        <div class="settings-provider-card-header">
                            <strong>${p.name}</strong>
                            <span class="settings-provider-id">${p.id}</span>
                            ${p.configured && html`<span class="settings-tag settings-tag-skill">${p.authType || 'configured'}</span>`}
                        </div>
                        <div class="settings-provider-card-meta">
                            ${p.hasOAuth && html`<span class="settings-tag">OAuth</span>`}
                            ${p.hasApiKey && html`<span class="settings-tag">API Key</span>`}
                            ${p.isCustom && html`<span class="settings-tag">Custom</span>`}
                        </div>
                        <div class="settings-provider-card-actions">
                            ${p.configured ? html`
                                <button class="settings-addon-btn settings-addon-btn-remove"
                                    disabled=${busy === p.id} onClick=${() => logout(p.id)}
                                >${busy === p.id ? '\u2026' : 'Logout'}</button>
                                <button class="settings-addon-btn settings-addon-btn-install"
                                    disabled=${busy === p.id} onClick=${() => login(p.id)}
                                >${busy === p.id ? '\u2026' : 'Reconfigure'}</button>
                            ` : html`
                                <button class="settings-addon-btn settings-addon-btn-install"
                                    disabled=${busy === p.id} onClick=${() => login(p.id)}
                                >${busy === p.id ? '\u2026' : 'Set up'}</button>
                            `}
                        </div>
                    </div>
                `)}
            </div>
            <p class="settings-hint" style="margin-top:12px">OAuth providers open a browser flow. API key providers prompt in the chat. Custom providers need a base URL and model configuration.</p>
        </div>
    `;
}
