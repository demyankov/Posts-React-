import React from "react";
import { Icon, Name } from "./headerCloseStyles";
import mySvg from "./user_icon.svg";

function HeaderClose() {
  return (
    <>
      <Icon src={mySvg} alt="User icon"/>
      <Name>"Alexandr"</Name>
    </>
  )
}

export default HeaderClose;
