import { createContext, useContext } from "react";
import { ThemeType } from "./theme";


interface ThemeContextType {
  currentTheme: ThemeType,
  toggleTheme: () => void,
}

export const ThemeContext =
createContext<ThemeContextType | null>(null);

export function useThemeContext() {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error('AppThemeController is used outside Provider!');
  }

  return contextValue;
}

