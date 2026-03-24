// @ts-nocheck
/**
 * kanban-pane.ts — WebPaneExtension for .kanban.md files.
 *
 * Adapts the kanban board editor from the VS Code extension to piclaw's pane system.
 * Renders markdown-backed kanban boards with drag-and-drop card movement.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const KANBAN_EXTENSION = /\.kanban\.md$/i;

function ensureScript(src: string): Promise<void> {
    if (document.querySelector(`script[src="${src}"]`)) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const el = document.createElement('script');
        el.src = src;
        el.onload = () => resolve();
        el.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(el);
    });
}

function ensureStylesheet(href: string): void {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
}

// ── Preview card ────────────────────────────────────────────────

class KanbanPreviewCard implements PaneInstance {
    private container: HTMLElement;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'kanban';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);';
        wrapper.innerHTML = `
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">📋</div>
                    <div style="font-size:14px;color:var(--text-primary);">${name}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `;
        container.appendChild(wrapper);

        wrapper.querySelector('#kb-open-tab')?.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('kanban:open-tab', {
                bubbles: true,
                detail: { path: filePath },
            }));
        });
    }

    getContent() { return undefined; }
    isDirty() { return false; }
    focus() {}
    resize() {}
    dispose() { this.container.innerHTML = ''; }
}

// ── Full editor ─────────────────────────────────────────────────

class KanbanEditorInstance implements PaneInstance {
    private container: HTMLElement;
    private filePath: string;
    private dirty = false;
    private dirtyCallback: ((dirty: boolean) => void) | null = null;
    private disposed = false;
    private boardEl: HTMLElement | null = null;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        this.filePath = context.path || '';
        this.init(context.content || '');
    }

    private async init(initialContent: string) {
        ensureStylesheet('/static/css/kanban.css');

        this.boardEl = document.createElement('div');
        this.boardEl.id = 'kanban-container';
        this.boardEl.style.cssText = 'width:100%;height:100%;overflow:auto;position:relative;';
        this.container.appendChild(this.boardEl);

        const isDark = document.body.classList.contains('dark') ||
            getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim().startsWith('#1');
        if (!isDark) {
            this.boardEl.classList.add('light');
        }

        const self = this;
        const fakeVscode = {
            postMessage(msg: any) {
                switch (msg.type) {
                    case 'edit':
                        self.dirty = true;
                        self.dirtyCallback?.(true);
                        self.saveToWorkspace(msg.content);
                        break;
                    case 'ready':
                        window.dispatchEvent(new MessageEvent('message', {
                            data: { type: 'update', content: initialContent }
                        }));
                        window.dispatchEvent(new MessageEvent('message', {
                            data: { type: 'setTheme', theme: isDark ? 'dark' : 'light' }
                        }));
                        break;
                    case 'synced':
                        break;
                }
            },
            getState() { return null; },
            setState() {},
        };

        (window as any).__kanbanVscodeShim = fakeVscode;
        (window as any).acquireVsCodeApi = () => (window as any).__kanbanVscodeShim;

        try {
            await ensureScript('/static/js/vendor/kanban-editor.js');
        } catch (err) {
            console.error('[kanban] Failed to load kanban renderer:', err);
            if (this.boardEl) {
                this.boardEl.innerHTML = `<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>`;
            }
        }
    }

    private async saveToWorkspace(mdContent: string) {
        try {
            await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'text/markdown' },
                body: mdContent,
            });
            this.dirty = false;
            this.dirtyCallback?.(false);
        } catch (err) {
            console.error('[kanban] Save failed:', err);
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return this.dirty; }

    setContent(content: string, _mtime: string): void {
        window.dispatchEvent(new MessageEvent('message', {
            data: { type: 'update', content }
        }));
        this.dirty = false;
        this.dirtyCallback?.(false);
    }

    focus(): void { this.boardEl?.focus(); }
    resize(): void {}

    onDirtyChange(cb: (dirty: boolean) => void): void {
        this.dirtyCallback = cb;
    }

    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        delete (window as any).__kanbanVscodeShim;
        delete (window as any).acquireVsCodeApi;
        this.container.innerHTML = '';
    }
}

// ── Extension ───────────────────────────────────────────────────

export const kanbanPaneExtension: WebPaneExtension = {
    id: 'kanban-editor',
    label: 'Kanban Board',
    icon: 'kanban',
    capabilities: ['edit', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        const path = context?.path || '';
        if (!KANBAN_EXTENSION.test(path)) return false;
        return 50;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') {
            return new KanbanPreviewCard(container, context);
        }
        return new KanbanEditorInstance(container, context);
    },
};
