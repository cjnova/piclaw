// @ts-nocheck
/**
 * drawio-pane.ts — WebPaneExtension for editing .drawio diagrams.
 *
 * In preview mode (workspace browser): shows a launch card with "Edit in Tab" button.
 * In edit/tab mode: loads the self-hosted draw.io editor in an iframe with
 * postMessage-based load/save via the workspace file API.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const DRAWIO_EXTENSIONS = new Set(['.drawio']);

/** Also match .drawio.xml and .drawio.svg by checking full filename. */
function isDrawioFile(filePath?: string): boolean {
    if (!filePath) return false;
    const lower = filePath.toLowerCase();
    return lower.endsWith('.drawio') ||
           lower.endsWith('.drawio.xml') ||
           lower.endsWith('.drawio.svg') ||
           lower.endsWith('.drawio.png');
}

function getExtension(filePath?: string): string {
    if (!filePath) return '';
    const lower = filePath.toLowerCase();
    if (lower.endsWith('.drawio.xml')) return '.drawio.xml';
    if (lower.endsWith('.drawio.svg')) return '.drawio.svg';
    if (lower.endsWith('.drawio.png')) return '.drawio.png';
    const lastDot = filePath.lastIndexOf('.');
    if (lastDot < 0) return '';
    return filePath.slice(lastDot).toLowerCase();
}

function esc(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Preview card (workspace browser) ────────────────────────────

class DrawioPreviewCard implements PaneInstance {
    private container: HTMLElement;
    private disposed = false;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'diagram.drawio';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);';
        wrapper.innerHTML = `
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">📐</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${esc(name)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `;
        container.appendChild(wrapper);

        const btn = wrapper.querySelector('#drawio-open-tab') as HTMLButtonElement;
        if (btn) {
            btn.addEventListener('click', () => {
                const evt = new CustomEvent('drawio:open-tab', {
                    bubbles: true,
                    detail: { path: filePath },
                });
                container.dispatchEvent(evt);
            });
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return false; }
    focus(): void {}
    resize(): void {}
    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        this.container.innerHTML = '';
    }
}

// ── Full editor (editor tab) ────────────────────────────────────

class DrawioEditorInstance implements PaneInstance {
    private container: HTMLElement;
    private iframe: HTMLIFrameElement | null = null;
    private disposed = false;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const editorUrl = `/drawio/edit?path=${encodeURIComponent(filePath)}`;

        this.iframe = document.createElement('iframe');
        this.iframe.src = editorUrl;
        this.iframe.style.cssText = 'width:100%;height:100%;border:none;background:#1e1e1e;';
        container.appendChild(this.iframe);
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return false; }
    focus(): void { this.iframe?.focus(); }
    resize(): void {}
    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        if (this.iframe) {
            this.iframe.src = 'about:blank';
            this.iframe = null;
        }
        this.container.innerHTML = '';
    }
}

// ── Extension ───────────────────────────────────────────────────

export const drawioPaneExtension: WebPaneExtension = {
    id: 'drawio-editor',
    label: 'Draw.io Editor',
    icon: 'git-merge',   // closest available icon for diagrams
    capabilities: ['edit', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        if (!isDrawioFile(context?.path)) return false;
        // Priority 60 — beats text editor (default) and office viewer
        return 60;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') {
            return new DrawioPreviewCard(container, context);
        }
        return new DrawioEditorInstance(container, context);
    },
};
