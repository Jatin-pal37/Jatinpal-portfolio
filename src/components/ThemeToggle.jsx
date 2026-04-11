import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      return;
    }

    document.documentElement.classList.remove("dark");
    if (storedTheme !== "light") {
      localStorage.setItem("theme", "light");
    }
    setIsDarkMode(false);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 hidden sm:inline-flex p-2 rounded-full transition-colors duration-300",
        "bg-background/60 hover:bg-primary/10 ring-1 ring-primary/20 backdrop-blur-sm",
        "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
