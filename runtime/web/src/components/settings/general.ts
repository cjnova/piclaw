// @ts-nocheck
import { html, useState, useCallback } from '../../vendor/preact-htm.js';

export function GeneralSection({ settingsData }) {
    const d = settingsData || {};
    const [userName, setUserName] = useState(d.userName || '');
    const [userAvatar, setUserAvatar] = useState(d.userAvatar || '');
    const [assistantName, setAssistantName] = useState(d.assistantName || '');
    const [assistantAvatar, setAssistantAvatar] = useState(d.assistantAvatar || '');
    const [sessionAutoRotate, setSessionAutoRotate] = useState(d.sessionAutoRotate !== false);
    const [sessionMaxSizeMb, setSessionMaxSizeMb] = useState(d.sessionMaxSizeMb ?? 32);
    const [webTerminalEnabled, setWebTerminalEnabled] = useState(d.webTerminalEnabled !== false);
    const [saved, setSaved] = useState(false);

    const save = useCallback(async () => {
        await fetch('/post', { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: `/agent-name ${assistantName}` }) });
        setSaved(true); setTimeout(() => setSaved(false), 2000);
    }, [assistantName]);

    return html`
        <div class="settings-section">
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User name</label>
                <input type="text" value=${userName} onInput=${e => setUserName(e.target.value)} />
            </div>
            <div class="settings-row">
                <label>User avatar URL</label>
                <input type="text" value=${userAvatar} onInput=${e => setUserAvatar(e.target.value)} placeholder="https://..." />
            </div>
            <div class="settings-row">
                <label>Agent name</label>
                <input type="text" value=${assistantName} onInput=${e => { setAssistantName(e.target.value); setSaved(false); }} />
                <button onClick=${save}>${saved ? '\u2713 Saved' : 'Save'}</button>
            </div>
            <div class="settings-row">
                <label>Agent avatar</label>
                <input type="text" value=${assistantAvatar} onInput=${e => setAssistantAvatar(e.target.value)} placeholder="/workspace/..." />
            </div>
            <h3 style="margin-top:20px">Session</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${sessionAutoRotate} onChange=${e => setSessionAutoRotate(e.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <input type="number" value=${sessionMaxSizeMb} min="1" max="256" style="max-width:80px"
                    onInput=${e => setSessionMaxSizeMb(parseInt(e.target.value, 10) || 32)} />
            </div>
            <div class="settings-row">
                <label>Web terminal</label>
                <input type="checkbox" checked=${webTerminalEnabled} onChange=${e => setWebTerminalEnabled(e.target.checked)} />
            </div>
            <p class="settings-hint">Session and terminal settings require a restart. Edit <code>.piclaw/config.json</code> for advanced options.</p>
        </div>
    `;
}
