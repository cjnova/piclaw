import { useRef, useState } from "preact/hooks";
import { BUNDLED_THEMES } from "./bundled-themes";
import { getSavedThemeName, importVSCodeTheme, resetTheme, saveTheme, type VSCodeThemeJSON } from "./theme-importer";
import { useTheme } from "./ThemeProvider";
import { safeParse } from "../utils";

interface AppearancePanelProps {
  className?: string;
}

function parseImportedTheme(raw: string): VSCodeThemeJSON | null {
  const parsed = safeParse<unknown | null>(raw, null);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return null;
  }

  const candidate = parsed as Record<string, unknown>;
  const theme: VSCodeThemeJSON = {};

  if (typeof candidate.name === "string") {
    theme.name = candidate.name;
  }

  if (candidate.type === "dark" || candidate.type === "light") {
    theme.type = candidate.type;
  }

  if (candidate.colors && typeof candidate.colors === "object" && !Array.isArray(candidate.colors)) {
    theme.colors = Object.fromEntries(
      Object.entries(candidate.colors).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
    );
  }

  if (Array.isArray(candidate.tokenColors)) {
    theme.tokenColors = candidate.tokenColors.flatMap((rule) => {
      if (!rule || typeof rule !== "object" || Array.isArray(rule)) {
        return [];
      }

      const candidateRule = rule as Record<string, unknown>;
      const settings = candidateRule.settings && typeof candidateRule.settings === "object" && !Array.isArray(candidateRule.settings)
        ? candidateRule.settings as Record<string, unknown>
        : undefined;

      return [{
        name: typeof candidateRule.name === "string" ? candidateRule.name : undefined,
        scope: Array.isArray(candidateRule.scope)
          ? candidateRule.scope.filter((scope): scope is string => typeof scope === "string")
          : typeof candidateRule.scope === "string"
            ? candidateRule.scope
            : undefined,
        settings: settings
          ? {
              foreground: typeof settings.foreground === "string" ? settings.foreground : undefined,
              background: typeof settings.background === "string" ? settings.background : undefined,
              fontStyle: typeof settings.fontStyle === "string" ? settings.fontStyle : undefined,
            }
          : undefined,
      }];
    });
  }

  return theme;
}

export function AppearancePanel({ className }: AppearancePanelProps) {
  const { setMode } = useTheme();
  const [activeThemeName, setActiveThemeName] = useState<string | null>(() => getSavedThemeName());
  const [status, setStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleThemeChange = (e: Event) => {
    const name = (e.target as HTMLSelectElement).value;

    if (!name) {
      resetTheme();
      setMode("system");
      setActiveThemeName(null);
      setStatus("Reset to system default");
      return;
    }

    const bundled = BUNDLED_THEMES.find((theme) => theme.name === name);
    if (!bundled) {
      return;
    }

    saveTheme(bundled.vars, bundled.name);
    setMode(bundled.type);
    setActiveThemeName(bundled.name);
    setStatus(`Applied "${bundled.name}"`);
  };

  const handleFileImport = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    (event.target as HTMLInputElement).value = "";
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const theme = parseImportedTheme(e.target?.result as string);
        if (!theme) {
          setStatus("Failed to parse theme JSON.");
          return;
        }

        const vars = importVSCodeTheme(theme);

        if (Object.keys(vars).length === 0) {
          setStatus("No recognized VS Code color keys found.");
          return;
        }

        const themeName = theme.name ?? file.name.replace(/\.json$/i, "");
        saveTheme(vars, themeName);
        setMode(theme.type === "light" ? "light" : "dark");
        setActiveThemeName(themeName);
        setStatus(`Imported "${themeName}"`);
      } catch {
        setStatus("Failed to parse theme JSON.");
      }
    };

    reader.readAsText(file);
  };

  const handleReset = () => {
    resetTheme();
    setMode("system");
    setActiveThemeName(null);
    setStatus("Reset to system default");
  };

  return (
    <section className={`settings-panel ${className ?? ""}`.trim()}>
      <h3 className="settings-panel__heading">Appearance</h3>

      {status && <p className="settings-panel__status">{status}</p>}

      <label className="settings-panel__label" htmlFor="theme-select">Theme</label>
      <select id="theme-select" name="theme" className="settings-panel__select" value={activeThemeName ?? ""} onChange={handleThemeChange}>
        <option value="">System Default</option>
        {BUNDLED_THEMES.map((theme) => (
          <option key={theme.name} value={theme.name}>{theme.name}</option>
        ))}
      </select>

      <div className="settings-panel__actions">
        <button type="button" className="settings-panel__btn" onClick={() => fileInputRef.current?.click()}>
          Import VS Code Theme…
        </button>
        <button type="button" className="settings-panel__btn" onClick={handleReset}>
          Reset to default
        </button>
      </div>

      <input ref={fileInputRef} id="theme-import-file" name="theme-import-file" type="file" accept=".json" hidden onChange={handleFileImport} />
    </section>
  );
}
