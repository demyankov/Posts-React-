import { Global, ThemeProvider } from "@emotion/react";
import React, { useMemo, useState } from "react";
import { AppThemeControllerContext } from "./AppThemeControllerContext";
import { getRebootCSS } from "./reboot";

import { appTheme, ThemeVariant } from "./theme";


export function AppThemeProvider ({children}:{children:React.ReactNode}) {
    const [themeVariant, setThemeVariant] = useState(ThemeVariant.Light)

    const contextValue = useMemo(()=>(
         {themeVariant, setThemeVariant }
    ),[themeVariant])

    return (
        <>
           <Global styles={getRebootCSS(themeVariant)} />
            <AppThemeControllerContext.Provider value={contextValue}>
                {children}
            </AppThemeControllerContext.Provider>
        </>
    )


}