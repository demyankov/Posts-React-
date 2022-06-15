import React from "react";
import classes from "./userName.module.css";

function UserName({ username }: { username: string }) {
  return <p className={classes.userName}>{username}</p>;
}

export default UserName;
