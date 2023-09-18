// Theme Switcher Component
// import icons
import { FaMoon, FaSun } from "react-icons/fa";

import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    if (localStorage.getItem("theme")) {
      currentTheme = localStorage.getItem("theme") ?? "";
    }

    if (currentTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  return (
    <button
      className="absolute top-4 right-6 focus:outline-none"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FaMoon className="w-4 h-4 text-stone-500" />
      ) : (
        <FaSun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}
