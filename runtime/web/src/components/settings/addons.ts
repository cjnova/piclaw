// @ts-nocheck
import { html, useState, useEffect, useCallback } from '../../vendor/preact-htm.js';

export function AddonsSection({ setStatus, filter = '' }) {
    const [addons, setAddons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(null);

    const loadAddons = useCallback(async () => {
        try {
            const resp = await fetch('/agent/addons');
            const data = await resp.json();
            if (data.error) throw new Error(data.error);
            setAddons(data.addons || []);
        } catch (e) { setAddons(null); setStatus?.(String(e.message || e), 'error'); }
        finally { setLoading(false); }
    }, [setStatus]);
    useEffect(() => { loadAddons(); }, []);

    const installAddon = useCallback(async (slug) => {
        if (busy) return; setBusy(slug); setStatus?.(`Installing ${slug}\u2026`, 'info');
        try {
            const resp = await fetch('/agent/addons/install', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug }) });
            const data = await resp.json();
            if (data.error) { setStatus?.(data.error, 'error'); return; }
            setStatus?.(data.message, 'success'); await loadAddons();
        } catch (e) { setStatus?.(String(e.message || e), 'error'); }
        finally { setBusy(null); }
    }, [busy, loadAddons, setStatus]);

    const uninstallAddon = useCallback(async (slug) => {
        if (busy) return; setBusy(slug); setStatus?.(`Removing ${slug}\u2026`, 'info');
        try {
            const resp = await fetch('/agent/addons/uninstall', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug }) });
            const data = await resp.json();
            if (data.error) { setStatus?.(data.error, 'error'); return; }
            setStatus?.(data.message, 'success'); await loadAddons();
        } catch (e) { setStatus?.(String(e.message || e), 'error'); }
        finally { setBusy(null); }
    }, [busy, loadAddons, setStatus]);

    if (loading) return html`<div class="settings-loading">Fetching add-ons\u2026</div>`;
    if (!addons) return html`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;

    const lf = filter.toLowerCase();
    const filtered = lf ? addons.filter(a => a.slug.toLowerCase().includes(lf) || (a.description || '').toLowerCase().includes(lf) || (a.tags || []).some(t => t.toLowerCase().includes(lf))) : addons;

    return html`
        <div class="settings-section">
            <p class="settings-hint">From <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>. Restart required after install/uninstall.</p>
            <div class="settings-addon-list">
                ${filtered.map(a => html`
                    <div class=${`settings-addon-card${a.installed ? ' installed' : ''}`}>
                        <div class="settings-addon-card-header">
                            <strong>${a.slug}</strong>
                            <span class="settings-addon-version">${a.installed ? (a.installedVersion || '?') : (a.version || '')}</span>
                            ${a.hasUpdate && html`<span class="settings-tag settings-tag-skill">\u2191 ${a.version}</span>`}
                        </div>
                        <div class="settings-addon-card-body">${a.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(a.tags || []).map(t => html`<span class="settings-tag">${t}</span>`)}${(a.skills || []).map(s => html`<span class="settings-tag settings-tag-skill">${s}</span>`)}</div>
                            <div class="settings-addon-actions">
                                ${a.installed ? html`
                                    ${a.hasUpdate && html`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${busy === a.slug} onClick=${() => installAddon(a.slug)}>${busy === a.slug ? '\u2026' : '\u2b06 Upgrade'}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${busy === a.slug} onClick=${() => uninstallAddon(a.slug)}>${busy === a.slug ? '\u2026' : '\ud83d\uddd1'}</button>
                                ` : html`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${busy === a.slug} onClick=${() => installAddon(a.slug)}>${busy === a.slug ? '\u2026' : 'Install'}</button>
                                `}
                            </div>
                        </div>
                    </div>
                `)}
                ${filtered.length === 0 && html`<p class="settings-hint">No add-ons match "${filter}"</p>`}
            </div>
        </div>
    `;
}
