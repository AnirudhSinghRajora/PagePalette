import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-20 h-8 flex items-center rounded-full bg-yellow-300 dark:bg-blue-800 p-1 transition"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
          darkMode ? "translate-x-10" : "translate-x-0"
        }`}
      />
      <span className="absolute left-2 text-xs font-bold text-white">
        {darkMode ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;
