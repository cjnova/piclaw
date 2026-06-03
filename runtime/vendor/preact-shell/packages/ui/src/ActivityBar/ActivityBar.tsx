import type { ComponentChildren } from "preact";
import { Icon, type IconName } from "../Icon";

export interface ActivityBarItem {
  id: string;
  icon: IconName;
  label: string;
  mode?: "sidebar" | "main";
  alignBottom?: boolean;
  /** @deprecated Prefer mode */
  actionOnly?: boolean;
  component?: unknown;
}

interface ActivityBarProps {
  panels: ActivityBarItem[];
  onPanelChange: (id: string) => void;
  bottomContent?: ComponentChildren;
}


export function ActivityBar({ panels, onPanelChange, bottomContent }: ActivityBarProps) {
  const topPanels = panels.filter((panel) => !panel.alignBottom);
  const bottomPanels = panels.filter((panel) => panel.alignBottom);

  const renderButton = (panel: ActivityBarItem) => (
    <button
      key={panel.id}
      type="button"
      className="activity-bar__button"
      title={panel.label}
      aria-label={panel.label}
      onClick={() => onPanelChange(panel.id)}
    >
      <Icon name={panel.icon} size={24} className="activity-bar__icon" />
    </button>
  );

  return (
    <nav className="activity-bar" aria-label="Activity bar">
      {topPanels.map(renderButton)}
      <div className="activity-bar__spacer" />
      {bottomPanels.map(renderButton)}
      {bottomContent ? <div className="activity-bar__bottom-content">{bottomContent}</div> : null}
    </nav>
  );
}
