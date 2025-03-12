"use client";

import { useTheme } from "next-themes";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex items-center space-x-2 mb-10">
      <h1 className="text-3xl font-bold flex-grow">devfinder</h1>
      <div className="flex items-center gap-2">
        <span className="uppercase text-slate-600 dark:text-white">
          {theme === "light" ? "Light" : "Dark"}
        </span>
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <SunIcon className="fill-slate-600 dark:fill-white" width={25} />
          ) : (
            <MoonIcon className="fill-slate-600 dark:fill-white" width={25} />
          )}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
