import React, { useState } from "react";

export default function Header({ isDark, setIsDark }) {
  return (
    <header className="flex justify-between bg-white dark:text-white dark:bg-gray-800 z-10 items-center shadow-md px-4 sm:px-6 lg:px-8 py-5 sticky top-0 w-full">
      <div>
        <h1 className="text-2xl font-semibold">Wonders of World 🌍</h1>
      </div>

      <div>
        <p
          className="flex items-center justify-center cursor-pointer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          <span className="hidden sm:inline ml-3 text-sm">
            {isDark ? "Light" : "Dark"}
          </span>
        </p>
      </div>
    </header>
  );
}
