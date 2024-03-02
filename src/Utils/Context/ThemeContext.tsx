import { createContext, useContext } from "react";
import usePersistedState from "../Hooks/usePersistedstate";

const ThemeContext = createContext({});

export function useTheme(): any {
  return useContext(ThemeContext);
}

/**
 * A `<ContextProvider>` for themes. Used for changing and handling themes
 */

function ThemeContextProvider({ children }: any) {
  const [theme, setTheme] = usePersistedState("theme", "light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
