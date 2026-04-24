// @ts-nocheck
import { html, useState, useEffect, useCallback, useRef } from '../../vendor/preact-htm.js';

function AvatarField({ label, value, onChange }) {
    const inputRef = useRef(null);
    const [preview, setPreview] = useState(value || '');

    useEffect(() => { setPreview(value || ''); }, [value]);

    const handleFileSelect = useCallback((e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            setPreview(dataUrl);
            onChange?.(dataUrl);
        };
        reader.readAsDataURL(file);
    }, [onChange]);

    const handleUrlChange = useCallback((e) => {
        const url = e.target.value;
        setPreview(url);
        onChange?.(url);
    }, [onChange]);

    return html`
        <div class="settings-avatar-field">
            <label>${label}</label>
            <div class="settings-avatar-row">
                <div class="settings-avatar-preview" onClick=${() => inputRef.current?.click()}>
                    ${preview
                        ? html`<img src=${preview} alt="avatar" />`
                        : html`<span class="settings-avatar-placeholder">+</span>`}
                </div>
                <div class="settings-avatar-inputs">
                    <input type="text" value=${value || ''} onInput=${handleUrlChange} placeholder="URL or path" />
                    <input type="file" accept="image/*" ref=${inputRef} style="display:none" onChange=${handleFileSelect} />
                    <button class="settings-avatar-upload-btn" onClick=${() => inputRef.current?.click()}>Upload</button>
                </div>
            </div>
        </div>
    `;
}

export function GeneralSection({ settingsData }) {
    const d = settingsData || {};
    const [userName, setUserName] = useState(d.userName || '');
    const [userAvatar, setUserAvatar] = useState(d.userAvatar || '');
    const [assistantName, setAssistantName] = useState(d.assistantName || '');
    const [assistantAvatar, setAssistantAvatar] = useState(d.assistantAvatar || '');
    const [sessionAutoRotate, setSessionAutoRotate] = useState(d.sessionAutoRotate !== false);
    const [sessionMaxSizeMb, setSessionMaxSizeMb] = useState(d.sessionMaxSizeMb ?? 32);
    const [webTerminalEnabled, setWebTerminalEnabled] = useState(d.webTerminalEnabled !== false);

    // Auto-save agent name on change (debounced)
    const nameTimer = useRef(null);
    const saveAgentName = useCallback((name) => {
        setAssistantName(name);
        clearTimeout(nameTimer.current);
        nameTimer.current = setTimeout(() => {
            fetch('/post', { method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: `/agent-name ${name}` }) });
        }, 600);
    }, []);

    return html`
        <div class="settings-section">
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User name</label>
                <input type="text" value=${userName} onInput=${e => setUserName(e.target.value)} />
            </div>
            <${AvatarField} label="User avatar" value=${userAvatar} onChange=${setUserAvatar} />
            <div class="settings-row">
                <label>Agent name</label>
                <input type="text" value=${assistantName} onInput=${e => saveAgentName(e.target.value)} />
            </div>
            <${AvatarField} label="Agent avatar" value=${assistantAvatar} onChange=${setAssistantAvatar} />

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
