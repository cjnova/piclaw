import { createContext } from "preact";
import type { ComponentChildren } from "preact";
import { useCallback, useContext, useEffect, useMemo, useState } from "preact/hooks";
import { DARK_THEME, LIGHT_THEME, getSystemTheme, type Theme, type ThemeMode } from "./theme";
import { applyTheme, loadSavedTheme, THEME_MODE_STORAGE_KEY } from "./theme-importer";

export interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  resolvedTheme: "dark" | "light";
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: DARK_THEME,
  mode: "system",
  resolvedTheme: "dark",
  setMode: () => {},
});

interface ThemeProviderProps {
  children: ComponentChildren;
}

function readSavedMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const value = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
    if (value === "dark" || value === "light" || value === "system") {
      return value;
    }
  } catch {
    // Ignore localStorage failures.
  }

  return "system";
}

function applyThemeVariables(theme: Theme, resolvedTheme: "dark" | "light") {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.dataset.theme = resolvedTheme;

  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--bg-sidebar", theme.bgSidebar);
  root.style.setProperty("--bg-terminal", theme.bgTerminal);
  root.style.setProperty("--bg-status", theme.bgStatus);
  root.style.setProperty("--border", theme.border);
  root.style.setProperty("--text", theme.text);
  root.style.setProperty("--text-muted", theme.textMuted);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--text-on-accent", theme.textOnAccent);
  root.style.setProperty("--success", theme.success);
  root.style.setProperty("--text-on-success", theme.textOnSuccess);
  root.style.setProperty("--error", theme.error);
  root.style.setProperty("--handle", theme.handle);
  root.style.setProperty("--handle-hover", theme.handleHover);
  root.style.setProperty("--input-bg", theme.inputBg);
  root.style.setProperty("--input-border", theme.inputBorder);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(readSavedMode);
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">(getSystemTheme());

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    setSystemTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);
    try {
      window.localStorage.setItem(THEME_MODE_STORAGE_KEY, nextMode);
    } catch {
      // Ignore localStorage failures.
    }
  }, []);

  const resolvedTheme = mode === "system" ? systemTheme : mode;
  const theme = useMemo(() => (resolvedTheme === "dark" ? DARK_THEME : LIGHT_THEME), [resolvedTheme]);

  useEffect(() => {
    const savedVars = loadSavedTheme();
    if (savedVars) {
      // Saved theme overrides everything — apply via <style> with !important
      // Only set data-theme for CSS selectors
      if (typeof document !== "undefined") {
        document.documentElement.dataset.theme = resolvedTheme;
      }
      applyTheme(savedVars);
    } else {
      // No saved theme — apply base theme variables inline
      applyThemeVariables(theme, resolvedTheme);
    }
  }, [theme, resolvedTheme]);

  const value = useMemo<ThemeContextValue>(() => ({ theme, mode, resolvedTheme, setMode }), [theme, mode, resolvedTheme, setMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
