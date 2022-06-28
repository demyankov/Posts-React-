import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import LoginRegistration from "./login_registration/login_registration";
import {RegistrationWrapper, Resert} from "./registrationStyles";

function Registration(): JSX.Element {
  
    return (
    <RegistrationWrapper>
      <LoginRegistration />
      <Input label="Email" />
      <Input label="Password" />
      <Button buttonText="Login" maxWidth = '100%'/>  
      <Resert>
        Forgot your password? <a href="#">Resert password</a>
      </Resert>
    </RegistrationWrapper>); 
}

export default Registration;
