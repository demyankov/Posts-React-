import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import LoginRegistration from "../../components/login_registration/login_registration";
import { AppRoute } from "../../enums/router";
import {SignInWrapper, Resert} from "./signInStyles";


function SignIn(): JSX.Element {
  
    return (
    <SignInWrapper>
      <LoginRegistration/>
      <Input label="Email" />
      <Input label="Password" />
      <Button url = {AppRoute.Main} maxWidth = '100%'>Login</Button>  
      <Resert>
        Forgot your password? <a href="#">Resert password</a>
      </Resert>
    </SignInWrapper>); 
}

export default SignIn;
