"use client";

import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const defaultTheme = (localStorage.getItem("theme") || "dark") as Theme;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
