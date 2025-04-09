"use client";

import { useTheme } from "@/app/providers/themeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "5px",
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
      }}
    >
      {theme === "light" ? (
        <MoonIcon
          style={{ width: "24px", height: "24px", color: "#907aa9" }}
          title="Tema Escuro"
        />
      ) : (
        <SunIcon
          style={{ width: "24px", height: "24px", color: "#f6c177" }}
          title="Tema Claro"
        />
      )}
    </button>
  );
}
