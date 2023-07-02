// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BsSunFill, BsSun } from "react-icons/bs";

function DarkModeButton() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkMode, setDarkMode] = useState(colorTheme === "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  function toggleDarkMode() {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-colors ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {darkMode ? <BsSunFill /> : <BsSun />}
    </button>
  );
}

export default DarkModeButton;
