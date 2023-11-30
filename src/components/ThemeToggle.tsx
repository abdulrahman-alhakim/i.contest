// ThemeToggle.js
import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  return (
    <button
      className="m-2 border border-none rounded-circle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FontAwesomeIcon
        style={{ color: "rgb(32,98,98)" }}
        icon={theme === "light" ? faMoon : faSun}
      />
    </button>
  );
};

export default ThemeToggle;
