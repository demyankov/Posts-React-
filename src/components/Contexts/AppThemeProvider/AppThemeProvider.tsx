import React, { useMemo, useState } from "react";
import { AppThemeControllerContext } from "./AppThemeControllerContext";

import { ThemeVariant } from "./theme";


export function AppThemeProvider ({children}:{children:React.ReactNode}) {
    const [themeVariant, setThemeVariant] = useState(ThemeVariant.Light)

    const contextValue = useMemo(()=>(
         {themeVariant, setThemeVariant }
    ),[themeVariant])

return(
    <AppThemeControllerContext.Provider value={contextValue}>
        {children}
    </AppThemeControllerContext.Provider>
    )

}