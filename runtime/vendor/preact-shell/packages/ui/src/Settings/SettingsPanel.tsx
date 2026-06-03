import { useEffect, useMemo, useState } from "preact/hooks";
import { Icon } from "../Icon";
import { getRegisteredPanes, onPanesChanged } from "./pane-registry";

interface SettingsPanelProps {
  className?: string;
}

export function SettingsPanel({ className }: SettingsPanelProps) {
  const [panes, setPanes] = useState(() => getRegisteredPanes());
  const [activePaneId, setActivePaneId] = useState<string | null>(() => getRegisteredPanes()[0]?.id ?? null);

  useEffect(() => {
    const syncPanes = () => {
      const nextPanes = getRegisteredPanes();
      setPanes(nextPanes);
      setActivePaneId((current) => {
        if (!nextPanes.length) {
          return null;
        }

        if (current && nextPanes.some((pane) => pane.id === current)) {
          return current;
        }

        return nextPanes[0].id;
      });
    };

    syncPanes();
    return onPanesChanged(syncPanes);
  }, []);

  const activePane = useMemo(
    () => panes.find((pane) => pane.id === activePaneId) ?? panes[0],
    [activePaneId, panes],
  );

  if (!activePane) {
    return (
      <div className={["settings-panel-layout", className].filter(Boolean).join(" ")}>
        <div className="settings-panel__content">
          <div className="settings-placeholder">No settings available.</div>
        </div>
      </div>
    );
  }

  const ActivePaneComponent = activePane.component;

  return (
    <div className={["settings-panel-layout", className].filter(Boolean).join(" ")}>
      <nav className="settings-panel__nav" aria-label="Settings sections">
        {panes.map((pane) => (
          <button
            key={pane.id}
            type="button"
            className={`settings-panel__nav-item ${pane.id === activePane.id ? "is-active" : ""}`.trim()}
            onClick={() => setActivePaneId(pane.id)}
          >
            <Icon name={pane.icon} size={14} className="settings-panel__nav-icon" />
            <span>{pane.label}</span>
          </button>
        ))}
      </nav>

      <section className="settings-panel__content">
        <ActivePaneComponent />
      </section>
    </div>
  );
}
