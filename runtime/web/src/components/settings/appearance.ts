// @ts-nocheck
import { html, useState, useEffect, useCallback } from '../../vendor/preact-htm.js';
import { applyThemeFromEvent } from '../../ui/theme.js';

export function ThemeSection({ themes, colorKeys }) {
    const [currentTheme, setCurrentTheme] = useState('');
    useEffect(() => { setCurrentTheme(document.documentElement.dataset.colorTheme || 'default'); }, []);
    const apply = useCallback((name) => { applyThemeFromEvent({ theme: name, tint: null }); setCurrentTheme(name); }, []);
    const keys = colorKeys || [];
    const presets = themes || [];
    return html`
        <div class="settings-section">
            <table class="settings-table settings-borderless settings-theme-table">
                <thead><tr><th></th><th>Theme</th><th>Mode</th>${keys.map(k => html`<th class="settings-swatch-header">${k.replace(/([A-Z])/g, ' $1').trim()}</th>`)}</tr></thead>
                <tbody>${presets.map(t => html`
                    <tr class=${t.name === currentTheme ? 'settings-row-active' : ''}>
                        <td><input type="radio" name="settings-theme" checked=${t.name === currentTheme} onChange=${() => apply(t.name)} /></td>
                        <td><strong>${t.label}</strong></td><td>${t.mode}</td>
                        ${keys.map(k => { const c = t.colors?.[k]; return html`<td class="settings-swatch-cell">${c ? html`<span class="settings-color-swatch" style=${'background:' + c} title=${c}></span>` : '\u2014'}</td>`; })}
                    </tr>
                `)}</tbody>
            </table>
        </div>
    `;
}
