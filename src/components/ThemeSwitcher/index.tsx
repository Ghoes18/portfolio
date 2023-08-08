import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

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
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 p-1 text-gray-800 transition-colors duration-300 ease-in-out bg-gray-200 border border-gray-300 rounded-full dark:bg-gray-800 dark:text-gray-200 focus:outline-none dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
