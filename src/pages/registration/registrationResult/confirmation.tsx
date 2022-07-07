import React from "react";
import Button from "../../../components/button/button";
import Title from "../../../components/title/title";
import { AppRoute } from "../../../enums/router";
import { P } from "../registrationStyles";

import { ConfirmationWrapper } from "./confirmationStyles";

function Confirmation({children}:{children?: React.ReactNode}): JSX.Element {
  return (
    <ConfirmationWrapper>
      <Title>Registration Confirmation</Title >
      <div> 
        <P>
          Please activate your account with the activation link in the email
          <span> {children}</span>. 
        </P>
        <P>Please check your email</P>
      </div>     
      <Button url = {AppRoute.Login} maxWidth = '15rem'>Login</Button>
    </ConfirmationWrapper>
  );
}

export default Confirmation;
