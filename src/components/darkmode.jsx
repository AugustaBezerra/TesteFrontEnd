import { useDarkMode } from "./useDarkMode";

export default function DarkModeToggle() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <button id="theme-switch" onClick={toggleDarkMode}>
      {darkMode ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
    </button>
  );
}
