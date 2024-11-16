import React, { useState } from "react";
import "./themeswitcher.css";

function Themeswitcher() {
  const [theme, setTheme] = useState<string>("root");

  const switchTheme = (theme: string): void => {
    document.documentElement.className = theme;
    setTheme(theme);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    switchTheme(event.target.value);
  };

  return (
    <article className="theme-switcher">
      <label htmlFor="theme-select" className="theme-switcher__label">
        Choose Theme:
      </label>
      <select
        id="theme-select"
        className="theme-switcher__select"
        value={theme}
        onChange={handleChange}
      >
        <option value="theme-1" className="theme-switcher__option">
          Fredricks Tema
        </option>
        <option value="root" className="theme-switcher__option">
          Miklos Tema
        </option>
        <option value="theme-2" className="theme-switcher__option">
          Katarinas Tema
        </option>
      </select>
    </article>
  );
}

export default Themeswitcher;

// Författare Fredrick
