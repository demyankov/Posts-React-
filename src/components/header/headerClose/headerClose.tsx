import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Name } from "./headerCloseStyles";
import mySvg from "./user_icon.svg";

function HeaderClose({children}:{children:React.ReactNode}) {  
  const navigate = useNavigate()
  return (
    <>
      <Icon src={mySvg} alt="User icon" onClick={()=>{navigate('/')}}/>
      <Name>{children}</Name>
    </>
  )
}

export default HeaderClose;
