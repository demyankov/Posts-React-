import Button from "../../../components/button/button";
import Title from "../../../components/title/title";
import { AppRoute } from "../../../enums/router";
import { P } from "../registrationStyles";

import { ConfirmationWrapper } from "./confirmationStyles";

function Confirmation(): JSX.Element {
  return (
    <ConfirmationWrapper>
      <Title>Registration Confirmation</Title >
      <div> 
        <P>
          Please activate your account with the activation link in the email
          <span> demyantaurus@mail.ru</span>. 
        </P>
        <P>Please check your email</P>
      </div>     
      <Button url = {AppRoute.Main} maxWidth = '15rem'>Home</Button>
    </ConfirmationWrapper>
  );
}

export default Confirmation;
