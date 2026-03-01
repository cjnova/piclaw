// @ts-nocheck

export function formatTime(timestamp) {
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) return timestamp;
    const now = new Date();
    const diffMs = now - date;
    const dayMs = 24 * 60 * 60 * 1000;

    if (diffMs < dayMs) {
        return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    }
    if (diffMs < 7 * dayMs) {
        const weekday = date.toLocaleDateString(undefined, { weekday: 'short' });
        const time = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
        return `${weekday} ${time}`;
    }
    return date.toLocaleDateString();
}

export function formatCount(value) {
    if (!Number.isFinite(value)) return '0';
    return Math.round(value).toLocaleString();
}

export function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export function formatTimestamp(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString();
}
