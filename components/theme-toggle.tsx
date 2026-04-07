"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-3 py-1 text-xs rounded-full border"
      style={{ borderColor: "var(--border)", color: "var(--fg)" }}
      aria-label="Toggle theme"
    >
      {mounted ? (isDark ? "Light" : "Dark") : "Dark"}
    </button>
  );
}
