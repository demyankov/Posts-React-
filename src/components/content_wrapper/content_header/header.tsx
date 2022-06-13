import React from "react";
import classes from "./header.module.css";

function ContentHeader() {
  return (
    <h1 className={classes.header}>
      Make your Blog <span>Online</span>
    </h1>
  );
}

export default ContentHeader;
