"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6"></div>; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
        transition-all duration-300 ease-in-out cursor-pointer"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`w-6 h-6 text-yellow-500 transition-all duration-500 ease-in-out transform 
            ${
              theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
            } absolute top-0 left-0`}
        />
        <Moon
          className={`w-6 h-6 text-blue-400 transition-all duration-500 ease-in-out transform 
            ${
              theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            } absolute top-0 left-0`}
        />
      </div>
    </button>
  );
}
