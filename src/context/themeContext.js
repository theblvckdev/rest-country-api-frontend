import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // false represents light mode
  // true represents dark mode
  const [themeChange, setThemeChange] = useState(false);

  // toggle theme function
  const handleThemeChange = () => {
    setThemeChange(!themeChange);
  };

  return (
    <ThemeContext.Provider value={{ themeChange, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
