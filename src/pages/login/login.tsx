import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUserErrors } from "../../api/registerUser";
import Button from "../../components/button/button";
import { useUserContext } from "../../components/Contexts/UserAuthorization/userContext";
import Input from "../../components/input/input";
import LoginRegistration from "../../components/login_registration/login_registration";
import { Error } from "../../components/styles/error";
import { AppRoute } from "../../enums/router";
import { SignInWrapper, Resert } from "./loginStyles";

function Login(): JSX.Element {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState <Pick <RegisterUserErrors, "global">> ({});

  const {login} = useUserContext ()
  const navigate = useNavigate()

  return (
    <SignInWrapper>
      <LoginRegistration />
      <Input
        label="Email"  
        type="email"    
        name="email"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
        autoComplete="email"
      />

      <Input
        label="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {errors.global ? <Error>{errors.global}</Error> : null}

      <Button url="" maxWidth="100%"  disabled = {!userEmail ||!password ? "disabled": ""}
        click={()=>{
          login(userEmail, password).
          then(()=>{navigate(AppRoute.Main)}).
          catch((errors)=>{setErrors(errors.errors[0])})
        }
      }>
        Login
      </Button>
      <Resert>
        Forgot your password? <Link to="/resert_password">Resert password</Link>
      </Resert>
    </SignInWrapper>
  );
}

export default Login;
