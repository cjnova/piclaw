import { useEffect, useRef, useState } from "preact/hooks";
import { Icon } from "../Icon";
import { createLazySignal } from "../hooks";
import { normalizeWorkspaceReferences, subscribeWorkspaceAttach, type WorkspaceReference } from "../Workspace/workspace-references";
import type { Attachment, ComposeSendPayload } from "./types";

interface ComposeBoxProps {
  onSend: (text: string, attachments: Attachment[], payload: ComposeSendPayload) => void;
  onCancel?: () => void;
  isSending?: boolean;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (text: string) => void;
  history?: string[];
  onHistoryChange?: (history: string[]) => void;
  onMicToggle?: () => void;
  onBellToggle?: () => void;
  micActive?: boolean;
  bellActive?: boolean;
  pasteAsMarkdown?: boolean;
}

const TURNDOWN_OPTIONS = {
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
} as const;

const turndownSignal = createLazySignal(async () => {
  const [{ default: TurndownService }, { gfm, tables, strikethrough }] = await Promise.all([
    import("turndown"),
    import("turndown-plugin-gfm"),
  ]);
  const td = new TurndownService(TURNDOWN_OPTIONS);
  td.use([tables, strikethrough]);
  return td;
});

/** Skip conversion for trivially-wrapped plain text (no real formatting) */
const FORMATTING_ELEMENTS = /<(strong|em|b|i|code|pre|table|th|td|tr|h[1-6]|ul|ol|li|a\s|img\s|blockquote|del|s)[\/\s>]/i;

function hasFormattingElements(html: string): boolean {
  return FORMATTING_ELEMENTS.test(html);
}

function extensionFromType(type: string): string {
  const subtype = type.split("/")[1] ?? "png";
  return subtype.split("+")[0] ?? "png";
}

function makeAttachment(file: File, name = file.name): Attachment {
  return {
    id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    type: file.type || "application/octet-stream",
    size: file.size,
  };
}

async function convertHtmlToMarkdown(html: string): Promise<string | null> {
  turndownSignal.load();

  const state = turndownSignal.state.value;
  if (state.status === "ready") {
    return state.module.turndown(html);
  }

  const [{ default: TurndownService }, { tables, strikethrough }] = await Promise.all([
    import("turndown"),
    import("turndown-plugin-gfm"),
  ]);
  const td = new TurndownService(TURNDOWN_OPTIONS);
  td.use([tables, strikethrough]);
  return td.turndown(html);
}

function insertAtCursor(textarea: HTMLTextAreaElement, textToInsert: string) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const currentValue = textarea.value;
  const nextValue = currentValue.slice(0, start) + textToInsert + currentValue.slice(end);

  textarea.value = nextValue;
  textarea.selectionStart = start + textToInsert.length;
  textarea.selectionEnd = textarea.selectionStart;
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
}

export function ComposeBox({
  onSend,
  onCancel,
  isSending = false,
  placeholder = "Type a message...",
  disabled = false,
  defaultValue,
  onChange,
  history: initialHistory,
  onHistoryChange,
  onMicToggle,
  onBellToggle,
  micActive = false,
  bellActive = false,
  pasteAsMarkdown = true,
}: ComposeBoxProps) {
  const [text, setText] = useState(defaultValue ?? "");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [history, setHistory] = useState<string[]>(initialHistory ?? []);
  const [references, setReferences] = useState<WorkspaceReference[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const canSend = !disabled && !isSending && (text.trim().length > 0 || attachments.length > 0 || references.length > 0);

  const updateText = (nextText: string) => {
    setText(nextText);
    onChange?.(nextText);
  };

  const addFiles = (files: File[]) => {
    if (files.length === 0) {
      return;
    }

    const next = files.map((file) => makeAttachment(file));
    setAttachments((current) => [...current, ...next]);
  };

  useEffect(() => {
    return subscribeWorkspaceAttach((reference) => {
      setReferences((current) => normalizeWorkspaceReferences([...current, reference]));
    });
  }, []);

  const send = () => {
    if (!canSend) {
      return;
    }

    const trimmed = text.trim();
    onSend(trimmed, attachments, { references: normalizeWorkspaceReferences(references) });
    if (trimmed) {
      const updated = [trimmed, ...history].slice(0, 50);
      setHistory(updated);
      onHistoryChange?.(updated);
    }
    setHistoryIndex(null);
    updateText("");
    setAttachments([]);
    setReferences([]);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      send();
      return;
    }

    if (event.key === "Escape") {
      textareaRef.current?.blur();
      onCancel?.();
      return;
    }

    if (event.key === "ArrowUp" && text.length === 0 && history.length > 0) {
      event.preventDefault();
      const nextIndex = historyIndex === null ? 0 : Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(nextIndex);
      updateText(history[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown" && historyIndex !== null) {
      event.preventDefault();
      if (historyIndex <= 0) {
        setHistoryIndex(null);
        updateText("");
      } else {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        updateText(history[nextIndex]);
      }
    }
  };

  const handlePaste = (event: ClipboardEvent) => {
    const clipboardData = event.clipboardData;
    if (!clipboardData) {
      return;
    }

    const files = Array.from(clipboardData.files ?? []);
    const images = files.filter((file) => file.type.startsWith("image/"));

    if (images.length > 0) {
      event.preventDefault();

      const timestamp = Date.now();
      const pasted = images.map((file, index) => {
        const ext = extensionFromType(file.type);
        const name = `pasted-${timestamp}${index ? `-${index}` : ""}.${ext}`;
        return makeAttachment(file, name);
      });

      setAttachments((current) => [...current, ...pasted]);
      return;
    }

    if (!pasteAsMarkdown) {
      return;
    }

    const html = clipboardData.getData("text/html");
    if (!html) {
      return;
    }

    const target = event.currentTarget;
    if (!(target instanceof HTMLTextAreaElement)) {
      return;
    }

    // Check if HTML has real formatting worth converting
    if (!hasFormattingElements(html)) {
      // Trivial HTML — let browser paste plain text normally
      return;
    }

    event.preventDefault();
    const fallbackText = clipboardData.getData("text/plain");

    void convertHtmlToMarkdown(html)
      .then((markdown) => {
        insertAtCursor(target, markdown || fallbackText);
      })
      .catch(() => {
        if (fallbackText) {
          insertAtCursor(target, fallbackText);
        }
      });
  };

  return (
    <div className="chat__composer-root">
      <div
        className={`chat__compose ${isDragOver ? "chat__compose--dragover" : ""}`.trim()}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragOver(false);
          addFiles(Array.from(event.dataTransfer?.files ?? []));
        }}
      >
        <textarea
          ref={textareaRef}
          id="compose-textarea"
          name="compose-message"
          className="chat__compose-textarea"
          value={text}
          placeholder={placeholder}
          disabled={disabled}
          onInput={(event) => updateText(event.currentTarget.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />

        {references.length > 0 ? (
          <div className="chat__references" aria-label="Workspace references">
            {references.map((reference) => (
              <div className="chat__reference-pill" key={reference.path}>
                <Icon name="file" size={14} />
                <span title={reference.path}>{reference.name}</span>
                <button
                  type="button"
                  className="chat__attachment-remove"
                  aria-label={`Remove reference ${reference.name}`}
                  onClick={() => {
                    setReferences((current) => current.filter((item) => item.path !== reference.path));
                  }}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="chat__attachment-clear"
              aria-label="Clear all references"
              onClick={() => setReferences([])}
            >
              Clear references
            </button>
          </div>
        ) : null}

        {attachments.length > 0 ? (
          <div className="chat__attachments">
            {attachments.map((attachment) => (
              <div className="chat__attachment-pill" key={attachment.id}>
                <span>{attachment.name}</span>
                <button
                  type="button"
                  className="chat__attachment-remove"
                  aria-label={`Remove ${attachment.name}`}
                  onClick={() => setAttachments((current) => current.filter((item) => item.id !== attachment.id))}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="chat__attachment-clear"
              aria-label="Clear all attachments"
              onClick={() => setAttachments([])}
            >
              Clear all
            </button>
          </div>
        ) : null}

        <input
          ref={fileInputRef}
          id="compose-file-input"
          name="compose-file"
          hidden
          type="file"
          multiple
          onChange={(event) => {
            addFiles(Array.from(event.currentTarget.files ?? []));
            event.currentTarget.value = "";
          }}
        />

        <div className="chat__compose-toolbar">
          <div className="chat__toolbar-left">
            <button
              type="button"
              className="chat__icon-btn"
              aria-label="Attach file"
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled || isSending}
            >
              <Icon name="attach" size={16} />
            </button>
            <button
              type="button"
              className={`chat__icon-btn${micActive ? " chat__icon-btn--active" : ""}`}
              aria-label="Voice input"
              aria-pressed={micActive}
              disabled={disabled || isSending}
              onClick={onMicToggle}
            >
              <Icon name={micActive ? "mic-filled" : "mic"} size={16} />
            </button>
            <button
              type="button"
              className={`chat__icon-btn${bellActive ? " chat__icon-btn--active" : ""}`}
              aria-label="Notifications"
              aria-pressed={bellActive}
              disabled={disabled || isSending}
              onClick={onBellToggle}
            >
              <Icon name={bellActive ? "bell-dot" : "bell"} size={16} />
            </button>
          </div>
          <div className="chat__toolbar-right">
            <button
              type="button"
              className="chat__send-btn"
              onClick={send}
              disabled={!canSend}
              aria-label="Send message"
            >
              <Icon name="arrow-up" size={16} />
            </button>
            <button
              type="button"
              className="chat__stop-btn"
              onClick={onCancel}
              aria-label="Stop generation"
              hidden={!isSending}
            >
              <Icon name="primitive-square" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
