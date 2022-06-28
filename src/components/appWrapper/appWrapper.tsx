
import React, { useContext } from "react";
import { ThemeContext } from "../AppThemeProvider/ThemeContext";
import { Wrapper } from "./appWrapperStyles";

function AppWrapper ({children}:any): JSX.Element {  
const currentTheme = useContext(ThemeContext)
console.log(currentTheme?.currentTheme?.colors?.background)

  return (
    <Wrapper currentTheme ={currentTheme}>
        {children}     
    </Wrapper>
  );
}

export default AppWrapper;