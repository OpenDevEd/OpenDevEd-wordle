"use client";
import React, { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkMode = () => {
    const [darkMode, setDarkMode] = React.useState<boolean>(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const localTheme = localStorage.getItem("theme");
            if (localTheme) {
                document.documentElement.classList.add(localTheme);
                setDarkMode(localTheme === "dark");
            } else {
                const darkMode = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;
                document.documentElement.classList.add(
                    darkMode ? "dark" : "light"
                );
                setDarkMode(darkMode);
            }
        }
    });
    return (
        <button
            className="p-1 rounded-full shadow-md  transition-colors duration-100 delay-75 hover:shadow-lg dark:hover:shadow-lg hover:scale-105 dark:hover:text-yellow-500 hover:text-sky-950"
            type="button"
            title={`Switch to ${darkMode ? "light" : "dark"} mode`}
            onClick={() => {
                localStorage.setItem("theme", darkMode ? "light" : "dark");
                document.documentElement.classList.toggle("dark");
                setDarkMode((prev) => !prev);
            }}
        >
            {darkMode != null && darkMode ? (
                <FiMoon className="h-6 w-6 sm:w-8 sm:h-8" />
            ) : (
                <FiSun className="h-6 w-6 sm:w-8 sm:h-8" />
            )}
        </button>
    );
};

export default DarkMode;
