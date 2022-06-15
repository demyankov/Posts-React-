import React from "react";
import classes from "./userIcon.module.css";
import mySvg from "./user_icon.svg";

function UserIcon() {
  return <img className={classes.userIcon} src={mySvg} alt="User icon" />;
}

export default UserIcon;
