import React, { useContext, useState } from "react";
import { Icon } from "./themeIconStyles";
import sunSvg from "../../images/sun.svg";
import moonSvg from "../../images/moon.svg";
import { themes } from "../../Contexts/AppThemeProvider/theme";
import { ThemeContext } from "../../Contexts/AppThemeProvider/ThemeContext";

function ThemeIcon() {
//   const currentTheme = useContext(ThemeContext)
// console.log(currentTheme?.currentTheme.colors.background)
// const toggleTheme = currentTheme?.toggleTheme


// const [colorTheme, setColorTheme] = useState <string> ('light') 
// const click = ()=>{
//   colorTheme === 'light'
//   ? setColorTheme ('dark')
//   : setColorTheme ('light')
// } 
  // return   (
  // colorTheme === 'light'
  // ? <Icon onClick = {click} src={sunSvg} alt="User icon" />
  // :<Icon onClick = {click} src={moonSvg} alt="User icon" />
  // )

  // console.log(themes)
  return  ( 
  <ThemeContext.Consumer>
    {({toggleTheme}:any) =>  {    
    return <Icon onClick = {()=>{
      toggleTheme()
    }} src={sunSvg} alt="User icon" />}
     }   
  </ThemeContext.Consumer>)
}

export default ThemeIcon;
