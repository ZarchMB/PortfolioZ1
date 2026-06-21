"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = resolvedTheme ?? "system";

  return (
    <button
      type="button"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="font-mono text-[12px] tracking-[0.06em] border border-rule-strong px-3 py-1.5 text-ink-soft hover:border-steel hover:text-steel transition-colors"
      aria-label="Toggle dark mode"
    >
      {currentTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}