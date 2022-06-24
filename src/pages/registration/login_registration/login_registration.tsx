import React from "react";
import { RegistrationButton, RegistrationWrapper } from "./loginRegistrationStyles";

function LoginRegistration(): JSX.Element {
  return (
    <RegistrationWrapper>
      <RegistrationButton href="#">
        Login
      </RegistrationButton>
      <RegistrationButton href="#">
        Registration
      </RegistrationButton>
    </RegistrationWrapper>
  );
}

export default LoginRegistration;
