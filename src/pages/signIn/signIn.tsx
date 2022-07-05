import React from "react";
import { Link } from "react-router-dom";
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
        Forgot your password? <Link to="/resert_password">Resert password</Link>
      </Resert>
    </SignInWrapper>); 
}

export default SignIn;
