import { Global } from "@emotion/react";
import React, { useEffect, useMemo, useState } from "react";
import { LocalStorageKey } from "../../../enums/localStorageKey";
import { AppThemeControllerContext } from "./AppThemeControllerContext";
import { getRebootCSS } from "./reboot";

import { appTheme, ThemeVariant } from "./theme";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeVariant, setThemeVariant] = useState<string>(
    (localStorage.getItem(LocalStorageKey.ThemeVariant) as ThemeVariant) ||
      ThemeVariant.Light
  );

  const contextValue = useMemo(
    () => ({ themeVariant, setThemeVariant }),
    [themeVariant]
  );

  useEffect(() => {
    localStorage.setItem(LocalStorageKey.ThemeVariant, themeVariant);
  }, [themeVariant]);

  return (
    <>
      <Global styles={getRebootCSS(themeVariant as ThemeVariant)} />
      <AppThemeControllerContext.Provider value={contextValue}>
        {children}
      </AppThemeControllerContext.Provider>
    </>
  );
}
