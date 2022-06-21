import React from "react";
import classes from "./userIcon.module.css";
import { Icon } from "./userIconStyles";
import mySvg from "./user_icon.svg";

function UserIcon() {
  return <Icon src={mySvg} alt="User icon" />;
}

export default UserIcon;
