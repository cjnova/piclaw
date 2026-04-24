// @ts-nocheck
import { html, useState, useCallback, useMemo } from '../../vendor/preact-htm.js';

const KIND_BADGE = { 'read-only': '\ud83d\udd0d', 'mutating': '\u270f\ufe0f', 'mixed': '\ud83d\udd04' };

export function ToolsSection({ toolsets, filter = '' }) {
    const groups = toolsets || [];
    const [enabledGroups, setEnabledGroups] = useState(() => { const m = {}; for (const g of groups) m[g.name] = true; return m; });
    const toggleGroup = useCallback((name) => { setEnabledGroups(prev => ({ ...prev, [name]: !prev[name] })); }, []);

    const lf = filter.toLowerCase();
    const filteredGroups = useMemo(() => {
        if (!lf) return groups;
        return groups.map(g => {
            const tools = g.tools.filter(t =>
                t.name.toLowerCase().includes(lf) ||
                g.name.toLowerCase().includes(lf) ||
                (t.summary || '').toLowerCase().includes(lf)
            );
            return tools.length > 0 ? { ...g, tools } : null;
        }).filter(Boolean);
    }, [groups, lf]);

    if (groups.length === 0) return html`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;

    return html`
        <div class="settings-section">
            ${filteredGroups.map(g => { const enabled = enabledGroups[g.name] !== false; return html`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle"><input type="checkbox" checked=${enabled} onChange=${() => toggleGroup(g.name)} /><strong>${g.name}</strong></label>
                        <span class="settings-hint" style="margin:0">${g.description}</span>
                    </div>
                    ${enabled && html`<div class="settings-tool-list">${g.tools.map(t => html`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${t.name}</span>
                            <span class="settings-tool-kind" title=${t.kind}>${KIND_BADGE[t.kind] || '?'}</span>
                            ${t.summary && html`<span class="settings-tool-summary">${t.summary}</span>`}
                            <span class="settings-tool-source">${g.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `; })}
            ${filteredGroups.length === 0 && html`<p class="settings-hint">No tools match "${filter}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `;
}
