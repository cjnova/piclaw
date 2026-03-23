// @ts-nocheck

const MAX_EDITABLE_PREVIEW_BYTES = 256 * 1024;

export function isEditableWorkspacePreview(preview) {
    if (!preview || preview.kind !== 'text') return false;
    const size = Number(preview?.size);
    return !Number.isFinite(size) || size <= MAX_EDITABLE_PREVIEW_BYTES;
}

export function hasSpecializedWorkspaceTab(path, resolvePane) {
    const normalized = String(path || '').trim();
    if (!normalized || normalized.endsWith('/')) return false;
    if (typeof resolvePane !== 'function') return false;
    const resolved = resolvePane({ path: normalized, mode: 'edit' });
    if (!resolved || typeof resolved !== 'object') return false;
    return resolved.id !== 'editor';
}

export function shouldAutoOpenWorkspaceFile(path, preview, options = {}) {
    const resolvePane = options?.resolvePane;
    if (hasSpecializedWorkspaceTab(path, resolvePane)) return true;
    return isEditableWorkspacePreview(preview);
}

export { MAX_EDITABLE_PREVIEW_BYTES };
