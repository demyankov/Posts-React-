import { createContext, useContext } from "react";
import { ThemeVariant } from "./theme";

export interface AppThemeController {
  themeVariant: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => void;
}

export const AppThemeControllerContext =
  createContext<AppThemeController | null>(null);

export function useAppThemeController(): AppThemeController {
  const useThemeContext = useContext(AppThemeControllerContext);

  if (!useThemeContext) {
    throw new Error("AppThemeController is used outside Provider!");
  }
  return useThemeContext;
}
