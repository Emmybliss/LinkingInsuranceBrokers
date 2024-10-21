"use client";

import * as React from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggling between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="flex items-center justify-between w-14 h-8 bg-gray-200 dark:bg-gray-800 rounded-full p-1 relative cursor-pointer"
      onClick={toggleTheme}
    >
      <FaMoon className="text-gray-500 dark:text-gray-100 w-5 h-5" />
      <IoSunnySharp className="text-yellow-500 w-5 h-5" />
      <div
        className={`absolute bg-white w-6 h-6 rounded-full transition-all duration-300 ${
          theme === "light" ? "left-1" : "right-1"
        }`}
      />
    </div>
  );
}
