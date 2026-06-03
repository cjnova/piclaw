import { Icon } from "../Icon";
import { useDismissableLayer } from "../hooks/useDismissableLayer";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";

interface AvatarPopoverProps {
  type: "user" | "agent";
  x: number;
  y: number;
  currentName: string;
  onNameChange: (name: string) => void;
  onAvatarChange: (url: string | null) => void;
  onDismiss: () => void;
}

export function AvatarPopover({
  type,
  x,
  y,
  currentName,
  onNameChange,
  onAvatarChange,
  onDismiss,
}: AvatarPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [nameInput, setNameInput] = useState(currentName);
  const [githubHandle, setGithubHandle] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [position, setPosition] = useState({ x, y });

  useDismissableLayer({ ref: popoverRef, open: true, onDismiss });

  // Enter anywhere closes popover (saves name if changed)
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        const trimmed = nameInput.trim();
        if (trimmed && trimmed !== currentName) {
          onNameChange(trimmed);
        }
        onDismiss();
      }
    };
    document.addEventListener("keydown", handleEnter, true);
    return () => document.removeEventListener("keydown", handleEnter, true);
  });

  useEffect(() => {
    setNameInput(currentName);
  }, [currentName]);

  useLayoutEffect(() => {
    const node = popoverRef.current;
    if (!node) {
      return;
    }

    const margin = 8;
    const maxX = window.innerWidth - node.offsetWidth - margin;
    const maxY = window.innerHeight - node.offsetHeight - margin;

    setPosition({
      x: Math.min(Math.max(x, margin), Math.max(margin, maxX)),
      y: Math.min(Math.max(y, margin), Math.max(margin, maxY)),
    });
  }, [x, y]);

  const handleUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        onAvatarChange(reader.result);
        setStatus("Avatar updated");
      }
    };

    reader.onerror = () => {
      setStatus("Failed to read image");
    };

    reader.readAsDataURL(file);
    target.value = "";
  };

  const syncGithubAvatar = () => {
    const handle = githubHandle.trim().replace(/^@/, "");
    if (!handle) {
      setStatus("Enter a GitHub handle");
      return;
    }

    const url = `https://github.com/${encodeURIComponent(handle)}.png?size=128`;
    setStatus("Validating GitHub avatar…");

    const img = new Image();
    img.onload = () => {
      onAvatarChange(url);
      setStatus("Synced from GitHub");
    };
    img.onerror = () => {
      setStatus("Could not load avatar for that handle");
    };
    img.src = url;
  };

  return (
    <div
      ref={popoverRef}
      className="avatar-popover"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      role="dialog"
      aria-label={type === "user" ? "Your avatar" : "Agent avatar"}
    >
      <div className="avatar-popover__header">
        <div className="avatar-popover__title">{type === "user" ? "Your avatar" : "Agent avatar"}</div>
        <button type="button" className="avatar-popover__close" aria-label="Close" onClick={onDismiss}>
          <Icon name="close" size={14} />
        </button>
      </div>

      <div className="avatar-popover__field">
        <label className="avatar-popover__label" htmlFor="avatar-name-input">Display name</label>
        <input
          id="avatar-name-input"
          name="avatar-name"
          className="avatar-popover__input"
          value={nameInput}
          onInput={(event) => setNameInput((event.target as HTMLInputElement).value)}
        />
      </div>

      <button
        type="button"
        className="avatar-popover__btn"
        onClick={() => fileInputRef.current?.click()}
      >
        <Icon name="upload" size={14} />
        Upload image
      </button>
      <input
        ref={fileInputRef}
        id="avatar-file-input"
        name="avatar-file"
        type="file"
        accept="image/*"
        hidden
        onChange={(event) => {
          void handleUpload(event);
        }}
      />

      {type === "user" ? (
        <div className="avatar-popover__github">
          <input
            id="avatar-github-handle"
            name="avatar-github-handle"
            className="avatar-popover__input"
            placeholder="GitHub handle"
            value={githubHandle}
            onInput={(event) => setGithubHandle((event.target as HTMLInputElement).value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                syncGithubAvatar();
              }
            }}
          />
          <button type="button" className="avatar-popover__btn avatar-popover__btn--small" onClick={syncGithubAvatar}>
            Sync
          </button>
        </div>
      ) : null}

      <button
        type="button"
        className="avatar-popover__btn"
        onClick={() => {
          onAvatarChange(null);
          const defaultName = type === "user" ? "You" : "Agent";
          onNameChange(defaultName);
          setNameInput(defaultName);
          setStatus("Reset to default");
        }}
      >
        <Icon name="discard" size={14} />
        Reset to default
      </button>

      {status ? <div className="avatar-popover__status">{status}</div> : null}
    </div>
  );
}

export default AvatarPopover;
