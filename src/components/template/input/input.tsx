import React from "react";
import classes from "./input.module.css";

function Input({ label }: { label: String }): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label}>{label}</label>
      <input className={classes.input} type="text" />
    </div>
  );
}

export default Input;
