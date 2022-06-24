import Button from "../../../components/button/button";
import Title from "../../../components/title/title";
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
      <Button buttonText="Home" maxWidth = '15rem'/>
    </ConfirmationWrapper>
  );
}

export default Confirmation;
