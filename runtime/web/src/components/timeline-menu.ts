// @ts-nocheck
/**
 * timeline-menu.ts — Hamburger menu that mirrors the workspace menu,
 * shown at the top of the timeline when the workspace explorer is hidden.
 * Includes a "Settings" option that opens the settings dialog.
 */

import { html, useState, useEffect, useRef, useCallback } from '../vendor/preact-htm.js';

export function TimelineMenu({
    workspaceOpen,
    toggleWorkspace,
    onOpenTerminalTab,
    onOpenVncTab,
    onToggleTerminal,
    terminalVisible,
}) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const btnRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const onClick = (e) => {
            if (menuRef.current?.contains(e.target)) return;
            if (btnRef.current?.contains(e.target)) return;
            setOpen(false);
        };
        document.addEventListener('mousedown', onClick, true);
        return () => document.removeEventListener('mousedown', onClick, true);
    }, [open]);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    const run = useCallback((fn) => {
        setOpen(false);
        fn?.();
    }, []);

    // Only show when workspace is collapsed
    if (workspaceOpen) return null;

    return html`
        <div class="timeline-menu-wrap">
            <button
                ref=${btnRef}
                class=${`workspace-menu-button timeline-menu-button${open ? ' active' : ''}`}
                onClick=${() => setOpen(v => !v)}
                title="Menu"
                aria-label="Menu"
                aria-haspopup="menu"
                aria-expanded=${open ? 'true' : 'false'}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
            </button>
            ${open && html`
                <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${menuRef} role="menu" aria-label="Menu">
                    <button class="workspace-menu-item" role="menuitem" onClick=${() => run(toggleWorkspace)}>
                        Show workspace
                    </button>

                    ${(onOpenTerminalTab || onOpenVncTab || onToggleTerminal) && html`<div class="workspace-menu-separator"></div>`}
                    ${onOpenTerminalTab && html`
                        <button class="workspace-menu-item" role="menuitem" onClick=${() => run(onOpenTerminalTab)}>
                            Open terminal in tab
                        </button>
                    `}
                    ${onOpenVncTab && html`
                        <button class="workspace-menu-item" role="menuitem" onClick=${() => run(onOpenVncTab)}>
                            Open VNC in tab
                        </button>
                    `}
                    ${onToggleTerminal && html`
                        <button class="workspace-menu-item" role="menuitem" onClick=${() => run(onToggleTerminal)}>
                            ${terminalVisible ? 'Hide terminal dock' : 'Show terminal dock'}
                        </button>
                    `}

                    <div class="workspace-menu-separator"></div>
                    <button class="workspace-menu-item" role="menuitem" onClick=${() => run(() => {
                        window.dispatchEvent(new CustomEvent('piclaw:open-settings'));
                    })}>
                        Settings
                    </button>
                </div>
            `}
        </div>
    `;
}
