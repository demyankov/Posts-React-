import React from "react";
import { AppRoute } from "../../enums/router";
import { RegistrationButton, RegistrationWrapper } from "./loginRegistrationStyles";

function LoginRegistration(): JSX.Element {
  return (
    <RegistrationWrapper>
      <RegistrationButton to={AppRoute.SignIn}>
        Login
      </RegistrationButton>
      <RegistrationButton to={AppRoute.Registration}>
        Registration
      </RegistrationButton>
    </RegistrationWrapper>
  );
}

export default LoginRegistration;
