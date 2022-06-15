import React from "react";
import classes from "./loginRegistration.module.css";

function LoginRegistration(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <a className={classes.button} href="#">
        Login
      </a>
      <a className={classes.button} href="#">
        Registration
      </a>
    </div>
  );
}

export default LoginRegistration;
