import React from "react";
import {ThemeSwitcherIcon } from "./themeSwitcher.Styles";
import sunSvg from "../../images/sun.svg";
import moonSvg from "../../images/moon.svg";
import { useAppThemeController } from "../../Contexts/AppThemeProvider/AppThemeControllerContext";
import { ThemeVariant } from "../../Contexts/AppThemeProvider/theme";

function ThemeSwitcher() {
  const { themeVariant, setThemeVariant } = useAppThemeController();
  console.log(themeVariant)

  const iconSrc = ()=>themeVariant === ThemeVariant.Light?sunSvg:moonSvg
   
  return  (
    <ThemeSwitcherIcon onClick={()=>{
      if  (themeVariant === ThemeVariant.Light){      
        setThemeVariant(ThemeVariant.Dark)
      } else {setThemeVariant(ThemeVariant.Light)}
      }} src={iconSrc()}/>
  )

}

export default ThemeSwitcher;
