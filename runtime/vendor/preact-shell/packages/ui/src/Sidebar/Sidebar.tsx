import type { ComponentChildren } from "preact";
import { Icon } from "../Icon";

interface SidebarProps {
  title: string;
  children: ComponentChildren;
  onClose?: () => void;
}

export function Sidebar({ title, children, onClose }: SidebarProps) {
  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <span className="sidebar__title">{title}</span>
        {onClose && (
          <button
            type="button"
            className="sidebar__close"
            aria-label="Close panel"
            onClick={onClose}
          >
            <Icon name="close" size={16} />
          </button>
        )}
      </header>
      <div className="sidebar__content">{children}</div>
    </aside>
  );
}
