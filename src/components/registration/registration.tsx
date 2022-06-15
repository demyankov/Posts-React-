import React from "react";
import Input from "../template/input/input";
import Button from "../template/button/button";
import LoginRegistration from "./login_registration/login_registration";
import classes from "./registration.module.css";

function Registration(): JSX.Element {
  return (
    <div className={classes.registrationWrapper}>
      <LoginRegistration />
      <Input label="Email" />
      <Input label="Password" />
      {/* <div className={classes.buttonWrapper}> */}
        <Button buttonText="Login" maxWidth = '100%'/>
      {/* </div> */}
      <p className={classes.resert}>
        Forgot your password? <a href="#">Resert password</a>
      </p>
    </div>
  );
}

export default Registration;
