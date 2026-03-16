// @ts-nocheck
/**
 * office-viewer-pane.ts — WebPaneExtension for viewing Office documents.
 *
 * In preview mode (workspace browser): shows a launch card with "Open in Tab" button.
 * In edit/tab mode: loads ZetaOffice WASM viewer in an iframe.
 * Requires secure context (HTTPS + crossOriginIsolated) for SharedArrayBuffer.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const OFFICE_EXTENSIONS = new Set([
    '.docx', '.doc', '.odt', '.rtf',
    '.xlsx', '.xls', '.ods', '.csv',
    '.pptx', '.ppt', '.odp',
]);

const FORMAT_LABELS: Record<string, string> = {
    '.docx': 'Word Document', '.doc': 'Word (Legacy)', '.odt': 'OpenDocument Text', '.rtf': 'Rich Text',
    '.xlsx': 'Excel Spreadsheet', '.xls': 'Excel (Legacy)', '.ods': 'OpenDocument Spreadsheet', '.csv': 'CSV Data',
    '.pptx': 'PowerPoint', '.ppt': 'PowerPoint (Legacy)', '.odp': 'OpenDocument Presentation',
};

const FORMAT_ICONS: Record<string, string> = {
    '.docx': '📝', '.doc': '📝', '.odt': '📝', '.rtf': '📝',
    '.xlsx': '📊', '.xls': '📊', '.ods': '📊', '.csv': '📊',
    '.pptx': '📽️', '.ppt': '📽️', '.odp': '📽️',
};

function getExtension(filePath?: string): string {
    if (!filePath) return '';
    const lastDot = filePath.lastIndexOf('.');
    if (lastDot < 0) return '';
    return filePath.slice(lastDot).toLowerCase();
}

function esc(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function isSecureContext(): boolean {
    return !!(self.crossOriginIsolated && typeof SharedArrayBuffer !== 'undefined');
}

// ── Preview card (workspace browser) ────────────────────────────

class OfficePreviewCard implements PaneInstance {
    private container: HTMLElement;
    private disposed = false;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'document';
        const ext = getExtension(filePath);
        const icon = FORMAT_ICONS[ext] || '📄';
        const label = FORMAT_LABELS[ext] || 'Office Document';
        const secure = isSecureContext();

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);';
        wrapper.innerHTML = `
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${icon}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${esc(name)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${esc(label)}</div>
                ${secure ? `
                    <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Open in Tab
                    </button>
                ` : `
                    <div style="padding:10px 16px;background:rgba(234,179,8,0.1);border:1px solid rgba(234,179,8,0.3);
                        border-radius:6px;font-size:12px;color:#eab308;line-height:1.5;">
                        ⚠️ Requires HTTPS for SharedArrayBuffer.<br>
                        <span style="color:var(--text-secondary,#888);font-size:11px;">
                            Connect via HTTPS to use the Office viewer.
                        </span>
                    </div>
                `}
            </div>
        `;
        container.appendChild(wrapper);

        if (secure) {
            const btn = wrapper.querySelector('#ov-open-tab') as HTMLButtonElement;
            if (btn) {
                btn.addEventListener('click', () => {
                    const evt = new CustomEvent('office-viewer:open-tab', {
                        bubbles: true,
                        detail: { path: filePath },
                    });
                    container.dispatchEvent(evt);
                });
            }
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

// ── Full viewer (editor tab) ────────────────────────────────────

class OfficeViewerInstance implements PaneInstance {
    private container: HTMLElement;
    private iframe: HTMLIFrameElement | null = null;
    private disposed = false;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'document';
        const secure = isSecureContext();

        if (!secure) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1e1e1e;';
            wrapper.innerHTML = `
                <div style="text-align:center;max-width:420px;padding:32px;">
                    <div style="font-size:48px;margin-bottom:16px;">🔒</div>
                    <div style="font-size:15px;font-weight:600;color:#e0e0e0;margin-bottom:8px;">
                        Secure Context Required
                    </div>
                    <div style="font-size:13px;color:#999;line-height:1.6;">
                        The Office viewer requires <code style="background:#333;padding:1px 5px;border-radius:3px;font-size:12px;">SharedArrayBuffer</code>
                        which is only available over HTTPS.<br><br>
                        Connect via <strong style="color:#4fc1ff;">https://</strong> to use this feature.
                    </div>
                </div>
            `;
            container.appendChild(wrapper);
            return;
        }

        const rawUrl = `/workspace/raw?path=${encodeURIComponent(filePath)}`;
        const viewerUrl = `/office-viewer/?url=${encodeURIComponent(rawUrl)}&name=${encodeURIComponent(name)}`;

        this.iframe = document.createElement('iframe');
        this.iframe.src = viewerUrl;
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

export const officeViewerPaneExtension: WebPaneExtension = {
    id: 'office-viewer',
    label: 'Office Viewer',
    icon: 'file-text',
    capabilities: ['readonly', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        const ext = getExtension(context?.path);
        if (!ext || !OFFICE_EXTENSIONS.has(ext)) return false;
        return 50;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') {
            return new OfficePreviewCard(container, context);
        }
        return new OfficeViewerInstance(container, context);
    },
};
