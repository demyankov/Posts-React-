import { ThemeContext } from "@emotion/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppThemeController } from "../../Contexts/AppThemeProvider/AppThemeControllerContext";
import { ThemeVariant } from "../../Contexts/AppThemeProvider/theme";
import { Icon, Name } from "./headerCloseStyles";
import mySvgLight from "../../../components/images/user_icon-dark.svg";
import mySvgDark from "../../../components/images/user_icon-light.svg";

function HeaderClose({children}:{children:React.ReactNode}) {  
  const navigate = useNavigate()
  const {themeVariant} = useAppThemeController()

  return (
    <>
      {themeVariant === ThemeVariant.Light
        ? <Icon src={mySvgLight} alt="User icon" onClick={() => { navigate('/') }}/>
        : <Icon src={mySvgDark} alt="User icon" onClick={() => { navigate('/') }}/>}
      <Name>{children}</Name>
    </>
  )
}

export default HeaderClose;
