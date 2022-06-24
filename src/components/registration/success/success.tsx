import Button from "../../template/button/button";
import styled from '@emotion/styled'
import { P } from "../registrationStyles";
import {SuccessWrapper} from './successStyles'
import Title from "../../template/title/title";

function Success(): JSX.Element {
  return (
    <SuccessWrapper>
      <Title>Success</Title>
      <div> 
        <P>Email confirmed</P>  
        <P>Your registration is now completed</P>  
      </div>  
      <Button buttonText="Login" maxWidth = '15rem'/>
    </SuccessWrapper>
  );
}

export default Success;
