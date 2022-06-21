import React, { useEffect, useState } from "react";
import Input from "../template/input/input";
import Button from "../template/button/button";
import LoginRegistration from "./login_registration/login_registration";
import Confirmation from "./confirmation/confirmation";
import {RegistrationWrapper, Resert} from "./registrationStyles";

function Registration(): JSX.Element {
  const [registrationStatus, getRegistrationStatus] = useState (false)

    if (registrationStatus) {
      return <Confirmation/> }

      return (
      <RegistrationWrapper>
      <LoginRegistration />
      <Input label="Email" />
      <Input label="Password" />
      <Button buttonText="Login" maxWidth = '100%' click={()=>{getRegistrationStatus(!registrationStatus)}}/>  
      <Resert>
        Forgot your password? <a href="#">Resert password</a>
      </Resert>
    </RegistrationWrapper>);
 
  
  
}

export default Registration;
