import Button from "../../../components/button/button";
import { P } from "../signInStyles";
import {SuccessWrapper} from './successStyles'
import Title from "../../../components/title/title";
import { AppRoute } from "../../../enums/router";

function Success(): JSX.Element {
  return (
    <SuccessWrapper>
      <Title>Success</Title>
      <div> 
        <P>Email confirmed</P>  
        <P>Your registration is now completed</P>  
      </div>  
      <Button url = {AppRoute.SignIn} maxWidth = '15rem'>Login</Button>
    </SuccessWrapper>
  );
}

export default Success;
